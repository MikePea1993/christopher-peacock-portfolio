import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="h-screen snap-start snap-always">
        <Hero />
      </div>
      <div className="h-screen snap-start snap-always">
        <About />
      </div>
      <div className="h-screen snap-start snap-always">
        <Projects />
      </div>
    </div>
  );
}

export default App;
