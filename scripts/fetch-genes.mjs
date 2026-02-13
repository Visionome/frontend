#!/usr/bin/env node
/**
 * Downloads human gene data from NCBI and builds a JSON file for the frontend.
 *
 * Sources:
 *   - Homo_sapiens.gene_info.gz  (gene metadata, cytoband locations)
 *   - gene2ensembl.gz            (Ensembl ID mappings)
 *   - mim2gene_medgen            (OMIM disease → gene associations)
 *
 * Output: src/data/genes.json
 *
 * Usage: node scripts/fetch-genes.mjs
 */

import { createGunzip } from 'zlib';
import { Readable } from 'stream';
import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, '..', 'src', 'data', 'genes.json');

const GENE_INFO_URL =
  'https://ftp.ncbi.nlm.nih.gov/gene/DATA/GENE_INFO/Mammalia/Homo_sapiens.gene_info.gz';
const GENE2ENSEMBL_URL =
  'https://ftp.ncbi.nlm.nih.gov/gene/DATA/gene2ensembl.gz';
const MIM2GENE_URL =
  'https://ftp.ncbi.nlm.nih.gov/gene/DATA/mim2gene_medgen';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function download(url) {
  console.log(`  Downloading ${url.split('/').pop()}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  if (url.endsWith('.gz')) {
    const gunzip = createGunzip();
    const chunks = [];
    Readable.fromWeb(res.body).pipe(gunzip);
    for await (const chunk of gunzip) chunks.push(chunk);
    return Buffer.concat(chunks).toString('utf-8');
  }
  return res.text();
}

function parseTsv(text) {
  const lines = text.split('\n');
  let headerLine = lines.find((l) => l.startsWith('#'));
  if (!headerLine) return [];
  const headers = headerLine.replace(/^#/, '').split('\t').map((h) => h.trim());
  return lines
    .filter((l) => l && !l.startsWith('#'))
    .map((line) => {
      const cols = line.split('\t');
      const row = {};
      headers.forEach((h, i) => (row[h] = cols[i] ?? ''));
      return row;
    });
}

function approximateCytoband(mapLoc) {
  if (!mapLoc || mapLoc === '-') return '';
  // "17q21.31" → "17q21", "Xp21.2-p21.1" → "Xp21"
  const m = mapLoc.match(/^(\d+|X|Y)([pq]\d+)/i);
  return m ? `${m[1]}${m[2]}` : mapLoc;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('Fetching NCBI gene data...\n');

  const [geneInfoText, gene2ensemblText, mim2geneText] = await Promise.all([
    download(GENE_INFO_URL),
    download(GENE2ENSEMBL_URL),
    download(MIM2GENE_URL),
  ]);

  // 1. Parse gene_info → keep protein-coding genes with a map_location
  console.log('\n  Parsing gene_info...');
  const geneRows = parseTsv(geneInfoText);
  const proteinCoding = geneRows.filter(
    (r) =>
      r.type_of_gene === 'protein-coding' &&
      r.map_location &&
      r.map_location !== '-' &&
      r.chromosome !== 'MT' &&
      r.chromosome !== 'Un',
  );
  console.log(`    ${proteinCoding.length} protein-coding genes`);

  // 2. Build Ensembl ID map (GeneID → Ensembl gene ID)
  console.log('  Parsing gene2ensembl...');
  const ensemblRows = parseTsv(gene2ensemblText);
  const ensemblMap = new Map();
  for (const row of ensemblRows) {
    if (row.tax_id === '9606' && row.Ensembl_gene_identifier && row.Ensembl_gene_identifier !== '-') {
      ensemblMap.set(row.GeneID, row.Ensembl_gene_identifier);
    }
  }
  console.log(`    ${ensemblMap.size} human Ensembl mappings`);

  // 3. Build disease map (GeneID → disease names)
  console.log('  Parsing mim2gene_medgen...');
  const mimRows = parseTsv(mim2geneText);
  const diseaseMap = new Map(); // GeneID → Set<diseaseName>
  for (const row of mimRows) {
    const geneId = row.GeneID;
    const diseaseName = row.DiseaseName;
    const mimNumber = row.MIM_number;
    if (!geneId || geneId === '-' || !diseaseName || diseaseName === '-') continue;
    if (!diseaseMap.has(geneId)) diseaseMap.set(geneId, new Map());
    diseaseMap.get(geneId).set(diseaseName, {
      xref_id: `OMIM:${mimNumber}`,
      name: diseaseName,
      xref_url: `https://www.omim.org/entry/${mimNumber}`,
    });
  }
  console.log(`    ${diseaseMap.size} genes with disease associations`);

  // 4. Build GFFRef array
  console.log('  Building gene records...');
  const genes = proteinCoding.map((g) => {
    const geneId = g.GeneID;
    const diseases = diseaseMap.has(geneId)
      ? Array.from(diseaseMap.get(geneId).values())
      : [];

    // Extract Ensembl ID from dbXrefs column (format: "Ensembl:ENSG...")
    let ensemblId = ensemblMap.get(geneId) ?? '';
    if (!ensemblId) {
      const dbxMatch = (g.dbXrefs || '').match(/Ensembl:(ENSG\d+)/);
      if (dbxMatch) ensemblId = dbxMatch[1];
    }

    return {
      id: `ncbi-${geneId}`,
      geneid: geneId,
      seqid: `chr${g.chromosome}`,
      source: 'NCBI_Gene',
      type: 'gene',
      start: '',
      end: '',
      strand: '',
      name: g.Symbol,
      description: g.description !== '-' ? g.description : g.Full_name_from_nomenclature_authority || '',
      gene_biotype: 'protein_coding',
      ensembleid: ensemblId,
      cytobandlocation: g.map_location,
      approximatecytoband: approximateCytoband(g.map_location),
      diseaseinfo: diseases.length > 0 ? JSON.stringify(diseases) : '',
      sequence: '',
    };
  });

  // 5. Write output
  const json = JSON.stringify(genes, null, 0); // compact
  await writeFile(OUT_PATH, json, 'utf-8');
  const sizeMb = (Buffer.byteLength(json) / 1e6).toFixed(1);
  console.log(`\nDone! Wrote ${genes.length} genes to src/data/genes.json (${sizeMb} MB)`);
  console.log(`  Genes with Ensembl IDs: ${genes.filter((g) => g.ensembleid).length}`);
  console.log(`  Genes with diseases:    ${genes.filter((g) => g.diseaseinfo).length}`);
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
