import SearchResults from "../SearchResults";
import useApi from "../../Hook/useApi";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [searchTherm, setSearchTherm] = useState("");
  const { data, isLoading, catchError, responseError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  const filteredData = data.filter((product) => {
    return product.title.toLowerCase().includes(searchTherm.toLowerCase());
  });

  return (
    <section className={styles.container__searchBar}>
      <div className={styles.input__wrapper}>
        <input
          className={styles.search__input}
          type="text"
          placeholder="Search on product"
          value={searchTherm}
          onChange={(e) => setSearchTherm(e.target.value)}
        />
      </div>
      <SearchResults filteredData={filteredData} searchTherm={searchTherm} />
    </section>
  );
}

export default SearchBar;
