import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { CytoBandData } from '../scripts/genomeTransformer';
//import { Position } from '@react-three/drei/helpers/Position';

export interface CytobandProps
  extends Omit<CytoBandData, 'giemsaStains' | 'chromosome'> {
  id: number;
  hue: string;
  location: string;
  scalar: number;
  ypos: number;
}

// Render a cytoband, given the JSON description
function Cytoband({
  start,
  end,
  id,
  scalar,
  ypos,
  ...props
}: CytobandProps): JSX.Element {
  const assemblyLen = end - start;
  const pos = new THREE.Vector3(0, ypos, -10);
  const size = new THREE.Vector3(5, assemblyLen / scalar, 10);

  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);

  function handleClick() {
    console.log(props.location);
  }

  return (
    <mesh
      {...props}
      position={pos}
      scale={size}
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
