import type { BlastSearchResponse } from '@/types/blast';
import mockBlastData from '@/data/mock-blast.json';

const BLAST_ENDPOINT =
  'https://blast-backend.gbaobaok2t5qo.us-east-2.cs.amazonlightsail.com/blastsearch';

export async function searchBlast(sequence: string): Promise<BlastSearchResponse> {
  try {
    const response = await fetch(BLAST_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sequence }),
    });

    if (!response.ok) {
      throw new Error(`BLAST search failed: ${response.status}`);
    }

    return await response.json();
  } catch {
    // Fallback to mock data if backend is unavailable
    console.warn('BLAST backend unavailable, using mock data');
    await new Promise((r) => setTimeout(r, 500));
    return mockBlastData as BlastSearchResponse;
  }
}
