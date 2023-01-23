//importing styles
import "../styles/index.css";

import { Fragment } from "react";

//Importing Components

import FeaturedTechies from "../components/techies/featured-techies/FeaturedTechies";
import CarouselSlider from "../components/carousel/CarouselSlider";
import AvailableTechies from "../components/techies/available-techies/AvailableTechies";
import HeroSection from "../components/hero/Hero-Section";
import SubHeroSection from "../components/hero/Sub-Hero";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <SubHeroSection />
      <FeaturedTechies />
      <AvailableTechies />
      <CarouselSlider />
    </Fragment>
  );
};

export default HomePage;
