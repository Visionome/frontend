import React, { useState } from 'react';
import * as THREE from 'three';
// import { Canvas, useLoader } from '@react-three/fiber';
// import Model from './Model';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

// import Model from './Model';

interface CProps {
  position: THREE.Vector3;
  scale: THREE.Vector3;
  info: number;
  viewMode: number;
  hue: string;
  setViewMode: React.Dispatch<React.SetStateAction<number>>;
  selectedChrom: number;
  setSelectedChrom: React.Dispatch<React.SetStateAction<number>>;
  hoveredChrom: number;
  setHoveredChrom: React.Dispatch<React.SetStateAction<number>>;
}

export default function Cylinder({ scale, ...props }: CProps): JSX.Element {
  // This reference will give us direct access to the THREE.Mesh object
  // const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  //const [clicked, click] = useState(false);

  function handleClick() {
    props.setViewMode(1);
    props.setSelectedChrom(props.info);
    console.log(props.info);
    //console.log(props.info);
  }

  function activateHover() {
    hover(true);
    props.setHoveredChrom(props.info);
    console.log('y ' + props.position.getComponent(1));
    //console.log('activating hover');
    //console.log('x position ' + props.position.getComponent(0));
    //console.log('y position ' + props.position.getComponent(1));
  }

  function deactivateHover() {
    hover(false);
    props.setHoveredChrom(-1);
    console.log('deactivating hover');
  }

  // Method 2, useLoader()
  // function Scene() {
  //   const fbx = useLoader(FBXLoader, './Chrom1.fbx');
  //   return <primitive object={fbx} />;
  // }

  // eslint-disable-next-line react/destructuring-assignment
  // TODO: removed ref prop from mesh, figure out if this
  // is required for selecting meshes in the future.
  const color = props.hue;

  return (
    <mesh
      {...props}
      scale={scale}
      onClick={() => handleClick()}
      onPointerOver={() => activateHover()}
      onPointerOut={() => deactivateHover()}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
    </mesh>

    // <Suspense fallback={null}>
    //   <Scene />
    //   {/* <Model /> */}
    // </Suspense>
  );
}
