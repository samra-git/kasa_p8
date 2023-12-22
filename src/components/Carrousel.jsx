import React, { useState } from "react";
import left from "../assets/arrow_left.png";
import right from "../assets/arrow_right.png";

const Carrousel = ({ slides }) => {
  //   console.log(totalSlides);

  const [currentSlide, setCurrentSlide] = useState(0); //state pour initialiser l'index des slides//

  const handleClickLeft = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
  const handleClickRight = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  if (slides === 1) {
    return <img src={slides[currentSlide]} />;
  }
  if (!slides || slides.length === 0) {
    return <div>not found</div>;
  }

  return (
    <div>
      <div className="slides">
        <img src={slides[currentSlide]} alt="" />
      </div>
      <div className="slidePage">
        {currentSlide + 1} / {slides.length}
      </div>

      <div className="arrowLeft" onClick={handleClickLeft}>
        <img src={left} alt="arrow left" />
      </div>

      <div className="arrowRight" onClick={handleClickRight}>
        <img src={right} alt="arrow right" />
      </div>
    </div>
  );
};

export default Carrousel;
