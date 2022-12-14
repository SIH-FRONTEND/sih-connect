import PropReceiver from "../components/available-techies/PropReceiver";
import "../styles/index.css";
import "../App";
import CarouselSlider from "../components/carousel/CarouselSlider";

const HomePage = () => {
  return (
    <div>
      <PropReceiver />
      <CarouselSlider />
    </div>
  );
};

export default HomePage;
