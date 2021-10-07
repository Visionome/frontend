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
