import axios from "axios";

export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/bdb2d451cedac6a414e205dc2937c634`
});
