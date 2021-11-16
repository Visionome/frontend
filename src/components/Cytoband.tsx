import React from 'react';
//import { Canvas, Vector3 } from '@react-three/fiber';
import * as THREE from 'three';
//import { Position } from '@react-three/drei/helpers/Position';

interface BandData {
  id: number;
  name: string;
  assembly_start: number;
  assembly_end: number;
  location: string;
  hue: string;
}

// Render a cytoband, given the JSON description
function Cytoband({
  assembly_start,
  assembly_end,
  ...props
}: BandData): JSX.Element {
  const start = assembly_start;
  const assemblyLen = assembly_end - assembly_start;
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
      <meshLambertMaterial attach="material" color={props.hue} />
    </mesh>
  );
}

export default Cytoband;
