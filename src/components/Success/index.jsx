import Button from "../Button";
import styles from "./Success.module.css";

function Success() {
  return (
    <div className={styles.container__success}>
      <h2>Congratulate</h2>
      <h3>Your purchase was successful</h3>
      <Button label="Continue shopping" link={`/`} />
    </div>
  );
}

export default Success;
