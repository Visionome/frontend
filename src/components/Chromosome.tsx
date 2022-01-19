import React from 'react';
import { Canvas, extend } from '@react-three/fiber';
//import { Position } from '@react-three/drei/helpers/Position';
import { OrbitControls } from '@react-three/drei';
import Cytoband from './Cytoband';
import Data from '../scripts/cytoBand.json';
extend({ OrbitControls });

interface ChromProps {
  selectedLocations: string[];
  selectedChrom: number;
}

function Chromosome({
  selectedChrom,
  selectedLocations,
  ...props
}: ChromProps): JSX.Element {
  // Render band within the bandosome
  //console.log(props.selectedLocations);
  let counter = 0;
  const scalar = 2000000;
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {Data.filter(
          (band) => band.chromosome.substring(3) === selectedChrom.toString(),
        ).map((band) => {
          // Counter for spacing cytobands.
          counter -= (band.end - band.start) / scalar;
          // Create cytoband location from substring of chromosome name.
          const bandLocation = band.name.substring(2);
          const hue = 'yellow';
          return (
            <Cytoband
              key={band.id}
              id={band.id}
              ypos={counter}
              start={band.start}
              end={band.end}
              scalar={scalar}
              location={bandLocation}
              hue={selectedLocations.includes(bandLocation) ? '#90EE90' : hue}
            />
          );
        })}
      </Canvas>
    </>
  );
}

export default Chromosome;
