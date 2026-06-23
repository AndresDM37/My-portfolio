import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tape from "./sections/Tape";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Study from "./sections/Study";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="flex flex-col">
        <Hero />
        <About />
        <Tape />
        <Projects />
        <Experience />
        <Study />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
