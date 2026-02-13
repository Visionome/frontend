export interface GFFRef {
  id: string;
  geneid: string;
  seqid: string;
  source: string;
  type: string;
  start: string;
  end: string;
  strand: string;
  name: string;
  description: string;
  gene_biotype: string;
  ensembleid: string;
  cytobandlocation: string;
  approximatecytoband: string;
  diseaseinfo: string;
  sequence: string;
}

export interface VCFRef {
  id: string;
  chrom: string;
  pos: string;
  ref: string;
  alt: string;
  clnsig: string;
  clndn: string;
  clnrevstat: string;
  geneinfo: string;
  mc: string;
}

export interface CytobandData {
  id: number;
  chromosome: string;
  start: number;
  end: number;
  name: string;
  giemsaStains: string;
}

export interface ChromosomeData {
  id: number;
  chrom: string;
  assembly_len: number;
}
