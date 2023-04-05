import { useParams } from "react-router-dom";
import useApi from "../Hook/useApi";


import SpecificCard from "../components/SpecificCard";
import ProductReviews from "../components/ProductReviews";
import { InfinitySpin } from "react-loader-spinner";

function SingleProduct() {
  
  const { productId } = useParams();

  const { data, isLoading, catchError, responseError } = useApi(
    `https://api.noroff.dev/api/v1/online-shop/${productId}`
  );
  if (isLoading) {
    return (
      <div>
        <InfinitySpin width="200" color="#F5AB53" />
      </div>
    );
  }

  if (catchError) {
    return <div>Error: 404</div>;
  }
  return (
    <>
      <SpecificCard
        title={data.title}
        image={data.imageUrl}
        price={data.price}
        description={data.description}
        id={data.id}
        discountedPrice={data.discountedPrice}
        data={data}
      />
      <ProductReviews reviews={data.reviews} />
    </>
  );
}

export default SingleProduct;

