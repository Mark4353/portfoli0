// src/components/pages/Video.jsx
import React from "react";
import "../../App.css"; // общий стиль
import Contact from "../Contact";
import Footer from "../Footer";

function Video() {
  return (
    <div className="video-page">
      <div className="video-container">
        <h2>Я Марк, видео монтажёр 🎬</h2>
        <h3>
          Помимо <span className="clickable"><a href="./">фронтенда</a></span> я создаю креативные видео и умею работать с
          различными инструментами для монтажа.
        </h3>
        <p>
          Работаю с <strong>Adobe Premiere Pro</strong>,{" "}
          <strong>After Effects</strong> и другими программами.
        </p>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Video;
