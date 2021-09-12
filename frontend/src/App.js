import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import './App.css';
import { env } from 'process';


const mapContainerStyle ={
  width: "100vw",
  height: "100vh",
}

const center ={ 
  lat:20,
  lng:5,
};


export default function App() {

  const{isLoaded, loadError} = useLoadScript ({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";

  



  


  return (
    
    <div className="map">
      <GoogleMap mapContainerStyle={mapContainerStyle}  zoom={3} options={{scrollwheel: false, zoomControl: false,gestureHandling: "none" }} center={center}></GoogleMap>
    </div>
  )
}

