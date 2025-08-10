
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import sliderimg1 from '../../assets/sliderimg1.png';
import './swiperEffect.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SwiperEffect() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sliderimg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
