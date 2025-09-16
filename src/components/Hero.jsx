import React from "react";
import "../App.css";

function Hero({ goVideo }) {
  return (
    <section className="hero">
      <h2 className="hero-title">Hi, I'm Mark 👋</h2>
      <p className="hero-description">
        Frontend Developer | React | JavaScript |{" "}
        <span
          className="video-editing"
          style={{ color: "#8b5cf6", cursor: "pointer", textDecoration: "none" }}
          onClick={goVideo}
        >
          Video Editing
        </span>
      </p>
      <div>
        <a href="#projects" className="btn-glow">
          My projects
        </a>
        <a
          href="#contact"
          className="btn-glow"
          style={{ background: "#8b5cf6", marginLeft: "1rem" }}
        >
          Contact me
        </a>
      </div>
    </section>
  );
}

export default Hero;
