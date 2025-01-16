import Header  from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tape from "./sections/Tape";
import Projects from "./sections/Projects";
import Study from "./sections/Study";

const App = () => {
  return (
    <main className="bg-gray-900 flex flex-col">
      <Header />
      <Hero />
      <About />
      <Tape />
      <Projects />
      <Study />
    </main>
  );
}

export default App;