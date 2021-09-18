require("dotenv").config({ path: "../.env" });

const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");
const { json } = require("body-parser");
const { Client } = require("@googlemaps/google-maps-services-js");

const port = 3001;

//Google Geocoding API
const client = new Client({});

//News API
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_API);

let country = [];
let shortCode = [];
let article = [];
let structuredArticles = [];

var cors = require("cors");
const { url } = require("inspector");
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(express.static("../frontend/build"));

//Get latitude and longitute from user input

app.post("/country", async function (req, res, next) {
  const latLng = req.body.lat;
  country = req.body;
  structuredArticles = [];

  // get short code from latLng
  client
    .reverseGeocode({
      params: {
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        latlng: country,
        result_type: ["country"],
      },
    })
    .then((r) => {
      shortCode = r.data.results[0].address_components[0].short_name;
    })
    .catch((e) => {
      console.log("Geocode API error" + e);
    })
    .then((e) => {
      newsapi.v2
        .topHeadlines({
          country: shortCode,
        })
        .then((r) => {
          article = r.articles;
          data = article;

          article.map((e) => {
            {
              e.description !== null && e.description.includes("<p>")
              ? thisDescription = e.description.replace(/<p[^>]*>/g, "")
              : thisDescription = e.description
            }

            structuredArticles.push({
              title: e.title,
              urlToImage: e.urlToImage,
              author: e.author,
              description: thisDescription,
              content: e.content,
              url: e.url,
            });
          });
          res.json(structuredArticles);
        })

        .catch((e) => {
          console.log("News API error " + e);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
