import type { GFFRef, VCFRef, CytobandData, ChromosomeData } from '@/types/genome';
import chromosomesData from '@/data/chromosomes.json';
import cytobandData from '@/data/cytobands.json';
import mockSearchData from '@/data/mock-search-results.json';
import { diseaseAliases } from '@/data/disease-aliases';

export function getChromosomes(): ChromosomeData[] {
  return chromosomesData as ChromosomeData[];
}

export function getCytobands(chromosome?: string): CytobandData[] {
  const allBands = cytobandData as CytobandData[];
  if (!chromosome) return allBands;
  const target = chromosome.startsWith('chr') ? chromosome : `chr${chromosome}`;
  return allBands.filter((b) => b.chromosome === target);
}

// ---------------------------------------------------------------------------
// Gene dataset (lazy-loaded)
// ---------------------------------------------------------------------------

let geneDataPromise: Promise<GFFRef[]> | null = null;

function loadGenes(): Promise<GFFRef[]> {
  if (!geneDataPromise) {
    geneDataPromise = import('@/data/genes.json')
      .then((mod) => {
        const data = mod.default as GFFRef[];
        if (data.length === 0) {
          console.warn(
            'Gene dataset is empty (run `npm run fetch-genes` to populate it). Using mock data.',
          );
          return mockSearchData as GFFRef[];
        }
        return data;
      })
      .catch(() => mockSearchData as GFFRef[]);
  }
  return geneDataPromise;
}

// ---------------------------------------------------------------------------
// Search helpers
// ---------------------------------------------------------------------------

function parseDiseaseNames(diseaseinfo: string | undefined): string[] {
  if (!diseaseinfo) return [];
  try {
    const diseases: { name: string }[] = JSON.parse(diseaseinfo);
    return diseases.map((d) => d.name.toLowerCase());
  } catch {
    return [];
  }
}

function resolveAliases(query: string): string[] {
  const matches: string[] = [];
  for (const [alias, meshNames] of Object.entries(diseaseAliases)) {
    if (alias.includes(query) || query.includes(alias)) {
      matches.push(...meshNames.map((n) => n.toLowerCase()));
    }
  }
  return matches;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function searchGenes(query: string): Promise<GFFRef[]> {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  const aliasTargets = resolveAliases(q);
  const genes = await loadGenes();

  return genes.filter((gene) => {
    const nameMatch = gene.name.toLowerCase().includes(q);
    const descMatch = gene.description.toLowerCase().includes(q);
    const summaryMatch = gene.summary?.toLowerCase().includes(q) ?? false;
    const expressionMatch = gene.expression?.toLowerCase().includes(q) ?? false;
    const diseaseNames = parseDiseaseNames(gene.diseaseinfo);
    const directDiseaseMatch = diseaseNames.some((d) => d.includes(q));
    const aliasMatch =
      aliasTargets.length > 0 &&
      diseaseNames.some((d) =>
        aliasTargets.some((a) => d.includes(a) || a.includes(d)),
      );
    return nameMatch || descMatch || summaryMatch || expressionMatch || directDiseaseMatch || aliasMatch;
  });
}

export async function searchVariants(_geneSymbol: string): Promise<VCFRef[]> {
  // Mock - return empty for now; would query real API
  await new Promise((r) => setTimeout(r, 100));
  return [];
}
