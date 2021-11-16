import React from 'react';
import { extend } from '@react-three/fiber';
//import { Position } from '@react-three/drei/helpers/Position';
import Data from '../data.json';
import { OrbitControls } from '@react-three/drei';
import Cytoband from './Cytoband';
extend({ OrbitControls });

function Chromosome(): JSX.Element {
  // Read data.json
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  //const jsonData = require('./data.json');
  //const obj = JSON.parse(jsonData);
  // Create list of cytobands
  //console.log(obj);
  // Render bands within the chromosome
  return (
    //position={new THREE.Vector3(0, 0, 0)}
    <mesh position={[0, 0, -100]}>
      {Data.map((chrom) => {
        return (
          <Cytoband
            key={chrom.id}
            id={chrom.id}
            assembly_start={chrom.assembly_start}
            assembly_end={chrom.assembly_end}
            location={chrom.location}
            hue={chrom.hue}
          />
        );
      })}
    </mesh>
  );
}

{
  /* <mesh position={pos}>
  <boxBufferGeometry attach="geometry" />
  <meshLambertMaterial attach="material" color="hotpink" />
</mesh>; */
}

export default Chromosome;
