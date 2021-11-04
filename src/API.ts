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
  sequence?: string | null,
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
  sequence?: ModelStringInput | null,
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
  sequence?: string | null,
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
  sequence?: string | null,
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
  alleleid?: string | null,
  clndisdb?: string | null,
  clndn?: string | null,
  clnhgvs?: string | null,
  clnrevstat?: string | null,
  clnsig?: string | null,
  clnvc?: string | null,
  clnvcso?: string | null,
  geneinfo?: string | null,
  mc?: string | null,
  origin?: string | null,
};

export type ModelVCFRefConditionInput = {
  chrom?: ModelStringInput | null,
  pos?: ModelStringInput | null,
  ref?: ModelStringInput | null,
  alt?: ModelStringInput | null,
  qual?: ModelStringInput | null,
  filter?: ModelStringInput | null,
  alleleid?: ModelStringInput | null,
  clndisdb?: ModelStringInput | null,
  clndn?: ModelStringInput | null,
  clnhgvs?: ModelStringInput | null,
  clnrevstat?: ModelStringInput | null,
  clnsig?: ModelStringInput | null,
  clnvc?: ModelStringInput | null,
  clnvcso?: ModelStringInput | null,
  geneinfo?: ModelStringInput | null,
  mc?: ModelStringInput | null,
  origin?: ModelStringInput | null,
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
  alleleid?: string | null,
  clndisdb?: string | null,
  clndn?: string | null,
  clnhgvs?: string | null,
  clnrevstat?: string | null,
  clnsig?: string | null,
  clnvc?: string | null,
  clnvcso?: string | null,
  geneinfo?: string | null,
  mc?: string | null,
  origin?: string | null,
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
  alleleid?: string | null,
  clndisdb?: string | null,
  clndn?: string | null,
  clnhgvs?: string | null,
  clnrevstat?: string | null,
  clnsig?: string | null,
  clnvc?: string | null,
  clnvcso?: string | null,
  geneinfo?: string | null,
  mc?: string | null,
  origin?: string | null,
};

export type DeleteVCFRefInput = {
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
  sequence?: ModelStringInput | null,
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
  alleleid?: ModelStringInput | null,
  clndisdb?: ModelStringInput | null,
  clndn?: ModelStringInput | null,
  clnhgvs?: ModelStringInput | null,
  clnrevstat?: ModelStringInput | null,
  clnsig?: ModelStringInput | null,
  clnvc?: ModelStringInput | null,
  clnvcso?: ModelStringInput | null,
  geneinfo?: ModelStringInput | null,
  mc?: ModelStringInput | null,
  origin?: ModelStringInput | null,
  and?: Array< ModelVCFRefFilterInput | null > | null,
  or?: Array< ModelVCFRefFilterInput | null > | null,
  not?: ModelVCFRefFilterInput | null,
};

export type ModelVCFRefConnection = {
  __typename: "ModelVCFRefConnection",
  items?:  Array<VCFRef | null > | null,
  nextToken?: string | null,
};

export type SearchableGFFRefFilterInput = {
  dbxref?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  end?: SearchableStringFilterInput | null,
  gbkey?: SearchableStringFilterInput | null,
  gene?: SearchableStringFilterInput | null,
  gene_biotype?: SearchableStringFilterInput | null,
  id?: SearchableStringFilterInput | null,
  parent?: SearchableStringFilterInput | null,
  name?: SearchableStringFilterInput | null,
  phase?: SearchableStringFilterInput | null,
  pseudo?: SearchableStringFilterInput | null,
  score?: SearchableStringFilterInput | null,
  seqid?: SearchableStringFilterInput | null,
  source?: SearchableStringFilterInput | null,
  start?: SearchableStringFilterInput | null,
  strand?: SearchableStringFilterInput | null,
  type?: SearchableStringFilterInput | null,
  sequence?: SearchableStringFilterInput | null,
  and?: Array< SearchableGFFRefFilterInput | null > | null,
  or?: Array< SearchableGFFRefFilterInput | null > | null,
  not?: SearchableGFFRefFilterInput | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableGFFRefSortInput = {
  field?: SearchableGFFRefSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableGFFRefSortableFields {
  dbxref = "dbxref",
  description = "description",
  end = "end",
  gbkey = "gbkey",
  gene = "gene",
  gene_biotype = "gene_biotype",
  id = "id",
  parent = "parent",
  name = "name",
  phase = "phase",
  pseudo = "pseudo",
  score = "score",
  seqid = "seqid",
  source = "source",
  start = "start",
  strand = "strand",
  type = "type",
  sequence = "sequence",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableGFFRefConnection = {
  __typename: "SearchableGFFRefConnection",
  items?:  Array<GFFRef | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type SearchableVCFRefFilterInput = {
  chrom?: SearchableStringFilterInput | null,
  pos?: SearchableStringFilterInput | null,
  id?: SearchableStringFilterInput | null,
  ref?: SearchableStringFilterInput | null,
  alt?: SearchableStringFilterInput | null,
  qual?: SearchableStringFilterInput | null,
  filter?: SearchableStringFilterInput | null,
  alleleid?: SearchableStringFilterInput | null,
  clndisdb?: SearchableStringFilterInput | null,
  clndn?: SearchableStringFilterInput | null,
  clnhgvs?: SearchableStringFilterInput | null,
  clnrevstat?: SearchableStringFilterInput | null,
  clnsig?: SearchableStringFilterInput | null,
  clnvc?: SearchableStringFilterInput | null,
  clnvcso?: SearchableStringFilterInput | null,
  geneinfo?: SearchableStringFilterInput | null,
  mc?: SearchableStringFilterInput | null,
  origin?: SearchableStringFilterInput | null,
  and?: Array< SearchableVCFRefFilterInput | null > | null,
  or?: Array< SearchableVCFRefFilterInput | null > | null,
  not?: SearchableVCFRefFilterInput | null,
};

export type SearchableVCFRefSortInput = {
  field?: SearchableVCFRefSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableVCFRefSortableFields {
  chrom = "chrom",
  pos = "pos",
  id = "id",
  ref = "ref",
  alt = "alt",
  qual = "qual",
  filter = "filter",
  alleleid = "alleleid",
  clndisdb = "clndisdb",
  clndn = "clndn",
  clnhgvs = "clnhgvs",
  clnrevstat = "clnrevstat",
  clnsig = "clnsig",
  clnvc = "clnvc",
  clnvcso = "clnvcso",
  geneinfo = "geneinfo",
  mc = "mc",
  origin = "origin",
}


export type SearchableVCFRefConnection = {
  __typename: "SearchableVCFRefConnection",
  items?:  Array<VCFRef | null > | null,
  nextToken?: string | null,
  total?: number | null,
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
    sequence?: string | null,
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
    sequence?: string | null,
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
    sequence?: string | null,
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
    alleleid?: string | null,
    clndisdb?: string | null,
    clndn?: string | null,
    clnhgvs?: string | null,
    clnrevstat?: string | null,
    clnsig?: string | null,
    clnvc?: string | null,
    clnvcso?: string | null,
    geneinfo?: string | null,
    mc?: string | null,
    origin?: string | null,
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
    alleleid?: string | null,
    clndisdb?: string | null,
    clndn?: string | null,
    clnhgvs?: string | null,
    clnrevstat?: string | null,
    clnsig?: string | null,
    clnvc?: string | null,
    clnvcso?: string | null,
    geneinfo?: string | null,
    mc?: string | null,
    origin?: string | null,
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
    alleleid?: string | null,
    clndisdb?: string | null,
    clndn?: string | null,
    clnhgvs?: string | null,
    clnrevstat?: string | null,
    clnsig?: string | null,
    clnvc?: string | null,
    clnvcso?: string | null,
    geneinfo?: string | null,
    mc?: string | null,
    origin?: string | null,
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
    sequence?: string | null,
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
      sequence?: string | null,
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
    alleleid?: string | null,
    clndisdb?: string | null,
    clndn?: string | null,
    clnhgvs?: string | null,
    clnrevstat?: string | null,
    clnsig?: string | null,
    clnvc?: string | null,
    clnvcso?: string | null,
    geneinfo?: string | null,
    mc?: string | null,
    origin?: string | null,
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
      alleleid?: string | null,
      clndisdb?: string | null,
      clndn?: string | null,
      clnhgvs?: string | null,
      clnrevstat?: string | null,
      clnsig?: string | null,
      clnvc?: string | null,
      clnvcso?: string | null,
      geneinfo?: string | null,
      mc?: string | null,
      origin?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchGffRefsQueryVariables = {
  filter?: SearchableGFFRefFilterInput | null,
  sort?: SearchableGFFRefSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchGffRefsQuery = {
  searchGFFRefs?:  {
    __typename: "SearchableGFFRefConnection",
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
      sequence?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type SearchVcfRefsQueryVariables = {
  filter?: SearchableVCFRefFilterInput | null,
  sort?: SearchableVCFRefSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchVcfRefsQuery = {
  searchVCFRefs?:  {
    __typename: "SearchableVCFRefConnection",
    items?:  Array< {
      __typename: "VCFRef",
      chrom?: string | null,
      pos?: string | null,
      id?: string | null,
      ref?: string | null,
      alt?: string | null,
      qual?: string | null,
      filter?: string | null,
      alleleid?: string | null,
      clndisdb?: string | null,
      clndn?: string | null,
      clnhgvs?: string | null,
      clnrevstat?: string | null,
      clnsig?: string | null,
      clnvc?: string | null,
      clnvcso?: string | null,
      geneinfo?: string | null,
      mc?: string | null,
      origin?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
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
    sequence?: string | null,
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
    sequence?: string | null,
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
    sequence?: string | null,
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
    alleleid?: string | null,
    clndisdb?: string | null,
    clndn?: string | null,
    clnhgvs?: string | null,
    clnrevstat?: string | null,
    clnsig?: string | null,
    clnvc?: string | null,
    clnvcso?: string | null,
    geneinfo?: string | null,
    mc?: string | null,
    origin?: string | null,
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
    alleleid?: string | null,
    clndisdb?: string | null,
    clndn?: string | null,
    clnhgvs?: string | null,
    clnrevstat?: string | null,
    clnsig?: string | null,
    clnvc?: string | null,
    clnvcso?: string | null,
    geneinfo?: string | null,
    mc?: string | null,
    origin?: string | null,
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
    alleleid?: string | null,
    clndisdb?: string | null,
    clndn?: string | null,
    clnhgvs?: string | null,
    clnrevstat?: string | null,
    clnsig?: string | null,
    clnvc?: string | null,
    clnvcso?: string | null,
    geneinfo?: string | null,
    mc?: string | null,
    origin?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
