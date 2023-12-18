import React, { useState, useEffect } from "react";
import data  from "../data/db-kasa.json";
import "../style/sass/main.scss";
import { Link } from "react-router-dom";

const RentGallery = () => {
   
  return (
    
    <div className="container">
      
        {data.map((appart) => (
          <article key={data.id} className="imageContainer">
            <Link >
            <img src={appart.cover} alt={appart.title} />
            <div className="content"> {appart.title} </div>
            </Link>
          </article>
        ))}   
    </div>
    
  );
};

export default RentGallery;
