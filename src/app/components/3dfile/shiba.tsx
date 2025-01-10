"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/carmodel/scene.glb";  // put here name of the file 
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}  scale={[0.5,0.5, 0.5]} position={[0, -1, 0]} // Move it slightly down
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Shiba() {
  return (
    <div className='flex justify-center items-center h-screen bg-white '>
      <Canvas className='h-2xl w-2xl'
      camera={{ position: [0, 3, 7], fov: 50 }}>
        <OrbitControls  enableZoom={false}/>
        <ambientLight color={"#CF0A0A"} intensity={2}/>  
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
        <Environment preset="sunset" resolution={256}/> 
      </Canvas>
    </div>
  );
}