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
    <section id="Experience" className="py-20 lg:py-28">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow={"Experiencia"}
          title={"Mi trayectoria profesional"}
          description={
            "Descubre los roles, empresas y desafíos que han marcado mi desarrollo como profesional. Cada experiencia es un aprendizaje que me fortalece."
          }
        />

        {/* Filtros - Componente modular para fácil extensión */}
        <div className="mt-10 flex gap-3 justify-center flex-wrap">
          {[
            { value: "all", label: "Todas" },
            { value: "current", label: "Actualmente" },
            { value: "past", label: "Anterior" },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setFilterStatus(filter.value)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filterStatus === filter.value
                  ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300"
                  : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white/80"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de experiencias */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {sortedExperiences.length > 0 ? (
            sortedExperiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${index}`}
                {...experience}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-white/60 text-lg">
                No hay experiencias para mostrar
              </p>
            </div>
          )}
        </div>

        {/* Estadísticas (Opcional - Para futura expansión) */}
        {experienceItems.length > 0 && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                {experienceItems.length}
              </p>
              <p className="text-white/60 text-sm mt-1">Experiencias</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                {experienceItems.filter((e) => e.isCurrentJob).length}
              </p>
              <p className="text-white/60 text-sm mt-1">Actual</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                {new Set(experienceItems.map((e) => e.company)).size}
              </p>
              <p className="text-white/60 text-sm mt-1">Empresas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                +3
              </p>
              <p className="text-white/60 text-sm mt-1">Años</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
