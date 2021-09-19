import React, { useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./App.css";
import axios from "axios";
import Article from "./Article";

const mapContainerStyle = {
  width: "100vw",
  height: "95vh",
  top: "5vh",
};

const center = {
  lat: 20,
  lng: 5,
};

export default function App() {

  const [article, setArticle] = useState(null);
  const [showArticle, setShowArticle] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB3ipyBxLMjZReSJ9BC1x6TrVARnI85Y70',
  });


  //Get Lat and Lng information on user click to pass to NodeJs
  const getLatLng = (e) => {
    const text = JSON.stringify(e.latLng);
    const parsedText = JSON.parse(text);

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
// Toggle article modal status
    setShowArticle(!showArticle);
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";




  return (
    <div className="app">
      <nav>
        <div className="navBar">
          <h1>News of the World</h1>
        </div>
      </nav>
      <div className="map">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={2.8}
          options={{
            scrollwheel: false,
            zoomControl: false,
            gestureHandling: "none",
            streetViewControl: false,
            disableDefaultUI: true,
            draggableCursor: 'crosshair'
          }}
          center={center}
          onClick={(e) => {
            getLatLng(e);
          }}
        ></GoogleMap>
        <div className="modal-overly">
          <Article article={article} showArticle={showArticle} setShowArticle={setShowArticle} />
        </div>
      </div>
    </div>
  );
}
