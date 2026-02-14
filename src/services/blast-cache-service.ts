import type { BlastMatch, BlastMetaData } from '@/types/blast';

const STORAGE_KEY = 'visionome:blast-cache';
const MAX_ENTRIES = 20;

export interface CachedBlastSearch {
  id: string;
  label: string;
  timestamp: number;
  matches: BlastMatch[];
  metadata: BlastMetaData | null;
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/** Build a short human-readable label from a raw sequence. */
function buildLabel(sequence: string): string {
  const clean = sequence.replace(/\s+/g, '');
  const preview = clean.slice(0, 20);
  return clean.length > 20 ? `${preview}…` : preview;
}

export function getCachedSearches(): CachedBlastSearch[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CachedBlastSearch[]) : [];
  } catch {
    return [];
  }
}

export function saveSearch(
  sequence: string,
  matches: BlastMatch[],
  metadata: BlastMetaData | null,
): CachedBlastSearch {
  const entry: CachedBlastSearch = {
    id: generateId(),
    label: buildLabel(sequence),
    timestamp: Date.now(),
    matches,
    metadata,
  };

  const existing = getCachedSearches();
  const updated = [entry, ...existing].slice(0, MAX_ENTRIES);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return entry;
}

export function getCachedSearch(id: string): CachedBlastSearch | undefined {
  return getCachedSearches().find((s) => s.id === id);
}

export function deleteCachedSearch(id: string): void {
  const updated = getCachedSearches().filter((s) => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
