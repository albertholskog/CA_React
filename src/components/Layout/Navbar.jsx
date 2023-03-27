import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
  const totalItems = useSelector((store) => store.cart.totalItems);

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

      <span> her er redux total amount{totalItems}</span>
    </nav>
  );
}

export default Navbar;
