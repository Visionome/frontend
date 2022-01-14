import React from 'react';
import * as THREE from 'three';
import Data from '../ideogram.json';

// Meshes for canvas displaying all chromosomes together.
function Ideogram({
  selectedLocations,
}: {
  selectedLocations: string[];
}): JSX.Element {
  // Render all chromosomes without cytobands
  console.log(selectedLocations);
  let size = new THREE.Vector3(10, 10, 10);
  let pos = new THREE.Vector3(10, 10, 10);
  return (
    <mesh position={[0, 0, -100]}>
      {Data.map((chrom) => {
        size = new THREE.Vector3(5, chrom.len, 10);
        pos = new THREE.Vector3(chrom.x, 10, 10);
        return (
          <mesh key={chrom.id} position={pos} scale={size}>
            <cylinderBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color={chrom.hue} />
          </mesh>
        );
      })}
    </mesh>
  );
}

export default Ideogram;
