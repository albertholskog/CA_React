import { useDispatch } from "react-redux";
import { decrease, increase } from "../features/cart/cartSlice";

function CheckoutCard({ id, title, discountedPrice, imageUrl, quantity }) {
  const dispatch = useDispatch();
  console.log(id);
  return (
    <>
      <div>
        <img src={imageUrl} alt={title} style={{ width: 100 }} />
        <h3>{title}</h3>
        <div>
          <button onClick={() => dispatch(decrease({ id }))}>-</button>
          <h3>{quantity}</h3>
          <button onClick={() => dispatch(increase({ id }))}>+</button>
        </div>
        <h3>{discountedPrice}</h3>
      </div>
    </>
  );
}

export default CheckoutCard;
