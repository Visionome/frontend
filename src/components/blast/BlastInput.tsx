import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Upload, Trash2, FileText, Loader2 } from 'lucide-react';

interface BlastInputProps {
  sequence: string;
  onSequenceChange: (seq: string) => void;
  onRun: () => void;
  onClear: () => void;
  isLoading: boolean;
}

const EXAMPLE_SEQUENCE =
  'ATGGATTTATCTGCTCTTCGCGTTGAAGAAGTACAAAATGTCATTAATGCTATGCAGAAAATCTTAGAGTGTCCCATCTGTCTGGAGTTGATCAAGGAACCTGTCTCCACAAAGTGTGACCACATATTTTGCAAATTTTGCATGCTGAAACTTCTCAACCAGAAGAAAGGGCCTTCACAGTGTCCTTTATGTAAGAATGATATAACCAAAAGGAGCCTACAAGAAAGTACGAGATTTAGTCAACTTGTTGAAGAGCTATTGAAAATCATTTGTGCTTTTCAGCTTGACACAGGTTTGGAGTATGCAAACAGCTATAATTTTGCAAAAAAGGAAAATAACTCTCCTGAACATCTAAAAGATGAAGTTTCTATCATCCAAAGTATGGGCTACAGAAACCGTGCCAAAAGACTTCTACAGAGTGAACCCGAAAATCCTTCCTTG';

export function BlastInput({
  sequence,
  onSequenceChange,
  onRun,
  onClear,
  isLoading,
}: BlastInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result;
      if (typeof text === 'string') {
        // Strip FASTA header if present
        const lines = text.split('\n');
        const seqLines = lines.filter((l) => !l.startsWith('>'));
        onSequenceChange(seqLines.join('').trim());
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">DNA Sequence</h3>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSequenceChange(EXAMPLE_SEQUENCE)}
            className="text-xs"
          >
            <FileText className="mr-1 h-3 w-3" />
            Example
          </Button>
          <Button variant="ghost" size="sm" onClick={() => fileInputRef.current?.click()}>
            <Upload className="mr-1 h-3 w-3" />
            Upload
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".fasta,.fa,.txt"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      </div>

      <textarea
        value={sequence}
        onChange={(e) => onSequenceChange(e.target.value)}
        placeholder="Paste a DNA sequence here (ATCG)..."
        rows={6}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-y"
      />

      <div className="flex gap-2">
        <Button onClick={onRun} disabled={!sequence.trim() || isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Play className="mr-2 h-4 w-4" />
          )}
          {isLoading ? 'Running...' : 'Run BLAST'}
        </Button>
        <Button variant="outline" onClick={onClear} disabled={isLoading}>
          <Trash2 className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}
