import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ExperienceCard from "../components/ExperienceCard";
import FilterButtons from "../components/FilterButtons";
import StatCard from "../components/StatCard";
import { experienceItems } from "../utils";

const filterOptions = [
  { value: "all", label: "Todas" },
  { value: "current", label: "Actualmente" },
  { value: "past", label: "Anteriores" },
];

/**
 * Sección de Experiencia Laboral.
 * Lista filtrable por estado (todas/actuales/anteriores) y resumen de stats.
 */
const Experience = () => {
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredExperiences = experienceItems.filter((item) => {
    if (filterStatus === "current") return item.isCurrentJob;
    if (filterStatus === "past") return !item.isCurrentJob;
    return true;
  });

  // Ordenar por fecha de inicio más reciente primero.
  const sortedExperiences = [...filteredExperiences].sort((a, b) => {
    const dateA = new Date(a.startDate.split("/").reverse().join("-"));
    const dateB = new Date(b.startDate.split("/").reverse().join("-"));
    return dateB - dateA;
  });

  // Años de experiencia desde el inicio del primer trabajo, autoactualizable.
  const earliestStart = experienceItems.reduce((earliest, item) => {
    const date = new Date(item.startDate.split("/").reverse().join("-"));
    return date < earliest ? date : earliest;
  }, new Date());
  const monthsOfExperience = Math.max(
    0,
    (Date.now() - earliestStart) / (1000 * 60 * 60 * 24 * 30.44)
  );
  const yearsOfExperience = Math.floor(monthsOfExperience / 12);
  const experienceStat =
    yearsOfExperience >= 1
      ? {
          value: `+${yearsOfExperience}`,
          label: yearsOfExperience === 1 ? "Año" : "Años",
        }
      : { value: `${Math.round(monthsOfExperience)}`, label: "Meses" };

  const stats = [
    { value: experienceItems.length, label: "Experiencias" },
    { value: experienceItems.filter((e) => e.isCurrentJob).length, label: "Actual" },
    { value: new Set(experienceItems.map((e) => e.company)).size, label: "Empresas" },
    { value: experienceStat.value, label: experienceStat.label },
  ];

  return (
    <section id="Experience" className="section-spacing">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow={"Experiencia"}
          title={"Mi trayectoria profesional"}
          description={
            "Roles, desafíos y aprendizajes que han fortalecido mi criterio para construir soluciones útiles, mantenibles y centradas en las personas."
          }
        />

        <div className="mt-10">
          <FilterButtons
            options={filterOptions}
            value={filterStatus}
            onChange={setFilterStatus}
            ariaLabel="Filtrar experiencias por estado"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6">
          {sortedExperiences.length > 0 ? (
            sortedExperiences.map((experience, index) => (
              <ExperienceCard key={`${experience.company}-${index}`} {...experience} />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-line/10 bg-surface/5 py-12 text-center">
              <p className="text-lg text-fg/60">No hay experiencias para mostrar</p>
            </div>
          )}
        </div>

        {experienceItems.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-line/10 pt-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
