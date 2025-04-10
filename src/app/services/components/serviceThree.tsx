import Image from "next/image";

import { ServicesContent } from "@/content/servicesContent";
import { SectionHeading } from "@/components/shared/sectionHeading";

export const ServiceThree = () => {
  return (
    <section className="space-y-5 md:space-y-10">
      <SectionHeading section="service 3" title="Inspection Services" />

      <div className="grid grid-cols-2 gap-4">
        <div className="relative w-full h-[300px] md:h-[457px]">
          <Image
            src="/images/serviceImageThree.jpeg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative w-full h-[300px] md:h-[457px]">
          <Image
            src="/images/serviceImageFive.jpeg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <p>{ServicesContent.inspectionServices}</p>
    </section>
  );
};
