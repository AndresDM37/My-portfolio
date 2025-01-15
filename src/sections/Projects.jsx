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
    <section id="Projects" className="mt-20 flex flex-col gap-8">
      <SectionHeader
        eyebrow={"Projects"}
        title={"Building the Future"}
        description={
          "Explore the projects that showcase my skills, creativity, and passion for solving real-world problems. Each one is a step forward in my journey as a developer."
        }
      />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-2 grid-cols-1 mt-12 gap-5 w-full">
          <Card className={"h-[420px]"}>
            <div className="flex flex-col gap-2 my-5 p-6">
              <h5 className="bg-gradient-to-r from-emerald-300 to-sky-400  inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                {currentProjects.position + " ● " + currentProjects.date}
              </h5>
              <h3 className="font-serif font-semibold text-3xl text-white">
                {currentProjects.title}
              </h3>
              <p className="text-white/60 text-sm">{currentProjects.desc}</p>
            </div>
            <div className="flex items-center justify-between flex-wrap ml-6">
              <div className="flex items-center gap-3">
                {currentProjects.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>
              <a
                className="flex items-center gap-2 cursor-pointer z-40 text-white/60 hover:text-white mr-6"
                href={currentProjects.href}
                target="_blank"
                rel="noreferrer"
              >
                <p>Check Live Site</p>
                <img src={arrowUpIcon} alt="arrow" />
              </a>
            </div>
            <div className="flex justify-between items-center mt-7">
              <button
                className="arrow-btn ml-5 z-40"
                onClick={() => handleNavigation("previous")}
              >
                <img src={arrowLeftIcon} alt="arrow-left" className="w-4 h-4" />
              </button>
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
                    scale={2}
                    position={[0, -3.3, 0]}
                    rotation={[0, -0.1, 0]}
                  >
                    <DemoComputer texture={currentProjects.texture}/>
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
