# VISIONome Frontend

An interactive human genome visualization platform for bioinformatics education.

## About

VISIONome (a play on "vision" and "genome") is a stable genome browsing education tool designed to advance interest in bioinformatics among students and educators. 

Originally developed as a university project by Computer Science students at the University of Central Florida under the mentorship of Dr. Shibu Yooseph, the project has been revamped. It is now maintained as an open-source educational resource.

Our mission is to make genome visualization accessible and engaging, helping students understand complex genomic concepts through interactive exploration.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/frontend/`

## Tech Stack

- **Build**: Vite 5 + TypeScript 5
- **UI**: React 18, React Router 6, Tailwind CSS 3, shadcn/ui
- **Protein Viewer**: PDBe Molstar (web component)
- **Data Pipeline**: Node.js script fetching from NCBI/ClinVar

## Contributing

We welcome contributions from the community! Whether you're fixing bugs, improving documentation, or adding new features, your help is appreciated.

To contribute:
1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes and test them locally
4. Submit a pull request with a clear description of your changes

For bug reports or feature requests, please open an issue on GitHub.

## Original Team

This project was originally created by:
- Joey Giordano
- Dylan Skelly
- Arjun Pherwani
- Suneet Tipirneni
- Michael Tsang

## License

See [LICENSE](LICENSE) for details.
