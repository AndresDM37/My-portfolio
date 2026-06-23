import Button from "../components/Button";

import { StarIcon } from "../components/Icons";

import emojiImage from "../assets/images/emoji.png";
import backGround from "../assets/images/grain.jpg";

const floatingStars = [
  "left-[8%] top-24 size-8 opacity-45",
  "left-[18%] top-[62%] size-14 opacity-50",
  "left-[31%] top-36 size-6 opacity-40",
  "right-[28%] top-20 size-7 opacity-45",
  "right-[13%] top-44 size-16 opacity-60",
  "right-[8%] top-[68%] size-9 opacity-40",
];

const skills = ["React", "TailwindCSS", "Three.js", "UX/UI"];

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative z-0 min-h-screen overflow-hidden pb-16 pt-28 md:pt-24"
    >
      <div className="absolute inset-0 mask-gradient">
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{ backgroundImage: `url(${backGround})` }}
        ></div>
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-300/15 blur-3xl"></div>
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl"></div>
        {[620, 860, 1100, 1340, 1580].map((size) => (
          <div key={size} className="hero-ring" style={{ width: size, height: size }} />
        ))}
      </div>
      {floatingStars.map((className) => (
        <div
          key={className}
          aria-hidden="true"
          className={`absolute hidden text-sky-300/70 md:block ${className}`}
        >
          <StarIcon />
        </div>
      ))}

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center">
        <div className="flex max-w-5xl flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-4 rounded-full bg-emerald-300/20 blur-2xl"></div>
            <img
              src={emojiImage}
              alt="Andrés saludando"
              width="192"
              height="192"
              className="relative size-32 rounded-full border border-line/10 bg-surface/5 p-2 shadow-2xl shadow-black/30 sm:size-40 md:size-48"
            />
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface/5 px-4 py-2 text-sm font-semibold text-fg/80 shadow-lg shadow-black/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(110,231,183,0.8)]"></span>
            Disponible para crear productos web
          </div>
          <p className="mt-6 text-lg font-semibold tracking-wide text-fg/80 sm:text-2xl">
            Hola, soy Andrés <span className="waving-hand">👋</span>
          </p>
          <h1 className="hero_tag mt-4 max-w-5xl text-fg">
            Desarrollo interfaces limpias, rápidas y con experiencias memorables.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-fg/60 sm:text-lg">
            FullStack Developer enfocado en React, diseño UI cuidado y soluciones
            web que combinan rendimiento, claridad y detalles interactivos.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-fg/60">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line/10 bg-surface/5 px-3 py-1.5"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a href="#Projects" className="w-full sm:w-fit">
            <Button
              isBeam
              name="Ver proyectos"
              containerClass="w-full sm:w-fit sm:min-w-48"
            />
          </a>

          <a href="#Contact" className="w-full sm:w-fit">
            <Button
              name="Hablemos"
              variant="secondary"
              containerClass="w-full sm:w-fit sm:min-w-48"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
