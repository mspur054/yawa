import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ query, handleChange }) => {
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter City:</label>
        <InputBase
          name="city"
          value={query}
          className="searchBar"
          onChange={handleChange}
          type="text"
          placeholder="Search City"
        >
          <SearchIcon />
        </InputBase>
      </form>
    </>
  );
};

export default SearchBar;
