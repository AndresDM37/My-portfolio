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
    <section id="About" className="py-20 lg:py-28 lg:mt-1">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow={"Acerca de mí"}
          title={"Detrás del código"}
          description={
            "Si quiere saber más sobre mis habilidades, quién soy, qué hago y qué me inspira, éste es el lugar perfecto para empezar."
          }
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className={"text-white md:col-span-2"}>
              <CardHeader
                title={"¿Quién soy?"}
                description={
                  "Hola, soy Andrés Felipe Marchena Porras, un apasionado ingeniero de software especializado en React y desarrollo full-stack. Me encanta resolver problemas complejos, crear soluciones innovadoras y convertir ideas en realidad a través del código. ¡Construyamos algo increíble juntos!"
                }
              />
              <img
                src={Emoji}
                alt="Emoji"
                className="w-60 mx-auto mt-2 md:mt-0"
              />
            </Card>
            <Card
              className={
                "text-white h-[320px] md:col-span-3 sm-custom:h-[360px]"
              }
            >
              <CardHeader
                title={"Mi caja de herramientas"}
                description={
                  "Un conjunto de herramientas y tecnologías que uso para dar vida a las ideas, desde frameworks front-end a soluciones back-end."
                }
                className={"px-6 pt-6"}
              />
              <ToolBoxItems
                items={toolBoxItems}
                itemsWrapper="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className={"mt-6"}
                itemsWrapper="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <Card
            className={
              "text-white h-[320px] p-0 flex flex-col sm-custom:h-[380px]"
            }
          >
            <CardHeader
              title={"La vida fuera de la pantalla"}
              description={
                "Soy mucho más que un programador. Aquí encontrarás un vistazo a mis aficiones, pasiones y lo que me mantiene inspirado fuera del mundo digital. "
              }
              className={"px-6 py-6"}
            />
            <div className="relative flex-1 z-30" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-shadow"
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
            className="px-6 py-3 outline outline-2 outline-white/20 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-emerald-300/20 hover:to-sky-400/20 hover:outline-white/40 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 md:w-1/4 mx-auto text-center flex items-center justify-center gap-2 group"
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
            Descarga mi Hoja de Vida
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
