import React, { useRef, useState, useEffect } from "react";
import './Article.css'
import axios from "axios";


export default function Article({article}) {
  




  


useEffect(() => {
    console.log(article)
	}, [])


  

  return (
    <div>
      <div class="container">
          <h1>{JSON.stringify(article)}</h1>
      </div>
    </div>
  );
  }