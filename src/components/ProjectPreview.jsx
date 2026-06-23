import { lazy, Suspense } from "react";
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";

// El bundle de Three.js se separa en su propio chunk y solo se descarga
// cuando la sección de proyectos está cerca del viewport.
const ProjectPreviewCanvas = lazy(() => import("./ProjectPreviewCanvas"));

const Shell = ({ children, caption }) => (
  <div className="relative h-[420px] overflow-hidden rounded-3xl border border-line/10 bg-surface/[0.06] shadow-2xl shadow-black/20 backdrop-blur md:h-[540px] lg:h-full">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-surface/10 via-transparent to-sky-400/10"></div>
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl"></div>
    {children}
    {caption && (
      <div className="pointer-events-none absolute bottom-5 left-5 right-5 rounded-2xl border border-line/10 bg-ground/45 px-4 py-3 text-sm text-fg/60 backdrop-blur">
        {caption}
      </div>
    )}
  </div>
);

const LoadingFallback = () => (
  <div className="flex h-full items-center justify-center gap-3 text-sm text-fg/50">
    <span className="h-5 w-5 animate-spin rounded-full border-2 border-fg/20 border-t-accent" />
    Cargando vista 3D…
  </div>
);

const ProjectPreview = ({ texture }) => {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView({ rootMargin: "250px" });

  // Con movimiento reducido se evita el render 3D animado: se ofrece el
  // video del proyecto reproducible a voluntad del usuario.
  if (reducedMotion) {
    return (
      <div ref={ref}>
        <Shell caption="Vista previa del proyecto (reproduce el video)">
          <video
            src={texture}
            muted
            loop
            playsInline
            controls
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </Shell>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <Shell caption="Preview interactivo del proyecto seleccionado">
        {inView ? (
          <Suspense fallback={<LoadingFallback />}>
            <ProjectPreviewCanvas texture={texture} />
          </Suspense>
        ) : (
          <LoadingFallback />
        )}
      </Shell>
    </div>
  );
};

export default ProjectPreview;
