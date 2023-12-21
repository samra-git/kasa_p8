import React from "react";
import RentGallery from "./RentGallery";
import dataBase from "../data/db-kasa.json";

const CardAcc = ({ itemAcc }) => {
  return (
    <div>
      
        <div className="mainContainer">
          <article key={itemAcc.id}>
            <img src={itemAcc.pictures} />
            <h1>{itemAcc.location}</h1>
          </article>
        </div>
      
    </div>
  );
};

export default CardAcc;
