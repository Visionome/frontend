/* eslint-disable */
import React from 'react';
import { Card } from 'antd';
// import axios from 'axios';

// export interface GeneInfoCardProps {
//   selectedItem: any;
//   urlString: string;
// }

function GeneInfoCard(selectedItem: any, urlString: string) {
  //   const [proteinSelected, setProteinSelected] = useState('');
  //   const selectedProtein = async () => {
  //     try {
  //       const response = await axios({
  //         method: 'get',
  //         url: `https://www.uniprot.org/uniprot/?query=${selectedItem.gene.toUpperCase()}+AND+reviewed:yes+AND+organism:9606&sort=score&columns=id,entry name,reviewed,protein names,genes,organism,length&format=tab&limit=1`,
  //       });

  //       console.log(response);
  //     } catch (err) {
  //       console.log('Error in fetching protein');
  //       console.log(err);
  //     }
  //   };

  //   console.log(selectProtein);

  console.log('Selected item of type:' + selectedItem);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative', height: 250, width: 300 }}>
          <pdbe-molstar
            custom-data-format="cif"
            custom-data-url="https://alphafold.ebi.ac.uk/files/AF-Q96NU1-F1-model_v2.cif"
            hide-controls
          />
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
