import useApi from "./api/useApi";
import Card from "./Card";

function ProductList() {
  const { data, isLoading, error } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
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
      {data &&
        data.map((product) => {
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

{
  /* <Card image={product.imageUrl} title={product.title} price={product.price} id={product.id} /> */
}

{
  /* <div>
<h2>User List</h2>
<section>
  {data.map((product) => {
    return (
      <Card
        image={product.imageUrl}
        title={product.title}
        price={product.price}
        key={product.id}
      />
    );
  })}
</section>
</div> */
}

// {data
//     ? data.map((product) => {
//         <Card
//           image={product.imageUrl}
//           title={product.title}
//           price={product.price}
//           id={product.id}
//         />;
//       })
//     : null}
