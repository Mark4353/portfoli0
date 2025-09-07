import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CurrentProjects from "./components/CurrentProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Video from "./components/pages/Video";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Hero />
              <Projects />
              <CurrentProjects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/video" element={<Video />} /> {/* новая страница */}
      </Routes>
    </Router>
  );
}

export default App;
