import { Link } from "react-router-dom";

function Card({ image, title, price, productId }) {
  console.log(productId);
  return (
    <article>
      <div>
        <img src={image} alt={title} style={{ height: 100 }} />
      </div>
      <div>
        <h3>{title}</h3>
        <h4>{price}</h4>
      </div>
      <Link to={`/products/${productId}`}>View Product</Link>
    </article>
  );
}

export default Card;
