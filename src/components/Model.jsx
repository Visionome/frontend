/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { useRef } from 'react';
// import { useFBX } from '@react-three/drei';

// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export default function Model({ ...props }) {
//   const group = useRef();
//   const { nodes, materials } = useFBX('/Chrom1.fbx');
//   return (
//     // eslint-disable-next-line react/jsx-filename-extension
//     <group ref={group} {...props} dispose={null}>
//       <mesh
//         geometry={nodes.Merged_TopLeft.geometry}
//         material={materials.Merged_TopLeft}
//       />
//     </group>
//   );
// }

// useFBX.preload('/Chrom1.fbx');

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Chrom1.gltf');
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
        position={[0, 0.19, -0.04]}
      />
    </group>
  );
}

useGLTF.preload('/Chrom1.gltf');