import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = props => {
  const [selectedCity, setCity] = useState(null);
  return (
    <InputBase
      className="searchBar"
      //onChange={() => setQuery(value)}
      placeholder="Search City"
    >
      <SearchIcon />
    </InputBase>
  );
};

export default SearchBar;
