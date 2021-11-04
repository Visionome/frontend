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
      sequence
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
      sequence
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
      sequence
      createdAt
      updatedAt
    }
  }
`;
export const createVcfRef = /* GraphQL */ `
  mutation CreateVcfRef(
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
export const updateVcfRef = /* GraphQL */ `
  mutation UpdateVcfRef(
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
export const deleteVcfRef = /* GraphQL */ `
  mutation DeleteVcfRef(
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
