// import Swiper core and required modules
import { Autoplay, A11y, Mousewheel } from "swiper/modules";

import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import { PropTypes } from "prop-types";

export const SwiperJs = ({ children }) => {
  return (
    <Swiper
      modules={[Autoplay, A11y, Mousewheel]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        455: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 40,
        },
        1100: {
          slidesPerView: 3.3,
          spaceBetween: 50,
        },
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      mousewheel={false}
      className="w-full mt-5"
    >
      {children}
    </Swiper>
  );
};

SwiperJs.propTypes={
  children:PropTypes.node
}