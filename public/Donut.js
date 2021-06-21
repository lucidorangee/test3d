/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Donut.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Donut.geometry} material={materials['Material.003']} position={[0, 0.05, 0]}>
        <mesh
          geometry={nodes.Icing.geometry}
          material={materials['Material.002']}
          position={[-0.01, 0.04, 0]}
          scale={0.98}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Donut.glb')
