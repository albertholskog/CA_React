import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../../features/cart/cartSlice";
import { MdClose } from "react-icons/md";
import styles from "./CheckoutCard.module.css";

function CheckoutCard({ id, title, discountedPrice, imageUrl, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper__checkout_cart}>
      <div className={styles.container__checkout_cart}>
        <div className={styles.checkout_img}>
          <img src={imageUrl} alt={title} className={styles.test} />
        </div>
        <div className={styles.checkout_title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.checkout_button}>
          <button onClick={() => dispatch(decrease({ id }))}>-</button>
          <h3>{quantity}</h3>
          <button onClick={() => dispatch(increase({ id }))}>+</button>
        </div>
        <div className={styles.checkout_price}>
          <h3>${discountedPrice}</h3>
        </div>
        <div className={styles.checkout_remove}>
          <MdClose
            style={{ fontSize: 30 }}
            onClick={() => dispatch(removeItem({ id }))}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
