import { useEffect, useState } from "react";

/**
 * Devuelve true cuando el usuario prefiere movimiento reducido.
 * Reacciona a cambios de la preferencia del sistema en vivo.
 */
export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
};
