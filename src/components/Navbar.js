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
    <NavLink to="/gallery">
      <button className="btn btn-link" type="button">
        Gallery of Funny
      </button>
    </NavLink>
  </nav>
);

export default Navbar;
