import styles from "./SpecificCard.module.css";

function SpecificCard({
  title,
  image,
  price,
  description,
  id,
  discountedPrice,
}) {
  return (
    <section className={styles.wrapper__product}>
      <article className={styles.container__product}>
        <div>
          <img src={image} alt={title} className={styles.product__image} />
        </div>
        <div>
          <div>
            <h2>{title}</h2>
            <h3>{discountedPrice >= price ? "" : "On sale"}</h3>
          </div>
          <div>
            <h3>Product info</h3>
            {/* <p>{description}</p> */}
          </div>
          <div>
            <button onClick={() => dispatch(addToCart(data))}>
              Add to cart
            </button>
            <h3>{discountedPrice}</h3>
          </div>
        </div>
      </article>
    </section>
  );
}

export default SpecificCard;
