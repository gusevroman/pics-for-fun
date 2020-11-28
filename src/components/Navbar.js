import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav>
    <NavLink to="/">
      <button className="btn btn-link" type="button">
        Home
      </button>
    </NavLink>
    <NavLink to="/history">
      <button className="btn btn-link" type="button">
        History
      </button>
    </NavLink>
  </nav>
);

export default Navbar;
