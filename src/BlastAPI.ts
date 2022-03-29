import * as mockReponse from './mockBlast.json';

export interface BlastMatch {
  align_length: number;
  gene_symbol: string;
  sbjct_end: number;
  sbjct_start: number;
  best_evalue: number;
  best_score: number;
  num_hits: number;
}

export interface BlastSearchResponse {
  matches: BlastMatch[];
}

export const BlastAPI = {
  // eslint-disable-next-line @typescript-eslint/require-await
  async search(sequence: string): Promise<BlastMatch[]> {
    const payload = { sequence };

    console.log(payload);

    return mockReponse.matches;
    // return await fetch(`${host}/blastsearch`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // })
    //   .then((res) => res.json())
    //   .then((json) => (json as BlastSearchResponse).matches);
  },
};
