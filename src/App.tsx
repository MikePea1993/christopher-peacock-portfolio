import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div
      className="overflow-y-scroll lg:h-screen lg:snap-y lg:snap-mandatory"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="lg:h-screen lg:snap-start lg:snap-always">
        <Hero />
      </div>
      <div className="lg:h-screen lg:snap-start lg:snap-always">
        <About />
      </div>
      <div className="lg:h-screen lg:snap-start lg:snap-always">
        <Projects />
      </div>
    </div>
  );
}

export default App;
