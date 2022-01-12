import { Canvas } from '@react-three/fiber';
import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import Data from '../ideogram.json';

interface CProps {
  position: THREE.Vector3;
  scale: THREE.Vector3;
  info: number;
  viewMode: number;
  setViewMode: React.Dispatch<React.SetStateAction<number>>;
  selectedChrom: number;
  setSelectedChrom: React.Dispatch<React.SetStateAction<number>>;
}

function Cylinder(props: CProps) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  //const [clicked, click] = useState(false);

  function handleClick() {
    props.setViewMode(1);
    props.setSelectedChrom(props.info);
    console.log(props.info);
  }

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? 1.2 : 1}
      onClick={(event) => handleClick()}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

interface IProps {
  selectedLocations: string[];
  viewMode: number;
  setViewMode: React.Dispatch<React.SetStateAction<number>>;
  selectedChrom: number;
  setSelectedChrom: React.Dispatch<React.SetStateAction<number>>;
}

// Meshes for canvas displaying all chromosomes together.
function Ideogram(props: IProps): JSX.Element {
  // Render all chromosomes without cytobands
  //console.log(props.selectedLocations);
  let size = new THREE.Vector3(10, 10, 10);
  let pos = new THREE.Vector3(0, 0, 0);
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {Data.map((chrom) => {
        size = new THREE.Vector3(3, chrom.len, 10);
        pos = new THREE.Vector3(chrom.x, chrom.y, 0);
        return (
          <Cylinder
            key={chrom.id}
            info={chrom.id}
            position={pos}
            scale={size}
            viewMode={props.viewMode}
            setViewMode={props.setViewMode}
            selectedChrom={props.selectedChrom}
            setSelectedChrom={props.setSelectedChrom}
          />
        );
      })}
    </Canvas>
  );
}

export default Ideogram;
