import React from "react";
import connect from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";

import Header from "../Header";
import Login from "../routes/Login";
import Animals from "../routes/Animals";
import Today from "../routes/Today";
import Main from "../routes/Main";
import Footer from "../Footer";

import "./index.css";

let App = () => (
    <Router>
      <Header />
      <main className="main">
        <div className="wrapper main__wrapper">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/animals">
              <Animals />
            </Route>
            <Route path="/today">
              <Today />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </Router>
);

export default App;