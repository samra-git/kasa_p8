import React, { useState } from "react";
import arrowDown from "../assets/arrow_down.png";

const Collapse = ({ title, description }) => {
  const [down, setDown] = useState(false);

  return (
    <div>
      <div className="titleArrow">
        <p className="title">{title}</p>
        <img
          src={arrowDown}
          alt=""
          className="arrowDown"
          onClick={() => setDown(!down)}
        />
      </div>
      <div className="text">{down && description}</div>
    </div>
  );
};

export default Collapse;
