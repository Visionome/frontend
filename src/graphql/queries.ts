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
