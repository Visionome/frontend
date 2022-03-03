/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import axios from 'axios';

// export interface GeneInfoCardProps {
//   selectedItem: any;
//   urlString: string;
// }

function GeneInfoCard(selectedItem: any, urlString: string) {
  const [proteinSelected, setProteinSelected] = useState('');
  const selectedProtein = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `https://www.uniprot.org/uniprot/?query=${selectedItem.gene.toUpperCase()}+AND+reviewed:yes+AND+organism:9606&sort=score&columns=id&format=tab&limit=1`,
      });
      setProteinSelected(response.toString());
      console.log(response);
    } catch (err) {
      console.log('Error in fetching protein');
      console.log(err);
    }
  };

  useEffect(() => {
    selectedProtein();
  }, []);

  console.log(selectedProtein);

  console.log('Selected item of type:' + selectedItem);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative', height: 250, width: 300 }}>
          {proteinSelected !== '' ? (
            <pdbe-molstar
              custom-data-format="cif"
              custom-data-url={proteinSelected}
              hide-controls
            />
          ) : (
            <></>
          )}
        </div>
        <p>proteinSelected</p>
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
