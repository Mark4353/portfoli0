import React from "react";
import "../App.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js","Vue.js", "Git"];

function Skills() {
  return (
    <section id="skills">
      <h2>Навыки</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
