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
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.075] hover:shadow-emerald-500/10 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:bg-gradient-to-br after:from-white/10 after:via-transparent after:to-emerald-300/5 after:content-['']",
        className
      )}
    >
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{ backgroundImage: `url(${backGround})` }}
      ></div>

      <div className="relative z-20 p-6">
        <div className="mb-5 flex flex-col gap-3">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <h5 className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                {company}
              </h5>
              <h3 className="mt-4 font-serif text-2xl font-semibold tracking-[-0.03em] text-white sm-custom:text-lg md:text-3xl">
                {position}
              </h3>
            </div>
            {isCurrentJob && (
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300"></span>
                <span className="text-xs font-semibold text-emerald-300">
                  Actual
                </span>
              </span>
            )}
          </div>

          <p className="text-sm font-medium text-white/55">
            {startDate} {endDate && `- ${endDate}`}
          </p>
        </div>

        <hr className="border-t border-white/10 my-4" />

        {description && (
          <p className="mb-4 text-sm leading-7 text-white/65">
            {description}
          </p>
        )}

        {achievements && achievements.length > 0 && (
          <div className="mb-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Logros
            </p>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex gap-3 text-sm leading-6 text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300"></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="mt-1 border-t border-white/10 pt-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
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
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2 transition-transform duration-200 hover:scale-110 hover:bg-white/10">
                      <TechIcon component={tag.icon} />
                    </div>
                  )}
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
