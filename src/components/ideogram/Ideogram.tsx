import { useMemo } from 'react';
import { ChromosomeShape } from './ChromosomeShape';
import { getChromosomes, getCytobands } from '@/services/genome-service';
import { chromosomeLabel } from '@/lib/chromosome-utils';

interface IdeogramProps {
  highlightedChromosomes: string[];
  onSelectChromosome: (chrom: string) => void;
}

const MAX_HEIGHT = 220;

export function Ideogram({ highlightedChromosomes, onSelectChromosome }: IdeogramProps) {
  const chromosomes = useMemo(() => getChromosomes(), []);
  const maxLength = useMemo(
    () => Math.max(...chromosomes.map((c) => c.assembly_len)),
    [chromosomes],
  );

  return (
    <div className="flex flex-wrap items-end justify-center gap-1 px-4 py-6">
      {chromosomes.map((chrom) => {
        const label = chromosomeLabel(chrom.chrom);
        const cytobands = getCytobands(label);
        const height = Math.max((chrom.assembly_len / maxLength) * MAX_HEIGHT, 40);
        const isHighlighted = highlightedChromosomes.includes(label);

        return (
          <ChromosomeShape
            key={chrom.id}
            label={label}
            cytobands={cytobands}
            highlighted={isHighlighted}
            height={height}
            onClick={() => onSelectChromosome(label)}
          />
        );
      })}
    </div>
  );
}
