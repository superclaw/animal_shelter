import React from "react";
import {Redirect, NavLink} from "react-router-dom";
import {PATH_NAME} from "../../../index";
import "./index.css";

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
  }

  redirectToPage() {
    const url = `${window.location.protocol}//${window.location.host + PATH_NAME}today`;

    document.location.assign(url);
  }

  componentDidMount() {
    if (this.isLoggedIn) setTimeout(this.redirectToPage, 2000);
  }

  render() {
    return !this.isLoggedIn ? <Redirect to={`${PATH_NAME}login`} /> : (
        <div className="content success">
          <h2 className="success__title">
            Успешный вход!
          </h2>
          <p className="success__message">
            Если переадресации не происходит, нажмите <NavLink to={`${PATH_NAME}today`} className="success__link">здесь</NavLink>.
          </p>
        </div>
    )
  }
}

export default Success;