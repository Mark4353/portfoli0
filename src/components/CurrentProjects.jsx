import React from "react";
import currentProjects from "../data/currentProjects";
import "../App.css";

function CurrentProjects() {
  return (
    <section id="current-projects">
      <h2>Сейчас работаю над</h2>
      <div className="projects-grid">
        {currentProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
            <div className="project-links">
                <p>{project.message}</p>
              {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
                Подробнее
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CurrentProjects;