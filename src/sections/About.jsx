"use client";
import Emoji from "../assets/images/emoji2.png";
import { hobbies } from "../utils";
import { toolBoxItems } from "../utils";

import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import ToolBoxItems from "../components/ToolBoxItems";

import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const constraintRef = useRef(null);

  return (
    <section id="About" className="section-spacing lg:mt-1">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow={"Acerca de mí"}
          title={"Detrás del código"}
          description={
            "Un vistazo rápido a cómo trabajo, qué tecnologías uso y qué detalles me inspiran a construir mejores experiencias digitales."
          }
        />
        <div className="mt-14 flex flex-col gap-8 md:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className={"text-white md:col-span-2"}>
              <CardHeader
                title={"¿Quién soy?"}
                description={
                  "Soy Andrés Felipe Marchena Porras, ingeniero de software y desarrollador full-stack. Me gusta transformar ideas en productos claros, funcionales y visualmente cuidados."
                }
              />
              <div className="px-6 pb-8 md:px-10">
                <div className="relative mx-auto mt-1 flex aspect-square max-w-[220px] items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
                  <div className="absolute inset-8 rounded-full bg-emerald-300/20 blur-2xl"></div>
                  <img src={Emoji} alt="Andrés en versión ilustrada" className="relative w-48" />
                </div>
              </div>
            </Card>
            <Card
              className={
                "min-h-[360px] text-white md:col-span-3"
              }
            >
              <CardHeader
                title={"Mi caja de herramientas"}
                description={
                  "Tecnologías que uso para diseñar, desarrollar y entregar interfaces modernas con una experiencia sólida de principio a fin."
                }
                className={"px-6 pt-6"}
              />
              <div className="pb-8 pt-2">
                <ToolBoxItems
                  items={toolBoxItems}
                  itemsWrapper="animate-move-left [animation-duration:32s]"
                />
                <ToolBoxItems
                  items={toolBoxItems}
                  className={"mt-6"}
                  itemsWrapper="animate-move-right [animation-duration:24s]"
                />
              </div>
              <div className="mx-6 mb-6 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 text-sm text-white/65 sm:grid-cols-3 md:mx-10">
                <p><span className="font-semibold text-white">Diseño:</span> UI limpia y usable</p>
                <p><span className="font-semibold text-white">Código:</span> componentes mantenibles</p>
                <p><span className="font-semibold text-white">Entrega:</span> rendimiento y detalle</p>
              </div>
            </Card>
          </div>
          <Card
            className={
              "flex min-h-[360px] flex-col p-0 text-white md:min-h-[390px]"
            }
          >
            <CardHeader
              title={"La vida fuera de la pantalla"}
              description={
                "También construyo criterio fuera del código: música, deporte, creatividad y curiosidad alimentan la forma en que resuelvo problemas."
              }
              className={"px-6 py-6"}
            />
            <div className="relative z-30 min-h-[210px] flex-1 overflow-hidden px-4 pb-6" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="absolute inline-flex cursor-grab items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-emerald-300 to-sky-400 px-5 py-2 shadow-lg shadow-emerald-500/10 transition-shadow hover:shadow-xl hover:shadow-emerald-500/25 active:cursor-grabbing"
                  style={{ left: hobby.left, top: hobby.top }}
                  drag
                  dragConstraints={constraintRef}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <a
            href="/documents/HV/Ingeniero de Software - FrontEnd Developer.pdf"
            download="/Ingeniero de Software - FrontEnd Developer.pdf"
            className="group mx-auto flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/10 hover:shadow-emerald-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:w-fit"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Descargar hoja de vida
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
