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
let shortCode = ['au'];
let article = []
let structuredArticles = [];

var cors = require("cors");
const { url } = require("inspector");
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


app.use(express.static("../frontend/build"));



//Get latitude and longitute from user input

app.post("/country", function (req, res, next) {
 
  const latLng = req.body.lat;
  country = req.body;
  console.log(country)
  res.send('yes')

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
      console.log(shortCode)

      
    })
    .catch((e) => {
      console.log("Geocode API error" + e);
      
    });
})


app.get('/test', (req, res) => {
    

 
    // pass Geocode API result to News API for top arcticles

    if(shortCode.length < 1){

    newsapi.v2
    .topHeadlines({
      country: 'au',
    })
    .then((r) => {
    article = r.articles
    data = article
    res.json(data)
    console.log("testing get"+ article)

    article.map((e)=>{
        structuredArticles.push({
            title: e.title,
            urlToImage: e.urlToImage,
            author:e.author,
            description: e.description,
            content: e.content
    
        })
        console.log(e.title)
    })
     
    
  
    })
    .catch((e) => {
      console.log("News API error " + e);
      
    });
}else{
    newsapi.v2
    .topHeadlines({
      country: shortCode,
    })
    .then((r) => {
    article = r.articles
    data = article
    res.json(data)
    console.log("testing get"+ article)

    article.map((e)=>{
        structuredArticles.push({
            title: e.title,
            urlToImage: e.urlToImage,
            author:e.author,
            description: e.description,
            content: e.content,
            url: e.url

    
        })
        console.log(e.source.id)
    })
     
    
  
    })
    .catch((e) => {
      console.log("News API error " + e);
      
    });
}  
})










app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(port, () => {
  console.log(`App is listening on port {$port}`);
});
