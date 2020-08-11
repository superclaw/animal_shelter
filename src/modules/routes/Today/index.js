import React from "react";
import {Redirect} from "react-router-dom";
import {PATH_NAME} from "../../../index";
import "./index.css";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";

const Today = ({isLoggedIn}) => !isLoggedIn ? <Redirect to={`${PATH_NAME}login`} /> : (
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