"use client";

import { useState } from "react";
import { BackgroundCarouselWithControls } from "./backgroundCarouselWithControls";
import { Overlay } from "./overlay";
import { Swiper as SwiperType } from "swiper";
import { CarouselControls } from "./carouselControls";
import { HomeHeaderText } from "./homeHeaderText";

export const HomeHeader = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <header className="relative h-dvh flex justify-center items-center text-base-white">
      <BackgroundCarouselWithControls setSwiperInstance={setSwiperInstance} />

      <Overlay />

      <div className="absolute w-full px-5 md:px-10 pb-10 md:pb-16 bottom-0 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <HomeHeaderText />
        <CarouselControls swiperInstance={swiperInstance} />
      </div>
    </header>
  );
};
