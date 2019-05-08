import axios from "axios";
import { config } from "../../env.js";

export default axios.create({
  baseUrl: `https://api.darksky.net/forecast/${config.api_key}`
});
