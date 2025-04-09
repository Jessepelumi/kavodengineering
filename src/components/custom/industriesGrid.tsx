import { IndustryDetails, Industry } from "@/static/industryDetails";
import { IndustriesCard } from "../custom/industriesCard";

export const IndustriesGrid = () => {
  return (
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
  );
};
