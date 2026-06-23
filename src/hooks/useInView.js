import { useEffect, useRef, useState } from "react";

/**
 * Observa un elemento y avisa cuando entra en el viewport.
 * Por defecto deja de observar tras la primera aparición (once).
 */
export const useInView = ({ rootMargin = "200px", once = true } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, once]);

  return [ref, inView];
};
