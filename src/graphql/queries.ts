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
      ALLELEID
      CLNDISDB
      CLNDN
      CLNHGVS
      CLNREVSTAT
      CLNSIG
      CLNVC
      CLNVCSO
      GENEINFO
      MC
      ORIGIN
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
        ALLELEID
        CLNDISDB
        CLNDN
        CLNHGVS
        CLNREVSTAT
        CLNSIG
        CLNVC
        CLNVCSO
        GENEINFO
        MC
        ORIGIN
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFastaRef = /* GraphQL */ `
  query GetFastaRef($id: ID!) {
    getFASTARef(id: $id) {
      id
      name
      sequence
      createdAt
      updatedAt
    }
  }
`;
export const listFastaRefs = /* GraphQL */ `
  query ListFastaRefs(
    $filter: ModelFASTARefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFASTARefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sequence
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
