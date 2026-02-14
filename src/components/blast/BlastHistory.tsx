import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Trash2 } from 'lucide-react';
import type { CachedBlastSearch } from '@/services/blast-cache-service';

interface BlastHistoryProps {
  searches: CachedBlastSearch[];
  onSelect: (search: CachedBlastSearch) => void;
  onDelete: (id: string) => void;
}

function formatTime(ts: number): string {
  const d = new Date(ts);
  return d.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function BlastHistory({ searches, onSelect, onDelete }: BlastHistoryProps) {
  if (searches.length === 0) return null;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Clock className="h-4 w-4" />
          Previous Searches
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {searches.map((s) => (
          <div
            key={s.id}
            className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted/50 cursor-pointer group"
            onClick={() => onSelect(s)}
          >
            <div className="min-w-0 flex-1">
              <p className="truncate font-mono text-sm">{s.label}</p>
              <p className="text-xs text-muted-foreground">
                {formatTime(s.timestamp)} · {s.matches.length} gene{s.matches.length !== 1 ? 's' : ''}
                {s.metadata?.best_gene_symbol && ` · Best: ${s.metadata.best_gene_symbol}`}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="ml-2 opacity-0 group-hover:opacity-100 h-7 w-7 p-0"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(s.id);
              }}
            >
              <Trash2 className="h-3.5 w-3.5 text-muted-foreground" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
