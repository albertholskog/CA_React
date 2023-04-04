import { useSelector } from "react-redux";
import CheckoutCard from "../components/CheckoutCard";
import CheckoutTotalPrice from "../components/CheckoutTotalPrice";
function Checkout() {
  const { cartItems, totalPrice } = useSelector((store) => {
    return store.cart;
  });

  return (
    <>
      <section style={{margin: "auto 0"}}>
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
        <CheckoutTotalPrice totalPrice={totalPrice} />
        
      </section>
    </>
  );
}

export default Checkout;
