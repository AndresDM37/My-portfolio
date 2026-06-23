import { useEffect, useState } from "react";

/**
 * Observa las secciones con los ids indicados y devuelve el id de la
 * que está visible en el viewport, para resaltar el enlace de navegación
 * correspondiente (aria-current).
 */
export const useActiveSection = (ids) => {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      // Centra la "zona activa" en el tercio superior del viewport.
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
