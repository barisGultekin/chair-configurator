import "./Navbar.scss";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/configurator" className="link">
          Configurator
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
