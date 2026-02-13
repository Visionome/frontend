import { useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CytobandBar } from './CytobandBar';
import { GeneInfoCard } from '@/components/gene-info/GeneInfoCard';
import { getCytobands, getChromosomes } from '@/services/genome-service';
import { formatBp } from '@/lib/chromosome-utils';
import type { GFFRef } from '@/types/genome';

interface ChromosomeDetailProps {
  chromosome: string;
  highlightedBands: string[];
  searchResults: GFFRef[];
  onBack: () => void;
}

const DETAIL_HEIGHT = 500;

export function ChromosomeDetail({
  chromosome,
  highlightedBands,
  searchResults,
  onBack,
}: ChromosomeDetailProps) {
  const [selectedBandName, setSelectedBandName] = useState<string | null>(null);

  const cytobands = useMemo(() => getCytobands(chromosome), [chromosome]);
  const chromInfo = useMemo(
    () => getChromosomes().find((c) => c.chrom === `chr${chromosome}`),
    [chromosome],
  );
  const totalLength = chromInfo?.assembly_len ?? 0;
  const maxEnd = useMemo(() => Math.max(...cytobands.map((b) => b.end), 1), [cytobands]);
  const scale = DETAIL_HEIGHT / maxEnd;

  const selectedGene = useMemo(() => {
    if (!selectedBandName) return null;
    return (
      searchResults.find((g) => {
        const loc = g.cytobandlocation?.toLowerCase() ?? '';
        return loc.includes(selectedBandName.replace(/^\d+\./, '').toLowerCase());
      }) ?? null
    );
  }, [selectedBandName, searchResults]);

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 border-b px-4 py-3">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h2 className="text-lg font-semibold">Chromosome {chromosome}</h2>
          <p className="text-sm text-muted-foreground">
            {formatBp(totalLength)} &middot; {cytobands.length} cytobands
          </p>
        </div>
        {selectedBandName && (
          <Badge variant="outline" className="ml-auto">
            {selectedBandName}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 gap-6 overflow-auto p-4">
        {/* Cytoband list */}
        <div className="flex w-48 shrink-0 flex-col gap-0.5 overflow-y-auto">
          {cytobands.map((band) => {
            const height = Math.max((band.end - band.start) * scale, 4);
            const normalizedBandName = band.name.replace(/^(\d+|X|Y)\./i, '$1');
            const isHighlighted = highlightedBands.some((hb) =>
              hb.toLowerCase().includes(normalizedBandName.toLowerCase()),
            );
            return (
              <CytobandBar
                key={band.id}
                band={band}
                height={height}
                selected={selectedBandName === band.name}
                highlighted={isHighlighted}
                onClick={() =>
                  setSelectedBandName((prev) => (prev === band.name ? null : band.name))
                }
              />
            );
          })}
        </div>

        {/* Gene info panel */}
        <div className="flex-1">
          {selectedGene ? (
            <GeneInfoCard gene={selectedGene} />
          ) : (
            <div className="flex h-64 items-center justify-center text-muted-foreground">
              <p className="text-center text-sm">
                {searchResults.length > 0
                  ? 'Click a highlighted cytoband to view gene details'
                  : 'Click a cytoband to explore'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
