import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import useApi from "../components/api/UseApi";

function SingleProduct() {
  const { productId } = useParams();
  const { data, isLoading, error } = useApi(
    `https://api.noroff.dev/api/v1/online-shop/${productId}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  
  console.log(data);
  
  return (
    <section>
      {data && (
        <div>
          <div>
            <img src={data.imageUrl} alt="" style={{width: 200}} />
          </div>
          <div>
            <div>
              <h2>{data.title}</h2>
              <h3>{data.discountedPrice >= data.price ? "" : "On sale" }</h3>
            </div>
            <div>
              <h3>Product info</h3>
              <p>{data.description}</p>
            </div>
            <div>
              <button>Add to cart</button>
              <h3>{data.discountedPrice}</h3>
            </div>
          </div>
        </div>
      )}
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
