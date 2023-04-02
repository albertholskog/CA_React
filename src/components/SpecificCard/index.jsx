import IconShoppingCart from "../svg/IconShoppingCart";
import Button from "../Button";

import { useDispatch,  } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

import styles from "./SpecificCard.module.css";

function SpecificCard({
  title,
  image,
  price,
  description,
  id,
  discountedPrice, data
}) {
    const dispatch = useDispatch();
    const handleAddToCart =()=>{
        dispatch(addToCart(data))
    }
  return (
    <section className={styles.wrapper__product}>
      <article className={styles.container__product}>
        <div className={styles.container__product_image}>
          <img src={image} alt={title} className={styles.product__image} />
        </div>
        <div className={styles.wrapper__product_info}>
          <div className={styles.container__product_title}>
            <h2>{title}</h2>
            <h3>{discountedPrice >= price ? "" : "On sale"}</h3>
          </div>
          <div className={styles.container__product_description}>
            <h3>Product info</h3>
            <p>{description}</p>
          </div>
          <div className={styles.container__product_btn}>
            <Button
              icon={<IconShoppingCart />}
              label={"Add to cart"}
              onClick={handleAddToCart}
            />
            <h3>{discountedPrice}</h3>
          </div>
        </div>
      </article>
    </section>
  );
}

export default SpecificCard;
