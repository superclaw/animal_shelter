import React from "react";
import {useLocation, Redirect} from "react-router-dom";
import "./index.css";

const Main = () => {
  const query = new URLSearchParams(useLocation().search).get('redirect_to');
  return query ? <Redirect to={query.replace(/~and~/g, '&')} /> : (
      <h1 className="main__title">
        Официальный сайт приюта "Подари дом"
      </h1>
  )
};
export default Main;