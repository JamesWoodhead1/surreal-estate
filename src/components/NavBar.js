import React from "react";
import "../styles/NavBar.css"
import logo from "../data/logo.png"

const  NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="surreal estate logo"/>
      <div className="navbar-links">
        <ul>
          <li className="navbar-links-item" >
            View Properties
          </li>
          <li className="navbar-links-item">
            Add a Property
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;