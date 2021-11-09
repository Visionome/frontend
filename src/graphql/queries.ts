/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGffRef = /* GraphQL */ `
  query GetGffRef($id: ID!) {
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
      createdAt
      updatedAt
    }
  }
`;
export const listGffRefs = /* GraphQL */ `
  query ListGffRefs(
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVcfRef = /* GraphQL */ `
  query GetVcfRef($id: ID!) {
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
export const listVcfRefs = /* GraphQL */ `
  query ListVcfRefs(
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchGffRefs = /* GraphQL */ `
  query SearchGffRefs(
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
      }
      nextToken
      total
    }
  }
`;
export const searchVcfRefs = /* GraphQL */ `
  query SearchVcfRefs(
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
