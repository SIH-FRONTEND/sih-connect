// import AvailableTechies from '../components/available-techies/AvailableTechies'
import FeaturedTechies from '../components/featured-techies/FeaturedTechies'
import PropReceiver from '../components/available-techies/PropReceiver'
import '../styles/index.css'
import '../App'
import CarouselSlider from '../components/carousel/CarouselSlider'
import Header from '../components/header/Header'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <FeaturedTechies />
      {/* <AvailableTechies /> */}
      <PropReceiver />
      <CarouselSlider />
    </div>
  )
}

export default HomePage
