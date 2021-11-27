import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Ideogram from './Ideogram';
import Chromosome from './Chromosome';
import { OrbitControls } from '@react-three/drei';
import { Button } from 'antd';

function GenomeMap({
  selectedLocations,
}: {
  selectedLocations: string[];
}): JSX.Element {
  // Raycaster for selecting chromosomes in the canvas.
  //const raycaster = new THREE.Raycaster();
  //const mouse = new THREE.Vector2()
  // Ability to switch views and select a chromosome.
  const [viewMode, setViewMode] = useState(0);
  //const [selectedChrom, setSelectedChrom] = useState(0);
  console.log('current view: ' + viewMode);

  // Translate selected locations into chromosome list
  //const chromlist = selectedLocations
  //console.log('Highlighted chromosomes: ' + chromlist);
  // Ideogram view
  return viewMode === 0 ? (
    <>
      <Canvas>
        <OrbitControls />
        <Ideogram selectedLocations={selectedLocations} />
        <ambientLight intensity={0.5} />
      </Canvas>
      <Button onClick={() => setViewMode(1)}>View Chromosome 1</Button>
      {/*<Button onClick={() => setViewMode(1)}>View Chromosome 2</Button>*/}
    </>
  ) : (
    // Chromosome view
    <>
      <Canvas>
        <OrbitControls />
        <Chromosome selectedLocations={selectedLocations} />
        <ambientLight intensity={0.5} />
      </Canvas>
      <Button onClick={() => setViewMode(0)}>View Ideogram</Button>
    </>
  );
}

export default GenomeMap;
