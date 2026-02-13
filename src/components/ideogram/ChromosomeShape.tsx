import { useMemo, useState } from 'react';
import type { CytobandData } from '@/types/genome';
import { getCytobandColor } from '@/lib/cytoband-colors';

interface ChromosomeShapeProps {
  label: string;
  cytobands: CytobandData[];
  highlighted: boolean;
  height: number;
  onClick: () => void;
}

const CHROM_WIDTH = 18;
const CENTROMERE_WIDTH = 10;
const BORDER_RADIUS = 6;

export function ChromosomeShape({
  label,
  cytobands,
  highlighted,
  height,
  onClick,
}: ChromosomeShapeProps) {
  const [hovered, setHovered] = useState(false);

  const { totalLength, bands, centromereY } = useMemo(() => {
    if (cytobands.length === 0) return { totalLength: 1, bands: [], centromereY: null };
    const total = Math.max(...cytobands.map((b) => b.end));
    const scale = height / total;

    const centromere = cytobands.find((b) => b.giemsaStains === 'acen');
    const cenY = centromere ? centromere.start * scale : null;

    const mapped = cytobands.map((band) => ({
      ...band,
      y: band.start * scale,
      h: Math.max((band.end - band.start) * scale, 0.5),
      color: getCytobandColor(band.giemsaStains),
      isCentromere: band.giemsaStains === 'acen',
    }));

    return { totalLength: total, bands: mapped, centromereY: cenY };
  }, [cytobands, height]);

  const svgWidth = CHROM_WIDTH + 12;
  const svgHeight = height + 30;

  return (
    <div
      className="flex flex-col items-center cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        aria-label={`Chromosome ${label}, ${totalLength.toLocaleString()} bp`}
        role="img"
      >
        <defs>
          <clipPath id={`clip-${label}`}>
            {/* Top rounded cap */}
            <rect
              x={(svgWidth - CHROM_WIDTH) / 2}
              y={0}
              width={CHROM_WIDTH}
              height={height}
              rx={BORDER_RADIUS}
              ry={BORDER_RADIUS}
            />
          </clipPath>
          {highlighted && (
            <filter id={`glow-${label}`}>
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}
        </defs>

        {/* Highlight glow */}
        {highlighted && (
          <rect
            x={(svgWidth - CHROM_WIDTH) / 2 - 3}
            y={-3}
            width={CHROM_WIDTH + 6}
            height={height + 6}
            rx={BORDER_RADIUS + 2}
            fill="none"
            stroke="hsl(187, 70%, 52%)"
            strokeWidth={2}
            opacity={0.7}
            filter={`url(#glow-${label})`}
          />
        )}

        {/* Chromosome bands */}
        <g clipPath={`url(#clip-${label})`}>
          {/* Base fill */}
          <rect
            x={(svgWidth - CHROM_WIDTH) / 2}
            y={0}
            width={CHROM_WIDTH}
            height={height}
            fill="#e5e5e5"
          />
          {bands.map((band, i) => (
            <rect
              key={i}
              x={
                band.isCentromere
                  ? (svgWidth - CENTROMERE_WIDTH) / 2
                  : (svgWidth - CHROM_WIDTH) / 2
              }
              y={band.y}
              width={band.isCentromere ? CENTROMERE_WIDTH : CHROM_WIDTH}
              height={band.h}
              fill={band.color}
            />
          ))}
        </g>

        {/* Centromere notch */}
        {centromereY !== null && (
          <>
            <line
              x1={(svgWidth - CHROM_WIDTH) / 2}
              y1={centromereY}
              x2={(svgWidth - CENTROMERE_WIDTH) / 2}
              y2={centromereY + 3}
              stroke="hsl(var(--background))"
              strokeWidth={1.5}
            />
            <line
              x1={(svgWidth + CHROM_WIDTH) / 2}
              y1={centromereY}
              x2={(svgWidth + CENTROMERE_WIDTH) / 2}
              y2={centromereY + 3}
              stroke="hsl(var(--background))"
              strokeWidth={1.5}
            />
          </>
        )}

        {/* Outline */}
        <rect
          x={(svgWidth - CHROM_WIDTH) / 2}
          y={0}
          width={CHROM_WIDTH}
          height={height}
          rx={BORDER_RADIUS}
          ry={BORDER_RADIUS}
          fill="none"
          stroke={
            hovered
              ? 'hsl(187, 70%, 52%)'
              : highlighted
                ? 'hsl(187, 70%, 52%)'
                : 'hsl(var(--border))'
          }
          strokeWidth={hovered || highlighted ? 1.5 : 0.75}
        />

        {/* Label */}
        <text
          x={svgWidth / 2}
          y={height + 16}
          textAnchor="middle"
          className="fill-foreground text-[10px] font-medium"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}
