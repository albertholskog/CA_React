import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/checkout"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Checkout
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
