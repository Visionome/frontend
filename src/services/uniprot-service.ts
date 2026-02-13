export async function fetchProteinId(geneSymbol: string): Promise<string | null> {
  try {
    const url = `https://rest.uniprot.org/uniprotkb/search?query=gene_exact:${encodeURIComponent(geneSymbol)}+AND+reviewed:true+AND+organism_id:9606&format=json&size=1&fields=accession`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].primaryAccession;
    }
    return null;
  } catch {
    return null;
  }
}

export function getAlphaFoldUrl(proteinId: string): string {
  return `https://alphafold.ebi.ac.uk/files/AF-${proteinId}-F1-model_v2.cif`;
}
