import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";
import DemoComputer from "./DemoComputer";

/**
 * Solo el lienzo 3D (sin marco). Se carga de forma diferida desde
 * ProjectPreview cuando la sección entra en el viewport.
 */
const ProjectPreviewCanvas = ({ texture }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={1.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.5} />
      <directionalLight position={[-5, 3, -4]} intensity={0.7} color="#7dd3fc" />
      <pointLight position={[0, -1, 3]} intensity={1.1} color="#6ee7b7" />
      <Center>
        <Suspense fallback={<CanvasLoader />}>
          <group scale={1.85} position={[-0.3, -3.3, 0]} rotation={[0, -0.1, 0]}>
            <DemoComputer texture={texture} />
          </group>
        </Suspense>
      </Center>
      <OrbitControls
        enableDamping
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        rotateSpeed={0.45}
      />
    </Canvas>
  );
};

export default ProjectPreviewCanvas;
