import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CurrentProjects from "./components/CurrentProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Video from "./components/pages/Video"; // пока убираем роутинг

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <CurrentProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
