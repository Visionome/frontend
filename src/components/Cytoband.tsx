import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { CytoBandData } from '../scripts/genomeTransformer';
//import { Position } from '@react-three/drei/helpers/Position';

export interface CytobandProps
  extends Omit<CytoBandData, 'giemsaStains' | 'chromosome'> {
  id: number;
  hue: string;
  location: string;
}

// Render a cytoband, given the JSON description
function Cytoband({ start, end, id, ...props }: CytobandProps): JSX.Element {
  //const assemblyLen = assembly_end - assembly_start;
  const pos = new THREE.Vector3(0, start, -10);
  const size = new THREE.Vector3(10, 10, 10);

  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);

  function handleClick() {
    console.log(props.location);
  }

  return (
    <mesh
      {...props}
      key={id}
      ref={ref}
      onClick={(event) => handleClick()}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default Cytoband;
