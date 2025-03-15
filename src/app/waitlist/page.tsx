"use client";

import { BackgroundCarousel } from "@/components/custom/backgroundCarousel";
import { WaitlistBody } from "@/components/custom/waitlistBody";

export default function WaitlistPage() {
  return (
    <div className="flex flex-col">
      <section className="relative h-dvh flex justify-center items-center text-base-white">
        <BackgroundCarousel />

        <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent via-base-black via-85% to-base-black"></div>

        <div className="absolute">
          <WaitlistBody />
        </div>
      </section>
      {/* <div className="h-[50vh] bg-brand-500">
        <WaitlistBody />
      </div> */}
    </div>
  );
}
