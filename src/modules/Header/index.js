import React from "react";
import {NavLink} from "react-router-dom";
import {PATH_NAME} from "../../index";
import "./index.css";
import logo from "./banner.jpg";

const Header = ({isLoggedIn, logoutUser}) => {
  const loginBtn = isLoggedIn
      ? <button className="btn" onClick={() => logoutUser()}>Выйти</button>
      : <NavLink to="/login" className="btn">Войти</NavLink>;

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <NavLink to={PATH_NAME} className="logo" title="На главную">
          <img src={logo} alt="Логотип сайта" className="logo__img" />
        </NavLink>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink to={`${PATH_NAME}today`} className="menu__link" activeClassName="menu__link--active">
                Сегодня
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={`${PATH_NAME}animals`} className="menu__link" activeClassName="menu__link--active">
                Животные
              </NavLink>
            </li>
          </ul>
        </nav>
        {loginBtn}
      </div>
    </header>
  );
};

export default Header;