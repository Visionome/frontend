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
 * parseChromFromCytoband("invalid") // returns null
 */
export function parseChromFromCytoband(cytobandLocation: string): string | null {
  if (!cytobandLocation) return null;
  
  // Strip optional "chr" prefix
  const normalized = cytobandLocation.replace(/^chr/i, '');
  
  // Match valid human chromosome: 1-22, X, or Y
  // Followed by valid cytoband notation (arm p/q, region, possibly with ranges/alternatives)
  // Examples: 19q13.43, Xp22, 17q11.2-q12, 11p11.2|11p12-p11
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
