import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GeneInfoTabs } from './GeneInfoTabs';
import { fetchProteinId, getAlphaFoldUrl } from '@/services/uniprot-service';
import type { GFFRef } from '@/types/genome';
import { ExternalLink, Loader2 } from 'lucide-react';

interface GeneInfoCardProps {
  gene: GFFRef;
}

export function GeneInfoCard({ gene }: GeneInfoCardProps) {
  const [proteinId, setProteinId] = useState<string | null>(null);
  const [loadingProtein, setLoadingProtein] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoadingProtein(true);
    setProteinId(null);
    fetchProteinId(gene.name).then((id) => {
      if (!cancelled) {
        setProteinId(id);
        setLoadingProtein(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [gene.name]);

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{gene.name}</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline">{gene.gene_biotype}</Badge>
            <Badge variant="secondary">{gene.cytobandlocation}</Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{gene.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Protein 3D structure */}
        {loadingProtein && (
          <div className="flex h-48 items-center justify-center rounded border bg-muted">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}
        {proteinId && !loadingProtein && (
          <div className="overflow-hidden rounded border">
            <div className="flex items-center justify-between bg-muted px-3 py-1.5">
              <span className="text-xs font-medium">Protein Structure (AlphaFold)</span>
              <a
                href={`https://alphafold.ebi.ac.uk/entry/${proteinId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline inline-flex items-center gap-1"
              >
                {proteinId} <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div
              style={{ height: 280 }}
              ref={(el) => {
                if (!el) return;
                el.innerHTML = '';
                const viewer = document.createElement('pdbe-molstar');
                viewer.setAttribute(
                  'custom-data-url',
                  getAlphaFoldUrl(proteinId),
                );
                viewer.setAttribute('custom-data-format', 'cif');
                viewer.setAttribute('hide-controls', 'true');
                viewer.setAttribute('bg-color-r', '255');
                viewer.setAttribute('bg-color-g', '255');
                viewer.setAttribute('bg-color-b', '255');
                viewer.style.width = '100%';
                viewer.style.height = '100%';
                viewer.style.display = 'block';
                el.appendChild(viewer);
              }}
            />
          </div>
        )}

        <GeneInfoTabs gene={gene} />
      </CardContent>
    </Card>
  );
}
