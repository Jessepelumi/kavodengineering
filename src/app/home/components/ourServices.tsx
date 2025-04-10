import Link from "next/link";

import { ValuePropositionCard } from "./valuePropositionCard";

import { CustomButton } from "@/components/shared/customButton";
import { SectionHeading } from "@/components/shared/sectionHeading";
import { ServicesCard } from "@/components/shared/servicesCard";
import { SendMessageCard } from "@/app/contact/components/sendMessageCard";

export const OurServices = () => {
  return (
    <div className="flex flex-col gap-10 py-16 px-5 md:px-10">
      <section className="flex flex-col gap-2.5">
        <SectionHeading
          section="our services"
          title="Our Expertise, Your Assurance"
          paragraph="From welding inspection to failure analysis, we provide precision-engineered solutions."
        />

        <CustomButton className="w-fit">
          <Link href="/services" className="relative z-10">
            View all services
          </Link>
        </CustomButton>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ServicesCard
          image="serviceImageOne.jpeg"
          title="Weld Engineering Consulting"
          description="Quality Assurance, Failure Prevention"
        />

        <ServicesCard
          image="serviceImageTwo.jpeg"
          title="Testing & Analysis"
          description="Weld Testing, Metallurgical Testing, Failure Analysis"
        />

        <ServicesCard
          image="serviceImageThree.jpeg"
          title="Inspection Services"
          description="Certified Welding Inspection, NDT, Coating Inspection"
        />

        <ServicesCard
          image="serviceImageFour.jpeg"
          title="Training & Certification"
          description="CWI Training, Safety Training"
        />
      </section>

      <SectionHeading
        section="our value proposition"
        title="Why Choose KAVOD?"
        className="items-center text-center"
      />

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ValuePropositionCard
          image="diamond.svg"
          imageClassName="w-[36px] h-[35px]"
          title="Industry-Leading Expertise"
          description="From advanced inspections to failure analysis, our expertise ensures that your projects meet the highest industry standards with efficiency and accuracy."
        />

        <ValuePropositionCard
          image="gears.svg"
          imageClassName="w-[42px] h-[39px]"
          title="Uncompromising Quality & Safety"
          description="We focus on safety and quality in every project, using advanced technology and thorough testing to minimize risks and enhance operations."
        />

        <ValuePropositionCard
          image="agreement.svg"
          imageClassName="w-[40px] h-[24px]"
          title="Unmatched Precision & Reliability"
          description="Beyond precision & reliability we ensure performance. From assessments to failure analysis, our expertise ensures confidence in every project."
        />
      </section>

      <SendMessageCard />
    </div>
  );
};
