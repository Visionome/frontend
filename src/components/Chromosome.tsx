import React from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cytoband from './Cytoband';
import Data from '../scripts/cytoBand.json';
import Sizes from '../scripts/chrom.json';
extend({ OrbitControls });

interface ChromProps {
  selectedLocations: string[];
  selectedChrom: number;
}

function Chromosome({
  selectedChrom,
  selectedLocations,
}: ChromProps): JSX.Element {
  // Render band within the bandosome
  //console.log(props.selectedLocations);
  let y = 16;
  let length = 0;
  //console.log(selectedChrom - 1);
  let scalar = 10000000;
  if (selectedChrom > 0) {
    scalar = Sizes[selectedChrom - 1].assembly_len;
  }
  //Sizes[selectedChrom - 1].assembly_len;
  return (
    <>
      <p>chromosome: {selectedChrom}</p>
      <p>selected locations: {selectedLocations}</p>
      <p>assembly length: {scalar}</p>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {Data.filter(
          (band) => band.chromosome.substring(3) === selectedChrom.toString(),
        ).map((band) => {
          // Counter for spacing cytobands.
          y -= length;
          length = (band.end - band.start) / (scalar / 32);
          // Create cytoband location from substring of chromosome name.
          const bandLocation = band.name.substring(2);
          //const hue = 'yellow';
          //const bandLocation = band.name;
          console.log('bandlocation ' + bandLocation);
          // generating hue for a band
          let hue = 'orange';

          // switch (band.giemsaStains) {
          //   case 'gneg':
          //     hue = '#121413';
          //   case 'gpos25':
          //     hue = '#272b29';
          //   case 'gpos50':
          //     hue = '#383d3a';
          //   case 'gpos75':
          //     hue = '#545c57';
          //   case 'gpos100':
          //     hue = '#8c9690';
          // }
          // TODO: fix fallthrough bug.
          // Used color picker and chrom reference
          // from wikipedia for each stain value.
          if (band.giemsaStains == 'gneg') {
            hue = '#ffffff';
          } else if (band.giemsaStains == 'gpos25') {
            hue = '#d2d2d2';
          } else if (band.giemsaStains == 'gpos50') {
            hue = '#939393';
          } else if (band.giemsaStains == 'gpos75') {
            hue = '#555555';
          } else if (band.giemsaStains == 'gpos100') {
            hue = '#1b1b1b';
          } else if (band.giemsaStains == 'acen') {
            hue = '#ffbebe';
          } else {
            hue = '#ffbebe';
          }

          return (
            <Cytoband
              key={band.id}
              id={band.id}
              ypos={y}
              len={length}
              location={bandLocation}
              hue={selectedLocations.includes(bandLocation) ? 'blue' : hue}
            />
          );
        })}
      </Canvas>
    </>
  );
}

export default Chromosome;
