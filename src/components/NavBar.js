import React from "react";
import "../styles/NavBar.css"
import { Link } from "react-router-dom";
import logo from "../data/logo.png"

const  NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="surreal estate logo"/>
      <div className="navbar-links">
        <ul>
          <li className="navbar-links-item" >
            <Link className="item" to="/">
              View Properties
            </Link>
          </li>
          <li className="navbar-links-item">
            <Link className="item" to="/add-property" >
              Add a Property
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;