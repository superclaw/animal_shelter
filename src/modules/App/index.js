import React from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {loginUser, changeInputValue, logoutUser} from "../../actions";
import "./index.css";

import Header from "../Header";
import Login from "../routes/Login";
import Animals from "../routes/Animals";
import Today from "../routes/Today";
import Main from "../routes/Main";
import Footer from "../Footer";
import NotFound from "../NotFound";

let App = ({state, loginUser, changeInputValue, logoutUser}) => (
    <Router basename="/animal_shelter/build/">
      <Header isLoggedIn={state.isLoggedIn} logoutUser={logoutUser} />
      <main className="main">
        <div className="wrapper main__wrapper">
          <Switch>
            <Route exact path="/login">
              <Login
                  isLoggedIn={state.isLoggedIn}
                  loginForm={state.loginForm}
                  loginUser={loginUser}
                  changeInputValue={changeInputValue} />
            </Route>
            <Route exact path="/animals">
              <Animals isLoggedIn={state.isLoggedIn} />
            </Route>
            <Route exact path="/today">
              <Today isLoggedIn={state.isLoggedIn} />
            </Route>
            <Route exact path="/">
              <Main redirect={state.redirect} />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </Router>
);

App = connect(
    state => ({
      state: state,
    }),
    dispatch => ({
      loginUser: (username, password) => dispatch(loginUser(username, password)),
      changeInputValue: (type, value) => dispatch(changeInputValue(type, value)),
      logoutUser: () => dispatch(logoutUser()),
    }),
)(App);

export default App;