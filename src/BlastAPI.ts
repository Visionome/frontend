export interface BlastMatch {
  align_length: number;
  gene_symbol: string;
  sbjct_end: number;
  sbjct_start: number;
  best_evalue: number;
  best_score: number;
  num_hits: number;
}

export interface BlastMetaData {
  best_evalue: number;
  best_gene_symbol: string;
  best_score: number;
  longest_alignment: number;
  total_hits: number;
}

export interface BlastSearchResponse {
  matches: BlastMatch[];
  metadata: BlastMetaData;
}

export const BlastAPI = {
  // eslint-disable-next-line @typescript-eslint/require-await
  async search(sequence: string): Promise<BlastSearchResponse> {
    const payload = { sequence };

    console.log(payload);
    const host =
      'https://blast-backend.gbaobaok2t5qo.us-east-2.cs.amazonlightsail.com';

    // return mockReponse.matches;
    const results = await fetch(`${host}/blastsearch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((json) => json as BlastSearchResponse);
    return results;
  },
};
