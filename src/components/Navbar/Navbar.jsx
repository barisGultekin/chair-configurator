import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { Turn as Hamburger } from "hamburger-react";

import "./Navbar.scss";

const Navbar = ({ isScrolledPastAnimation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleMenuToggle = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`navbar ${
        isScrolledPastAnimation || !isHomePage ? "default" : "dark"
      }`}
    >
      <div className="header">
        <a href="/" className="logo">
          <img
            className="default-logo"
            src="/assets/logo.png"
            alt="Mount Chairs"
          />
          <img
            className="light-logo"
            src="/assets/logo-light.png"
            alt="Mount Chairs"
          />
        </a>

        <div className="links">
          <a href="/" className={`link ${isActive("/") ? "active-link" : ""}`}>
            Home
          </a>
          <a
            href="/configurator"
            className={`link ${isActive("/configurator") ? "active-link" : ""}`}
          >
            Configurator
          </a>
          <a
            href="/assets"
            className={`link ${isActive("/assets") ? "active-link" : ""}`}
          >
            Assets
          </a>
        </div>
      </div>

      <div className="contacts">
        <div className="github">
          <div className="img-wrapper">
            <img src="/assets/github-logo.svg" alt="GitHub Link" />
          </div>
          GitHub
        </div>
        <div className="case-study">Case Study</div>
      </div>

      <div
        className={`toggle ${
          isScrolledPastAnimation || !isHomePage ? "default" : "dark"
        }`}
      >
        <Hamburger toggled={menuOpen} toggle={handleMenuToggle} />
      </div>

      {menuOpen && (
        <div className={`menu ${closing ? "fade-out" : ""}`}>
          <a
            href="/"
            className={`menu-item ${isActive("/") ? "active-link" : ""}`}
          >
            Home
          </a>
          <a
            href="/configurator"
            className={`menu-item ${
              isActive("/configurator") ? "active-link" : ""
            }`}
          >
            Configurator
          </a>
          <a
            href="/assets"
            className={`menu-item ${isActive("/assets") ? "active-link" : ""}`}
          >
            Assets
          </a>
          <div className="github">
            <div className="img-wrapper">
              <img src="/assets/github-logo.svg" alt="GitHub Link" />
            </div>
            GitHub
          </div>
          <div className="case-study">Case Study</div>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  isScrolledPastAnimation: PropTypes.bool,
};

export default Navbar;
