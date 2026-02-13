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

export async function searchGenes(query: string): Promise<GFFRef[]> {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  const aliasTargets = resolveAliases(q);

  const results = (mockSearchData as GFFRef[]).filter((gene) => {
    const nameMatch = gene.name.toLowerCase().includes(q);
    const descMatch = gene.description.toLowerCase().includes(q);
    const diseaseNames = parseDiseaseNames(gene.diseaseinfo);
    const directDiseaseMatch = diseaseNames.some((d) => d.includes(q));
    const aliasMatch = aliasTargets.length > 0 &&
      diseaseNames.some((d) => aliasTargets.some((a) => d.includes(a) || a.includes(d)));
    return nameMatch || descMatch || directDiseaseMatch || aliasMatch;
  });
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 200));
  return results;
}

export async function searchVariants(_geneSymbol: string): Promise<VCFRef[]> {
  // Mock - return empty for now; would query real API
  await new Promise((r) => setTimeout(r, 100));
  return [];
}
