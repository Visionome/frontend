import { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { GFFRef } from '@/types/genome';
import { cn } from '@/lib/utils';

interface GeneInfoTabsProps {
  gene: GFFRef;
}

interface DiseaseEntry {
  xref_id: string;
  name: string;
  xref_url: string;
}

function parseDiseaseInfo(raw: string): DiseaseEntry[] {
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function GeneInfoTabs({ gene }: GeneInfoTabsProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'pathology'>('info');
  const diseases = useMemo(() => parseDiseaseInfo(gene.diseaseinfo), [gene.diseaseinfo]);

  const tabs = [
    { id: 'info' as const, label: 'Info' },
    { id: 'pathology' as const, label: `Pathology (${diseases.length})` },
  ];

  return (
    <div>
      {/* Tab headers */}
      <div className="flex gap-1 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              'px-3 py-2 text-sm font-medium transition-colors border-b-2 -mb-px',
              activeTab === tab.id
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground',
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="pt-4">
        {activeTab === 'info' && (
          <div className="space-y-3 text-sm">
            {gene.summary && (
              <div>
                <span className="font-medium text-muted-foreground">Summary</span>
                <p className="mt-1 leading-relaxed">{gene.summary}</p>
              </div>
            )}
            {gene.expression && (
              <div>
                <span className="font-medium text-muted-foreground">Expression</span>
                <p className="mt-1">{gene.expression}</p>
              </div>
            )}
            <div>
              <span className="font-medium text-muted-foreground">Description</span>
              <p>{gene.description}</p>
            </div>
            {gene.ensembleid && (
              <div>
                <span className="font-medium text-muted-foreground">Ensembl ID</span>
                <p>
                  <a
                    href={`https://useast.ensembl.org/Homo_sapiens/Gene/Summary?g=${gene.ensembleid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {gene.ensembleid} <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>
            )}
            <div>
              <span className="font-medium text-muted-foreground">Cytoband Location</span>
              <p>{gene.cytobandlocation}</p>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">Biotype</span>
              <p>{gene.gene_biotype}</p>
            </div>
            <div className="flex gap-2">
              <a
                href={`https://www.uniprot.org/uniprotkb?query=gene_exact:${gene.name}+AND+organism_id:9606`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  UniProt <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </a>
              <a
                href={`https://www.ncbi.nlm.nih.gov/gene/${gene.geneid}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  NCBI <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </a>
            </div>
          </div>
        )}

        {activeTab === 'pathology' && (
          <div className="space-y-2">
            {diseases.length === 0 ? (
              <p className="text-sm text-muted-foreground">No disease associations found.</p>
            ) : (
              diseases.map((d, i) => (
                <Card key={i}>
                  <CardContent className="flex items-center justify-between p-3">
                    <span className="text-sm">{d.name}</span>
                    {d.xref_url && (
                      <a
                        href={d.xref_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {d.xref_id} <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
