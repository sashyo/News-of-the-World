import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./App.css";
import axios from "axios";
import { env } from "process";
import { PassThrough } from "stream";
import { stat } from "fs";
import Article from "./Article";
import { RSA_NO_PADDING } from "constants";

const server = "http.//localhost:3001/country";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 20,
  lng: 5,
};

export default function App() {
  const [position, setPosition] = useState();
  const [status, setStatus] = useState(false);
  const [article, setArticle] = useState(null);
  const [showArticle, setShowArticle] = useState(false);
  const [getArticles, setGetArticles] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });



  //Get Lat and Lng information on user click to pass to Geocoding API
  const getLatLng = (e) => {
    const text = JSON.stringify(e.latLng);
    const parsedText = JSON.parse(text);

    setPosition(parsedText);

    //Passing data to Server
    axios
      .post("/country", parsedText)
      .then((res) => {
        console.log(res);
        setArticle(res.data)
      })
      .catch((err) => {
        console.log("Client post error: " + err);
      })

    setShowArticle(!showArticle);
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  if (setPosition === undefined) console.log("Input not valid");

  

  return (
    <div className="app">
      <nav>
          <div className="navBar">
            
          </div>
      </nav>
      <div className="map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={3}
        options={{
          scrollwheel: false,
          zoomControl: false,
          gestureHandling: "none",
          streetViewControl: false,
          disableDefaultUI: true,
          draggableCursor:'crosshair'
        }}
        center={center}
        onClick={(e) => {
          getLatLng(e);
        }}
      ></GoogleMap>
      <div className="modal-overly">
        <Article article={article} showArticle={showArticle} setShowArticle={setShowArticle}/>
      </div>
    </div>
    </div>
  );
}
