import React from "react";
import {Redirect} from "react-router-dom";
import "./index.css";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";
import img11 from "./img/11.jpg";
import img12 from "./img/12.jpg";
import img13 from "./img/13.jpg";
import img14 from "./img/14.jpg";
import img15 from "./img/15.jpg";

const Animals = ({isLoggedIn}) => !isLoggedIn ? <Redirect to="/login" /> : (
    <div className="content animals">
      <h2 className="animals__title">Наши животные</h2>
      <ul className="animals__list">
        <li className="animals__item">
          <img src={img1} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img2} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img3} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img4} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img5} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img6} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img7} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img8} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img9} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img10} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img11} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img12} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img13} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img14} alt="Домашнее животное" className="animals__img" />
        </li>
        <li className="animals__item">
          <img src={img15} alt="Домашнее животное" className="animals__img" />
        </li>
      </ul>
    </div>
);

export default Animals;