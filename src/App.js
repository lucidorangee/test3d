import React, { Suspense } from "react";
import { Canvas, extend } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Text } from "troika-three-text";
import * as THREE from "three"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Loader } from "three";

function Model(props) {
  const { scene } = useGLTF("/Donut.glb");
  scene.position.x = -0.4;
  scene.position.z = -0.4;
  return <primitive object={scene} />;
}

function Model2(props) {
  const { scene } = useGLTF("/yellowdonut.glb");
  scene.position.x = 0.4;
  scene.position.z = -0.4;
  scene.size = 10;
  scene.height = 20;
  return <primitive object={scene} />;
}

function Model3(props) {
  const { scene } = useGLTF("/IriDonut.glb");
  scene.position.x = 0;
  scene.position.z = -0.1;
  scene.size = 10;
  scene.height = 20;
  return <primitive object={scene} />;
}

function DLight({ brightness, color }) {
  return (
    <directionalLight
      width={3}
      height={30000}
      color={color}
      intensity={brightness}
      position={[-200, 100, 500]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}

function ELight({ brightness, color }) {
  return (
    <directionalLight
      width={3}
      height={30000}
      color={color}
      intensity={brightness}
      position={[180, 90, -50]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}

extend({ Text });

function Name({x, y, z, text}) {
  return (
    <text
      position-x={x}
      position-y={y}
      position-z={z}
      fontSize={0.04}
      text={text}
      anchorX={"center"}
    />
  );
}


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const color1 = new THREE.Color( 0xff0000 );


  return (
    <Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 50], fov: 5 }} onCreated={state => state.gl.setClearColor("#EFB8F3")}>
      <DLight brightness={2} color={"#ffffff"} />
      <ELight brightness={2} color={"#ffffff"} />
      <Name x={-0.4} y={0.14} z={-0.4} text={"Tasty Donut"} />
      <Name x={0.25} y={0} z={-0.1} text={"Weird Donut"} />
      <Name x={-0.1} y={-0.05} z={0.15} text={"Blueberry? Donut"} />
      <Suspense fallback={null}>
        <Model />
        <Model2 />
        <Model3 />
      </Suspense>
      <OrbitControls 
        minPolarAngle={0.8}
        maxPolarAngle={1.2}
        minDistance={10}
        maxDistance={25}
        panSpeed={0.03}
      />
    </Canvas>
  );
}

function About() {
/**
 * 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
 */


  return (
    <h1>About Page!</h1>
  );
}

function Users() {
  return (
    <h1>Users Page!</h1>
  );
}