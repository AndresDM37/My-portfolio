import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import CarouselControls from "../components/CarouselControls";

import { studyItems } from "../utils";
import { useCarousel } from "../hooks/useCarousel";

import tuercaIcon from "../assets/icons/tuerca.svg";

const studyCount = studyItems.length;

const Study = () => {
  const { index, next, previous, goTo } = useCarousel(studyCount);
  const currentStudy = studyItems[index];

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
          <div
            className="flex flex-col gap-8 p-6 md:p-8"
            aria-roledescription="carrusel"
            aria-label="Certificaciones y estudios"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="pill-accent">{currentStudy.schoolar}</p>
                <h3 className="mt-5 text-h2 text-fg sm-custom:text-2xl">
                  {currentStudy.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-fg/55">
                  Finalización: {currentStudy.dateFinish}
                </p>
              </div>
              <span
                className="pill w-fit text-fg/55"
                aria-live="polite"
                aria-atomic="true"
              >
                {index + 1} / {studyCount}
              </span>
            </div>

            {currentStudy.icon && (
              <div className="absolute bottom-8 right-8 hidden opacity-10 md:block" aria-hidden="true">
                <currentStudy.icon />
              </div>
            )}
            <hr className="border-t border-line/10" />
            {currentStudy.state ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-line/10 bg-surface/[0.04] p-8 text-center font-semibold text-fg md:min-h-[460px]">
                <img
                  src={tuercaIcon}
                  alt=""
                  className="mb-4 size-32 opacity-80 md:size-44"
                />
                <p className="text-3xl md:text-4xl">Estudio en progreso</p>
                <p className="mt-3 max-w-md text-sm leading-6 text-fg/55">
                  Formación activa para seguir fortaleciendo bases técnicas y criterio profesional.
                </p>
              </div>
            ) : (
              <div className="rounded-3xl border border-line/10 bg-surface/[0.04] p-3 shadow-2xl shadow-black/20">
                <img
                  src={currentStudy.image}
                  alt={`Certificado de ${currentStudy.title}`}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto max-h-[520px] w-full rounded-2xl object-contain"
                />
              </div>
            )}
          </div>
          <CarouselControls
            className="px-6 pb-7 md:px-8"
            dotsClassName="max-w-[220px]"
            count={studyCount}
            index={index}
            onPrev={previous}
            onNext={next}
            onSelect={goTo}
            itemNoun="estudio"
          />
        </Card>
      </div>
    </section>
  );
};

export default Study;
