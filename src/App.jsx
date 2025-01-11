import Header  from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tape from "./sections/Tape";

const App = () => {
  return (
    <main className="bg-gray-900 flex flex-col gap-32">
      <Header />
      <Hero />
      <About />
      <Tape />
    </main>
  );
}

export default App;