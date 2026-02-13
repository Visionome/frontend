import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlastMatch, BlastMetaData } from '@/types/blast';
import { useNavigate } from 'react-router-dom';

interface BlastResultsProps {
  matches: BlastMatch[];
  metadata: BlastMetaData | null;
}

export function BlastResults({ matches, metadata }: BlastResultsProps) {
  const navigate = useNavigate();

  if (matches.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Metadata summary */}
      {metadata && (
        <div className="flex flex-wrap gap-3">
          <Card className="flex-1 min-w-[140px]">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{metadata.total_hits}</p>
              <p className="text-xs text-muted-foreground">Total Hits</p>
            </CardContent>
          </Card>
          <Card className="flex-1 min-w-[140px]">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{metadata.best_gene_symbol}</p>
              <p className="text-xs text-muted-foreground">Best Match</p>
            </CardContent>
          </Card>
          <Card className="flex-1 min-w-[140px]">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{metadata.best_score}</p>
              <p className="text-xs text-muted-foreground">Best Score</p>
            </CardContent>
          </Card>
          <Card className="flex-1 min-w-[140px]">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{metadata.best_evalue.toExponential(2)}</p>
              <p className="text-xs text-muted-foreground">Best E-Value</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Results table */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">
            Results <Badge variant="secondary" className="ml-2">{matches.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 pr-4 text-left font-medium text-muted-foreground">Gene</th>
                  <th className="pb-2 pr-4 text-right font-medium text-muted-foreground">Hits</th>
                  <th className="pb-2 pr-4 text-right font-medium text-muted-foreground">Score</th>
                  <th className="pb-2 pr-4 text-right font-medium text-muted-foreground">E-Value</th>
                  <th className="pb-2 pr-4 text-right font-medium text-muted-foreground">Align Len</th>
                  <th className="pb-2 pr-4 text-right font-medium text-muted-foreground">Start</th>
                  <th className="pb-2 text-right font-medium text-muted-foreground">End</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((match, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-2 pr-4">
                      <button
                        className="font-medium text-primary hover:underline"
                        onClick={() => navigate(`/?gene=${match.gene_symbol}`)}
                      >
                        {match.gene_symbol}
                      </button>
                    </td>
                    <td className="py-2 pr-4 text-right tabular-nums">{match.num_hits}</td>
                    <td className="py-2 pr-4 text-right tabular-nums">{match.best_score}</td>
                    <td className="py-2 pr-4 text-right tabular-nums">
                      {match.best_evalue.toExponential(2)}
                    </td>
                    <td className="py-2 pr-4 text-right tabular-nums">{match.align_length}</td>
                    <td className="py-2 pr-4 text-right tabular-nums">
                      {match.sbjct_start.toLocaleString()}
                    </td>
                    <td className="py-2 text-right tabular-nums">
                      {match.sbjct_end.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
