import React from "react";
import {Redirect} from "react-router-dom";
import {PATH_NAME} from "../../../index";
import "./index.css";

const Login = ({isLoggedIn, loginForm, loginUser, changeInputValue}) => {
  return isLoggedIn ? <Redirect to={`${PATH_NAME}today`} /> : (
      <div className="content login">
        <h2 className="login__title">Пожалуйста, войдите под своим логином и паролем.</h2>
        <form
            action="#"
            className={!loginForm.loginFailure ? "login__form" : "login__form login__form--failure"}
            onSubmit={ev => {
              ev.preventDefault();
              return loginUser(loginForm.username, loginForm.password);
            }}>
          <label htmlFor="username" className="login__label">Ваш логин:</label>
          <input type="text" onChange={ev => changeInputValue('username', ev.target.value)} value={loginForm.username}
                 className="login__input" id="username" name="username" placeholder="Введите ваш логин" required />
          <label htmlFor="password" className="login__label">Ваш пароль:</label>
          <input type="text" onChange={ev => changeInputValue('password', ev.target.value)} value={loginForm.password}
                 className="login__input" id="password" name="password" placeholder="Введите ваш пароль" required />
          <input type="submit" className="btn" value="Войти" />
        </form>
      </div>
  );
};

export default Login;