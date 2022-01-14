import React from 'react';
import { extend } from '@react-three/fiber';
//import { Position } from '@react-three/drei/helpers/Position';
import Data from '../chromosomes.json';
import { OrbitControls } from '@react-three/drei';
import Cytoband from './Cytoband';
extend({ OrbitControls });

function Chromosome({
  selectedLocations,
}: {
  selectedLocations: string[];
}): JSX.Element {
  // Render bands within the chromosome
  console.log(selectedLocations);
  return (
    <mesh position={[0, 0, -100]}>
      {Data.map((chrom) => {
        console.log(selectedLocations.includes(chrom.location));
        return (
          <Cytoband
            key={chrom.id}
            id={chrom.id}
            assembly_start={chrom.assembly_start}
            assembly_end={chrom.assembly_end}
            location={chrom.location}
            hue={
              selectedLocations.includes(chrom.location) ? '#90EE90' : chrom.hue
            }
          />
        );
      })}
    </mesh>
  );
}

export default Chromosome;
