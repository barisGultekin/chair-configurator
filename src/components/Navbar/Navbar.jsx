import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

import "./Navbar.scss";

const Navbar = ({ isScrolledPastAnimation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // New state for mobile detection
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const menuRef = useRef(null);

  // Handle window resize to detect mobile devices
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 860);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 200);
    } else {
      setMenuOpen(true);
    }
  };

  const handleCloseMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 200);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      handleCloseMenu();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`navbar ${
        isMobile || isScrolledPastAnimation || !isHomePage ? "default" : "dark"
      }`}
    >
      <div className="header">
        <a
          href="/chair-configurator/"
          className="logo"
          onClick={handleCloseMenu}
        >
          <img
            className="default-logo"
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="Mount Chairs"
          />
          <img
            className="light-logo"
            src={`${import.meta.env.BASE_URL}assets/logo-light.png`}
            alt="Mount Chairs"
          />
        </a>

        <div className="links">
          <a
            href="/chair-configurator/"
            className={`link ${isActive("/") ? "active-link" : ""}`}
          >
            Home
          </a>
          <a
            href="/chair-configurator/#/configurator"
            className={`link ${isActive("/configurator") ? "active-link" : ""}`}
          >
            Configurator
          </a>
          <a
            href="/chair-configurator/#/assets"
            className={`link ${isActive("/assets") ? "active-link" : ""}`}
          >
            Assets
          </a>
        </div>
      </div>

      <div className="contacts">
        <a
          target="_blank"
          href="https://github.com/barisGultekin/chair-configurator"
          className="github"
        >
          <div className="img-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}assets/github-logo.svg`}
              alt="GitHub Link"
            />
          </div>
          GitHub
        </a>
        <a
          target="_blank"
          href="https://barisgultekin.com/#/projects/ardeo"
          className="case-study"
        >
          Case Study
        </a>
      </div>

      <div
        className={`toggle ${
          isMobile || isScrolledPastAnimation || !isHomePage ? "default" : "dark"
        }`}
      >
        <Hamburger toggled={menuOpen} toggle={handleMenuToggle} />
      </div>

      {menuOpen && (
        <div className={`menu ${closing ? "fade-out" : ""}`} ref={menuRef}>
          <a
            href="/chair-configurator/"
            className={`menu-item ${isActive("/") ? "active-link" : ""}`}
            onClick={handleCloseMenu}
          >
            Home
          </a>
          <a
            href="/chair-configurator/#/configurator"
            className={`menu-item ${isActive("/configurator") ? "active-link" : ""}`}
            onClick={handleCloseMenu}
          >
            Configurator
          </a>
          <a
            href="/chair-configurator/#/assets"
            className={`menu-item ${isActive("/assets") ? "active-link" : ""}`}
            onClick={handleCloseMenu}
          >
            Assets
          </a>
          <a
            target="_blank"
            href="https://github.com/barisGultekin/chair-configurator"
            className="github"
          >
            <div className="img-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}assets/github-logo.svg`}
                alt="GitHub Link"
              />
            </div>
            GitHub
          </a>
          <a
            target="_blank"
            href="https://barisgultekin.com/#/projects/ardeo"
            className="case-study"
          >
            Case Study
          </a>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  isScrolledPastAnimation: PropTypes.bool,
};

export default Navbar;