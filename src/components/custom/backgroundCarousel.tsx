"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, Autoplay } from "swiper/modules";

const images = [
  "/images/carousel_one.png",
  "/images/carousel_two.png",
  "/images/carousel_three.png",
  "/images/carousel_four.png",
];

export const BackgroundCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      allowTouchMove={false}
      navigation={false}
      speed={1000}
      className="w-full h-full"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="w-full h-full">
          <img
            src={src}
            alt={`Background ${index + 1}`}
            className="h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
