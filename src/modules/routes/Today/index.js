import React from "react";
import {Redirect} from "react-router-dom";
import "./index.css";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "../Animals/img/7.jpg";
import img8 from "../Animals/img/8.jpg";
import img9 from "../Animals/img/9.jpg";
import img10 from "../Animals/img/10.jpg";
import img11 from "../Animals/img/11.jpg";
import img12 from "../Animals/img/12.jpg";
import img13 from "../Animals/img/13.jpg";
import img14 from "../Animals/img/14.jpg";
import img15 from "../Animals/img/15.jpg";

const Today = ({isLoggedIn}) => !isLoggedIn ? <Redirect to="/login" /> : (
    <div className="content today">
      <h2 className="today__title">Назначения на сегодня</h2>
      <ul className="today__list">
        <li className="today__item">
          <img src={img1} alt="Домашнее животное" className="today__img" />
        </li>
        <li className="today__item">
          <img src={img2} alt="Домашнее животное" className="today__img" />
        </li>
        <li className="today__item">
          <img src={img3} alt="Домашнее животное" className="today__img" />
        </li>
        <li className="today__item">
          <img src={img4} alt="Домашнее животное" className="today__img" />
        </li>
        <li className="today__item">
          <img src={img5} alt="Домашнее животное" className="today__img" />
        </li>
        <li className="today__item">
          <img src={img6} alt="Домашнее животное" className="today__img" />
        </li>
      </ul>
    </div>
);

export default Today;