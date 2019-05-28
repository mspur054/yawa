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

    res.json(results.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT || 7000);
console.log("server is running");
