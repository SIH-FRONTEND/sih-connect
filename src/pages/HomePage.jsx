import AvailableTechies from '../components/available-techies/AvailableTechies'
import FeaturedTechies from '../components/featured-techies/FeaturedTechies'
import PropReceiver from '../components/available-techies/PropReceiver'
import '../styles/index.css'
import '../App'
import CarouselSlider from '../components/carousel/CarouselSlider'

const HomePage = () => {
  return (
    <div>
      <FeaturedTechies />
      <AvailableTechies />
      <PropReceiver />
      <CarouselSlider />
    </div>
  )
}

export default HomePage
