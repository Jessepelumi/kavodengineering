import { IndustriesGrid } from "./industriesGrid";
import { SectionHeading } from "@/components/shared/sectionHeading";

export const IndustriesServed = () => {
  return (
    <div className="bg-brand-700 flex flex-col gap-10 py-16 px-5 md:px-10">
      <SectionHeading
        variant="white"
        section="industries served"
        title="Precision Solutions Across Sectors"
        paragraph="From on-site inspections to laboratory testing, Kavod delivers tailored services for diverse industries."
        className="items-center text-center"
      />

      <IndustriesGrid />
    </div>
  );
};
