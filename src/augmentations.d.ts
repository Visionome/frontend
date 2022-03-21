declare namespace JSX {
  interface IntrinsicElements {
    'pdbe-molstar': Partial<MolstarAttributes>;
  }

  interface MolstarAttributes {
    /**
     * Load PDB Data.
     */
    'molecule-id': string;
    /**
     * Hide controls menu.
     */
    'hide-controls': boolean;
    /**
     * URL to load custom data from.
     */
    'custom-data-url': string;
    /**
     * The format of the custom data.
     */
    'custom-data-format': string;
  }
}
