import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { CytoBandData } from '../scripts/genomeTransformer';

export interface CytobandProps
  extends Omit<CytoBandData, 'giemsaStains' | 'chromosome' | 'start' | 'end'> {
  id: number;
  hue: string;
  len: number;
  location: string;
  ypos: number;
}

// Render a cytoband, given the JSON description
function Cytoband({
  len,
  id,
  ypos,
  hue,
  location,
  ...props
}: CytobandProps): JSX.Element {
  const pos = new THREE.Vector3(0, ypos, -30);
  const size = new THREE.Vector3(2, len, 10);

  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);

  function handleClick() {
    console.log(location + ' length ' + len + 'start ' + ypos);
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
      <cylinderGeometry args={[1, 1, 5, 64]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : hue} />
    </mesh>
  );
}

export default Cytoband;
