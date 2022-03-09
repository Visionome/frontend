import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TabsCard from './TabsCard';
import { GeneProps } from './Chromosome';

export interface GeneInfoCardProps {
  selectedItem: GeneProps;
  urlString: string;
}

function GeneInfoCard({
  selectedItem,
  urlString,
}: GeneInfoCardProps): JSX.Element {
  const [proteinCifUrl, setProteinCifUrl] = useState('');
  const selectedProtein = async () => {
    try {
      const proteinSelected = await axios({
        method: 'get',
        url: `https://www.uniprot.org/uniprot/?query=${selectedItem.gene.toUpperCase()}+AND+reviewed:yes+AND+organism:9606&sort=score&columns=id&format=tab&limit=1`,
      }).then((r) => {
        return r.data.toString();
      });

      const [, proteinId] = proteinSelected.split('\n');
      setProteinCifUrl(
        `https://alphafold.ebi.ac.uk/files/AF-${proteinId}-F1-model_v2.cif`,
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    selectedProtein();
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative', height: 250, width: 300, zIndex: 1 }}>
          <>
            {proteinCifUrl && (
              <pdbe-molstar
                custom-data-format="cif"
                custom-data-url={proteinCifUrl}
                hide-controls
              />
            )}
          </>
        </div>
      </div>
      <TabsCard
        urlString={urlString}
        name={selectedItem.gene.toUpperCase()}
        ensemblid={selectedItem.ensembl_id}
        description={selectedItem.description}
        diseaseinfo={selectedItem.disease_info}
        location={selectedItem.cytoband_location}
      />
    </>
  );
}

export default GeneInfoCard;
