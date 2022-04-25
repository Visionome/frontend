/* eslint-disable react/prop-types */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF as GLTFThree } from 'three/examples/jsm/loaders/GLTFLoader';
import { ModelProps } from './Model';

export interface AutoProps extends ModelProps {
  group: React.MutableRefObject<THREE.Group>;
}

declare module 'three-stdlib' {
  export interface GLTF extends GLTFThree {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.Material>;
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Autosome({
  hue,
  group,
  ...props
}: AutoProps): JSX.Element {
  //const group = useRef()
  /* prettier-ignore */
  const { nodes } = useGLTF('https://glb-files.s3.amazonaws.com/Chrom1Centered.glb');
  //console.log('info ' + props.info);
  const [hovered, hover] = useState(false);
  const col = hovered ? 'hotpink' : hue;
  const material = new THREE.MeshBasicMaterial({ color: col });
  //const [clicked, click] = useState(false);
  console.log('color:  ' + col);
  return (
    // Autosomes
    // gmaterial={materials.DefaultMaterial}
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
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
      <mesh geometry={nodes.Group44649_node_99.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_100.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_100.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_101.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_101.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_102.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_102.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_103.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_103.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_104.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_104.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_105.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_105.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_106.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_106.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_107.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_107.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_108.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_108.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_109.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_109.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_110.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_110.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_111.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_111.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_112.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_112.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_113.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_113.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_114.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_114.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_115.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_115.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_116.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_116.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_117.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_117.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_118.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_118.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_119.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_119.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_120.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_120.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_121.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_121.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_122.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_122.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_123.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_123.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_124.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_124.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_125.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_125.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_126.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_126.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_127.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_127.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_128.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_128.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_129.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_129.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_130.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_130.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_131.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_131.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_132.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_132.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_133.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_133.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_134.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_134.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_135.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_135.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_136.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_136.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_137.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_137.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_138.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_138.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_139.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_139.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_140.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_140.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_141.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_141.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_142.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_142.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_143.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_143.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_144.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_144.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_145.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_145.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_146.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_146.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_147.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_147.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_148.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_148.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_149.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_149.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_150.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_150.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_151.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_151.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_152.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_152.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_153.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_153.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_154.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_154.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_155.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_155.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_156.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_156.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_157.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_157.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_158.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_158.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_159.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_159.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_160.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_160.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_161.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_161.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_162.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_162.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_163.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_163.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_164.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_164.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_165.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_165.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_166.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_166.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_167.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_167.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_168.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_168.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_169.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_169.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_170.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_170.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_171.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_171.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_172.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_172.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_173.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_173.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_174.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_174.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_175.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_175.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_176.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_176.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_177.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_177.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_178.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_178.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_179.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_179.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_180.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_180.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_181.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_181.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_182.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_182.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_183.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_183.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_184.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_184.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_185.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_185.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_186.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_186.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_187.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_187.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_188.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_188.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_189.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_189.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_190.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_190.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_191.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_191.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_192.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_192.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_193.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_193.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_194.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_194.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_195.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_195.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_196.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_196.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_197.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_197.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_198.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_198.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_199.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_199.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_200.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_200.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_201.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_201.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_202.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_202.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_203.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_203.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_204.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_204.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_205.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_205.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_206.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_206.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_207.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_207.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_208.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_208.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_209.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_209.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_210.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_210.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_211.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_211.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_212.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_212.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_213.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_213.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_214.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_214.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_215.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_215.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_216.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_216.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_217.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_217.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_218.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_218.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_219.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_219.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_220.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_220.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_221.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_221.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_222.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_222.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_223.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_223.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_224.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_224.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_225.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_225.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_226.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_226.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_227.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_227.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_228.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_228.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_229.geometry} material={material} />
      <mesh geometry={nodes.Group44649_node_229.geometry} material={material} />
      <mesh geometry={nodes.Group36303_node_230.geometry} material={material} /> */}
    </group>
  );
}

// useGLTF.preload('/assets/Chrom1Centered.glb');
