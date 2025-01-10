import Header  from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main className="bg-gray-900">
      <Header />
      <Hero />
      <Projects />
    </main>
  );
}

export default App;