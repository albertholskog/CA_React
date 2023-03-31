import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ label, type, variant, link }) {
  return (
    <Link to={link}>
      <button className={`${styles[variant]} ${styles.btn} `} type={type}>
        {label}
      </button>
    </Link>
  );
}

export default Button;

