import Button from "../Button";
import styles from "./CheckoutTotalPrice.module.css";

function CheckoutTotalPrice({ totalPrice }) {
  const total = parseFloat(totalPrice).toFixed(2);
  
  if (totalPrice >= 1) {
    return (
      <section className={styles.wrapper__total_price}>
        <div className={styles.container__total_price}>
          <h4>
            Total price for all product <span>${total}</span>
          </h4>
        </div>
        <div className={styles.container__checkout_btn}>
          <Button  link={`/checkoutsuccess`} label="Checkout"/>
        </div>
      </section>
    );
  }
}

export default CheckoutTotalPrice;
