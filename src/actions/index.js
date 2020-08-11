import {USERS} from "../index";
import Cookies from "js-cookie";
import {PATH_NAME} from "../index";

export const loginUser = (username, password) => async function(dispatch) {
  const users = await JSON.parse(USERS);                                  // "Загрузка с сервера"

  let result = false;

  users.forEach(el => {
    if (username === el.username && password === el.password) {
      result = true;
      Cookies.set('session_token', 'login_successful', {expires: 7});
    }
  });

  alert(PATH_NAME);

  dispatch({
    type: 'LOGIN_USER',
    result: result,
  });
};

export const changeInputValue = (type, value) => ({
  type: type === 'username' ? 'CHANGE_USERNAME_INPUT' : 'CHANGE_PASSWORD_INPUT',
  value: value,
});

export const logoutUser = () => {
  Cookies.remove('session_token');

  return {
    type: 'LOGOUT_USER',
  };
};