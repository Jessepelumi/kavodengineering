import { IndustriesGrid } from "@/components/custom/industriesGrid";
import { SectionHeading } from "@/components/custom/sectionHeading";
import { SendMessageCard } from "@/components/custom/sendMessageCard";
import { ServiceContactHeader } from "@/components/views/serviceContactHeader";
import { ServiceOne } from "@/components/custom/serviceOne";
import { ServiceTwo } from "@/components/custom/serviceTwo";
import { ServiceThree } from "@/components/custom/serviceThree";
import { ServiceFour } from "@/components/custom/serviceFour";

export default function Services() {
  return (
    <>
      <ServiceContactHeader
        section="our services"
        title="Our Expertise, Your Assurance"
        description="At KAVOD, we specialize in advanced material testing, inspections, and failure analysis to help businesses maintain the highest safety, durability, and compliance standards."
      />

      <div className="flex flex-col gap-15 md:gap-20 py-16 px-5 md:px-10">
        <ServiceOne />
        <ServiceTwo />
        <ServiceThree />
        <ServiceFour />
      </div>

      <div className="bg-brand-700 flex flex-col gap-10 py-16 px-5 md:px-10 items-center">
        <SectionHeading
          variant="white"
          section="industries served"
          title="We cover materials engineering across these industries"
          paragraph="From welding inspection to failure analysis, we provide precision-engineered solutions across several industries."
          className="items-center text-center"
        />

        <IndustriesGrid />
      </div>

      <div className="flex flex-col gap-10 py-16 px-5 md:px-10">
        <SendMessageCard />
      </div>
    </>
  );
}
