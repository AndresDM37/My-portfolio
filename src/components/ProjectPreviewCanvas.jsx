import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";
import DemoComputer from "./DemoComputer";

const ProjectPreviewCanvas = ({ texture }) => {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur md:h-[540px] lg:h-full">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-sky-400/10"></div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl"></div>

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

      <div className="pointer-events-none absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-gray-950/45 px-4 py-3 text-sm text-white/60 backdrop-blur">
        Preview interactivo del proyecto seleccionado
      </div>
    </div>
  );
};

export default ProjectPreviewCanvas;
