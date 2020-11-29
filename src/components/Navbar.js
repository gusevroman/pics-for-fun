import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Navbar = () => (
  <nav>
    <NavLink to="/">
      <Button color="primary">Home</Button>
    </NavLink>
    <NavLink to="/history">
      <Button color="primary">History</Button>
    </NavLink>
  </nav>
);

export default Navbar;
