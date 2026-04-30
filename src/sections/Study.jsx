import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

import { studyItems } from "../utils";

import { useState } from "react";

import arrowLeftIcon from "../assets/icons/arrow-left.svg";
import arrowRightIcon from "../assets/icons/arrow-right.svg";

import tuercaIcon from "../assets/icons/tuerca.svg";

const Study = () => {
  const [selectedStudyIndex, setSelectedStudyIndex] = useState(0);
  const currentStudy = studyItems[selectedStudyIndex];

  const handleNavigation = (direction) => {
    setSelectedStudyIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? studyItems.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === studyItems.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="Study" className="section-spacing">
      <SectionHeader
        eyebrow={"Estudios"}
        title={"Aprender y crecer"}
        description={
          "Mi formación académica y certificaciones reflejan un compromiso constante con mejorar criterio técnico, producto y ejecución."
        }
      />
      <div className="container mx-auto">
        <Card className={"mt-12"}>
          <div className="flex flex-col gap-8 p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h5 className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                  {currentStudy.schoolar}
                </h5>
                <h3 className="mt-5 font-serif text-3xl font-semibold tracking-[-0.03em] text-white sm-custom:text-2xl lg:text-5xl">
                  {currentStudy.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-white/55">
                  Finalización: {currentStudy.dateFinish}
                </p>
              </div>
              <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/55">
                {selectedStudyIndex + 1} / {studyItems.length}
              </span>
            </div>

            {currentStudy.icon && (
              <div className="absolute bottom-8 right-8 hidden opacity-10 md:block">
                <currentStudy.icon />
              </div>
            )}
            <hr className="border-t border-white/10" />
            {currentStudy.state ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center font-semibold text-white md:min-h-[460px]">
                <img
                  src={tuercaIcon}
                  alt="rueda cargando"
                  className="mb-4 size-32 opacity-80 md:size-44"
                />
                <p className="text-3xl md:text-4xl">Estudio en progreso</p>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                  Formación activa para seguir fortaleciendo bases técnicas y criterio profesional.
                </p>
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/20">
                <img
                  src={currentStudy.image}
                  alt={`Certificado de ${currentStudy.title}`}
                  className="mx-auto max-h-[520px] w-full rounded-2xl object-contain"
                />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between px-6 pb-7 md:px-8">
            <button
              className="arrow-btn z-40"
              onClick={() => handleNavigation("previous")}
              aria-label="Ver estudio anterior"
            >
              <img src={arrowLeftIcon} alt="" className="h-4 w-4" />
            </button>

            <div className="flex max-w-[220px] flex-wrap items-center justify-center gap-2">
              {studyItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStudyIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    selectedStudyIndex === index
                      ? "w-8 bg-gradient-to-r from-emerald-300 to-sky-400"
                      : "w-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                  aria-label={`Ir al estudio ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="arrow-btn z-40"
              onClick={() => handleNavigation("next")}
              aria-label="Ver siguiente estudio"
            >
              <img src={arrowRightIcon} alt="" className="h-4 w-4" />
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Study;
