import { twMerge } from "tailwind-merge";
import backGround from "../assets/images/grain.jpg";
import { TechIcon } from "./TechIcon";

/**
 * Componente reutilizable para mostrar una tarjeta de experiencia laboral
 * Diseñado para ser flexible y escalable según el crecimiento de experiencias
 * Usa los mismos estilos que las cards de proyectos para consistencia
 */
const ExperienceCard = ({
  company,
  position,
  startDate,
  endDate,
  description,
  tags = [],
  isCurrentJob = false,
  achievements = [],
  className = "",
}) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
    >
      {/* Textura grain de fondo */}
      <div
        className="absolute inset-0 z-30 opacity-5"
        style={{ backgroundImage: `url(${backGround})` }}
      ></div>

      {/* Contenido con padding y posición relativa */}
      <div className="relative z-20 p-6">
        {/* Header con empresa y fechas */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h5 className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                {company}
              </h5>
              <h3 className="text-2xl sm-custom:text-lg font-serif font-semibold text-white mt-2">
                {position}
              </h3>
            </div>
            {isCurrentJob && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-300">
                  Actual
                </span>
              </span>
            )}
          </div>

          {/* Fechas */}
          <p className="text-sm text-white/60 font-medium">
            {startDate} {endDate && `- ${endDate}`}
          </p>
        </div>

        <hr className="border-t border-white/10 my-4" />

        {/* Descripción */}
        {description && (
          <p className="text-white/60 text-sm leading-relaxed mb-3">
            {description}
          </p>
        )}

        {/* Logros (si existen) */}
        {achievements && achievements.length > 0 && (
          <div className="mb-3">
            <p className="text-xs uppercase font-semibold text-white/60 mb-2">
              Logros
            </p>
            <ul className="list-disc list-inside space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-white/70 pl-2">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tecnologías utilizadas */}
        {tags && tags.length > 0 && (
          <div className="mt-1">
            <p className="text-xs uppercase font-semibold text-white/60 mb-2">
              Tecnologías
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center group relative"
                  title={tag.name}
                >
                  {tag.icon && typeof tag.icon === "function" && (
                    <div className="transition-transform duration-200 hover:scale-110">
                      <TechIcon component={tag.icon} />
                    </div>
                  )}
                  {/* Tooltip con nombre de tecnología */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
