import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import useGoogleAutoComplete from "../../components/Utils/useGoogleAutoComplete";

const ResultList = ({ query }) => {
  const [selectedOption, setOption] = useState(null);
  const [details, setDetails] = useState(null);
  const { results, isLoading, error, getPlaceDetails } = useGoogleAutoComplete({
    apiKey: process.env.REACT_APP_GOOGLE_PLACES_API,
    query: query,
    options: {
      types: "(cities)"
    }
  });

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getPlaceDetails(selectedOption);
      console.log("details", res);
      setDetails(res);
    };
    if (selectedOption) {
      fetchDetails();
    }
  }, [selectedOption]);

  return (
    <>
      <ul>
        {results.predictions.map(prediction => (
          <li key={prediction.place_id}>
            <Typography onClick={() => setOption(prediction.place_id)}>
              {prediction.description}
            </Typography>
          </li>
        ))}
      </ul>
      {details ? <div>{details.result.geometry.location.lat}</div> : null}
    </>
  );
};

export default ResultList;
