import React from "react";
import "../App.css";

function Header() {
  return (
    <header>
      <nav>
        <h1 style={{color:'#6366f1'}}>Portfolio</h1>
        <ul>
          <li><a href="#about">Обо мне</a></li>
          <li><a href="#skills">Навыки</a></li>
          <li><a href="#projects">Проекты</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
