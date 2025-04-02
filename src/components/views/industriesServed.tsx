import { IndustryDetails, Industry } from "@/static/industryDetails";
import { IndustriesCard } from "../custom/industriesCard";
import { SectionHeading } from "../custom/sectionHeading";

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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {IndustryDetails.map((industry: Industry, index: number) => (
          <div key={index}>
            <IndustriesCard
              icon={industry.icon}
              title={industry.industry}
              details={industry.description}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
