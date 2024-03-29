import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ label, type, variant, link, icon, onClick }) {
  return (
    <Link to={link}>
      <button
        className={`${styles[variant]} ${styles.btn} `}
        type={type}
        onClick={onClick}
      >
        {icon}
        {label}
      </button>
    </Link>
  );
}

export default Button;
