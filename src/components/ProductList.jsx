import useApi from "./Hook/useApi";
import Card from "./Card";

function ProductList() {
  const { data, isLoading, catchError, responseError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (catchError || !responseError) {
    return <div>Error: error</div>;
  }

  return (
    <section>
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
