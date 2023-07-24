"use client";
import React, { Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/earth.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={[0.003, 0.003, 0.003]} />
    </>
  );
};

export default function Login(data) {
  return (
    <>
      <section className="relative flex items-center w-full h-full justify-center">
        {/* Change the style prop to make the canvas fullscreen */}
        <Canvas
          shadows
          style={{ width: "100%", height: "100vh" }}
          camera={{ position: [0, 0, 3] }} // Set camera position
        >
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={5}
            position={[10, 15, 10]}
            castShadow
          />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </section>
    </>
  );
}
