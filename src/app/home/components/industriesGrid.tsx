import { IndustriesCard } from "./industriesCard";
import { IndustryContent, Industry } from "@/content/industryContent";

export const IndustriesGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {IndustryContent.map((industry: Industry, index: number) => (
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
