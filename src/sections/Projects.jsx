import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import ProjectPreviewCanvas from "../components/ProjectPreviewCanvas";

import arrowUpIcon from "../assets/icons/arrow-up-right.svg";
import arrowLeftIcon from "../assets/icons/arrow-left.svg";
import arrowRightIcon from "../assets/icons/arrow-right.svg";

import { myProjects } from "../utils";
import { useState } from "react";

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
    <section id="Projects" className="section-spacing gap-8">
      <SectionHeader
        eyebrow={"Proyectos"}
        title={"Construyendo productos reales"}
        description={
          "Una selección de proyectos donde combino frontend moderno, lógica de producto y detalles visuales para crear experiencias útiles y agradables."
        }
      />
      <div className="container mx-auto">
        <div className="mt-12 grid w-full grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Card className={"min-h-[460px]"}>
            <div className="flex h-full flex-col p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <h5 className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                  {currentProjects.position}
                </h5>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/55">
                  {selectedProjectIndex + 1} / {projectCount}
                </span>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-sky-200/80">{currentProjects.date}</p>
                <h3 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                {currentProjects.title}
                </h3>
                {currentProjects.isInProgress ? (
                  <p className="mt-5 rounded-2xl border border-sky-300/20 bg-sky-300/10 p-4 text-base font-semibold leading-7 text-sky-100">
                    Proyecto en desarrollo. Muy pronto estará disponible.
                  </p>
                ) : (
                  <p className="mt-5 text-sm leading-7 text-white/65 md:text-base">
                    {currentProjects.desc}
                  </p>
                )}
              </div>

              <div className="mt-7">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                  Tecnologías
                </p>
                <div className="flex flex-wrap items-center gap-3">
                {currentProjects.tags.map((tag, index) => (
                  <div key={index} className="tech-logo" title={tag.name}>
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-5 pt-8">
                <div className="flex items-center justify-between gap-4">
                  <button
                    className="arrow-btn z-40"
                    onClick={() => handleNavigation("previous")}
                    aria-label="Ver proyecto anterior"
                  >
                    <img src={arrowLeftIcon} alt="" className="h-4 w-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2">
                    {myProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedProjectIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          selectedProjectIndex === index
                            ? "w-8 bg-gradient-to-r from-emerald-300 to-sky-400"
                            : "w-2.5 bg-white/25 hover:bg-white/50"
                        }`}
                        aria-label={`Ir al proyecto ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    className="arrow-btn z-40"
                    onClick={() => handleNavigation("next")}
                    aria-label="Ver siguiente proyecto"
                  >
                    <img src={arrowRightIcon} alt="" className="h-4 w-4" />
                  </button>
                </div>

              {!currentProjects.isInProgress && (
                <a
                    className="group z-40 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                  href={currentProjects.href}
                  target="_blank"
                  rel="noreferrer"
                >
                    Ver demo del proyecto
                  <img
                    src={arrowUpIcon}
                      alt=""
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
              </div>
            </div>
          </Card>

          <ProjectPreviewCanvas texture={currentProjects.texture} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
