import { twMerge } from "tailwind-merge";

/**
 * Grupo de botones de filtro (estado activo/inactivo).
 * Usa role="tablist" para comunicar la selección a tecnologías de apoyo.
 */
const FilterButtons = ({ options, value, onChange, ariaLabel = "Filtros" }) => {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="flex flex-wrap justify-center gap-3"
    >
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={twMerge(
              "rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              isActive
                ? "border-accent/40 bg-accent/15 text-accent shadow-lg shadow-emerald-500/10"
                : "border-line/10 bg-surface/5 text-fg/60 hover:bg-surface/10 hover:text-fg/85"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
