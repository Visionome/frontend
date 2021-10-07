/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGffRef = /* GraphQL */ `
  mutation CreateGffRef(
    $input: CreateGFFRefInput!
    $condition: ModelGFFRefConditionInput
  ) {
    createGFFRef(input: $input, condition: $condition) {
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
export const updateGffRef = /* GraphQL */ `
  mutation UpdateGffRef(
    $input: UpdateGFFRefInput!
    $condition: ModelGFFRefConditionInput
  ) {
    updateGFFRef(input: $input, condition: $condition) {
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
export const deleteGffRef = /* GraphQL */ `
  mutation DeleteGffRef(
    $input: DeleteGFFRefInput!
    $condition: ModelGFFRefConditionInput
  ) {
    deleteGFFRef(input: $input, condition: $condition) {
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
