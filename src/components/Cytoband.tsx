import { useCamera } from '@react-three/drei';
import React, { useState } from 'react';
import * as THREE from 'three';
//import { DataTexture2DArray } from 'three';
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
  ...props
}: CytobandProps): JSX.Element {
  const pos = new THREE.Vector3(0, ypos, -30);
  const size = new THREE.Vector3(2, len, 10);

  // TODO: removed ref prop from mesh, figure out if this
  // is required for selecting meshes in the future.
  // const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);

  function handlePointerOver() {
    hover(true);
  }

  function handlePointerOut() {
    hover(false);
  }

  function handleClick() {
    console.log(
      'cytoband ' + id + ' position: [' + ypos + ', ' + (ypos - len) + ']',
    );
  }

  return (
    <mesh
      {...props}
      position={pos}
      scale={size}
      key={id}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        handlePointerOver();
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        handlePointerOut();
      }}
    >
      <cylinderGeometry args={[1, 1, 5, 64]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : hue} />
    </mesh>
  );
}

export default Cytoband;
