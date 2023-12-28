import React, { useState } from "react";
import arrowDown from "../assets/arrow_down.png";

const Collapse = ({ title, description }) => {
  const [down, setDown] = useState(false);

  return (
    <div className="collapse">
      <div className="titleArrow">
        <h4 className="title">{title}</h4>
        <button  onClick={() => setDown(!down)}>
          <img src={arrowDown} alt=""  className={down ? "arrowDown" : "arrowUp"}  />
        </ button>
      </div>
      <div className={down ? "textOn" : "textOff"}>{down && description}</div>
    </div>
  );
};

export default Collapse;
