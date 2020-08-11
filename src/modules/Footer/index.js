import React from "react";
import "./index.css";

const Footer = () => (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        Изображения взяты с сайта&nbsp;
        <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="footer__link">
          Unsplash
        </a>.
      </div>
    </footer>
);

export default Footer;