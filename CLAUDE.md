# VISIONome Frontend

Interactive human genome visualization platform for bioinformatics education. Built by UCF CS students.

## Tech Stack

- **Build**: Vite 5 + TypeScript 5
- **UI**: React 18, React Router 6, Tailwind CSS 3, shadcn/ui
- **Protein viewer**: PDBe Molstar (web component)
- **Data pipeline**: Node.js script fetching from NCBI/ClinVar

## Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server (localhost:5173/frontend/)
npm run build            # TypeScript compile + Vite production build
npm run lint             # ESLint with auto-fix on src/**/*.{ts,tsx}
npm run preview          # Preview production build locally
npm run fetch-genes      # Download ~20k genes from NCBI → src/data/genes.json
```

## Project Structure

```
src/
  components/
    ui/              # shadcn/ui primitives (button, card, badge, input)
    layout/          # Dashboard, Header
    ideogram/        # 24-chromosome SVG ideogram
    chromosome/      # Individual chromosome detail + cytoband bar
    gene-info/       # Gene info card with tabs (summary, disease, protein 3D)
    search/          # SearchBar
    blast/           # BLAST input/results
  pages/             # VisualizerPage, AnalyzerPage, HelpPage
  services/          # genome-service, blast-service, uniprot-service
  data/              # JSON datasets + disease-aliases.ts
  types/             # genome.ts (GFFRef, VCFRef, etc.), blast.ts
  hooks/             # useGenomeSearch, useBlastSearch
  lib/               # utils (cn helper), cytoband-colors, chromosome-utils
scripts/
  fetch-genes.mjs    # NCBI data pipeline
```

## Data Pipeline

`scripts/fetch-genes.mjs` downloads and merges three NCBI/ClinVar sources:

1. **Homo_sapiens.gene_info.gz** — gene metadata, cytoband locations, Ensembl IDs
2. **gene_condition_source_id** (ClinVar) — gene-to-disease name mappings
3. **E-utilities esummary API** — gene function summaries (batched, rate-limited)

Output: `src/data/genes.json` (~6-18 MB depending on summary coverage). This file is checked in but can be regenerated with `npm run fetch-genes`.

## Conventions

- Path alias: `@/` maps to `src/` (configured in both vite.config.ts and tsconfig.json)
- Tailwind dark mode via class strategy; HSL CSS variables for theming
- Component variants use class-variance-authority (CVA)
- Base path is `/frontend/` (for GitHub Pages deployment)
- Gene search supports multi-word AND queries and disease alias resolution
