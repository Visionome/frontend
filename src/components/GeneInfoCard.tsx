/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Card, Pagination } from 'antd';
import axios from 'axios';
import TabsCard from './TabsCard';

export interface GeneInfoCardProps {
  selectedItem: any;
  urlString: string;
}

function GeneInfoCard({ selectedItem, urlString }: GeneInfoCardProps) {
  const [proteinCifUrl, setProteinCifUrl] = useState('');
  const selectedProtein = async () => {
    try {
      const proteinSelected = await axios({
        method: 'get',
        url: `https://www.uniprot.org/uniprot/?query=${selectedItem.gene.toUpperCase()}+AND+reviewed:yes+AND+organism:9606&sort=score&columns=id&format=tab&limit=1`,
      }).then((r) => {
        console.log(r.data);
        return r.data.toString();
      });

      console.log('Protein selected: ' + proteinSelected);
      const [, proteinId] = proteinSelected.split('\n');
      setProteinCifUrl(
        `https://alphafold.ebi.ac.uk/files/AF-${proteinId}-F1-model_v2.cif`,
      );
      console.log('Selected item of type:' + proteinId);
      console.log('Protein URL: ' + proteinCifUrl);
    } catch (err) {
      console.log('Error in fetching protein');
      console.log(err);
    }
  };

  console.log('selected item: ' + JSON.stringify(selectedItem));

  useEffect(() => {
    selectedProtein();
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative', height: 250, width: 300 }}>
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
