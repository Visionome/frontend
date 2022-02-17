import React, { useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cytoband from './Cytoband';
import Data from '../scripts/cytoBand.json';
import Sizes from '../scripts/chrom.json';
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
  //console.log(props.selectedLocations);
  let y = 16;
  let length = 0;
  //console.log(selectedChrom - 1);
  let scalar = 10000000;
  if (selectedChrom > 0) {
    scalar = Sizes[selectedChrom - 1].assembly_len;
  }

  //const [cytoSelected, setCytoSelected] = useState(-1);

  // eslint-disable-next-line prefer-const
  //let cytoSelected = -1;

  //Sizes[selectedChrom - 1].assembly_len;
  return (
    <>
      <p>chromosome: {selectedChrom}</p>
      <p>selected locations: {selectedCytobandLocations}</p>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 20]} />
        {Data.filter(
          (band) => band.chromosome.substring(3) === selectedChrom.toString(),
        ).map((band) => {
          // Counter for spacing cytobands.
          y -= length + 2;
          length = (band.end - band.start) / (scalar / 32);
          // Create cytoband location from substring of chromosome name.
          const bandLocation = band.name.slice(0, 1) + band.name.slice(2);
          //str = str.slice(0, 3) + str.slice(4);

          //const hue = 'yellow';
          //const bandLocation = band.name;
          //console.log('bandlocation ' + bandLocation);
          // generating hue for a band
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
              key={band.id}
              id={band.id}
              ypos={y}
              len={length}
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
    </>
  );
}

export default Chromosome;
