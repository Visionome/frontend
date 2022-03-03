/* eslint-disable react/self-closing-comp */
import React from 'react';
import Helmet from 'react-helmet';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function PdbViewer() {
  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/babel-polyfill/dist/polyfill.min.js" />
        <script
          src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-lite.js"
          charSet="utf-8"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
          charSet="utf-8"
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.2.0.css"
        />

        <script
          type="text/javascript"
          src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-component-1.2.0.js"
        ></script>

        <pdbe-molstar
          id="pdbeMolstarComponent"
          custom-data-url="https://alphafold.ebi.ac.uk/files/AF-Q96NU1-F1-model_v2.cif"
          custom-data-format="cif"
          hide-controls="true"
        ></pdbe-molstar>
      </Helmet>
    </>
  );
}

export default PdbViewer;
