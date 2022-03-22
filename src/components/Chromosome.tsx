import React, { useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cytoband from './Cytoband';
import Data from '../scripts/cytoBand.json';
import Sizes from '../scripts/chrom.json';
import GeneInfoCard from './GeneInfoCard';
import '../App';

extend({ OrbitControls });

export interface GeneProps {
  gene: string;
  description: string;
  ensembl_id: string;
  disease_info: any;
  cytoband_location: string;
}

interface ChromProps {
  selectedCytobandLocations: string[];
  selectedChrom: number;
}

function Chromosome({
  selectedChrom,
  selectedCytobandLocations,
}: ChromProps): JSX.Element {
  // Affine transformation variables
  //const bandSpacer = 0;
  let windowStartPt = 135;

  // Fixing minor cutoff issue
  if (selectedChrom === 16 || selectedChrom === 19 || selectedChrom === 20) {
    if (selectedChrom === 19) {
      windowStartPt = 125;
    } else {
      windowStartPt = 130;
    }
  }

  let prevYLen = 0;
  let prevYPos = 0;

  // Once chromosome is selected read in size
  // so cytobands can be scaled correctly.
  let chromSize = 1000000;
  if (selectedChrom > 0) {
    chromSize = Sizes[selectedChrom - 1].assembly_len;
  }

  // Flex-vis container 600px tall.
  const yWindowSize = 70;
  const multiplier = yWindowSize / chromSize;

  // State for selected cytoband, used for info cards.
  const [bandSelected, setBandSelected] = useState('');

  const selectedItem: GeneProps = JSON.parse(
    localStorage.getItem(bandSelected),
  );
  
  // Note: finding URLs from disease info strings only works for
  // a single url and breaks otherwise.
  const re = 'https.*?(?=\\])';
  let foundUrl = '';
  let urlString = '';
  if (bandSelected !== '' && selectedCytobandLocations.includes(bandSelected)) {
    foundUrl = selectedItem.disease_info.match(re);
    //console.log('found url: ' + foundUrl);
    if (foundUrl != null) {
      urlString = foundUrl[0].toString();
    }
  }

  // Loop through cytobands and add them to the Canvas.
  return (
    <>
      <div className="flex-container">
        <div className="flex-vis">
          <Canvas camera={{ zoom: 1, position: [0, 0, 0] }}>
            <ambientLight />
            <pointLight position={[10, 10, 20]} />
            {Data.filter(
              (band) =>
                band.chromosome.substring(3) === selectedChrom.toString(),
            ).map((band) => {
              // Calculate cytoband length
              // Cytoband length = #nucleotides * canvas multiplier
              const numNucleotides = band.end - band.start;
              const yLen = numNucleotides * multiplier;

              // Now calculate the positioning of the cytoband
              // yPos[i] = yPos[i-1] - ((yLen[i-1] + ylen[i]) / 2)
              const yPos =
                band.start === 0
                  ? windowStartPt
                  : prevYPos - 2 * (prevYLen + yLen);
              prevYPos = yPos;
              prevYLen = yLen;

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
                  xpos={0}
                  ypos={yPos}
                  len={yLen}
                  location={bandLocation}
                  hue={
                    selectedCytobandLocations.includes(bandLocation.toString())
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
  );
}

export default Chromosome;
