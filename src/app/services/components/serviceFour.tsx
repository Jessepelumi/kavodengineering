import Image from "next/image";

import { ServicesContent } from "@/content/servicesContent";
import { SectionHeading } from "@/components/shared/sectionHeading";

export const ServiceFour = () => {
  return (
    <section className="space-y-5 md:space-y-10">
      <SectionHeading section="service 4" title="Technical Training" />

      <div className="relative w-full h-[300px] md:h-[457px]">
        <Image
          src="/images/serviceImageFour.jpeg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <p>{ServicesContent.technicalTraining}</p>
    </section>
  );
};
