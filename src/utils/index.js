import ReacIcon from "../assets/icons/react.svg";
import CSSIcon from "../assets/icons/css.svg";
import JSIcon from "../assets/icons/js.svg";
import TailwindCSSIcon from "../assets/icons/tailwindcss.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import HtmlIcon from "../assets/icons/html.svg";
import NextIcon from "../assets/icons/nextjs.svg";

import {
  JavascriptIcon,
  HTMLIcon,
  CssIcon,
  ReactIcon,
  GitHubIcon,
  NodeIcon,
  FigmaIcon,
  SQLIcon,
  JiraIcon,
  PlatziIcon,
  UMBIcon,
  CiscoIcon,
  NDGIcon,
  ScrumIcon,
  NextJSIcon,
} from "../components/Icons";

import image from "../assets/images/certifications/image.png";
import image2 from "../assets/images/certifications/image2.png";
import image4 from "../assets/images/certifications/image4.png";
import image5 from "../assets/images/certifications/image5.png";
import image6 from "../assets/images/certifications/image6.png";
import image7 from "../assets/images/certifications/image7.png";
import image8 from "../assets/images/certifications/image8.png";

export const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node.js",
    iconType: NodeIcon,
  },
  {
    title: "Next.js",
    iconType: NextJSIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "MySql",
    iconType: SQLIcon,
  },
  {
    title: "Jira",
    iconType: JiraIcon,
  },
];

export const hobbies = [
  {
    title: "Musica",
    emoji: "🎵",
    left: "5%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "40%",
    top: "2%",
  },
  {
    title: "Magia",
    emoji: "🎩",
    left: "3%",
    top: "35%",
  },
  {
    title: "Ping Pong",
    emoji: "🏓",
    left: "35%",
    top: "40%",
  },
  {
    title: "VideoJuegos",
    emoji: "🎮",
    left: "72%",
    top: "21%",
  },
  {
    title: "Viajar",
    emoji: "✈️",
    left: "8%",
    top: "65%",
  },
  {
    title: "BeatBox",
    emoji: "🎤",
    left: "38%",
    top: "70%",
  },
  {
    title: "Peliculas",
    emoji: "🎥",
    left: "65%",
    top: "55%",
  },
];

export const myProjects = [
  {
    title: "E-commerce",
    position: "Frontend Developer",
    date: "Nov 2024",
    desc: "Desarrollo de un carrito de la compra interactivo utilizando React, con productos obtenidos dinámicamente de una API para garantizar un catálogo siempre actualizado, permitiendo a los usuarios añadir, eliminar y gestionar las cantidades de productos en el carrito, con las mejores prácticas implementadas para la gestión del estado y la interacción API para mejorar la eficiencia y la experiencia del usuario.",
    href: "https://shopping-cart-with-react-andev.netlify.app",
    texture: "/textures/project/project1.mp4",
    isInProgress: false,
    tags: [
      {
        id: 1,
        name: "React.js",
        path: ReacIcon,
      },
      {
        id: 2,
        name: "CSS",
        path: CSSIcon,
      },
      {
        id: 3,
        name: "JavaScript",
        path: JSIcon,
      },
    ],
  },
  {
    title: "JavaScript Quiz",
    position: "Frontend Developer",
    date: "Oct 2024",
    desc: "Desarrollo de un quiz interactivo sobre JavaScript, utilizando React y TypeScript. La aplicación presenta preguntas sobre distintos conceptos de JavaScript, permitiendo a los usuarios responder y recibir retroalimentación en tiempo real.",
    href: "https://quiz-of-javascript.netlify.app",
    texture: "/textures/project/project2.mp4",
    isInProgress: false,
    tags: [
      {
        id: 1,
        name: "React.js",
        path: ReacIcon,
      },
      {
        id: 2,
        name: "CSS",
        path: CSSIcon,
      },
      {
        id: 3,
        name: "TypeScript",
        path: TypeScriptIcon,
      },
    ],
  },
  {
    title: "Clon MonkeyType",
    position: "Frontend Developer",
    date: "Jun 2024",
    desc: "Desarrollo de un juego interactivo de mecanografía que desafía la velocidad y precisión al escribir, diseñado con JavaScript Vanilla. Presenta generación dinámica de palabras, estadísticas detalladas de desempeño (WPM y precisión), cambio de idioma en tiempo real y opciones de personalización del tiempo de juego.",
    href: "https://monkeytypeclon.netlify.app",
    texture: "/textures/project/project3.mp4",
    isInProgress: false,
    tags: [
      {
        id: 1,
        name: "CSS",
        path: CSSIcon,
      },
      {
        id: 2,
        name: "HTML",
        path: HtmlIcon,
      },
      {
        id: 3,
        name: "JavaScript",
        path: JSIcon,
      },
    ],
  },
  {
    title: "Docs",
    position: "FullStack Developer",
    date: "Ene 2025",
    desc: "Proyecto de edición colaborativa en tiempo real, con autenticación mediante Clerk, sincronización con Liveblocks y diseño accesible con Shadcn-UI. Optimiza la colaboración y productividad con una experiencia fluida e intuitiva.",
    href: "https://andev-docs.vercel.app",
    texture: "/textures/project/project4.mp4",
    isInProgress: false,
    tags: [
      {
        id: 1,
        name: "React",
        path: ReacIcon,
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: TailwindCSSIcon,
      },
      {
        id: 3,
        name: "TypeScript",
        path: TypeScriptIcon,
      },
      {
        id: 4,
        name: "NextJS",
        path: NextIcon,
      },
    ],
  },
  {
    title: "Portafolio",
    position: "FrontEnd Developer",
    date: "Ene 2025",
    desc: "Desarrollo de un portafolio personal que muestra mi vida, proyectos y formación académica, con un diseño atractivo que resalta mis habilidades, experiencias y logros de manera organizada y visualmente atractiva.",
    href: "#",
    texture: "/textures/project/project6.mp4",
    isInProgress: false,
    tags: [
      {
        id: 1,
        name: "React.js",
        path: ReacIcon,
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: TailwindCSSIcon,
      },
      {
        id: 3,
        name: "JavaScript",
        path: JSIcon,
      },
    ],
  },
];

export const studyItems = [
  {
    title: "FrontEnd Developer",
    icon: PlatziIcon,
    dateFinish: "Mar 2024",
    schoolar: "Platzi",
    image: image4,
    state: false,
  },
  {
    title: "Full Stack Developer with JavaScript",
    icon: PlatziIcon,
    dateFinish: "Oct 2024",
    schoolar: "Platzi",
    image: image5,
    state: false,
  },
  {
    title: "React Avanzado",
    icon: PlatziIcon,
    dateFinish: "Nov 2024",
    schoolar: "Platzi",
    image: image6,
    state: false,
  },
  {
    title: "Git y Github",
    icon: PlatziIcon,
    dateFinish: "Ene 2025",
    schoolar: "Platzi",
    image: image8,
    state: false,
  },
  {
    title: "Scrum Fundamentals Certified",
    icon: ScrumIcon,
    dateFinish: "Sept 2023",
    schoolar: "Scrum Study",
    image: image7,
    state: false,
  },
  {
    title: "Switching, Routing and Wireless Essentials",
    icon: CiscoIcon,
    dateFinish: "Jun 2023",
    schoolar: "Cisco",
    image: image,
    state: false,
  },
  {
    title: "Linux Essentials",
    icon: NDGIcon,
    dateFinish: "Sept 2023",
    schoolar: "NDG",
    image: image2,
    state: false,
  },
  {
    title: "Ingenieria de Software",
    icon: UMBIcon,
    dateFinish: "Feb 2021",
    schoolar: "UMB",
    image: image,
    state: true,
  },
];

/**
 * Datos de Experiencia Laboral
 * Estructura escalable para agregar más trabajos según se vayan sumando
 * Cada entrada contiene información completa del rol y logros
 */
export const experienceItems = [
  {
    company: "Xcargo",
    position: "Desarrollador Full Stack",
    startDate: "10/2025",
    endDate: "Actualmente",
    isCurrentJob: true,
    description:
      "Apoyo en el desarrollo, mantenimiento y mejora de módulos internos de la empresa, contribuyendo a la optimización de procesos en áreas como Talento Humano, Contabilidad y Operaciones. Mi labor se enfoca en mejorar la eficiencia y usabilidad de las herramientas internas.",
    achievements: [
      "Desarrollo y soporte de aplicaciones internas orientadas a la gestión administrativa y operativa",
      "Implementación de mejoras funcionales y corrección de incidencias en sistemas existentes",
      "Colaboración con equipos de diferentes áreas para identificar requerimientos y proponer soluciones tecnológicas eficientes",
    ],
    tags: [
      {
        id: 1,
        name: "React.js",
        icon: ReactIcon,
      },
      {
        id: 2,
        name: "Node.js",
        icon: NodeIcon,
      },
      {
        id: 3,
        name: "Python",
        icon: JavascriptIcon,
      },
      {
        id: 4,
        name: "PostgreSQL",
        icon: SQLIcon,
      },
      {
        id: 5,
        name: "Next.js",
        icon: NextJSIcon,
      },
      {
        id: 6,
        name: "GitHub",
        icon: GitHubIcon,
      },
      {
        id: 7,
        name: "Tailwind CSS",
        icon: TailwindCSSIcon,
      },
    ],
  },
  {
    company: "Cemex",
    position: "Practicante Profesional - Ingeniero de Software",
    startDate: "04/2025",
    endDate: "10/2025",
    isCurrentJob: false,
    description:
      "Apoyé la automatización de operaciones regionales mediante desarrollo de scripts en Visual Basic y Python, optimizando tareas repetitivas y reduciendo tiempos de ejecución. Diseñé y gestioné dashboards en Power BI para análisis de datos, facilitando la toma de decisiones estratégicas. Participé en la creación de aplicaciones y páginas web internas.",
    achievements: [
      "Automatización de operaciones regionales con scripts en Visual Basic y Python",
      "Diseño y gestión de dashboards en Power BI para análisis de datos estratégicos",
      "Creación de aplicaciones y páginas web internas para mejorar eficiencia operativa",
      "Optimización de tareas repetitivas reduciendo significativamente tiempos de ejecución",
    ],
    tags: [
      {
        id: 1,
        name: "React.js",
        icon: ReactIcon,
      },
      {
        id: 2,
        name: "JavaScript",
        icon: JavascriptIcon,
      },
      {
        id: 3,
        name: "Python",
        icon: NodeIcon,
      },
      {
        id: 4,
        name: "Tailwind CSS",
        icon: TailwindCSSIcon,
      },
      {
        id: 5,
        name: "GitHub",
        icon: GitHubIcon,
      },
    ],
  },
];
