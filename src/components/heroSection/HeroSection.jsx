
import React from "react";

import sld1 from "../../image/slide-1.jpg"
import sld2 from "../../image/slide-2.jpg"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const HeroSection = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img className="img-fluid" src={sld1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="img-fluid" src={sld2} alt="" />

      </SwiperSlide>
  
    </Swiper>
  );
};

export default HeroSection;
