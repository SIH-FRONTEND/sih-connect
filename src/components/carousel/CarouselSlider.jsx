//import from react
import { Fragment } from "react";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// import Swiper styles
import "swiper/css";

//imported components
import SlideComponent from "./SlideComponent";
import LoadingSpinner from "../UI/LoadingSpinner";
import HeadingText from "../UI/HeadingText";

//importing custom hooks
import useFetch from "../../hooks/useFetch";

SwiperCore.use([Autoplay, Navigation]);

const CarouselSlider = () => {
  const { data, isPending, error } = useFetch(
    "https://starthubconnect.adaptable.app/user/success-stories"
  );
  return (
    <div className="h-[auto] py-[2em] xl2:px-[4em] px-[1em]">
      {isPending && !data && <LoadingSpinner />}
      {data && !isPending && !error && (
        <Fragment>
          <HeadingText>Testimonies</HeadingText>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={1}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {data.items.length > 0 ? (
              data.items.map((each) => (
                <SwiperSlide>
                  <SlideComponent testimony={each} />
                </SwiperSlide>
              ))
            ) : (
              <Fragment>
                <SwiperSlide>
                  <SlideComponent />
                </SwiperSlide>
                <SwiperSlide>
                  <SlideComponent />
                </SwiperSlide>
                <SwiperSlide>
                  <SlideComponent />
                </SwiperSlide>
              </Fragment>
            )}
          </Swiper>
        </Fragment>
      )}
    </div>
  );
};

export default CarouselSlider;
