import { useParams } from "react-router-dom";
import useApi from "../components/Hook/UseApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function SingleProduct() {

  // useRedux for add to cart
  const dispatch = useDispatch()
   


  const { productId } = useParams();
  
  const { data, isLoading, catchError, responseError } = useApi(
    `https://api.noroff.dev/api/v1/online-shop/${productId}`
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (catchError) {
    return <div>Error: </div>;
  }

  

  return (
    <section>
      {
        <div>
          <div>
            <img src={data.imageUrl} alt="" style={{ width: 200 }} />
          </div>
          <div>
            <div>
              <h2>{data.title}</h2>
              <h3>{data.discountedPrice >= data.price ? "" : "On sale"}</h3>
            </div>
            <div>
              <h3>Product info</h3>
              <p>{data.description}</p>
            </div>
            <div>
              <button onClick={() => dispatch(addToCart(data))}>Add to cart</button>
              <h3>{data.discountedPrice}</h3>
            </div>
          </div>
        </div>
      }
    </section>
  );
}

export default SingleProduct;

{
  /* <div>
        <img src={data.imageUrl} alt="" />
      </div>
      <div>
      <div>
          <h2></h2>
          <h3>{data.discountedPrice}</h3>
      </div>
      <div>
          <h3>Product info</h3>
          <p>{data.description}</p>
      </div>
      <div>
          <button>Add to cart</button>
          <h3>{data.discountedPrice}</h3>
      </div>
    </div>   */
}
