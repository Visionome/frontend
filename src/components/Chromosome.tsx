import React from 'react';
import { Canvas, extend } from '@react-three/fiber';
//import { Position } from '@react-three/drei/helpers/Position';
import Data from '../chromosomes.json';
import { OrbitControls } from '@react-three/drei';
import Cytoband from './Cytoband';
import { BADNAME } from 'dns';
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
  return (
    <>
      {/* <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} /> */}
      {Data.map((band) => {
        console.log(selectedLocations.includes(band.location));
        console.log(band);
        return (
          <div key={band.id}>hi</div>
          // <Cytoband
          //   key={band.id}
          //   id={band.id}
          //   start={band.start}
          //   end={band.end}
          //   location={band.location}
          //   hue={
          //     selectedLocations.includes(band.location) ? '#90EE90' : band.hue
          //   }
          // />
        );
      })}
      {/* </Canvas> */}
    </>
  );
}

export default Chromosome;
