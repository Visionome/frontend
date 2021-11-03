/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGFFRefInput = {
  dbxref?: string | null,
  description?: string | null,
  end?: string | null,
  gbkey?: string | null,
  gene?: string | null,
  gene_biotype?: string | null,
  id?: string | null,
  parent?: string | null,
  name?: string | null,
  phase?: string | null,
  pseudo?: string | null,
  score?: string | null,
  seqid?: string | null,
  source?: string | null,
  start?: string | null,
  strand?: string | null,
  type?: string | null,
};

export type ModelGFFRefConditionInput = {
  dbxref?: ModelStringInput | null,
  description?: ModelStringInput | null,
  end?: ModelStringInput | null,
  gbkey?: ModelStringInput | null,
  gene?: ModelStringInput | null,
  gene_biotype?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phase?: ModelStringInput | null,
  pseudo?: ModelStringInput | null,
  score?: ModelStringInput | null,
  seqid?: ModelStringInput | null,
  source?: ModelStringInput | null,
  start?: ModelStringInput | null,
  strand?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelGFFRefConditionInput | null > | null,
  or?: Array< ModelGFFRefConditionInput | null > | null,
  not?: ModelGFFRefConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type GFFRef = {
  __typename: "GFFRef",
  dbxref?: string | null,
  description?: string | null,
  end?: string | null,
  gbkey?: string | null,
  gene?: string | null,
  gene_biotype?: string | null,
  id?: string | null,
  parent?: string | null,
  name?: string | null,
  phase?: string | null,
  pseudo?: string | null,
  score?: string | null,
  seqid?: string | null,
  source?: string | null,
  start?: string | null,
  strand?: string | null,
  type?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateGFFRefInput = {
  dbxref?: string | null,
  description?: string | null,
  end?: string | null,
  gbkey?: string | null,
  gene?: string | null,
  gene_biotype?: string | null,
  id: string,
  parent?: string | null,
  name?: string | null,
  phase?: string | null,
  pseudo?: string | null,
  score?: string | null,
  seqid?: string | null,
  source?: string | null,
  start?: string | null,
  strand?: string | null,
  type?: string | null,
};

export type DeleteGFFRefInput = {
  id: string,
};

export type CreateVCFRefInput = {
  chrom?: string | null,
  pos?: string | null,
  id?: string | null,
  ref?: string | null,
  alt?: string | null,
  qual?: string | null,
  filter?: string | null,
  ALLELEID?: string | null,
  CLNDISDB?: string | null,
  CLNDN?: string | null,
  CLNHGVS?: string | null,
  CLNREVSTAT?: string | null,
  CLNSIG?: string | null,
  CLNVC?: string | null,
  CLNVCSO?: string | null,
  GENEINFO?: string | null,
  MC?: string | null,
  ORIGIN?: string | null,
};

export type ModelVCFRefConditionInput = {
  chrom?: ModelStringInput | null,
  pos?: ModelStringInput | null,
  ref?: ModelStringInput | null,
  alt?: ModelStringInput | null,
  qual?: ModelStringInput | null,
  filter?: ModelStringInput | null,
  ALLELEID?: ModelStringInput | null,
  CLNDISDB?: ModelStringInput | null,
  CLNDN?: ModelStringInput | null,
  CLNHGVS?: ModelStringInput | null,
  CLNREVSTAT?: ModelStringInput | null,
  CLNSIG?: ModelStringInput | null,
  CLNVC?: ModelStringInput | null,
  CLNVCSO?: ModelStringInput | null,
  GENEINFO?: ModelStringInput | null,
  MC?: ModelStringInput | null,
  ORIGIN?: ModelStringInput | null,
  and?: Array< ModelVCFRefConditionInput | null > | null,
  or?: Array< ModelVCFRefConditionInput | null > | null,
  not?: ModelVCFRefConditionInput | null,
};

export type VCFRef = {
  __typename: "VCFRef",
  chrom?: string | null,
  pos?: string | null,
  id?: string | null,
  ref?: string | null,
  alt?: string | null,
  qual?: string | null,
  filter?: string | null,
  ALLELEID?: string | null,
  CLNDISDB?: string | null,
  CLNDN?: string | null,
  CLNHGVS?: string | null,
  CLNREVSTAT?: string | null,
  CLNSIG?: string | null,
  CLNVC?: string | null,
  CLNVCSO?: string | null,
  GENEINFO?: string | null,
  MC?: string | null,
  ORIGIN?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateVCFRefInput = {
  chrom?: string | null,
  pos?: string | null,
  id: string,
  ref?: string | null,
  alt?: string | null,
  qual?: string | null,
  filter?: string | null,
  ALLELEID?: string | null,
  CLNDISDB?: string | null,
  CLNDN?: string | null,
  CLNHGVS?: string | null,
  CLNREVSTAT?: string | null,
  CLNSIG?: string | null,
  CLNVC?: string | null,
  CLNVCSO?: string | null,
  GENEINFO?: string | null,
  MC?: string | null,
  ORIGIN?: string | null,
};

export type DeleteVCFRefInput = {
  id: string,
};

export type CreateFASTARefInput = {
  id?: string | null,
  name?: string | null,
  sequence?: string | null,
};

export type ModelFASTARefConditionInput = {
  name?: ModelStringInput | null,
  sequence?: ModelStringInput | null,
  and?: Array< ModelFASTARefConditionInput | null > | null,
  or?: Array< ModelFASTARefConditionInput | null > | null,
  not?: ModelFASTARefConditionInput | null,
};

export type FASTARef = {
  __typename: "FASTARef",
  id?: string,
  name?: string | null,
  sequence?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateFASTARefInput = {
  name?: string | null,
  sequence?: string | null,
};

export type DeleteFASTARefInput = {
  id: string,
};

export type ModelGFFRefFilterInput = {
  dbxref?: ModelStringInput | null,
  description?: ModelStringInput | null,
  end?: ModelStringInput | null,
  gbkey?: ModelStringInput | null,
  gene?: ModelStringInput | null,
  gene_biotype?: ModelStringInput | null,
  id?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phase?: ModelStringInput | null,
  pseudo?: ModelStringInput | null,
  score?: ModelStringInput | null,
  seqid?: ModelStringInput | null,
  source?: ModelStringInput | null,
  start?: ModelStringInput | null,
  strand?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelGFFRefFilterInput | null > | null,
  or?: Array< ModelGFFRefFilterInput | null > | null,
  not?: ModelGFFRefFilterInput | null,
};

export type ModelGFFRefConnection = {
  __typename: "ModelGFFRefConnection",
  items?:  Array<GFFRef | null > | null,
  nextToken?: string | null,
};

export type ModelVCFRefFilterInput = {
  chrom?: ModelStringInput | null,
  pos?: ModelStringInput | null,
  id?: ModelStringInput | null,
  ref?: ModelStringInput | null,
  alt?: ModelStringInput | null,
  qual?: ModelStringInput | null,
  filter?: ModelStringInput | null,
  ALLELEID?: ModelStringInput | null,
  CLNDISDB?: ModelStringInput | null,
  CLNDN?: ModelStringInput | null,
  CLNHGVS?: ModelStringInput | null,
  CLNREVSTAT?: ModelStringInput | null,
  CLNSIG?: ModelStringInput | null,
  CLNVC?: ModelStringInput | null,
  CLNVCSO?: ModelStringInput | null,
  GENEINFO?: ModelStringInput | null,
  MC?: ModelStringInput | null,
  ORIGIN?: ModelStringInput | null,
  and?: Array< ModelVCFRefFilterInput | null > | null,
  or?: Array< ModelVCFRefFilterInput | null > | null,
  not?: ModelVCFRefFilterInput | null,
};

export type ModelVCFRefConnection = {
  __typename: "ModelVCFRefConnection",
  items?:  Array<VCFRef | null > | null,
  nextToken?: string | null,
};

export type ModelFASTARefFilterInput = {
  name?: ModelStringInput | null,
  sequence?: ModelStringInput | null,
  and?: Array< ModelFASTARefFilterInput | null > | null,
  or?: Array< ModelFASTARefFilterInput | null > | null,
  not?: ModelFASTARefFilterInput | null,
};

export type ModelFASTARefConnection = {
  __typename: "ModelFASTARefConnection",
  items?:  Array<FASTARef | null > | null,
  nextToken?: string | null,
};

export type CreateGffRefMutationVariables = {
  input?: CreateGFFRefInput,
  condition?: ModelGFFRefConditionInput | null,
};

export type CreateGffRefMutation = {
  createGFFRef?:  {
    __typename: "GFFRef",
    dbxref?: string | null,
    description?: string | null,
    end?: string | null,
    gbkey?: string | null,
    gene?: string | null,
    gene_biotype?: string | null,
    id?: string | null,
    parent?: string | null,
    name?: string | null,
    phase?: string | null,
    pseudo?: string | null,
    score?: string | null,
    seqid?: string | null,
    source?: string | null,
    start?: string | null,
    strand?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGffRefMutationVariables = {
  input?: UpdateGFFRefInput,
  condition?: ModelGFFRefConditionInput | null,
};

export type UpdateGffRefMutation = {
  updateGFFRef?:  {
    __typename: "GFFRef",
    dbxref?: string | null,
    description?: string | null,
    end?: string | null,
    gbkey?: string | null,
    gene?: string | null,
    gene_biotype?: string | null,
    id?: string | null,
    parent?: string | null,
    name?: string | null,
    phase?: string | null,
    pseudo?: string | null,
    score?: string | null,
    seqid?: string | null,
    source?: string | null,
    start?: string | null,
    strand?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGffRefMutationVariables = {
  input?: DeleteGFFRefInput,
  condition?: ModelGFFRefConditionInput | null,
};

export type DeleteGffRefMutation = {
  deleteGFFRef?:  {
    __typename: "GFFRef",
    dbxref?: string | null,
    description?: string | null,
    end?: string | null,
    gbkey?: string | null,
    gene?: string | null,
    gene_biotype?: string | null,
    id?: string | null,
    parent?: string | null,
    name?: string | null,
    phase?: string | null,
    pseudo?: string | null,
    score?: string | null,
    seqid?: string | null,
    source?: string | null,
    start?: string | null,
    strand?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVcfRefMutationVariables = {
  input?: CreateVCFRefInput,
  condition?: ModelVCFRefConditionInput | null,
};

export type CreateVcfRefMutation = {
  createVCFRef?:  {
    __typename: "VCFRef",
    chrom?: string | null,
    pos?: string | null,
    id?: string | null,
    ref?: string | null,
    alt?: string | null,
    qual?: string | null,
    filter?: string | null,
    ALLELEID?: string | null,
    CLNDISDB?: string | null,
    CLNDN?: string | null,
    CLNHGVS?: string | null,
    CLNREVSTAT?: string | null,
    CLNSIG?: string | null,
    CLNVC?: string | null,
    CLNVCSO?: string | null,
    GENEINFO?: string | null,
    MC?: string | null,
    ORIGIN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVcfRefMutationVariables = {
  input?: UpdateVCFRefInput,
  condition?: ModelVCFRefConditionInput | null,
};

export type UpdateVcfRefMutation = {
  updateVCFRef?:  {
    __typename: "VCFRef",
    chrom?: string | null,
    pos?: string | null,
    id?: string | null,
    ref?: string | null,
    alt?: string | null,
    qual?: string | null,
    filter?: string | null,
    ALLELEID?: string | null,
    CLNDISDB?: string | null,
    CLNDN?: string | null,
    CLNHGVS?: string | null,
    CLNREVSTAT?: string | null,
    CLNSIG?: string | null,
    CLNVC?: string | null,
    CLNVCSO?: string | null,
    GENEINFO?: string | null,
    MC?: string | null,
    ORIGIN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVcfRefMutationVariables = {
  input?: DeleteVCFRefInput,
  condition?: ModelVCFRefConditionInput | null,
};

export type DeleteVcfRefMutation = {
  deleteVCFRef?:  {
    __typename: "VCFRef",
    chrom?: string | null,
    pos?: string | null,
    id?: string | null,
    ref?: string | null,
    alt?: string | null,
    qual?: string | null,
    filter?: string | null,
    ALLELEID?: string | null,
    CLNDISDB?: string | null,
    CLNDN?: string | null,
    CLNHGVS?: string | null,
    CLNREVSTAT?: string | null,
    CLNSIG?: string | null,
    CLNVC?: string | null,
    CLNVCSO?: string | null,
    GENEINFO?: string | null,
    MC?: string | null,
    ORIGIN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFastaRefMutationVariables = {
  input?: CreateFASTARefInput,
  condition?: ModelFASTARefConditionInput | null,
};

export type CreateFastaRefMutation = {
  createFASTARef?:  {
    __typename: "FASTARef",
    id: string,
    name?: string | null,
    sequence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFastaRefMutationVariables = {
  input?: UpdateFASTARefInput,
  condition?: ModelFASTARefConditionInput | null,
};

export type UpdateFastaRefMutation = {
  updateFASTARef?:  {
    __typename: "FASTARef",
    id: string,
    name?: string | null,
    sequence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFastaRefMutationVariables = {
  input?: DeleteFASTARefInput,
  condition?: ModelFASTARefConditionInput | null,
};

export type DeleteFastaRefMutation = {
  deleteFASTARef?:  {
    __typename: "FASTARef",
    id: string,
    name?: string | null,
    sequence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGffRefQueryVariables = {
  id?: string,
};

export type GetGffRefQuery = {
  getGFFRef?:  {
    __typename: "GFFRef",
    dbxref?: string | null,
    description?: string | null,
    end?: string | null,
    gbkey?: string | null,
    gene?: string | null,
    gene_biotype?: string | null,
    id?: string | null,
    parent?: string | null,
    name?: string | null,
    phase?: string | null,
    pseudo?: string | null,
    score?: string | null,
    seqid?: string | null,
    source?: string | null,
    start?: string | null,
    strand?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGffRefsQueryVariables = {
  filter?: ModelGFFRefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGffRefsQuery = {
  listGFFRefs?:  {
    __typename: "ModelGFFRefConnection",
    items?:  Array< {
      __typename: "GFFRef",
      dbxref?: string | null,
      description?: string | null,
      end?: string | null,
      gbkey?: string | null,
      gene?: string | null,
      gene_biotype?: string | null,
      id?: string | null,
      parent?: string | null,
      name?: string | null,
      phase?: string | null,
      pseudo?: string | null,
      score?: string | null,
      seqid?: string | null,
      source?: string | null,
      start?: string | null,
      strand?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetVcfRefQueryVariables = {
  id?: string,
};

export type GetVcfRefQuery = {
  getVCFRef?:  {
    __typename: "VCFRef",
    chrom?: string | null,
    pos?: string | null,
    id?: string | null,
    ref?: string | null,
    alt?: string | null,
    qual?: string | null,
    filter?: string | null,
    ALLELEID?: string | null,
    CLNDISDB?: string | null,
    CLNDN?: string | null,
    CLNHGVS?: string | null,
    CLNREVSTAT?: string | null,
    CLNSIG?: string | null,
    CLNVC?: string | null,
    CLNVCSO?: string | null,
    GENEINFO?: string | null,
    MC?: string | null,
    ORIGIN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVcfRefsQueryVariables = {
  filter?: ModelVCFRefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVcfRefsQuery = {
  listVCFRefs?:  {
    __typename: "ModelVCFRefConnection",
    items?:  Array< {
      __typename: "VCFRef",
      chrom?: string | null,
      pos?: string | null,
      id?: string | null,
      ref?: string | null,
      alt?: string | null,
      qual?: string | null,
      filter?: string | null,
      ALLELEID?: string | null,
      CLNDISDB?: string | null,
      CLNDN?: string | null,
      CLNHGVS?: string | null,
      CLNREVSTAT?: string | null,
      CLNSIG?: string | null,
      CLNVC?: string | null,
      CLNVCSO?: string | null,
      GENEINFO?: string | null,
      MC?: string | null,
      ORIGIN?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFastaRefQueryVariables = {
  id?: string,
};

export type GetFastaRefQuery = {
  getFASTARef?:  {
    __typename: "FASTARef",
    id: string,
    name?: string | null,
    sequence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFastaRefsQueryVariables = {
  filter?: ModelFASTARefFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFastaRefsQuery = {
  listFASTARefs?:  {
    __typename: "ModelFASTARefConnection",
    items?:  Array< {
      __typename: "FASTARef",
      id: string,
      name?: string | null,
      sequence?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGffRefSubscription = {
  onCreateGFFRef?:  {
    __typename: "GFFRef",
    dbxref?: string | null,
    description?: string | null,
    end?: string | null,
    gbkey?: string | null,
    gene?: string | null,
    gene_biotype?: string | null,
    id?: string | null,
    parent?: string | null,
    name?: string | null,
    phase?: string | null,
    pseudo?: string | null,
    score?: string | null,
    seqid?: string | null,
    source?: string | null,
    start?: string | null,
    strand?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGffRefSubscription = {
  onUpdateGFFRef?:  {
    __typename: "GFFRef",
    dbxref?: string | null,
    description?: string | null,
    end?: string | null,
    gbkey?: string | null,
    gene?: string | null,
    gene_biotype?: string | null,
    id?: string | null,
    parent?: string | null,
    name?: string | null,
    phase?: string | null,
    pseudo?: string | null,
    score?: string | null,
    seqid?: string | null,
    source?: string | null,
    start?: string | null,
    strand?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGffRefSubscription = {
  onDeleteGFFRef?:  {
    __typename: "GFFRef",
    dbxref?: string | null,
    description?: string | null,
    end?: string | null,
    gbkey?: string | null,
    gene?: string | null,
    gene_biotype?: string | null,
    id?: string | null,
    parent?: string | null,
    name?: string | null,
    phase?: string | null,
    pseudo?: string | null,
    score?: string | null,
    seqid?: string | null,
    source?: string | null,
    start?: string | null,
    strand?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVcfRefSubscription = {
  onCreateVCFRef?:  {
    __typename: "VCFRef",
    chrom?: string | null,
    pos?: string | null,
    id?: string | null,
    ref?: string | null,
    alt?: string | null,
    qual?: string | null,
    filter?: string | null,
    ALLELEID?: string | null,
    CLNDISDB?: string | null,
    CLNDN?: string | null,
    CLNHGVS?: string | null,
    CLNREVSTAT?: string | null,
    CLNSIG?: string | null,
    CLNVC?: string | null,
    CLNVCSO?: string | null,
    GENEINFO?: string | null,
    MC?: string | null,
    ORIGIN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVcfRefSubscription = {
  onUpdateVCFRef?:  {
    __typename: "VCFRef",
    chrom?: string | null,
    pos?: string | null,
    id?: string | null,
    ref?: string | null,
    alt?: string | null,
    qual?: string | null,
    filter?: string | null,
    ALLELEID?: string | null,
    CLNDISDB?: string | null,
    CLNDN?: string | null,
    CLNHGVS?: string | null,
    CLNREVSTAT?: string | null,
    CLNSIG?: string | null,
    CLNVC?: string | null,
    CLNVCSO?: string | null,
    GENEINFO?: string | null,
    MC?: string | null,
    ORIGIN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVcfRefSubscription = {
  onDeleteVCFRef?:  {
    __typename: "VCFRef",
    chrom?: string | null,
    pos?: string | null,
    id?: string | null,
    ref?: string | null,
    alt?: string | null,
    qual?: string | null,
    filter?: string | null,
    ALLELEID?: string | null,
    CLNDISDB?: string | null,
    CLNDN?: string | null,
    CLNHGVS?: string | null,
    CLNREVSTAT?: string | null,
    CLNSIG?: string | null,
    CLNVC?: string | null,
    CLNVCSO?: string | null,
    GENEINFO?: string | null,
    MC?: string | null,
    ORIGIN?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFastaRefSubscription = {
  onCreateFASTARef?:  {
    __typename: "FASTARef",
    id: string,
    name?: string | null,
    sequence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFastaRefSubscription = {
  onUpdateFASTARef?:  {
    __typename: "FASTARef",
    id: string,
    name?: string | null,
    sequence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFastaRefSubscription = {
  onDeleteFASTARef?:  {
    __typename: "FASTARef",
    id: string,
    name?: string | null,
    sequence?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
