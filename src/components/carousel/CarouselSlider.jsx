import React from "react";
import Slide from "./Slide";
import Carousel from "react-elastic-carousel";

const CarouselSlider = () => {
  return (
    <div>
      <Carousel>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
