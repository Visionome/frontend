#!/usr/bin/env node
/**
 * Downloads human gene data from NCBI and builds a JSON file for the frontend.
 *
 * Sources:
 *   - Homo_sapiens.gene_info.gz        (gene metadata, cytoband locations, Ensembl IDs)
 *   - gene_condition_source_id (ClinVar) (gene → disease name associations)
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
const GENE_CONDITION_URL =
  'https://ftp.ncbi.nlm.nih.gov/pub/clinvar/gene_condition_source_id';
const ESUMMARY_URL =
  'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi';
const ESUMMARY_BATCH_SIZE = 400;
const ESUMMARY_RATE_LIMIT_MS = 350; // ~3 requests/second (NCBI limit without API key)

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
  const headerLine = lines.find((l) => l.startsWith('#'));
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

async function fetchSummariesBatch(geneIds) {
  const summaryMap = new Map();
  const batches = [];
  for (let i = 0; i < geneIds.length; i += ESUMMARY_BATCH_SIZE) {
    batches.push(geneIds.slice(i, i + ESUMMARY_BATCH_SIZE));
  }

  console.log(`    ${batches.length} batches of ${ESUMMARY_BATCH_SIZE}...`);

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const ids = batch.join(',');
    const url = `${ESUMMARY_URL}?db=gene&id=${ids}&retmode=json`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`    Batch ${i + 1} failed: HTTP ${res.status}`);
        continue;
      }
      const data = await res.json();
      const result = data.result || {};
      for (const id of batch) {
        const entry = result[id];
        if (entry && entry.summary) {
          summaryMap.set(id, entry.summary);
        }
      }
    } catch (err) {
      console.warn(`    Batch ${i + 1} error: ${err.message}`);
    }

    if (i < batches.length - 1) {
      await new Promise((r) => setTimeout(r, ESUMMARY_RATE_LIMIT_MS));
    }
    if ((i + 1) % 10 === 0 || i === batches.length - 1) {
      console.log(`    ${i + 1}/${batches.length} batches complete (${summaryMap.size} summaries)`);
    }
  }

  return summaryMap;
}

function approximateCytoband(mapLoc) {
  if (!mapLoc || mapLoc === '-') return '';
  const m = mapLoc.match(/^(\d+|X|Y)([pq]\d+)/i);
  return m ? `${m[1]}${m[2]}` : mapLoc;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('Fetching NCBI gene data...\n');

  const [geneInfoText, conditionText] = await Promise.all([
    download(GENE_INFO_URL),
    download(GENE_CONDITION_URL),
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

  // 2. Build disease map from ClinVar gene_condition_source_id
  //    Columns: GeneID, AssociatedGenes, RelatedGenes, ConceptID,
  //             DiseaseName, SourceName, SourceID, DiseaseMIM, LastUpdated
  console.log('  Parsing gene_condition_source_id...');
  const conditionRows = parseTsv(conditionText);
  const diseaseMap = new Map();
  for (const row of conditionRows) {
    const geneId = row.GeneID;
    const diseaseName = row.DiseaseName;
    const diseaseMim = row.DiseaseMIM;
    const conceptId = row.ConceptID;
    if (!geneId || geneId === '-' || !diseaseName || diseaseName === '-') continue;
    if (!diseaseMap.has(geneId)) diseaseMap.set(geneId, new Map());
    // Prefer OMIM xref when available, fall back to MedGen
    const xrefId = diseaseMim ? `OMIM:${diseaseMim}` : `MedGen:${conceptId}`;
    const xrefUrl = diseaseMim
      ? `https://www.omim.org/entry/${diseaseMim}`
      : `https://www.ncbi.nlm.nih.gov/medgen/${conceptId}`;
    diseaseMap.get(geneId).set(diseaseName, {
      xref_id: xrefId,
      name: diseaseName,
      xref_url: xrefUrl,
    });
  }
  console.log(`    ${diseaseMap.size} genes with disease associations`);

  // 3. Build GFFRef array
  console.log('  Building gene records...');
  const genes = proteinCoding.map((g) => {
    const geneId = g.GeneID;
    const diseases = diseaseMap.has(geneId)
      ? Array.from(diseaseMap.get(geneId).values())
      : [];

    // Extract Ensembl ID from dbXrefs column (format: "...Ensembl:ENSG00000012048...")
    const dbxMatch = (g.dbXrefs || '').match(/Ensembl:(ENSG\d+)/);
    const ensemblId = dbxMatch ? dbxMatch[1] : '';

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
      summary: '',
      expression: '',
    };
  });

  // 4. Fetch gene summaries from NCBI E-utilities
  console.log('  Fetching gene summaries from NCBI E-utilities...');
  const geneIds = genes.map((g) => g.geneid);
  const summaryMap = await fetchSummariesBatch(geneIds);
  for (const gene of genes) {
    gene.summary = summaryMap.get(gene.geneid) || '';
  }
  console.log(`    ${summaryMap.size} genes with summaries`);

  // 5. Write output
  const json = JSON.stringify(genes);
  await writeFile(OUT_PATH, json, 'utf-8');
  const sizeMb = (Buffer.byteLength(json) / 1e6).toFixed(1);
  console.log(`\nDone! Wrote ${genes.length} genes to src/data/genes.json (${sizeMb} MB)`);
  console.log(`  Genes with Ensembl IDs: ${genes.filter((g) => g.ensembleid).length}`);
  console.log(`  Genes with diseases:    ${genes.filter((g) => g.diseaseinfo).length}`);
  console.log(`  Genes with summaries:   ${genes.filter((g) => g.summary).length}`);
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
