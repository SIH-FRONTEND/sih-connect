import React from "react";
import Slide from "./Slide";
import Carousel from "react-elastic-carousel";

const CarouselSlider = () => {
  return (
    <div className="px-[40px] h-[auto]">
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
