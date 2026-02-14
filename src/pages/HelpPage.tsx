import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export function HelpPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Help</h1>
        <p className="text-muted-foreground">
          Learn about VISIONome and how to use it.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What is VISIONome?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            VISIONome is an interactive human genome visualization platform built for exploring
            genomic data. It provides an intuitive interface for browsing chromosomes, searching for
            genes and diseases, viewing protein structures, and analyzing DNA sequences.
          </p>
          <p>
            The platform integrates data from multiple authoritative sources including NCBI, UniProt,
            AlphaFold, ClinVar, MeSH, and OMIM to provide comprehensive genomic information.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to Use</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold mb-1">Visualizer</h3>
            <p>
              The Visualizer shows an interactive ideogram of all 24 human chromosomes. Use the
              search bar to find genes by name (e.g., "BRCA1") or search for diseases (e.g.,
              "breast cancer"). Matching chromosomes will be highlighted. Click any chromosome to
              see its detailed cytoband banding pattern, and click individual bands to view gene
              information and protein structures.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Analyzer</h3>
            <p>
              The Analyzer lets you run BLAST (Basic Local Alignment Search Tool) searches against
              the human genome. Paste a DNA sequence or upload a FASTA file, then click "Run BLAST"
              to find matching genes. Click on gene names in the results to navigate directly to
              the Visualizer.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attribution</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="mb-3">VISIONome uses data and tools from the following sources:</p>
          <ul className="space-y-1.5">
            {[
              { name: 'NCBI', url: 'https://www.ncbi.nlm.nih.gov/' },
              { name: 'NCBI BLAST', url: 'https://blast.ncbi.nlm.nih.gov/' },
              { name: 'UniProt', url: 'https://www.uniprot.org/' },
              { name: 'AlphaFold (DeepMind)', url: 'https://alphafold.ebi.ac.uk/' },
              { name: 'PDBe Mol*', url: 'https://www.ebi.ac.uk/pdbe/molstar/' },
              { name: 'BioDBNet', url: 'https://biodbnet-abcc.ncifcrf.gov/' },
              { name: 'MeSH (NLM)', url: 'https://meshb.nlm.nih.gov/' },
              { name: 'OMIM', url: 'https://www.omim.org/' },
              { name: 'Ensembl', url: 'https://www.ensembl.org/' },
            ].map(({ name, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  {name} <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p>
            VISIONome was created as an open-source project.
            View the source on{' '}
            <a
              href="https://github.com/Visionome"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              GitHub <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
