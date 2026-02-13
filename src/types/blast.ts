export interface BlastMatch {
  gene_symbol: string;
  num_hits: number;
  best_score: number;
  best_evalue: number;
  align_length: number;
  sbjct_start: number;
  sbjct_end: number;
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
  metadata?: BlastMetaData;
}
