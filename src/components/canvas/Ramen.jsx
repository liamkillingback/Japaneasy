import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ramen = () => {
  const ramen = useGLTF("/room/scene.gltf");

  return (
    <primitive
      object={ramen.scene}
      scale={0.25}
      position-z={0}
      rotation-z={0}
      position-y={-30}
      position-x={0}
    />
  );
};

const RamenCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        position: [1, 1, 50],
      }}
      
    >
      <hemisphereLight intensity={0.5} />
      <spotLight
        position={[-500, -500, 0]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.5} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ramen />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default RamenCanvas;
