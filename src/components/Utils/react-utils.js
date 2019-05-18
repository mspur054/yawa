import { useState, useEffect } from "react";
import { useStateValue } from "../../contexts/StateProvider";
import openStreetMap from "../../api/openStreetMap";

export const useGeolocation = () => {
  const [state, setState] = useState({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now()
  });
  let mounted = true;
  let watchId;

  const onEvent = event => {
    if (mounted) {
      setState({
        loading: false,
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp
      });
    }
  };
  const onEventError = error =>
    mounted && setState(oldState => ({ ...oldState, loading: false, error }));

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onEventError);
    watchId = navigator.geolocation.watchPosition(onEvent, onEventError);

    return () => {
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, [0]);

  return state;
};

export const useLocation = initialPosition => {
  const [position, setPosition] = useState(initialPosition);
  const [{ location }, dispatch] = useStateValue(); // useState({ currently: {}, hourly: {} });
  //TODO:Figure out why so many calls
  console.log(position);
  useEffect(() => {
    const fetchData = async () => {
      if (!position.loading) {
        dispatch({ type: "FETCH_LOCATION_INIT" });
        try {
          const result = await openStreetMap.get(
            `/reverse?format=jsonv2&lat=${position.latitude}&lon=${
              position.longitude
            }`
          );
          dispatch({ type: "FETCH_LOCATION_SUCCESS", payload: result.data });
        } catch (error) {
          dispatch({ type: "FETCH_LOCATION_FAILURE" });
        }
      }
    };

    fetchData();
  }, [position.loading]);

  const doFetch = position => {
    setPosition(position);
  };
  return { ...location, doFetch };
};
