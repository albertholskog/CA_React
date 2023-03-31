import { Link } from "react-router-dom";
import styles from "./SearchResults.module.css";

function SearchResults({ filteredData, searchTherm }) {
  return (
    <div className={styles.results__list}>
      {searchTherm.length >= 1
        ? filteredData.map((product) => {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <div className={styles.container__search_result}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className={styles.search__img}
                  />
                  <h2 className={styles.search__title}>{product.title}</h2>
                </div>
              </Link>
            );
          })
        : ""}
    </div>
  );
}

export default SearchResults;

// <div key={product.id} className={styles.container__search_result}>
// <img src={product.imageUrl} alt="" style={{width: 50, height:50}}/>
// <Link to={`/products/${product.id}`}>{product.title}</Link>
// </div>
