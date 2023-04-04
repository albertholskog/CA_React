import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import IconContact from "../../svg/IconContact";
import IconCart from "../../svg/IconCart";
import IconMenu from "../../svg/IconMenu";
import IconClose from "../../svg/IconClose";

import styles from "./Navbar.module.css";


function Navbar() {
  const totalItems = useSelector((store) => store.cart.totalItems);

  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container__logo}>
          <Link to="/">
            <h1 className={styles.brand} onClick={() => setShowLinks(false)}>
              SkylineShop
            </h1>
          </Link>
        </div>
        <div className={styles.container__links}>
          <div
            className={styles.container__item}
            id={showLinks ? `${styles.hidden}` : ""}
          >
            <Link
              to="/contact"
              className={styles.link}
              onClick={() => setShowLinks(false)}
            >
              <IconContact />
            </Link>
            <Link
              to="/checkout"
              className={`${styles.link} ${styles.container__totalItems}`}
              onClick={() => setShowLinks(false)}
            >
              <IconCart />
              <span className={styles.totalItems}>{totalItems}</span>
            </Link>
          </div>
          <div
            className={styles.hamburger}
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? <IconClose /> : <IconMenu />}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
