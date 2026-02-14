# VISIONome Frontend Modernization Plan

## Context

VISIONome is a bioinformatics visualization platform for exploring human genomic data. It lets users:
1. **Browse** an interactive ideogram of all 24 human chromosomes
2. **Search** for genes/diseases and see which chromosomes they map to
3. **Drill down** into individual chromosomes to see cytoband (G-band) regions
4. **View gene details** including protein 3D structure (AlphaFold/PDBe Molstar) and disease associations
5. **Run BLAST searches** with DNA sequences and navigate from results to the visualizer

The current implementation uses Create React App, Three.js (3D), Ant Design, and AWS Amplify (GraphQL/AppSync/DynamoDB). We are rewriting from scratch with a modern stack while preserving all functionality.

---

## Target Stack

| Layer | Old | New |
|-------|-----|-----|
| Build | Create React App | **Vite** |
| UI Framework | Ant Design 4 | **shadcn/ui + Tailwind CSS** |
| Visualization | Three.js / React Three Fiber (3D) | **2D SVG** (custom React components) |
| Data Layer | AWS Amplify + AppSync GraphQL | **Data service abstraction** with mock data (API-ready) |
| State | Valtio (unused) + localStorage | **React state + context** (keep it simple) |
| Routing | React state switching | **React Router v6** |
| Styling | SASS + Ant Design CSS | **Tailwind CSS** |
| Protein Viz | PDBe Molstar web component | **Keep PDBe Molstar** (it's excellent) |
| BLAST | REST API to Flask backend | **Keep as-is** (independent service) |

---

## Project Structure

```
src/
  components/
    ui/                     # shadcn/ui components (auto-generated)
    layout/
      Dashboard.tsx         # Main layout with sidebar nav
      Header.tsx            # Top bar with logo
    ideogram/
      Ideogram.tsx          # All 24 chromosomes (2D SVG)
      ChromosomeShape.tsx   # Single chromosome SVG shape
    chromosome/
      ChromosomeDetail.tsx  # Single chromosome cytoband view (2D SVG)
      CytobandBar.tsx       # Individual cytoband region
    gene-info/
      GeneInfoCard.tsx      # Gene details + protein 3D
      GeneInfoTabs.tsx      # Info/Pathology tabs
    search/
      SearchBar.tsx         # Gene/disease search input
    blast/
      BlastInput.tsx        # Sequence input + file upload
      BlastResults.tsx      # Results table
  pages/
    VisualizerPage.tsx      # Search + ideogram/chromosome views
    AnalyzerPage.tsx        # BLAST analysis
    HelpPage.tsx            # Documentation
  services/
    genome-service.ts       # Gene/variant data fetching (abstracted)
    blast-service.ts        # BLAST API client
    uniprot-service.ts      # UniProt protein lookup
  data/
    chromosomes.json        # 24 chromosome metadata (id, name, length)
    cytobands.json          # All cytoband regions with Giemsa stains
    mock-search-results.json # Sample GFFRef search results for demo
    mock-vcf-results.json   # Sample VCFRef results for demo
  types/
    genome.ts               # GFFRef, VCFRef, CytobandData, etc.
    blast.ts                # BlastMatch, BlastMetaData
  hooks/
    useGenomeSearch.ts      # Search hook wrapping genome-service
    useBlastSearch.ts       # BLAST search hook
  lib/
    utils.ts                # shadcn/ui utility (cn function)
    cytoband-colors.ts      # Giemsa stain → color mapping
    chromosome-utils.ts     # Parse chromosome from cytoband location
  App.tsx
  main.tsx
```

---

## Phase 1: Project Scaffolding

**Goal**: Fresh Vite + React + TypeScript project with Tailwind and shadcn/ui configured.

### Steps:
1. Initialize new Vite project in the repo (replace CRA config)
   - Remove `react-scripts`, CRA-related deps
   - Add `vite`, `@vitejs/plugin-react`
   - Create `vite.config.ts` with base path for GitHub Pages (`/frontend/`)
   - Update `tsconfig.json` for Vite compatibility
2. Install and configure Tailwind CSS v3
   - `tailwind.config.js` with content paths
   - Base styles in `index.css` (`@tailwind base/components/utilities`)
3. Initialize shadcn/ui
   - Install dependencies (`class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`)
   - Create `components.json` config
   - Create `lib/utils.ts` with `cn()` helper
   - Add these shadcn/ui components: `Button`, `Input`, `Card`, `Tabs`, `Table`, `Textarea`, `Badge`, `Tooltip`, `ScrollArea`, `Separator`, `Sheet` (mobile nav)
4. Create `main.tsx` entry point (replaces `index.tsx`)
5. Set up React Router v6 with routes for `/`, `/analyzer`, `/help`
6. Set up basic `App.tsx` with router outlet
7. Update `package.json` scripts: `dev`, `build`, `preview`, `lint`
8. Update `.github/workflows/CI.yml` for Vite build (remove Amplify export generation)
9. Keep existing assets: logos in `src/assets/`, favicons in `public/`
10. Remove all old dependencies: `three`, `@react-three/*`, `antd`, `aws-amplify`, `valtio`, `framer-motion`, `sass`, `react-async`, `react-helmet`
11. Remove all old source files, graphql directory, API.ts, old components

---

## Phase 2: Core Layout

**Goal**: Dashboard shell with sidebar navigation, header, and page routing.

### Steps:
1. **Header.tsx**: VISIONome logo (use existing `visionome-logo.png`), clean top bar
2. **Dashboard.tsx**: Responsive layout
   - Desktop: fixed left sidebar (collapsed by default, icon-only) + main content area
   - Mobile: bottom nav bar or hamburger sheet
   - Navigation items with Lucide icons:
     - **Visualizer** (`Dna` icon) → `/`
     - **Analyzer** (`FlaskConical` icon) → `/analyzer`
     - **Help** (`HelpCircle` icon) → `/help`
   - Active state highlighting
3. Use shadcn/ui `Sheet` for mobile sidebar
4. Dark theme support via Tailwind `dark:` classes (respect `prefers-color-scheme`)
5. Global layout: `min-h-screen bg-background text-foreground`

### Design Direction:
- Clean, modern, lots of whitespace
- Color palette: slate/zinc neutrals with a teal/cyan accent (inherited from the original #62C3E1)
- Typography: system font stack (Inter if available)

---

## Phase 3: Data Layer

**Goal**: Abstract data services that work with bundled mock data but can be swapped to a real API.

### Steps:

1. **Define types** in `types/genome.ts`:
```typescript
interface GFFRef {
  id: string;
  geneid: string;
  seqid: string;       // chromosome
  source: string;
  type: string;        // gene, mRNA, exon, CDS, etc.
  start: string;
  end: string;
  strand: string;
  name: string;        // gene symbol
  description: string;
  gene_biotype: string;
  ensembleid: string;
  cytobandlocation: string;
  approximatecytoband: string;
  diseaseinfo: string; // JSON array of { xref_id, name, xref_url }
  sequence: string;
}

interface VCFRef {
  id: string;
  chrom: string;
  pos: string;
  ref: string;
  alt: string;
  clnsig: string;      // Pathogenic, Benign, etc.
  clndn: string;       // disease name
  clnrevstat: string;
  geneinfo: string;    // GENE_SYMBOL:GENE_ID
  mc: string;          // molecular consequence
}

interface CytobandData {
  id: number;
  chromosome: string;  // "1" through "22", "X", "Y"
  start: number;
  end: number;
  name: string;        // e.g. "p36.33"
  giemsaStain: string; // gneg, gpos25, gpos50, gpos75, gpos100, gvar, stalk, acen
}

interface ChromosomeData {
  id: number;
  chrom: string;       // "chr1" through "chrY"
  assemblyLength: number;
}
```

2. **Create mock data** in `src/data/`:
   - `chromosomes.json` — port from existing `chrom.json` (24 records)
   - `cytobands.json` — port from existing `cytoBand.json` (all cytoband records)
   - `mock-search-results.json` — curate ~20 representative GFFRef records for demo (genes like BRCA1, TP53, CFTR, etc. with real data from the existing database)
   - `mock-vcf-results.json` — curate ~10 VCFRef records

3. **genome-service.ts**:
```typescript
// Abstracted data service — swap implementation for real API
export async function searchGenes(query: string): Promise<GFFRef[]>
export async function searchVariants(geneSymbol: string): Promise<VCFRef[]>
export function getChromosomes(): ChromosomeData[]
export function getCytobands(chromosome: string): CytobandData[]
```
   - Default implementation: filter mock data client-side
   - Designed so the functions can later be replaced with `fetch()` calls to a real API

4. **blast-service.ts**: Port from existing `BlastAPI.ts`
   - Keep the same endpoint: `https://blast-backend.gbaobaok2t5qo.us-east-2.cs.amazonlightsail.com/blastsearch`
   - Same interface: `search(sequence: string) → { matches, metadata }`
   - Add error handling and loading states
   - Also provide a mock fallback using existing `mockBlast.json` data

5. **uniprot-service.ts**: Port from existing GeneInfoCard logic
   - `fetchProteinId(geneSymbol: string): Promise<string | null>`
   - Queries UniProt REST API for reviewed human proteins
   - Returns AlphaFold URL for PDBe Molstar

---

## Phase 4: 2D Chromosome Visualization (Ideogram)

**Goal**: Replace the 3D Three.js ideogram with a clean 2D SVG visualization.

This is the most important visual component. It should look polished and scientific.

### Ideogram View (All 24 Chromosomes)

**Design**: SVG rendering of all chromosomes arranged in a standard karyotype layout.

Each chromosome is drawn as a vertical rounded-rectangle with:
- Width proportional (all same width ~20px)
- Height proportional to chromosome length (relative to chr1 as the longest)
- A centromere pinch in the middle (constriction)
- Banding pattern visible (Giemsa stain colors)

**Layout**: Standard karyotype arrangement:
- Row 1: Chromosomes 1-7 (Group A-C)
- Row 2: Chromosomes 8-12 (Group C-D)
- Row 3: Chromosomes 13-18 (Group D-E)
- Row 4: Chromosomes 19-22, X, Y (Group F-G)

Or simpler: a single horizontal row with chromosomes sorted 1→22, X, Y, each with a label below.

**Interactions**:
- Hover: highlight chromosome, show tooltip with name + nucleotide count
- Click: navigate to chromosome detail view
- Search highlighting: chromosomes matching search results get an accent color/glow

**Colors**:
- Default: neutral gray banding (Giemsa stain colors)
- Selected/highlighted: teal accent (#62C3E1 or Tailwind cyan-500)
- Hover: slightly brighter/outlined

### Implementation:

1. **Ideogram.tsx**: Main SVG container
   - Renders all 24 `<ChromosomeShape>` components
   - Manages layout positioning
   - Handles search result highlighting (receives `highlightedChromosomes: string[]`)

2. **ChromosomeShape.tsx**: Single chromosome SVG
   - Props: `chromosome: string`, `cytobands: CytobandData[]`, `highlighted: boolean`, `onClick`, `onHover`
   - Renders SVG `<rect>` elements for each cytoband band, stacked vertically
   - Centromere rendered as a pinched waist (two diagonal lines or narrower rect)
   - Rounded ends (top of p-arm, bottom of q-arm)
   - Colors from Giemsa stain mapping:
     ```
     gneg     → white/very light gray
     gpos25   → light gray
     gpos50   → medium gray
     gpos75   → dark gray
     gpos100  → black
     acen     → red/pink (centromere)
     gvar     → light blue
     stalk    → medium blue
     ```
   - Label below: chromosome number

3. **Giemsa color mapping** in `lib/cytoband-colors.ts`

---

## Phase 5: Chromosome Detail View

**Goal**: When a chromosome is clicked, show an expanded view of that chromosome with all its cytobands labeled and interactive.

### Design:
- Large vertical chromosome drawing (SVG) taking up left portion of the screen
- Each cytoband band is labeled with its name (e.g., "p36.33", "q21.1")
- Bands are clickable — clicking shows gene info for genes in that region
- Right side: gene info card (when a band is selected)
- Search results highlighted on specific bands

### Implementation:

1. **ChromosomeDetail.tsx**:
   - Props: `chromosome: string`, `highlightedBands: string[]`
   - Left panel: tall SVG chromosome with labeled cytobands
   - Right panel: `<GeneInfoCard>` when a band is selected
   - Back button to return to full ideogram
   - Stats bar: chromosome number, selected band location, nucleotide count

2. **CytobandBar.tsx**:
   - Individual cytoband region within the chromosome SVG
   - Props: `cytoband: CytobandData`, `highlighted: boolean`, `selected: boolean`, `onClick`
   - Hover tooltip: band name + coordinates
   - Click: select band, show gene info

---

## Phase 6: Search & Results

**Goal**: Gene/disease search that highlights results on the visualization.

### Search Flow:
1. User types gene name (e.g., "BRCA1") or disease (e.g., "breast cancer") in search bar
2. `genome-service.searchGenes()` returns matching GFFRef records
3. Extract chromosome locations from results
4. Highlight matching chromosomes in ideogram view
5. If single chromosome match, optionally auto-navigate to detail view

### Implementation:

1. **SearchBar.tsx**:
   - shadcn `Input` with search icon
   - Debounced input (300ms)
   - Shows result count badge
   - Keyboard shortcut: Cmd/Ctrl+K to focus

2. **useGenomeSearch.ts** hook:
   - Manages search state: `query`, `results`, `isLoading`, `error`
   - Calls `genome-service.searchGenes(query)`
   - Computes `highlightedChromosomes` from results
   - Returns everything the UI needs

3. **VisualizerPage.tsx**:
   - Composes: SearchBar + (Ideogram | ChromosomeDetail)
   - Manages which view is shown (ideogram vs single chromosome)
   - Passes highlighted chromosomes/bands down
   - Shows search result summary (e.g., "Found 3 genes on chromosomes 1, 7, 17")

---

## Phase 7: BLAST Analyzer

**Goal**: DNA sequence input → BLAST search → results table → navigate to gene.

### Implementation:

1. **AnalyzerPage.tsx**: Page wrapper
2. **BlastInput.tsx**:
   - shadcn `Textarea` for sequence input
   - File upload button (accepts .fasta, .txt)
   - "Run BLAST" button with loading state
   - Example sequence button (pre-fills a demo sequence)
3. **BlastResults.tsx**:
   - shadcn `Table` with columns:
     - Gene Symbol (clickable → navigates to Visualizer with that gene)
     - # Hits
     - Best Score
     - Best E-Value
     - Alignment Length
     - Subject Start
     - Subject End
   - Metadata summary card above table (total hits, best match, etc.)
4. **useBlastSearch.ts** hook:
   - Manages: `sequence`, `results`, `metadata`, `isLoading`, `error`
   - Calls `blast-service.search(sequence)`

### Cross-navigation:
- Clicking a gene symbol in BLAST results navigates to `/` with `?gene=SYMBOL` query param
- VisualizerPage reads this param and auto-searches on mount

---

## Phase 8: Gene Info Panel

**Goal**: Gene details + protein 3D structure when a cytoband/gene is selected.

### Implementation:

1. **GeneInfoCard.tsx**:
   - Receives selected gene data (`GFFRef`)
   - Fetches protein ID from UniProt via `uniprot-service.ts`
   - Renders `<pdbe-molstar>` web component for protein 3D structure
     - Load PDBe Molstar JS/CSS via `<script>` tag (same approach as current)
     - AlphaFold URL: `https://alphafold.ebi.ac.uk/files/AF-{proteinId}-F1-model_v2.cif`
   - Below protein viewer: `<GeneInfoTabs>`

2. **GeneInfoTabs.tsx** (replaces TabsCard):
   - shadcn `Tabs` component
   - **Info tab**: Gene description, Ensembl ID (linked), cytoband location, gene biotype
   - **Pathology tab**: Disease associations parsed from `diseaseinfo` field
     - Each disease: name + link to MeSH/OMIM
   - **Links tab**: External links to Ensembl, UniProt, NCBI

---

## Phase 9: Help Page

**Goal**: Clean documentation page explaining VISIONome.

### Implementation:
- Port content from existing HelpPage.tsx
- Use shadcn Cards for sections
- Sections: What is VISIONome, How to Use, About, Attribution
- Clean typography with Tailwind prose classes

---

## Phase 10: Polish & Deploy

### Steps:
1. **Responsive design**: Ensure all views work on mobile/tablet
   - Ideogram: horizontal scroll or responsive scaling on small screens
   - Chromosome detail: stack vertically on mobile
   - BLAST: full-width on mobile
2. **Loading states**: Skeleton loaders for search results, BLAST
3. **Error handling**: Graceful error states for failed API calls
4. **Dark mode**: Implement with Tailwind dark classes + toggle in header
5. **Animations**: Subtle transitions on view changes (CSS transitions, no heavy library)
6. **SEO**: Page titles via React Helmet or document.title
7. **CI/CD**: Update GitHub Actions for Vite build + GitHub Pages deploy
8. **Performance**: Lazy-load AnalyzerPage and HelpPage (React.lazy)
9. **Accessibility**: Proper ARIA labels on SVG elements, keyboard navigation

---

## Key Design Decisions

1. **No Amplify**: Data is served from mock JSON files bundled with the app. The service layer is designed so you can swap in real API calls later by changing the implementation of `genome-service.ts`.

2. **2D over 3D**: SVG chromosomes are faster to render, more accessible, easier to maintain, and look more scientific/professional than the 3D GLB models. The only 3D element retained is PDBe Molstar for protein structures (it's purpose-built and excellent).

3. **React Router instead of state switching**: Proper URL-based routing means you can link directly to `/analyzer` or `/?gene=BRCA1`.

4. **No heavy state management**: The app's state is simple enough for React's built-in state + context. No need for Valtio, Redux, or Zustand.

5. **shadcn/ui is copy-pasted, not a dependency**: Components live in `src/components/ui/` and can be customized freely. No version lock-in.

---

## External Services (Unchanged)

These external integrations are kept as-is:
- **BLAST Backend**: `POST https://blast-backend.gbaobaok2t5qo.us-east-2.cs.amazonlightsail.com/blastsearch`
- **UniProt API**: `https://rest.uniprot.org/uniprotkb/search?query=gene_exact:{GENE}+AND+reviewed:true+AND+organism_id:9606`
- **AlphaFold**: `https://alphafold.ebi.ac.uk/files/AF-{proteinId}-F1-model_v2.cif`
- **PDBe Molstar**: Web component loaded from `https://www.ebi.ac.uk/pdbe/pdb-component-library/`

---

## Files to Preserve from Old Codebase

- `src/assets/visionome-logo.png` and `visionome-logo-alt.png`
- `src/scripts/cytoBand.json` → copy to `src/data/cytobands.json`
- `src/scripts/chrom.json` → copy to `src/data/chromosomes.json`
- `src/mockBlast.json` → copy to `src/data/mock-blast.json`
- `public/favicon.ico`, `logo192.png`, `logo512.png`, `manifest.json`

## Files/Dependencies to Remove

- Everything Three.js: `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/gltfjsx`
- All GLB/FBX model references and files
- AWS Amplify: `aws-amplify`, `aws-exports.js`, `generateAwsExports.*`
- Ant Design: `antd` and all antd CSS imports
- GraphQL: entire `src/graphql/` directory, `API.ts`, `.graphqlconfig.yml`
- Old styling: all `.scss` files, `style/App.css`
- Valtio, framer-motion, react-async, react-helmet, sass
- CRA config: `react-scripts`, `react-app-rewired`
