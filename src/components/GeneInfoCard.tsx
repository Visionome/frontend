/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import axios from 'axios';

// export interface GeneInfoCardProps {
//   selectedItem: any;
//   urlString: string;
// }

// selectedItem: any, urlString: string
function GeneInfoCard({
  selectedItem,
  urlString,
}: {
  selectedItem: any;
  urlString: string;
}) {
  // const [proteinSelected, setProteinSelected] = useState('');
  // let proteinCifUrl = '';
  const [proteinCifUrl, setProteinCifUrl] = useState('');
  const selectedProtein = async () => {
    try {
      let proteinSelected = '';

      const response = await axios({
        method: 'get',
        url: `https://www.uniprot.org/uniprot/?query=${selectedItem.gene.toUpperCase()}+AND+reviewed:yes+AND+organism:9606&sort=score&columns=id&format=tab&limit=1`,
      });
      proteinSelected = response.data.toString();
      console.log(response.data);

      console.log('Protein selected: ' + proteinSelected);
      let proteinId = proteinSelected.split('\n')[1];
      // let proteinCifUrl = `https://alphafold.ebi.ac.uk/files/AF-${proteinId}-F1-model_v2.cif`;
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

  // const renderProtein = async () => {
  //   selectedProtein();
  //   return (
  //     <>
  //       <pdbe-molstar
  //         custom-data-format="cif"
  //         custom-data-url={proteinCifUrl}
  //         hide-controls
  //       />
  //     </>
  //   );
  // };

  useEffect(() => {
    selectedProtein();
  }, []);
  // selectedProtein();

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
      <Card
        hoverable
        className="info-card"
        title={selectedItem.gene.toUpperCase()}
        extra={
          <a href={urlString} target="_blank" rel="noreferrer">
            More
          </a>
        }
      >
        <p className="info-line">
          Cytoband coord: {selectedItem.cytoband_location}
        </p>
        <p className="info-line">Description: {selectedItem.description}</p>
        <p className="info-line">
          Disease information:{' '}
          {
            selectedItem.disease_info
            /*.toString()
          .replace(
            '(\\[\\[MESH.*?(?=,))|(\\[MESH.*?(?=,))|https.*?(?=\\])|]|)',
            '',
          )*/
          }
        </p>
        <p className="info-line">EnsemblID: {selectedItem.ensembl_id}</p>
      </Card>
    </>
  );
}

export default GeneInfoCard;
