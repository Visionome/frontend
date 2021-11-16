import React from 'react';
import Dashboard from './components/Dashboard';
import './App.scss';
import './style/App.css';
import { Canvas } from '@react-three/fiber';
import Chromosome from './components/Chromosome';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function App(): JSX.Element {
  const fov = window.innerHeight / window.screen.height;
  const aspect = window.innerWidth / window.innerHeight;
  // const fov = 45;
  // const aspect = 2;
  // const near = 0.1;
  // const far = 100;
  //const camera = new THREE.PerspectiveCamera(fov, aspect);
  //camera.position.set(0, 20, 0);
  // <ambientLight intensity={0.5} />

  return (
    <div className="App">
      <Dashboard />
      <Canvas>
        <OrbitControls
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
        />
        <Chromosome />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}

export default App;
