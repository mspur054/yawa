import { useState, useEffect } from "react";
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

export const useWeather = () => {
  const [data, setData] = useState({ currently: {}, hourly: {} });
  const location = useGeolocation();

  useEffect(() => {
    const fetchData = async location => {
      const result = await openStreetMap.get(
        `/reverse?format=jsonv2&lat=${location.latitude}&lon=${
          location.longitude
        }`
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  console.log("weather", data);
  return data;
};
