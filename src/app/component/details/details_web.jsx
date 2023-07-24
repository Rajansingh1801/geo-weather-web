"use client";

import { Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import earth from "@/app/assets/images-bg/earth.glb";
import { get } from "lodash";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/earth.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={[0.003, 0.003, 0.003]} />
    </>
  );
};

export default function Details_Web(props) {
  // console.log(props.weatherdata);
  return (
    <>
      <section className="relative flex items-center w-full h-full justify-between ">
        <div className="text-white basis-1/2">
          <div className="text-center">
            <h1 className="text-white text-9xl">
              {props.weatherdata?.main?.temp}°C
            </h1>
            <div>
              <h4 className="text-5xl mt-4">
                {props.weatherdata?.name},{props.weatherdata?.sys.country}
                {/* {get(props, "props.weatherdata?.name", "not found")},
                {get(props, "props.weatherdata?.sys.country", "not found")} */}
              </h4>
              <h4 className="mt-3 text-2xl">
                Feel-like :- {props.weatherdata?.main?.feels_like}°C
              </h4>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full basis-1/2">
          <div style={{ width: "500px", height: "500px", borderRadius: "50%" }}>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
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
              <OrbitControls autoRotate enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
}
