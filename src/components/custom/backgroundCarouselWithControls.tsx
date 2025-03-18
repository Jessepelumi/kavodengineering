"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

interface BackgroundCarouselProps {
  setSwiperInstance: (swiper: SwiperType) => void;
}

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
];

export const BackgroundCarouselWithControls = ({
  setSwiperInstance,
}: BackgroundCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

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
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setSwiperInstance(swiper);
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="w-full h-full">
          <Image
            src={src}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={90}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
