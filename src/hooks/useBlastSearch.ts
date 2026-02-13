import { useState, useCallback } from 'react';
import type { BlastMatch, BlastMetaData } from '@/types/blast';
import { searchBlast } from '@/services/blast-service';

export function useBlastSearch() {
  const [sequence, setSequence] = useState('');
  const [matches, setMatches] = useState<BlastMatch[]>([]);
  const [metadata, setMetadata] = useState<BlastMetaData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runSearch = useCallback(async (seq: string) => {
    if (!seq.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await searchBlast(seq);
      setMatches(response.matches);
      setMetadata(response.metadata ?? null);
    } catch {
      setError('BLAST search failed. Please try again.');
      setMatches([]);
      setMetadata(null);
    } finally {
      setIsLoading(false);
    }
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
  };
}
