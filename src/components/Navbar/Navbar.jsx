import { useState } from "react";
import "./Navbar.scss";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="header">
        <NavLink to="/" className="logo">
          <img src="/assets/chairs-logo.png" alt="Mount Chairs" />
        </NavLink>

        <div className="links">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/configurator" className="link">
            Configurator
          </NavLink>
          <NavLink to="" className="link">
            Case Study
          </NavLink>
          <NavLink to="" className="link">
            Assets
          </NavLink>
        </div>
      </div>

      <div className="contacts">
        <div className="contact">gh</div>
        <div className="contact">pf</div>
      </div>

      <div
        className="toggle"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        tg
      </div>

      {menuOpen && (
        <div className="menu">
          <NavLink to="/" className="menu-item">
            Home
          </NavLink>
          <NavLink to="/configurator" className="menu-item">
            Configurator
          </NavLink>
          <NavLink to="" className="menu-item">
            Case Study
          </NavLink>
          <NavLink to="" className="menu-item">
            Assets
          </NavLink>
          <div className="menu-item">gh</div>
          <div className="menu-item">pf</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
