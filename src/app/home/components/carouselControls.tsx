"use client";

import { Swiper as SwiperType } from "swiper";
import Image from "next/image";

interface CarouselControlsProps {
  swiperInstance: SwiperType | null;
}

export const CarouselControls = ({ swiperInstance }: CarouselControlsProps) => {
  if (!swiperInstance) return null;

  return (
    <div className="z-20 flex gap-4">
      <button
        onClick={() => swiperInstance.slidePrev()}
        className="h-[64px] w-[64px] border-1 flex justify-center items-center rounded-4xl bg-transparent-70"
      >
        <Image
          src="/svg/ArrowLeft.svg"
          alt="Arrow left previous image"
          width={24}
          height={24}
        />
      </button>
      <button
        onClick={() => swiperInstance.slideNext()}
        className="h-[64px] w-[64px] border-1 flex justify-center items-center rounded-4xl bg-transparent-70"
      >
        <Image
          src="/svg/ArrowRight.svg"
          alt="Arrow right next image"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};
