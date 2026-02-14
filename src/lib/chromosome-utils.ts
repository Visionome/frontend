/**
 * Parses the chromosome number from a cytoband location string.
 * 
 * @param cytobandLocation - The cytoband location (e.g., "19q13.43", "chr12p13.31", "Xp22")
 * @returns The chromosome identifier (1-22, X, or Y) in uppercase, or null if invalid
 * 
 * @example
 * parseChromFromCytoband("19q13.43") // returns "19"
 * parseChromFromCytoband("chr12p13.31") // returns "12"
 * parseChromFromCytoband("Xp22.3") // returns "X"
 * parseChromFromCytoband("19") // returns "19" (bare chromosome number)
 * parseChromFromCytoband("invalid") // returns null
 */
export function parseChromFromCytoband(cytobandLocation: string): string | null {
  if (!cytobandLocation) return null;
  
  // Strip optional "chr" prefix
  const normalized = cytobandLocation.replace(/^chr/i, '');
  
  // Match valid human chromosome: 1-22, X, or Y
  // Optionally followed by cytoband arm (p/q) and region
  // Examples: 19q13.43, Xp22, 17q11.2-q12, 19, X
  const match = normalized.match(/^([1-9]|1\d|2[0-2]|X|Y)([pq]|$)/i);
  
  return match ? match[1].toUpperCase() : null;
}

export function formatBp(bp: number): string {
  if (bp >= 1e9) return `${(bp / 1e9).toFixed(2)} Gb`;
  if (bp >= 1e6) return `${(bp / 1e6).toFixed(1)} Mb`;
  if (bp >= 1e3) return `${(bp / 1e3).toFixed(1)} kb`;
  return `${bp} bp`;
}

export function chromosomeLabel(chrom: string): string {
  return chrom.replace('chr', '');
}
