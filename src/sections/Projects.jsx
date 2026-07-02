import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import ProjectPreview from "../components/ProjectPreview";
import CarouselControls from "../components/CarouselControls";

import arrowUpIcon from "../assets/icons/arrow-up-right.svg";

import { myProjects } from "../utils";
import { useCarousel } from "../hooks/useCarousel";

const projectCount = myProjects.length;

const Projects = () => {
  const { index, next, previous, goTo } = useCarousel(projectCount);
  const currentProject = myProjects[index];

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
        <div
          className="mt-12 grid w-full grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch"
          aria-roledescription="carrusel"
          aria-label="Proyectos destacados"
        >
          <Card className={"min-h-[460px]"}>
            <div className="flex h-full flex-col p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="pill-accent whitespace-nowrap">
                  {currentProject.position}
                </p>
                <span
                  className="pill flex-none whitespace-nowrap text-fg/55"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {index + 1} / {projectCount}
                </span>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-accent-soft">
                  {currentProject.date}
                  {currentProject.company ? ` · ${currentProject.company}` : ""}
                </p>
                <h3 className="mt-3 text-h2 text-fg">{currentProject.title}</h3>
                {currentProject.isInProgress ? (
                  <p className="mt-5 rounded-2xl border border-accent-soft/30 bg-accent-soft/10 p-4 text-base font-semibold leading-7 text-accent-soft">
                    Proyecto en desarrollo. Muy pronto estará disponible.
                  </p>
                ) : (
                  <p className="mt-5 text-sm leading-7 text-fg/65 md:text-base">
                    {currentProject.desc}
                  </p>
                )}
              </div>

              <div className="mt-7">
                <p className="mb-3 text-label text-fg/40">Tecnologías</p>
                <div className="flex flex-wrap items-center gap-3">
                  {currentProject.tags.map((tag, i) => (
                    <div key={i} className="tech-logo" title={tag.name}>
                      <img src={tag.path} alt={tag.name} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-5 pt-8">
                <CarouselControls
                  count={projectCount}
                  index={index}
                  onPrev={previous}
                  onNext={next}
                  onSelect={goTo}
                  itemNoun="proyecto"
                />

                {!currentProject.isInProgress && (
                  <a
                    className="link-ghost group z-40 w-full"
                    href={currentProject.href}
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

          <ProjectPreview
            texture={currentProject.texture}
            image={currentProject.image}
            pendingLabel={
              currentProject.previewPending ? currentProject.title : undefined
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
