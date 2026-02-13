import { getCytobandColor } from '@/lib/cytoband-colors';
import type { CytobandData } from '@/types/genome';
import { cn } from '@/lib/utils';

interface CytobandBarProps {
  band: CytobandData;
  height: number;
  selected: boolean;
  highlighted: boolean;
  onClick: () => void;
}

export function CytobandBar({ band, height, selected, highlighted, onClick }: CytobandBarProps) {
  const bandLabel = band.name.split('.').slice(1).join('.');
  const isCentromere = band.giemsaStains === 'acen';

  return (
    <div
      className={cn(
        'group flex items-center gap-2 cursor-pointer transition-colors',
        selected && 'bg-primary/10 rounded',
        highlighted && !selected && 'bg-primary/5 rounded',
      )}
      onClick={onClick}
    >
      {/* Band rectangle */}
      <div
        className={cn(
          'shrink-0 rounded-sm border transition-all',
          selected
            ? 'border-primary ring-1 ring-primary/50'
            : 'border-transparent group-hover:border-primary/50',
        )}
        style={{
          width: isCentromere ? 20 : 28,
          height: Math.max(height, 4),
          backgroundColor: getCytobandColor(band.giemsaStains),
          marginLeft: isCentromere ? 4 : 0,
        }}
      />
      {/* Label */}
      <span
        className={cn(
          'text-[11px] whitespace-nowrap',
          selected ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground',
        )}
      >
        {bandLabel}
      </span>
    </div>
  );
}
