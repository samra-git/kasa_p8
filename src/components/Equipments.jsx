import React from "react";

const Equipments = ({ equipment, down }) => {
  return (
    <div>
{down ? (
        <ul>
      {equipment.map((item, index) => {
        <li key={index}>{item}</li>;
        
      })}
    </ul>
) : "pas de description"

}
     
    </div>
   
  );
};

export default Equipments;
