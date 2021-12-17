import React from 'react';
//import { Canvas, Vector3 } from '@react-three/fiber';
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
function Cytoband({ start, end, hue }: CytobandProps): JSX.Element {
  const assemblyLen = end - start;
  //const size = 10;
  //const size = new THREE.Vector3(10, assemblyLen, 10);
  //const size = 10;
  const pos = new THREE.Vector3(0, start, 0);
  //const geometry = new THREE.CylinderGeometry(5, 5, assemblyLen, 32);
  //<boxBufferGeometry attach="geometry" />
  const size = new THREE.Vector3(10, assemblyLen, 10);
  return (
    <mesh position={pos} scale={size}>
      <cylinderBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={hue} />
    </mesh>
  );
}

export default Cytoband;
