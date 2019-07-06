import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import useGoogleAutoComplete from "../components/Utils/useGoogleAutoComplete";

const SearchBar = props => {
  const [selectedCity, setCity] = useState(null);

  const { results, isLoading, error, getPlaceDetails } = useGoogleAutoComplete({
    apiKey: REACT_GOOGLE_PLACES_API,
    query: "Ottawa",
    options: {
      types: "(cities)"
    }
  });

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
