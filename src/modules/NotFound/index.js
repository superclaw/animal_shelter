import React from "react";
import {useLocation} from "react-router-dom";
import "./index.css";

const NotFound = () => (
    <div className="content not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__text">
        Страница <span className="not-found__path">{useLocation().pathname.replace('/animal_shelter/build/', '/')}</span> не найдена!
      </p>
    </div>
);

export default NotFound;