import IconShoppingCart from "../svg/IconShoppingCart";
import Button from "../Button";

import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

import styles from "./SpecificCard.module.css";

function SpecificCard({
  title,
  image,
  price,
  description,
  id,
  discountedPrice,
  data,
}) {
  const onSalePercentage = (x, y) => {
    if (y === x) {
      return;
    }
    const percentage = Math.round((x / y) * 100);
    const sale = 100 - percentage;
    return "-" + sale + "%";
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  return (
    <section className={styles.wrapper__product}>
      <article className={styles.container__product}>
   
          <img src={image} alt={title} className={styles.product__image} />
        
        <div className={styles.wrapper__product_info}>
          <div className={styles.container__product_title}>
            <h2>{title}</h2>
            <h3>{onSalePercentage(discountedPrice, price)}</h3>
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
              variant="product__btn"
            />
            <h3>${discountedPrice}</h3>
          </div>
        </div>
      </article>
    </section>
  );
}

export default SpecificCard;
