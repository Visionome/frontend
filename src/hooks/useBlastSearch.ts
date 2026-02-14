import { useState, useCallback } from 'react';
import type { BlastMatch, BlastMetaData } from '@/types/blast';
import { searchBlast } from '@/services/blast-service';
import {
  getCachedSearches,
  saveSearch,
  deleteCachedSearch,
  type CachedBlastSearch,
} from '@/services/blast-cache-service';

export function useBlastSearch() {
  const [sequence, setSequence] = useState('');
  const [matches, setMatches] = useState<BlastMatch[]>([]);
  const [metadata, setMetadata] = useState<BlastMetaData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cachedSearches, setCachedSearches] = useState<CachedBlastSearch[]>(getCachedSearches);

  const runSearch = useCallback(async (seq: string) => {
    if (!seq.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await searchBlast(seq);
      setMatches(response.matches);
      setMetadata(response.metadata ?? null);
      saveSearch(seq, response.matches, response.metadata ?? null);
      setCachedSearches(getCachedSearches());
    } catch {
      setError('BLAST search failed. Please try again.');
      setMatches([]);
      setMetadata(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadCached = useCallback((search: CachedBlastSearch) => {
    setSequence('');
    setMatches(search.matches);
    setMetadata(search.metadata);
    setError(null);
  }, []);

  const removeFromCache = useCallback((id: string) => {
    deleteCachedSearch(id);
    setCachedSearches(getCachedSearches());
  }, []);

  const clear = useCallback(() => {
    setSequence('');
    setMatches([]);
    setMetadata(null);
    setError(null);
  }, []);

  return {
    sequence,
    setSequence,
    matches,
    metadata,
    isLoading,
    error,
    runSearch,
    clear,
    cachedSearches,
    loadCached,
    removeFromCache,
  };
}
