"use client";

import { Navbar } from "@/components/custom/navbar";
import { WaitlistBanner } from "@/components/custom/waitlistBanner";
import { BackgroundCarousel } from "@/components/custom/backgroundCarousel";

export default function WaitlistPage() {
  return (
    <div className="h-dvh flex flex-col overflow-clip">
      <WaitlistBanner />
      <Navbar />
      <section className="relative w-full grow flex flex-col justify-center items-center text-base-white">
        {/* Background carousel */}
        <BackgroundCarousel />

        {/* Gradient overlay */}
        <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent via-base-black via-60% to-base-black"></div>

        {/* Content */}
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
          <div className="bg-transparent-70 rounded-3xl border-[0.5px] border-transparent-70">
            <input
              type="email"
              placeholder="Enter email address"
              className="outline-none px-6 text-[14px] bg-transparent text-base-white grow"
            />
            <button className="bg-base-white text-base-black text-[14px] py-3 px-6 rounded-3xl hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
