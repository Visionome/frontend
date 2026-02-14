import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '@/components/search/SearchBar';
import { Ideogram } from '@/components/ideogram/Ideogram';
import { ChromosomeDetail } from '@/components/chromosome/ChromosomeDetail';
import { useGenomeSearch } from '@/hooks/useGenomeSearch';
import { Badge } from '@/components/ui/badge';
import { parseChromFromCytoband } from '@/lib/chromosome-utils';

export function VisualizerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedChrom, setSelectedChrom] = useState<string | null>(null);
  const { query, results, isLoading, highlightedChromosomes, search, debouncedSearch } =
    useGenomeSearch();

  // Auto-search from URL param (e.g., from BLAST results)
  useEffect(() => {
    const gene = searchParams.get('gene');
    if (gene) {
      search(gene);
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, search, setSearchParams]);

  const highlightedBands = useMemo(() => {
    if (!selectedChrom) return [];
    return results
      .filter((g) => {
        const loc = g.cytobandlocation ?? '';
        return loc.startsWith(selectedChrom);
      })
      .map((g) => g.cytobandlocation)
      .filter(Boolean);
  }, [selectedChrom, results]);

  return (
    <div className="flex h-full flex-col">
      {/* Search */}
      <div className="border-b px-4 py-3">
        <SearchBar
          value={query}
          onChange={debouncedSearch}
          resultCount={results.length}
          isLoading={isLoading}
        />
        {results.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {results.map((g) => (
              <Badge
                key={g.id}
                variant="outline"
                className="cursor-pointer hover:bg-accent"
                onClick={() => {
                  const chrom = parseChromFromCytoband(g.cytobandlocation ?? '');
                  if (chrom) setSelectedChrom(chrom);
                }}
              >
                {g.name} &middot; {g.cytobandlocation}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Visualization */}
      <div className="flex-1 overflow-auto">
        {selectedChrom ? (
          <ChromosomeDetail
            chromosome={selectedChrom}
            highlightedBands={highlightedBands}
            searchResults={results}
            onBack={() => setSelectedChrom(null)}
          />
        ) : (
          <Ideogram
            highlightedChromosomes={highlightedChromosomes}
            onSelectChromosome={setSelectedChrom}
          />
        )}
      </div>
    </div>
  );
}
