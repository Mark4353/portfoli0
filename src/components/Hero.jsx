import React, { useState, useEffect } from "react";
import "../App.css";

function Hero() {
  const fullText = "Пppивет, я Марк 👋";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 150); // скорость печати

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <h2>
        {displayedText}
        {isTyping && <span className="cursor">|</span>}
      </h2>
      <p>
        Frontend Developer | React | JavaScript |{" "}
        <span className="video-editing">
          <a href="/video">Video Editing</a>
        </span>
      </p>{" "}
      <div className="hero-buttons">
        <a href="#projects" className="btn-glow">
          Мои проекты
        </a>
        <a
          href="#contact"
          className="btn-glow"
          style={{ background: "#8b5cf6", marginLeft: "1rem" }}
        >
          Связаться
        </a>
      </div>
    </section>
  );
}

export default Hero;
