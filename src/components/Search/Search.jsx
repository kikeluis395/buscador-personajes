import React from "react";
import "./Search.css";

const Search = ({charactersFilter, placeholder}) => {
  const handleSearch = (e) => {
    const search = e.target.value;
    charactersFilter(search)
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
