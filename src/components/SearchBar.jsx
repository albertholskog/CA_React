import SearchResults from "./SearchResults";
import useApi from "./Hook/useApi";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

function SearchBar() {
  const [searchTherm, setSearchTherm] = useState("");
  const { data, isLoading, catchError, responseError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  const filteredData = data.filter((product) => {
    return ( 
      product.title.toLowerCase().includes(searchTherm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTherm.toLowerCase())
    );
  });

  return (
    <div>
      <div className="input-wrapper">
        <FaSearch className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchTherm}
          onChange={(e) => setSearchTherm(e.target.value)}
        />
      </div>
      <SearchResults filteredData={filteredData} searchTherm={searchTherm} />
    </div>
  );
}

export default SearchBar;
