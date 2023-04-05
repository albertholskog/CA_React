import styles from "../pageStyles/pageErrorStyles.module.css";
import Button from "../components/Button";

function Error() {
  return (
    <div className={styles.container__error}>
      <h2>The page does not exist return to the main page</h2>
      <div className={styles.container__error_btn}>
        <Button label={"Back to main"} link={"/"}/>
      </div>
    </div>
  );
}

export default Error;
