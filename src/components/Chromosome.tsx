import React from 'react';
import { Canvas, extend } from '@react-three/fiber';
//import { Position } from '@react-three/drei/helpers/Position';
import Data from '../chromosomes.json';
import { OrbitControls } from '@react-three/drei';
import Cytoband from './Cytoband';
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
  // Render bands within the chromosome
  //console.log(props.selectedLocations);
  return (
    <>
      <p> You selected chromosome {selectedChrom}</p>
      {Data.map((band) => {
        console.log(selectedLocations.includes(band.location));
        return (
          <p key={band.id}>
            cytoband {band.location} assembly start {band.assembly_start}{' '}
            assembly end {band.assembly_end}
          </p>
        );
      })}

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {Data.map((band) => {
          console.log(selectedLocations.includes(band.location));
          return (
            <Cytoband
              key={band.id}
              id={band.id}
              assembly_start={band.assembly_start}
              assembly_end={band.assembly_end}
              location={band.location}
              hue={
                selectedLocations.includes(band.location) ? '#90EE90' : band.hue
              }
            />
          );
        })}
      </Canvas>
    </>
  );
}

export default Chromosome;
