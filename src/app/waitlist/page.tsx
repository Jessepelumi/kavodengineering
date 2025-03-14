"use client";

import { Navbar } from "@/components/custom/navbar";
import { WaitlistBanner } from "@/components/custom/waitlistBanner";
import { BackgroundCarousel } from "@/components/custom/backgroundCarousel";
import WaitlistForm from "@/components/custom/waitlistForm";

export default function WaitlistPage() {
  return (
    <div className="h-dvh flex flex-col overflow-clip">
      <WaitlistBanner />

      <Navbar />

      {/* <section className="relative w-full grow flex flex-col justify-center items-center text-base-white bg-base-black z-10">
        <BackgroundCarousel />

        <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent via-base-black via-60% to-base-black"></div>

        <div className="absolute flex flex-col justify-center items-center gap-3 text-center z-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[42px] sm:text-[52px] md:text-[64px] leading-[50px] md:leading-[65px] font-bold max-w-[95%] md:max-w-[70%] lg:max-w-[40%]">
              Be the First to Experience KAVOD
            </h1>
            <p className="text-[16px] max-w-[85%] md:max-w-[70%] lg:max-w-[35%] mt-3">
              Kavod Engineering Services offers expert welding inspection,
              coatings, and corrosion control, quality assurance, materials
              testing, and CWI training. Join our waitlist and be the first to
              access our full website and services.
            </p>
          </div>

          <WaitlistForm />
        </div>
      </section> */}

      <section className="relative h-full flex justify-center items-center text-base-white">
        <BackgroundCarousel />

        <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent via-base-black via-85% to-base-black"></div>

        <div className="absolute z-20 flex flex-col justify-center items-center text-center gap-4 px-6">
          <h1 className="text-[42px] sm:text-[52px] md:text-[64px] leading-[50px] md:leading-[65px] font-bold max-w-[95%] md:max-w-[70%] lg:max-w-[50%]">
            Be the First to Experience KAVOD
          </h1>
          <p className="text-[16px] max-w-[85%] md:max-w-[70%] lg:max-w-[35%]">
            Kavod Engineering Services offers expert welding inspection,
            coatings, and corrosion control, quality assurance, materials
            testing, and CWI training. Join our waitlist and be the first to
            access our full website and services.
          </p>

          <WaitlistForm />
        </div>
      </section>
    </div>
  );
}
