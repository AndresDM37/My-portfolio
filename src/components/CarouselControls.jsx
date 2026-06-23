import { twMerge } from "tailwind-merge";
import arrowLeftIcon from "../assets/icons/arrow-left.svg";
import arrowRightIcon from "../assets/icons/arrow-right.svg";

/**
 * Controles de carrusel accesibles: flechas anterior/siguiente + puntos.
 * Los puntos son una tablist (role="tab") y el grupo responde a las
 * flechas del teclado (←/→). Compartido por Projects y Study.
 */
const CarouselControls = ({
  count,
  index,
  onPrev,
  onNext,
  onSelect,
  itemNoun = "elemento",
  dotsClassName,
  className,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      onNext();
    }
  };

  return (
    <div
      className={twMerge("flex items-center justify-between gap-4", className)}
      role="group"
      aria-label={`Navegación de ${itemNoun}s`}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className="arrow-btn z-40"
        onClick={onPrev}
        aria-label={`Ver ${itemNoun} anterior`}
      >
        <img src={arrowLeftIcon} alt="" className="h-4 w-4" />
      </button>

      <div
        role="tablist"
        aria-label={`Seleccionar ${itemNoun}`}
        className={twMerge("flex flex-wrap items-center justify-center gap-2", dotsClassName)}
      >
        {Array.from({ length: count }).map((_, i) => {
          const isActive = index === i;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Ir al ${itemNoun} ${i + 1}`}
              onClick={() => onSelect(i)}
              className={twMerge("carousel-dot", isActive && "carousel-dot-active")}
            />
          );
        })}
      </div>

      <button
        type="button"
        className="arrow-btn z-40"
        onClick={onNext}
        aria-label={`Ver siguiente ${itemNoun}`}
      >
        <img src={arrowRightIcon} alt="" className="h-4 w-4" />
      </button>
    </div>
  );
};

export default CarouselControls;
