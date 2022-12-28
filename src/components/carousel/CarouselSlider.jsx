//imported components
import Slide from "./Slide";

//importing supporting component from lib
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
