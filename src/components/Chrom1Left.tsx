/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF as GLTFThree } from 'three/examples/jsm/loaders/GLTFLoader';
import { ModelProps } from './Model';

export interface XProps extends ModelProps {
  group: React.MutableRefObject<THREE.Group>;
}

declare module 'three-stdlib' {
  export interface GLTF extends GLTFThree {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
  }
}

export default function X({ hue, group, ...props }: XProps) {
  // const group = useRef()
  console.log('in X comp');
  // @ts-ignore
  /* prettier-ignore */
  const { nodes } = useGLTF('https://glb-files.s3.amazonaws.com/Chrom1Left.glb');
  const [hovered, hover] = useState(false);
  const col = hovered ? 'hotpink' : hue;
  const material = new THREE.MeshBasicMaterial({ color: col });

  function activateHover() {
    hover(true);
    props.setHoveredChrom(props.info);
    console.log('y ' + props.position.getComponent(1));
  }

  function deactivateHover() {
    hover(false);
    props.setHoveredChrom(-1);
    console.log('deactivating hover');
  }

  function handleClick() {
    props.setViewMode(1);
    props.setSelectedChrom(props.info);
    console.log(props.info);
  }

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={() => activateHover()}
      onPointerOut={() => deactivateHover()}
      onClick={() => handleClick()}
    >
      <mesh geometry={nodes.Group36303.geometry} material={material} />
      <mesh geometry={nodes.Group44649.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_0.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_0.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_1.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_1.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_2.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_2.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_3.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_3.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_4.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_4.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_5.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_5.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_6.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_6.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_7.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_7.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_8.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_8.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_9.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_9.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_10.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_10.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_11.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_11.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_12.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_12.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_13.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_13.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_14.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_14.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_15.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_15.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_16.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_16.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_17.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_17.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_18.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_18.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_19.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_19.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_20.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_20.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_21.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_21.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_22.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_22.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_23.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_23.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_24.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_24.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_25.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_25.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_26.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_26.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_27.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_27.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_28.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_28.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_29.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_29.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_30.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_30.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_31.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_31.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_32.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_32.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_33.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_33.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_34.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_34.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_35.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_35.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_36.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_36.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_37.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_37.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_38.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_38.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_39.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_39.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_40.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_40.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_41.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_41.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_42.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_42.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_43.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_43.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_44.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_44.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_45.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_45.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_46.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_46.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_47.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_47.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_48.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_48.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_49.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_49.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_50.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_50.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_51.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_51.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_52.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_52.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_53.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_53.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_54.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_54.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_55.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_55.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_56.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_56.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_57.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_57.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_58.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_58.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_59.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_59.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_60.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_60.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_61.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_61.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_62.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_62.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_63.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_63.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_64.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_64.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_65.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_65.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_66.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_66.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_67.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_67.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_68.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_68.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_69.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_69.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_70.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_70.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_71.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_71.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_72.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_72.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_73.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_73.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_74.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_74.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_75.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_75.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_76.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_76.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_77.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_77.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_78.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_78.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_79.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_79.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_80.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_80.geometry} material={material} />
      {/* <mesh geometry={nodes.Group36303_node_81.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_81.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_82.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_82.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_83.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_83.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_84.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_84.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_85.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_85.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_86.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_86.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_87.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_87.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_88.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_88.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_89.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_89.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_90.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_90.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_91.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_91.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_92.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_92.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_93.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_93.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_94.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_94.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_95.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_95.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_96.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_96.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_97.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_97.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_98.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_98.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_99.geometry} material={material} />
      <mesh geometry={nodes.Group36641.geometry} material={material} /> */}
    </group>
  );
}

// useGLTF.preload('/Chrom1Left.glb');
