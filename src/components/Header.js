import React from "react";
import logo from "../assets/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <center>
          <img className="logo" src={logo} alt="logo" />
        </center>
      </header>
    );
  }
}

export default Header;
