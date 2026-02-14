export function parseChromFromCytoband(cytobandLocation: string): string | null {
  if (!cytobandLocation) return null;
  const match = cytobandLocation.match(/^(\d+|X|Y)/i);
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
