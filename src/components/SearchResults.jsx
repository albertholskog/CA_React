import "./SearchResults.css";

function SearchResults({ filteredData, searchTherm }) {

  return (
    <div className="results-list">
      {searchTherm.length > 1
        ? filteredData.map((product, id) => {
            return <div key={product.id}>{product.title} </div>;
          })
        : ""}
    </div>
  );
}

export default SearchResults;
