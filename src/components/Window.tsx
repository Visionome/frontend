import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Ideogram from './Ideogram';
import Chromosome from './Chromosome';
import { OrbitControls } from '@react-three/drei';
import { Button } from 'antd';
import * as THREE from 'three';

function Window({
  selectedLocations,
}: {
  selectedLocations: string[];
}): JSX.Element {
  // Raycaster for selecting chromosomes in the canvas.
  //const raycaster = new THREE.Raycaster();
  //const mouse = new THREE.Vector2()
  // Ability to switch views and select a chromosome.
  const [viewMode, setViewMode] = useState(0);
  const [selectedChrom, setSelectedChrom] = useState(-1);
  //const [selectedChrom, setSelectedChrom] = useState(0);
  console.log('current view: ' + viewMode);

  function handlePress() {
    setSelectedChrom(-1);
    setViewMode(0);
  }

  // Translate selected locations into chromosome list
  //const chromlist = selectedLocations
  //console.log('Highlighted chromosomes: ' + chromlist);

  // Ideogram view
  return viewMode === 0 ? (
    <>
      <Ideogram
        selectedLocations={selectedLocations}
        viewMode={viewMode}
        setViewMode={setViewMode}
        selectedChrom={selectedChrom}
        setSelectedChrom={setSelectedChrom}
      />
    </>
  ) : (
    // Chromosome view
    <>
      <p>You are in chromosome view, chrom = {selectedChrom}.</p>
      <Button onClick={() => handlePress} />
    </>
  );
}

export default Window;
