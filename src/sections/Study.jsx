import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

import { studyItems } from "../utils";

import { useState } from "react";

import arrowLeftIcon from "../assets/icons/arrow-left.svg";
import arrowRightIcon from "../assets/icons/arrow-right.svg";

const studyCount = studyItems.length;

const Study = () => {
  const [selectedStudyIndex, setSelectedStudyIndex] = useState(0);
  const currentStudy = studyItems[selectedStudyIndex];

  const handleNavigation = (direction) => {
    setSelectedStudyIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? studyCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === studyCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="Study" className="py-20">
      <SectionHeader
        eyebrow={"Study"}
        title={"Learning & Growing"}
        description={
          "Discover my academic journey and certifications that have shaped my skills and fueled my passion for technology. Each milestone represents a commitment to growth and excellence."
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
            <h3 className="font-serif font-semibold text-3xl text-white">
              {currentStudy.title}
            </h3>
            {currentStudy.icon && (
              <div className="absolute top-8 right-8">
                <currentStudy.icon />
              </div>
            )}
            <hr className="border-t-2 border-white/15" />
            {currentStudy.state ? (
              <div className="flex flex-col items-center justify-center h-[412px] lg:h-[512px] outline outline-2 text-white outline-white/40 font-semibold rounded-lg">
                <img src="" alt="rueda cargando" />
                <p className="text-4xl">Study in Progress... 💻</p> 
                {/* hacer que los 3 puntos se muevan */}
              </div>
            ) : (
              <img
                src={currentStudy.image}
                alt={`${currentStudy.title} Certificate`}
                className="rounded-md mt-8 -mb-4 h-[400px] lg:h-[500px] lg:w-[750px] lg:mt-4 lg:ml-24"
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
