//importing styles
import "../styles/index.css";

//Importing Components
import FeaturedTechies from "../components/Techies/featured-techies/FeaturedTechies";

import PropReceiver from "../components/Techies/available-techies/PropReceiver";
import CarouselSlider from "../components/Carousel/CarouselSlider";
import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <FeaturedTechies />

      <PropReceiver />
      <CarouselSlider />
    </div>
  );
};

export default HomePage;
