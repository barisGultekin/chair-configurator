/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei'

const Assembly = (props) => {
  const { nodes, materials } = useGLTF('/models/assembly.gltf')
  return (
    <group {...props} dispose={null} position={[0, -5, 0]}>
      <mesh geometry={nodes.Body1.geometry} material={materials['Steel_-_Satin']} />
      <mesh geometry={nodes.Body11.geometry} material={materials['Steel_-_Satin']} />
      <mesh geometry={nodes.Body12.geometry} material={materials['Steel_-_Satin']} />
    </group>
  )
}

useGLTF.preload('/assembly.gltf')

export default Assembly;
