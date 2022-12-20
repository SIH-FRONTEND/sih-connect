//importing styles
import "../styles/index.css";

//Importing Components
import FeaturedTechies from "../components/Techies/featured-techies/FeaturedTechies";

import AvailableTechies from "../components/Techies/available-techies/AvailableTechies";
import CarouselSlider from "../components/Carousel/CarouselSlider";
import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <FeaturedTechies />

      <AvailableTechies />
      <CarouselSlider />
    </div>
  );
};

export default HomePage;
