import Image from "next/image";

import { ServicesContent } from "@/content/servicesContent";
import { SectionHeading } from "@/components/shared/sectionHeading";

export const ServiceOne = () => {
  return (
    <section className="space-y-5 md:space-y-10">
      <SectionHeading section="service 1" title="Engineering Consulting" />

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="grid grid-cols-2 gap-4 lg:flex-2/5 w-full h-[300px] md:h-[376px]">
          <div className="relative row-span-2 w-full h-full">
            <Image
              src="/images/serviceImageOne.jpeg"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="relative w-full h-full">
            <Image
              src="/images/serviceImageSeven.jpeg"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="relative w-full h-full">
            <Image
              src="/images/serviceImageEight.jpeg"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="relative lg:flex-3/5 w-full h-[188px] md:h-[376px]">
          <video
            src="/videos/serviceVideoTwo.mp4"
            className="h-full w-full object-cover"
            autoPlay
            loop
          />
        </div>
      </div>

      <p>{ServicesContent.engineeringConsulting}</p>
    </section>
  );
};
