import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ExperienceCard from "../components/ExperienceCard";
import { experienceItems } from "../utils";

/**
 * Sección de Experiencia Laboral
 * Muestra el historial de trabajos de forma clara y escalable
 * Incluye filtrado por estado (todos, actuales, pasados) para mejor UX
 */
const Experience = () => {
  const [filterStatus, setFilterStatus] = useState("all");

  // Filtrar experiencias según el estado seleccionado
  const filteredExperiences = experienceItems.filter((item) => {
    if (filterStatus === "current") return item.isCurrentJob;
    if (filterStatus === "past") return !item.isCurrentJob;
    return true;
  });

  // Ordenar por fecha más reciente primero
  const sortedExperiences = [...filteredExperiences].sort((a, b) => {
    const dateA = new Date(a.startDate.split("/").reverse().join("-"));
    const dateB = new Date(b.startDate.split("/").reverse().join("-"));
    return dateB - dateA;
  });

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

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { value: "all", label: "Todas" },
            { value: "current", label: "Actualmente" },
            { value: "past", label: "Anteriores" },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setFilterStatus(filter.value)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                filterStatus === filter.value
                  ? "border-emerald-300/40 bg-emerald-300/15 text-emerald-200 shadow-lg shadow-emerald-500/10"
                  : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/85"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-1">
          {sortedExperiences.length > 0 ? (
            sortedExperiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${index}`}
                {...experience}
              />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 py-12 text-center">
              <p className="text-lg text-white/60">
                No hay experiencias para mostrar
              </p>
            </div>
          )}
        </div>

        {experienceItems.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-3xl font-bold text-transparent">
                {experienceItems.length}
              </p>
              <p className="mt-1 text-sm text-white/60">Experiencias</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-3xl font-bold text-transparent">
                {experienceItems.filter((e) => e.isCurrentJob).length}
              </p>
              <p className="mt-1 text-sm text-white/60">Actual</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-3xl font-bold text-transparent">
                {new Set(experienceItems.map((e) => e.company)).size}
              </p>
              <p className="mt-1 text-sm text-white/60">Empresas</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-3xl font-bold text-transparent">
                +3
              </p>
              <p className="mt-1 text-sm text-white/60">Años</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
