import { useCallback, useState } from "react";

/**
 * Estado de carrusel reutilizable: índice actual con navegación
 * circular (wrap) y salto directo. Compartido por Projects y Study.
 */
export const useCarousel = (count) => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
  }, [count]);

  const previous = useCallback(() => {
    setIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
  }, [count]);

  const goTo = useCallback((i) => setIndex(i), []);

  return { index, next, previous, goTo };
};
