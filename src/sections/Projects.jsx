import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

import arrowUpIcon from "../assets/icons/arrow-up-right.svg";
import arrowLeftIcon from "../assets/icons/arrow-left.svg";
import arrowRightIcon from "../assets/icons/arrow-right.svg";

import { myProjects } from "../utils";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProjects = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="Projects" className="py-20 gap-8">
      <SectionHeader
        eyebrow={"Proyectos"}
        title={"Construir el futuro"}
        description={
          "Explora los proyectos que muestran mis habilidades, creatividad y pasión por resolver problemas del mundo real. Cada uno de ellos es un paso adelante en mi camino como desarrollador."
        }
      />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-2 grid-cols-1 mt-12 gap-5 w-full">
          <Card className={"h-[420px] sm-custom:h-[450px]"}>
            <div className="flex flex-col gap-2 my-5 p-6">
              <h5 className="bg-gradient-to-r from-emerald-300 to-sky-400  inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                {currentProjects.position + " ● " + currentProjects.date}
              </h5>
              <h3 className="font-serif font-semibold text-3xl text-white">
                {currentProjects.title}
              </h3>
              {currentProjects.isInProgress ? (
                <p className="text-white/60 text-xl font-bold">
                  Proyecto en desarrollo. ¡Muy pronto estará disponible!
                </p>
              ) : (
                <p className="text-white/60 text-sm">{currentProjects.desc}</p>
              )}
            </div>
            <div className="flex items-center justify-between flex-wrap ml-6">
              <div className="flex items-center gap-3">
                {currentProjects.tags.map((tag, index) => (
                  <div key={index} className="tech-logo" title={tag.name}>
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>
              {!currentProjects.isInProgress && (
                <a
                  className="flex items-center gap-2 cursor-pointer z-40 text-white/60 hover:text-white transition-all duration-300 mr-6 group"
                  href={currentProjects.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="group-hover:underline">Visitar página</p>
                  <img
                    src={arrowUpIcon}
                    alt="arrow"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
            <div className="flex justify-between items-center mt-7">
              <button
                className="arrow-btn ml-5 z-40"
                onClick={() => handleNavigation("previous")}
              >
                <img src={arrowLeftIcon} alt="arrow-left" className="w-4 h-4" />
              </button>

              {/* Indicadores de página */}
              <div className="flex gap-2 items-center">
                {myProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProjectIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      selectedProjectIndex === index
                        ? "bg-gradient-to-r from-emerald-300 to-sky-400 w-6"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Ir al proyecto ${index + 1}`}
                  />
                ))}
              </div>

              <button
                className="arrow-btn rotate-44 mr-5 z-40"
                onClick={() => handleNavigation("next")}
              >
                <img src={arrowRightIcon} alt="arrow" className="w-4 h-4" />
              </button>
            </div>
          </Card>

          <div className="bg-gray-800 outline outline-2 -outline-offset-2 rounded-3xl outline-white/20 h-96 md:h-full">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={1.85}
                    position={[-0.3, -3.3, 0]}
                    rotation={[0, -0.1, 0]}
                  >
                    <DemoComputer texture={currentProjects.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={true} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
