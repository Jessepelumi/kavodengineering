import { ValuePropositionCard } from "./valuePropositionCard";

import { CustomButton } from "@/components/shared/customButton";
import { SectionHeading } from "@/components/shared/sectionHeading";
import { ServicesCard } from "@/app/home/components/servicesCard";
import { SendMessageCard } from "@/app/contact/components/sendMessageCard";

export const OurServices = () => {
  return (
    <div className="flex flex-col gap-20 py-16 px-5 md:px-10">
      <div className="space-y-10">
        <section className="flex flex-col gap-2.5">
          <SectionHeading
            section="our services"
            title="Your Assurance, Our Expertise"
            paragraph="From welding inspection to failure analysis, we provide precision-engineered solutions."
          />

          <CustomButton href="/services" className="w-fit">
            View all services
          </CustomButton>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServicesCard
            image="serviceImageOne.jpeg"
            title="Engineering Consulting"
            description="Technical service experts, Project Management"
            href="/services/#consulting"
          />

          <ServicesCard
            image="serviceImageTwo.jpeg"
            title="Testing & Analysis"
            description="Weld Procedure Qualification, Metallurgical & Mechanical Testing, Failure Analysis"
            href="/services/#testing"
          />

          <ServicesCard
            image="expertGuidance.jpeg"
            title="Inspection Services"
            description="Certified Welding Inspection (CWI), NDT (UT, MT, VT), Coating Inspection"
            href="/services/#inspection"
          />

          <ServicesCard
            image="serviceImageFour.jpeg"
            title="Technical Training"
            description="CWI Training, Quality and Safety Workshops"
            href="/services/#training"
          />
        </section>
      </div>

      <div className="space-y-10">
        <SectionHeading
          section="our value proposition"
          title="Why Choose KAVOD?"
          className="items-center text-center"
        />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ValuePropositionCard
            image="diamond.svg"
            imageClassName="w-[36px] h-[35px]"
            title="Unrivaled Expertise"
            description="Advanced inspections and testing backed by idustry veterans."
          />

          <ValuePropositionCard
            image="gears.svg"
            imageClassName="w-[42px] h-[39px]"
            title="Absolute Integrity"
            description="Rigorous processes that prioritize safety and compliance."
          />

          <ValuePropositionCard
            image="agreement.svg"
            imageClassName="w-[40px] h-[24px]"
            title="Precision & Reliability"
            description="Data-driven insights you can count on every time."
          />
        </section>
      </div>

      <SendMessageCard />
    </div>
  );
};
