import type { BlastSearchResponse, BlastMatch, BlastMetaData } from '@/types/blast';
import mockBlastData from '@/data/mock-blast.json';

const NCBI_BLAST = 'https://blast.ncbi.nlm.nih.gov/blast/Blast.cgi';
const POLL_INTERVAL = 5_000; // 5 seconds between status checks
const MAX_POLL_TIME = 180_000; // 3 minute timeout

// ---------------------------------------------------------------------------
// NCBI BLAST API (submit → poll → fetch results)
// ---------------------------------------------------------------------------

async function submitBlast(sequence: string): Promise<string> {
  const params = new URLSearchParams({
    CMD: 'Put',
    PROGRAM: 'blastn',
    DATABASE: 'nt',
    QUERY: sequence,
  });

  const res = await fetch(NCBI_BLAST, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  if (!res.ok) throw new Error(`NCBI BLAST submit failed: ${res.status}`);
  const text = await res.text();

  const ridMatch = text.match(/RID\s*=\s*(\S+)/);
  if (!ridMatch) throw new Error('Could not parse RID from NCBI response');
  return ridMatch[1];
}

async function pollStatus(rid: string): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < MAX_POLL_TIME) {
    await new Promise((r) => setTimeout(r, POLL_INTERVAL));
    const url = `${NCBI_BLAST}?CMD=Get&FORMAT_OBJECT=SearchInfo&RID=${rid}`;
    const res = await fetch(url);
    const text = await res.text();

    if (text.includes('Status=READY')) return;
    if (text.includes('Status=FAILED')) throw new Error('NCBI BLAST job failed');
    if (text.includes('Status=UNKNOWN')) throw new Error('NCBI BLAST RID expired or unknown');
    // Status=WAITING → continue polling
  }
  throw new Error('NCBI BLAST timed out');
}

interface NcbiHsp {
  bit_score: number;
  evalue: number;
  align_len: number;
  hit_from: number;
  hit_to: number;
}

interface NcbiHit {
  description: { title: string; accession: string }[];
  hsps: NcbiHsp[];
}

async function fetchResults(rid: string): Promise<BlastSearchResponse> {
  const url = `${NCBI_BLAST}?CMD=Get&FORMAT_TYPE=JSON2_S&RID=${rid}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`NCBI BLAST results fetch failed: ${res.status}`);
  const data = await res.json();

  const hits: NcbiHit[] =
    data?.BlastOutput2?.[0]?.report?.results?.search?.hits ?? [];

  // Group HSPs by gene symbol extracted from hit title
  const geneMap = new Map<string, BlastMatch>();

  for (const hit of hits) {
    const title = hit.description?.[0]?.title ?? '';
    // Try to extract a gene-like symbol from the title, or fall back to accession
    const symbolMatch = title.match(/\(([A-Z][A-Z0-9]{1,10})\)/);
    const symbol = symbolMatch?.[1] ?? hit.description?.[0]?.accession ?? 'Unknown';

    for (const hsp of hit.hsps) {
      const existing = geneMap.get(symbol);
      if (existing) {
        existing.num_hits += 1;
        if (hsp.bit_score > existing.best_score) existing.best_score = hsp.bit_score;
        if (hsp.evalue < existing.best_evalue) existing.best_evalue = hsp.evalue;
        if (hsp.align_len > existing.align_length) existing.align_length = hsp.align_len;
      } else {
        geneMap.set(symbol, {
          gene_symbol: symbol,
          num_hits: 1,
          best_score: hsp.bit_score,
          best_evalue: hsp.evalue,
          align_length: hsp.align_len,
          sbjct_start: hsp.hit_from,
          sbjct_end: hsp.hit_to,
        });
      }
    }
  }

  const matches = Array.from(geneMap.values()).sort(
    (a, b) => b.best_score - a.best_score,
  );

  const metadata: BlastMetaData | undefined =
    matches.length > 0
      ? {
          total_hits: matches.reduce((s, m) => s + m.num_hits, 0),
          best_score: matches[0].best_score,
          best_evalue: matches[0].best_evalue,
          best_gene_symbol: matches[0].gene_symbol,
          longest_alignment: Math.max(...matches.map((m) => m.align_length)),
        }
      : undefined;

  return { matches, metadata };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function searchBlast(
  sequence: string,
): Promise<BlastSearchResponse> {
  try {
    const rid = await submitBlast(sequence);
    await pollStatus(rid);
    return await fetchResults(rid);
  } catch (err) {
    // CORS or network failure → fall back to mock data
    console.warn('NCBI BLAST unavailable, using mock data:', (err as Error).message);
    await new Promise((r) => setTimeout(r, 500));
    return mockBlastData as BlastSearchResponse;
  }
}
