import Image from "next/image";

import { SectionHeading } from "@/components/custom/sectionHeading";
import { ServicesDetails } from "@/static/servicesDetails";

export const ServiceTwo = () => {
  return (
    <section className="space-y-5 md:space-y-10">
      <SectionHeading section="service 2" title="Testing & Analysis" />

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="relative w-full h-[200px] md:h-[320px]">
          <Image
            src="/images/serviceImageTwo.jpeg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative w-full h-[200px] md:h-[320px]">
          <Image
            src="/images/serviceImageSix.jpeg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative col-span-2 xl:col-span-1 w-full h-[200px] md:h-[320px]">
          <video
            src="/videos/serviceVideoOne.mp4"
            className="h-full w-full object-cover"
            autoPlay
            loop
          />
        </div>
      </div>

      <p>{ServicesDetails.testingAndAnalysis}</p>
    </section>
  );
};
