const GIEMSA_COLORS: Record<string, string> = {
  gneg: '#f5f5f5',
  gpos25: '#c8c8c8',
  gpos50: '#969696',
  gpos75: '#646464',
  gpos100: '#323232',
  acen: '#e85d75',
  gvar: '#a1a1e4',
  stalk: '#8584e5',
};

export function getCytobandColor(giemsaStain: string): string {
  return GIEMSA_COLORS[giemsaStain] ?? '#d4d4d4';
}

export function getCytobandColorDark(giemsaStain: string): string {
  const DARK_COLORS: Record<string, string> = {
    gneg: '#2a2a2a',
    gpos25: '#404040',
    gpos50: '#606060',
    gpos75: '#808080',
    gpos100: '#b0b0b0',
    acen: '#e85d75',
    gvar: '#7a7acc',
    stalk: '#6b6acc',
  };
  return DARK_COLORS[giemsaStain] ?? '#3a3a3a';
}
