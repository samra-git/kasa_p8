import React, { useState, useEffect } from "react";
import dataBase from "../data/db-kasa.json";
// import "../style/index.css";
import { Link } from "react-router-dom";
// import Accommodation from "../pages/Accommodation";
import Card from "./Card";

const RentGallery = () => {
  const [loc, setLoc] = useState([]);

  useEffect(() => {
    setLoc(dataBase);
  }, []);

  return (
    <div className="container">
      {loc.map((appart) => 
        <Card key={appart.id} title={appart.title} id={appart.id} cover={appart.cover}/>
        
      )}
    </div>
  );
};

export default RentGallery;
