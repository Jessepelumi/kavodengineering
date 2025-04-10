import { IndustriesGrid } from "@/components/shared/industriesGrid";
import { SectionHeading } from "@/components/shared/sectionHeading";

export const IndustriesServed = () => {
  return (
    <div className="bg-brand-700 flex flex-col gap-10 py-16 px-5 md:px-10 items-center">
      <SectionHeading
        variant="white"
        section="industries served"
        title="Trusted Across Key Industries"
        paragraph="From welding inspection to failure analysis, we provide precision-engineered solutions across several industries."
        className="items-center text-center"
      />

      <IndustriesGrid />
    </div>
  );
};
