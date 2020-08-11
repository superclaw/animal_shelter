import Cookies from "js-cookie";

const initState = {
  isLoggedIn: !!Cookies.get('session_token'),
  loginForm: {
    username: '',
    password: '',
    loginFailure: false,
  },
};

const setUsernameValue = (state, value) => ({
  ...state,
  loginForm: {
    ...state.loginForm,
    username: value,
  },
});

const setPasswordValue = (state, value) => ({
  ...state,
  loginForm: {
    ...state.loginForm,
    password: value,
  },
});

const getLoginResult = (state, result) => ({
  ...state,
  isLoggedIn: result,
  loginForm: {
    ...state.loginForm,
    username: '',
    password: '',
    loginFailure: !result,
  },
});

const logout = state => ({
  ...state,
  isLoggedIn: false,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_USERNAME_INPUT': return setUsernameValue(state, action.value);
    case 'CHANGE_PASSWORD_INPUT': return setPasswordValue(state, action.value);
    case 'LOGIN_USER': return getLoginResult(state, action.result);
    case 'LOGOUT_USER': return logout(state);
    default: return state;
  }
};

export default reducer;