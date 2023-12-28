import React from "react";

const Rating = ({ rating }) => {
const ratingStars= [];

  for (let i = 0; i < 5; i++) {
ratingStars.push(
    <span key={i} className={i < rating ? "filled" : "empty"}>
    <i className="fa-star fa-solid"></i>
    </span>
)
  }
  
  return <div className="stars">{ratingStars}</div>;
};

export default Rating;
