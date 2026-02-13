import type { GFFRef, VCFRef, CytobandData, ChromosomeData } from '@/types/genome';
import chromosomesData from '@/data/chromosomes.json';
import cytobandData from '@/data/cytobands.json';
import mockSearchData from '@/data/mock-search-results.json';

export function getChromosomes(): ChromosomeData[] {
  return chromosomesData as ChromosomeData[];
}

export function getCytobands(chromosome?: string): CytobandData[] {
  const allBands = cytobandData as CytobandData[];
  if (!chromosome) return allBands;
  const target = chromosome.startsWith('chr') ? chromosome : `chr${chromosome}`;
  return allBands.filter((b) => b.chromosome === target);
}

export async function searchGenes(query: string): Promise<GFFRef[]> {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  const results = (mockSearchData as GFFRef[]).filter((gene) => {
    const nameMatch = gene.name.toLowerCase().includes(q);
    const descMatch = gene.description.toLowerCase().includes(q);
    const diseaseMatch = gene.diseaseinfo?.toLowerCase().includes(q);
    return nameMatch || descMatch || diseaseMatch;
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
