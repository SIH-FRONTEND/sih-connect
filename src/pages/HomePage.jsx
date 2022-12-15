import AvailableTechies from "../components/available-techies/AvailableTechies";
import FeaturedTechies from '../components/featured-techies/FeaturedTechies'; 

const HomePage = () => {
  return (
    <div>
      <FeaturedTechies />
      <AvailableTechies />
    </div>
  )
};

export default HomePage;
