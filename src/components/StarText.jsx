import React, { useState, useEffect } from "react";
import "./StarText.css";

export default function StarText({ text }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="star-text-wrapper">
      <span className="star-anim">★</span>
      <span className={`star-anim-text ${showText ? "show" : ""}`}>{text}</span>
    </div>
  );
}