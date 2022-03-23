import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import * as THREE from 'three';
import Data from '../ideogram.json';
import Cylinder from './Cylinder';

interface IProps {
  selectedChromLocations: string[];
  viewMode: number;
  setViewMode: React.Dispatch<React.SetStateAction<number>>;
  selectedChrom: number;
  setSelectedChrom: React.Dispatch<React.SetStateAction<number>>;
}

// Meshes for canvas displaying all chromosomes together.
function Ideogram(props: IProps): JSX.Element {
  // Render all chromosomes without cytobands
  const [hoveredChrom, setHoveredChrom] = useState(-1);
  //console.log(props.selectedLocations);
  let size = new THREE.Vector3(10, 10, 10);
  let pos = new THREE.Vector3(0, 0, 0);
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {Data.map((chrom) => {
        size = new THREE.Vector3(0.3, chrom.len / 15, 0.3);
        pos = new THREE.Vector3(chrom.x, chrom.y, 0);
        return (
          <Cylinder
            key={chrom.id}
            info={chrom.id}
            position={pos}
            scale={size}
            hue={
              props.selectedChromLocations.includes(chrom.id.toString())
                ? 'blue'
                : 'orange'
            }
            viewMode={props.viewMode}
            setViewMode={props.setViewMode}
            selectedChrom={props.selectedChrom}
            setSelectedChrom={props.setSelectedChrom}
            hoveredChrom={hoveredChrom}
            setHoveredChrom={setHoveredChrom}
          />
        );
      })}
    </Canvas>
  );
}

export default Ideogram;
