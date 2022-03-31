/* eslint-disable */
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
  xpos: number;
  ypos: number;
  bandSelected: string;
  setBandSelected: React.Dispatch<React.SetStateAction<string>>;
  bandHovered: string;
  setBandHovered: React.Dispatch<React.SetStateAction<string>>;
}

// Render a cytoband, given the JSON description
function Cytoband({
  len,
  id,
  xpos,
  ypos,
  hue,
  location,
  bandSelected,
  setBandSelected,
  bandHovered,
  setBandHovered,
  ...props
}: CytobandProps): JSX.Element {
  const pos = new THREE.Vector3(xpos, ypos, -200);
  let size = new THREE.Vector3(10, len, 10);

  // Account for centromere width
  //if (hue === '#ffbebe') size = new THREE.Vector3(5, len, 5);
  if (hue === '#febab8') size = new THREE.Vector3(5, len, 5);

  // TODO: removed ref prop from mesh, figure out if this
  // is required for selecting meshes in the future.
  // const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);

  function showCardInfo() {
    setBandSelected(location);
  }

  function handlePointerOver() {
    hover(true);
    console.log(location);
    setBandHovered(location);
  }

  function handlePointerOut() {
    hover(false);
    setBandHovered('None');
  }

  function handleClick() {
    console.log('id ' + id + ' band ' + location);
    console.log('pos ' + JSON.stringify(pos) + ' size ' + JSON.stringify(size));
    //console.log('bandselected ' + bandSelected);
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
      <cylinderGeometry args={[1, 1, 4, 64]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : hue} />
    </mesh>
  );
}

export default Cytoband;
