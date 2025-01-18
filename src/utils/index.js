import ReacIcon from "../assets/icons/react.svg";
import CSSIcon from "../assets/icons/css.svg";
import JSIcon from "../assets/icons/js.svg";
import TailwindCSSIcon from "../assets/icons/tailwindcss.svg";
import TypeScriptIcon from "../assets/icons/typescript.svg";
import HtmlIcon from "../assets/icons/html.svg";
import MySQLIcon from "../assets/icons/mysql.svg";
import NodeJSIcon from "../assets/icons/node.svg";

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
  
} from "../components/Icons";

import image from "../assets/images/certifications/image.png";
import image2 from "../assets/images/certifications/image2.png";
import image4 from "../assets/images/certifications/image4.png";
import image5 from "../assets/images/certifications/image5.png";
import image6 from "../assets/images/certifications/image6.png";
import image7 from "../assets/images/certifications/image7.png";

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
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Magic",
    emoji: "🎩",
    left: "10%",
    top: "35%",
  },
  {
    title: "Ping Pong",
    emoji: "🏓",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "70%",
    top: "45%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "15%",
    top: "65%",
  },
  {
    title: "BeatBox",
    emoji: "🎤",
    left: "55%",
    top: "70%",
  },
];

export const myProjects = [
  {
    title: "E-commerce",
    position: "Frontend Developer",
    date: "Nov 2024",
    desc: "Development of an interactive shopping cart using React, featuring dynamically fetched products from an API to ensure an always up-to-date catalog, allowing users to add, remove, and manage product quantities in the cart, with best practices implemented for state management and API interaction to enhance efficiency and user experience",
    href: "https://shopping-cart-with-react-andev.netlify.app",
    texture: "",
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
    desc: "Development of an interactive JavaScript quiz using React and TypeScript, featuring questions on various JavaScript concepts, real-time feedback for user responses, robust type handling with TypeScript, and an intuitive interface designed to enhance the user experience and promote dynamic learning",
    href: "#",
    texture: "/textures/project/project2.mp4",
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
    desc: "adadadasddddddddddddddd",
    href: "#",
    texture: "",
    tags: [],
  },
  {
    title: "Paint Window",
    position: "Frontend Developer",
    date: "Sept 2024",
    desc: "Development of an interactive drawing application using Vanilla JavaScript, HTML, and CSS, featuring tools like brush, eraser, rectangles, and ellipses, a color picker integrated with the EyeDropper API, an intuitive interface with interactive buttons, text animation effects, and precise drawing controls via mouse events",
    href: "https://paint-window-andev.netlify.app",
    texture: "/textures/project/project1.mp4",
    tags: [
      {
        id: 1,
        name: "CSS",
        path: CSSIcon,
      },
      {
        id: 2,
        name: "JavaScript",
        path: JSIcon,
      },
    ],
  },
  {
    title: "Chat",
    position: "Frontend Developer",
    date: "Oct 2024",
    desc: "Development of a real-time chat application using MySQL as the database, Node.js for server logic, and HTML/CSS for the front-end, featuring instant communication through a clean and functional interface, real-time message updates, and a focus on simplicity, performance, and system scalability",
    href: "#",
    texture: "",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: HtmlIcon,
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
      {
        id: 4,
        name: "NodeJS",
        path: NodeJSIcon,
      },
      {
        id: 5,
        name: "MySQL",
        path: MySQLIcon,
      },
    ],
  },
  {
    title: "Portfolio",
    position: "FullStack Developer",
    date: "Jan 2025",
    desc: "Creation of a personal portfolio to showcase my life, projects, and academic background, designed to provide an engaging and comprehensive overview of my work, skills, and experiences",
    href: "#",
    texture: "",
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
    title: "Software Engineering",
    icon: UMBIcon,
    dateFinish: "Feb 2021",
    schoolar: "Universidad Manuela Beltran",
    image: image,
    state: true,
  },
];
