import React, { useState, useRef } from 'react';
import * as THREE from 'three';

interface BandData {
  id: number;
  assembly_start: number;
  assembly_end: number;
  location: string;
  hue: string;
}

// Render a cytoband, given the JSON description
function Cytoband({
  assembly_start,
  assembly_end,
  id,
  ...props
}: BandData): JSX.Element {
  const start = assembly_start;
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
