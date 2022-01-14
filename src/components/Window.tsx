import React, { useState } from 'react';
import Ideogram from './Ideogram';
import Chromosome from './Chromosome';
import { Button } from 'antd';

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

  function handleReset() {
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
      <Chromosome
        selectedLocations={selectedLocations}
        selectedChrom={selectedChrom}
      />
      <button onClick={() => handleReset()}>Go Back</button>
    </>
  );
}

export default Window;
