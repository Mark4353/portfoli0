import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer>
        <p>я в Телеграме <a className="telegram-link" href="https://t.me/der1xPortfolio/9" target="_blank" rel="noopener noreferrer">der1x222</a></p>
      <p>© {new Date().getFullYear()} der1x. Сделано с ❤️ и React ⚛️</p>
    </footer>
  );
}

export default Footer;
