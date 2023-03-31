import { useSelector } from "react-redux";
import CheckoutCard from "../components/CheckoutCard";
function Checkout() {
  
  const { cartItems, totalPrice } = useSelector((store) => {
    return store.cart;
  });

  return (
    <>
      <section>
        <div>
          {cartItems.map((productItem) => {
            return (
              <CheckoutCard
                key={productItem.product.id}
                title={productItem.product.title}
                discountedPrice={productItem.product.discountedPrice}
                imageUrl={productItem.product.imageUrl}
                id={productItem.product.id}
                quantity={productItem.quantity}
              />
            );
          })}
        </div>
        <div>{totalPrice}</div>
      </section>
    </>
  );
}

export default Checkout;
