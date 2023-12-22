import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faHouse, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Navbar.css";
import Auth from '../utils/authUtil';

const Navbar = () => {
  const location = useLocation();
  const getActiveButton = () => {
    const pathname = location.pathname;

    switch (pathname) {
      case "/":
        return "home";
      case "/GameCatalog":
        return "games";
      case "/login":
        return "login";
      default:
        return "";
    }
  };

  const renderButtons = () => {
    const activeButton = getActiveButton();

    return (
      <>
        <div className="wave"></div>
        <div className="col">
          <Link id="home" to="/" className={activeButton === "home" ? "active" : ""}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </Link>
        </div>

        <div className="col">
          <Link id="games" to="/GameCatalog" className={activeButton === "games" ? "active" : ""}>
            <FontAwesomeIcon icon={faGamepad} />
            Games
          </Link>
        </div>

        {Auth.isLoggedIn() ? (
          <div className="col">
            <button onClick={() => Auth.logout()} id="login"  className={activeButton === "login" ? "active" : ""}>
              <FontAwesomeIcon icon={faDoorOpen} />
              Logout
            </button>
          </div>
        ) : (
          <div className="col">
            <Link id="login" to="/login" className={activeButton === "login" ? "active" : ""}>
              <FontAwesomeIcon icon={faDoorOpen} />
              Login
            </Link>
          </div>
        )}


      </>
    );
  };

  return (
    <>
      <div>
        <header className="Navbar" id="Navbar-component-main">
          <div className="wave"></div>
          <div className="wave"></div>
          <nav className="navbar sticky-top bg-body-tertiary">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1">
                <div className="wave"></div>
                <div className="wave"></div>
                <h1 id="Navbar-title">Kon-Bon Gaming</h1>
                <div className="wave"></div>
                <div className="wave"></div>
              </span>
              <div id="nav-buttons-container" className="row row-cols-3">
                {renderButtons()}
              </div>
              <div className="wave"></div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
