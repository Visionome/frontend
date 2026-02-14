/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGFFRef = /* GraphQL */ `
  query GetGFFRef($id: ID!) {
    getGFFRef(id: $id) {
      dbxref
      description
      end
      gbkey
      gene
      gene_biotype
      id
      parent
      name
      phase
      pseudo
      score
      seqid
      source
      start
      strand
      type
      sequence
      ensembleid
      cytobandlocation
      approximatecytoband
      diseaseinfo
      createdAt
      updatedAt
    }
  }
`;
export const listGFFRefs = /* GraphQL */ `
  query ListGFFRefs(
    $filter: ModelGFFRefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGFFRefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        dbxref
        description
        end
        gbkey
        gene
        gene_biotype
        id
        parent
        name
        phase
        pseudo
        score
        seqid
        source
        start
        strand
        type
        sequence
        ensembleid
        cytobandlocation
        approximatecytoband
        diseaseinfo
      }
      nextToken
    }
  }
`;
export const getVCFRef = /* GraphQL */ `
  query GetVCFRef($id: ID!) {
    getVCFRef(id: $id) {
      chrom
      pos
      id
      ref
      alt
      qual
      filter
      alleleid
      clndisdb
      clndn
      clnhgvs
      clnrevstat
      clnsig
      clnvc
      clnvcso
      geneinfo
      mc
      origin
      createdAt
      updatedAt
    }
  }
`;
export const listVCFRefs = /* GraphQL */ `
  query ListVCFRefs(
    $filter: ModelVCFRefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVCFRefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        chrom
        pos
        id
        ref
        alt
        qual
        filter
        alleleid
        clndisdb
        clndn
        clnhgvs
        clnrevstat
        clnsig
        clnvc
        clnvcso
        geneinfo
        mc
        origin
      }
      nextToken
    }
  }
`;
export const searchGFFRefs = /* GraphQL */ `
  query SearchGFFRefs(
    $filter: SearchableGFFRefFilterInput
    $sort: SearchableGFFRefSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchGFFRefs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        dbxref
        description
        cytobandlocation
        ensembleid
        end
        gbkey
        diseaseinfo
        gene
        gene_biotype
        id
        parent
        name
        phase
        pseudo
        score
        seqid
        source
        start
        strand
        type
        sequence
        ensembleid
        cytobandlocation
        approximatecytoband
        diseaseinfo
      }
      nextToken
      total
    }
  }
`;
export const searchVCFRefs = /* GraphQL */ `
  query SearchVCFRefs(
    $filter: SearchableVCFRefFilterInput
    $sort: SearchableVCFRefSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchVCFRefs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        chrom
        pos
        id
        ref
        alt
        qual
        filter
        alleleid
        clndisdb
        clndn
        clnhgvs
        clnrevstat
        clnsig
        clnvc
        clnvcso
        geneinfo
        mc
        origin
      }
      nextToken
      total
    }
  }
`;
