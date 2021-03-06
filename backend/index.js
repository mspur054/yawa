require("dotenv").config();
import express from "express";
import axios from "axios";
import cors from "cors";
import helmet from "helmet";

var app = express();

const corsOptions = {
  origin: process.env.WEBSITE_URL,
  optionsSuccessStatus: 200
};

app.use(helmet());
app.use(cors(corsOptions));

app.get("/api", function(req, res) {
  console.log(corsOptions);
  res.json("hello");
});

/*
 * Calls darksky api
 */
app.get("/api/darksky", async function(req, res) {
  try {
    const coordinates = `${req.query.latitude},${req.query.longitude}`;
    const url = `https://api.darksky.net/forecast/${
      process.env.DARKSKY_API
    }/${coordinates}?exclude=minutely,flags&units=si`;

    const results = await axios.get(url);

    const weatherData = JSON.parse(JSON.stringify(results.data));

    weatherData.hourly.data = weatherData.hourly.data.slice(0, 24);

    res.json(weatherData);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/places", async function(req, res) {
  try {
    const latlng = `${req.query.latitude},${req.query.longitude}`;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&result_type=administrative_area_level_3|locality&key=${
      process.env.PLACES_API
    }`;

    const results = await axios.get(url);

    const placeData = JSON.parse(JSON.stringify(results.data));

    const formattedResults = placeData.results[0];

    res.json(formattedResults);
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT || 7000);
console.log("server is running");
