/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cytoband from './Cytoband';
import Data from '../scripts/cytoBand.json';
import Sizes from '../scripts/chrom.json';
import GeneInfoCard from './GeneInfoCard';
import '../App';

extend({ OrbitControls });

interface ChromProps {
  selectedCytobandLocations: string[];
  selectedChrom: number;
}

function Chromosome({
  selectedChrom,
  selectedCytobandLocations,
}: ChromProps): JSX.Element {
  // Render band within the chromosome
  let y = 80;
  let length = 0;
  //console.log(selectedChrom - 1);
  let scalar = 10000000;
  if (selectedChrom > 0) {
    scalar = Sizes[selectedChrom - 1].assembly_len;
  }
  // Set starting yposition based on chromosome.
  if (selectedChrom > 3) {
    y = 70;
  }
  // State for selected cytoband, used for info cards.
  const [bandSelected, setBandSelected] = useState('');
  const selectedItem = JSON.parse(localStorage.getItem(bandSelected));
  // Note: finding URLs from disease info strings only works for
  // a single url and breaks otherwise.
  const re = 'https.*?(?=\\])';
  let foundUrl = '';
  let urlString = '';
  if (bandSelected !== '' && selectedCytobandLocations.includes(bandSelected)) {
    foundUrl = selectedItem.disease_info.match(re);
    console.log('found url: ' + foundUrl);
    if (foundUrl != null) {
      urlString = foundUrl[0].toString();
    }
  }

  return (
    <>
      <p>chromosome: {selectedChrom}</p>
      <p>selected locations: {selectedCytobandLocations}</p>
      <>
        <div className="flex-container">
          <div className="flex-vis">
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 20]} />
              {Data.filter(
                (band) =>
                  band.chromosome.substring(3) === selectedChrom.toString(),
              ).map((band) => {
                // Counter for spacing cytobands.
                y -= length + 2;
                length = (band.end - band.start) / (scalar / 32);
                // Create cytoband location from substring of chromosome name.
                const bandLocation = band.name.slice(0, 1) + band.name.slice(2);
                // Generating hue for a band
                let hue = 'orange';
                switch (band.giemsaStains) {
                  case 'gneg':
                    hue = '#121413';
                    break;
                  case 'gpos25':
                    hue = '#272b29';
                    break;
                  case 'gpos50':
                    hue = '#383d3a';
                    break;
                  case 'gpos75':
                    hue = '#545c57';
                    break;
                  case 'gpos100':
                    hue = '#8c9690';
                    break;
                  default:
                    hue = '#ffbebe';
                    break;
                }
                return (
                  <Cytoband
                    bandSelected={bandSelected}
                    setBandSelected={setBandSelected}
                    key={band.id}
                    id={band.id}
                    ypos={y}
                    len={length}
                    location={bandLocation}
                    hue={
                      selectedCytobandLocations.includes(
                        bandLocation.toString(),
                      )
                        ? 'blue'
                        : hue
                    }
                  />
                );
              })}
            </Canvas>
          </div>
          <div className="flex-card">
            {bandSelected !== '' &&
            selectedCytobandLocations.includes(bandSelected) ? (
              <GeneInfoCard selectedItem={selectedItem} urlString={urlString} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </>
    </>
  );
}

export default Chromosome;
