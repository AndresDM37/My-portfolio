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
    <section id="Study" className="py-20">
      <SectionHeader
        eyebrow={"Estudios"}
        title={"Aprender y crecer"}
        description={
          "Descubra mi trayectoria académica y las certificaciones que han dado forma a mis habilidades y alimentado mi pasión por la tecnología. Cada hito representa un compromiso con el crecimiento y la excelencia."
        }
      />
      <div className="container mx-auto">
        <Card className={"mt-10 lg:h-[800px]"}>
          <div className="flex flex-col p-8 gap-8">
            <div className="inline-flex items-center">
              <h5 className="uppercase bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-semibold">
                {currentStudy.schoolar + " ● " + currentStudy.dateFinish}
              </h5>
            </div>
            <h3 className="font-serif font-semibold text-3xl text-white sm-custom:text-2xl lg:text-4xl">
              {currentStudy.title}
            </h3>
            {currentStudy.icon && (
              <div className="absolute top-8 right-8 sm-custom:top-4 sm-custom:right-4">
                <currentStudy.icon />
              </div>
            )}
            <hr className="border-t-2 border-white/15" />
            {currentStudy.state ? (
              <div className="flex flex-col items-center justify-center h-[412px] lg:h-[512px] outline outline-2 text-white outline-white/40 font-semibold rounded-lg">
                <img
                  src={tuercaIcon}
                  alt="rueda cargando"
                  className="size-44 mb-4"
                />
                <p className="text-4xl">Estudio en Progreso</p>
                {/* hacer que los 3 puntos se muevan */}
              </div>
            ) : (
              <img
                src={currentStudy.image}
                alt={`${currentStudy.title} Certificate`}
                className="rounded-md mt-8 -mb-4 h-[400px] lg:h-[500px] lg:w-[750px] lg:mt-4 lg:ml-24 sm-custom:w-[500px] sm-custom:h-[300px]"
              />
            )}
          </div>
          <div className="flex justify-between items-center mb-7">
            <button
              className="arrow-btn ml-5 z-40"
              onClick={() => handleNavigation("previous")}
            >
              <img src={arrowLeftIcon} alt="arrow-left" className="w-4 h-4" />
            </button>

            {/* Indicadores de página */}
            <div className="flex gap-2 items-center flex-wrap justify-center max-w-[200px]">
              {studyItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStudyIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    selectedStudyIndex === index
                      ? "bg-gradient-to-r from-emerald-300 to-sky-400 w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir al estudio ${index + 1}`}
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
      </div>
    </section>
  );
};

export default Study;
