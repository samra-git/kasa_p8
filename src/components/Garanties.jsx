import React, { useEffect, useState } from "react";
import Collapse from "./Collapse";
import garanties from "../data/db-garanties.json";

const Garanties = () => {

const [garanty, setGaranty] = useState([]);

// console.log(garanty);
useEffect(() => {
  setGaranty(garanties)
}, [])

  return (
    <div className="garanties">
      {garanty.map((item, index) =>(
        <Collapse key={index} title={item.title} description={item.content}/>
      ))}


    </div>
  );
};

export default Garanties;
