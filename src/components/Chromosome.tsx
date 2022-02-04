import React from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cytoband from './Cytoband';
import Data from '../scripts/cytoBand.json';
extend({ OrbitControls });

interface ChromProps {
  selectedCytobandLocations: string[];
  selectedChrom: number;
}

function Chromosome({
  selectedChrom,
  selectedCytobandLocations,
}: ChromProps): JSX.Element {
  // Render band within the bandosome
  //console.log(props.selectedLocations);
  let y = 16;
  let length = 0;
  const scalar = 243500000;
  return (
    <>
      <p>chromosome: {selectedChrom}</p>
      <p>selected locations: {selectedCytobandLocations}</p>
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
          const bandLocation = band.name.slice(0, 1) + band.name.slice(2);
          //str = str.slice(0, 3) + str.slice(4);

          //const hue = 'yellow';
          //const bandLocation = band.name;
          console.log('bandlocation ' + bandLocation);
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
                  : 'orange'
              }
            />
          );
        })}
      </Canvas>
    </>
  );
}

export default Chromosome;
