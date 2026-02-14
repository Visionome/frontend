import { useState, useCallback, useRef, useEffect } from 'react';
import type { GFFRef } from '@/types/genome';
import { searchGenes } from '@/services/genome-service';
import { parseChromFromCytoband } from '@/lib/chromosome-utils';

export function useGenomeSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<GFFRef[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  const highlightedChromosomes = results
    .map((r) => parseChromFromCytoband(r.cytobandlocation))
    .filter((c): c is string => c !== null)
    .filter((v, i, a) => a.indexOf(v) === i);

  const search = useCallback(async (q: string) => {
    setQuery(q);
    if (!q.trim()) {
      setResults([]);
      setError(null);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const data = await searchGenes(q);
      setResults(data);
    } catch {
      setError('Search failed. Please try again.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debouncedSearch = useCallback(
    (q: string) => {
      setQuery(q);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => search(q), 300);
    },
    [search],
  );

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return {
    query,
    results,
    isLoading,
    error,
    highlightedChromosomes,
    search,
    debouncedSearch,
  };
}
