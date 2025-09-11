import React, { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CurrentProjects from "./components/CurrentProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Video from "./components/pages/Video";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const [page, setPage] = useState("home");

  if (page === "video") {
    return <Video goHome={() => setPage("home")} />;
  }

  return (
    <div>
      <Hero goVideo={() => setPage("video")} />
      <About />
      <Skills />
      <Projects />
      <CurrentProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
