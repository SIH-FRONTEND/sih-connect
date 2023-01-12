//importing styles
import "../styles/index.css";

//Importing Components

import FeaturedTechies from "../components/techies/featured-techies/FeaturedTechies";
import CarouselSlider from "../components/carousel/CarouselSlider";
import AvailableTechies from "../components/techies/available-techies/AvailableTechies";
import Header from "../components/header/Header";
import SubHeader from "../components/header/SubHeader";

const HomePage = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <FeaturedTechies />
      <AvailableTechies />
      <CarouselSlider />
    </div>
  );
};

export default HomePage;
