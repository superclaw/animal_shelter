import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";
import logo from "./banner.jpg";

const Header = () => (
    <header className="header">
      <div className="wrapper header__wrapper">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Логотип сайта" />
        </NavLink>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink to="/today" className="menu__link" activeClassName="menu__link--active">
                Сегодня
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals" className="menu__link" activeClassName="menu__link--active">
                Животные
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
);

export default Header;