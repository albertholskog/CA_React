import styles from "./ProductReviews.module.css";
import IconStar from "../svg/IconStar";

function ProductReviews({ reviews }) {
  console.log(reviews);

  return (
    <section className={styles.wrapper__reviews}>
      <div className={styles.container__review}>
        {reviews.length >= 1
          ? reviews.map((review) => {
              const starIcons = Array.from(
                { length: review.rating },
                (_, index) => <IconStar key={index} />
              );
              return (
                <div key={review.id} className={styles.container__review_info}>
                  <h4>{review.username}</h4>
                  <p>{review.description}</p>
                  <div>
                    <span>{starIcons}</span>
                  </div>
                </div>
              );
            })
          : "No review on this product"}
      </div>
    </section>
  );
}

export default ProductReviews;
