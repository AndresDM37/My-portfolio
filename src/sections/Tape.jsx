import { Fragment } from "react";
import { StarIcon } from "../components/Icons";

const words = [
  "Ingeniero de Software",
  "Desarrollador Web",
  "Solucionador de problemas",
  "Amigable",
  "Aprendizaje rápido",
  "Adaptable al Entorno",
  "Desarrollador creativo",
  "Trabajador en equipo",
  "Seguro",
];

const Tape = () => {
  return (
    <section className="py-16">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <div className="size-6 -rotate-12">
                      <StarIcon color={"text-gray-900"} />
                    </div>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tape;
