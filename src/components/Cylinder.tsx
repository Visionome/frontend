import React, { useState } from 'react';
import * as THREE from 'three';

interface CProps {
  position: THREE.Vector3;
  scale: THREE.Vector3;
  info: number;
  viewMode: number;
  hue: string;
  setViewMode: React.Dispatch<React.SetStateAction<number>>;
  selectedChrom: number;
  setSelectedChrom: React.Dispatch<React.SetStateAction<number>>;
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
  }

  // eslint-disable-next-line react/destructuring-assignment
  // TODO: removed ref prop from mesh, figure out if this
  // is required for selecting meshes in the future.
  const color = props.hue;
  return (
    <mesh
      {...props}
      scale={scale}
      onClick={() => handleClick()}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
    </mesh>
  );
}
