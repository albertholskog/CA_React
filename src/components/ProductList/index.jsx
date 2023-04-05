import useApi from "../../Hook/useApi";
import Card from "../Card";
import styles from "./ProductList.module.css";
import { InfinitySpin } from "react-loader-spinner";

function ProductList() {
  const { data, isLoading, catchError, responseError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  if (isLoading) {
    return (
      <div>
        <InfinitySpin width="200" color="#F5AB53" />
      </div>
    );
  }

  if (catchError || !responseError) {
    return <div>Error: 404</div>;
  }

  return (
    <section className={styles.wrapper__card}>
      {data.map((product) => {
        return (
          <Card
            image={product.imageUrl}
            title={product.title}
            price={product.price}
            productId={product.id} // Rename key to productId
            key={product.id} // Use the key prop for React internal use
          />
        );
      })}
    </section>
  );
}

export default ProductList;
