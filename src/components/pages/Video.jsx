import React from "react";
import "../../App.css";
import Contact from "../Contact";
import Footer from "../Footer";
import Price from "./Price";
import StarText from "../StarText";
function Video() {
  return (
    <div className="video-page">
      <div className="video-container">
        <h2>
          <StarText text="Я Марк, видео монтажёр 🎬" />
        </h2>
        <h3>
          Помимо{" "}
          <span className="clickable">
            <a href="./">Фронтенда</a>
          </span>{" "}
          я монтирую классные и красивые видео)
        </h3>
        <p>
          Работаю с <strong>Adobe Premiere Pro</strong> и{" "}
          <strong>After Effects</strong>
        </p>
        <Price />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Video;
