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
  bandSelected: string;
  setBandSelected: React.Dispatch<React.SetStateAction<string>>;
}

// Render a cytoband, given the JSON description
function Cytoband({
  len,
  id,
  ypos,
  hue,
  location,
  bandSelected,
  setBandSelected,
  ...props
}: CytobandProps): JSX.Element {
  const pos = new THREE.Vector3(0, ypos, -110);
  let size = new THREE.Vector3(4, len, 10);
  // Account for centromere width
  if (hue === '#ffbebe') size = new THREE.Vector3(2, len, 5);

  // TODO: removed ref prop from mesh, figure out if this
  // is required for selecting meshes in the future.
  // const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);

  function showCardInfo() {
    setBandSelected(location);
  }

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
    showCardInfo();
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
