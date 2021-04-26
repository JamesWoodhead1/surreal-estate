import React from "react";
import "../styles/NavBar.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Link } from "react-router-dom";
import logo from "../data/logo.png";
import PropTypes from "prop-types"

const  NavBar = ({ onLogin, userId, onLogout }) => {
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

            {userId ? (
              <button type="button" onClick={onLogout}>
                Log out
              </button>
            ) : (
            <FacebookLogin
              appId="1088597931155576"
              callback={onLogin}
              render={(renderProps) => (
                <button type="button" onClick={renderProps.onClick}>
                  Login with Facebook
                </button>
              )} 
            />
            )} 
          </li>
        </ul>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;