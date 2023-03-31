import { Link } from "react-router-dom";
import Button from "../Button";

import styles from "./Card.module.css";

function Card({ image, title, price, productId }) {
  return (
    <article className={styles.container__card}>
      <div>
        <Link to={`/products/${productId}`}>
          <img src={image} alt={title} className={styles.card__img} />
        </Link>
      </div>
      <div className={styles.container__card_info}>
        <h3>{title}</h3>
        <h4>{price}</h4>
      </div>
      <div className={styles.container__btn__card}>
        <Button
          variant="btn__card"
          label="View Product"
          link={`/products/${productId}`}
        />
      </div>
    </article>
  );
}

export default Card;
