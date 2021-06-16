import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/dice.glb");
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 50], fov: 50 }}>
      <ambientLight intensity={10} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}