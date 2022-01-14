/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGFFRef = /* GraphQL */ `
  mutation CreateGFFRef(
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
      sequence
      createdAt
      updatedAt
    }
  }
`;
export const updateGFFRef = /* GraphQL */ `
  mutation UpdateGFFRef(
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
      sequence
      createdAt
      updatedAt
    }
  }
`;
export const deleteGFFRef = /* GraphQL */ `
  mutation DeleteGFFRef(
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
      sequence
      createdAt
      updatedAt
    }
  }
`;
export const createVCFRef = /* GraphQL */ `
  mutation CreateVCFRef(
    $input: CreateVCFRefInput!
    $condition: ModelVCFRefConditionInput
  ) {
    createVCFRef(input: $input, condition: $condition) {
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
export const updateVCFRef = /* GraphQL */ `
  mutation UpdateVCFRef(
    $input: UpdateVCFRefInput!
    $condition: ModelVCFRefConditionInput
  ) {
    updateVCFRef(input: $input, condition: $condition) {
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
export const deleteVCFRef = /* GraphQL */ `
  mutation DeleteVCFRef(
    $input: DeleteVCFRefInput!
    $condition: ModelVCFRefConditionInput
  ) {
    deleteVCFRef(input: $input, condition: $condition) {
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
