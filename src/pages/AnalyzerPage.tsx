import { BlastInput } from '@/components/blast/BlastInput';
import { BlastResults } from '@/components/blast/BlastResults';
import { BlastHistory } from '@/components/blast/BlastHistory';
import { useBlastSearch } from '@/hooks/useBlastSearch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function AnalyzerPage() {
  const {
    sequence, setSequence, matches, metadata, isLoading, error,
    runSearch, clear, cachedSearches, loadCached, removeFromCache,
  } = useBlastSearch();

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Sequence Analyzer</h1>
        <p className="text-muted-foreground">
          Submit a DNA sequence to run a BLAST search against the human genome reference database.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">BLAST Search</CardTitle>
          <CardDescription>
            Paste a DNA sequence or upload a FASTA file to find matching genes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BlastInput
            sequence={sequence}
            onSequenceChange={setSequence}
            onRun={() => runSearch(sequence)}
            onClear={clear}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>

      {error && (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      <BlastResults matches={matches} metadata={metadata} />

      <BlastHistory
        searches={cachedSearches}
        onSelect={loadCached}
        onDelete={removeFromCache}
      />
    </div>
  );
}
