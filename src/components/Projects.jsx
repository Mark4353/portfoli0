// src/components/Projects.jsx
import React from "react";
import projects from "../data/projectsData";
import "../App.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Mini-Проекты и Проекты</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Projects;
