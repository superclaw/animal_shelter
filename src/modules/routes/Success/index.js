import React from "react";
import {Redirect, NavLink} from "react-router-dom";
import "./index.css";

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
  }

  redirectToPage() {
    document.location.assign('/today');
  }

  componentDidMount() {
    if (this.isLoggedIn) setTimeout(this.redirectToPage, 2000);
  }

  render() {
    return !this.isLoggedIn ? <Redirect to="/login" /> : (
        <div className="content success">
          <h2 className="success__title">
            Успешный вход!
          </h2>
          <p className="success__message">
            Если переадресации не происходит, нажмите <NavLink to="/today" className="success__link">здесь</NavLink>.
          </p>
        </div>
    )
  }
}

export default Success;