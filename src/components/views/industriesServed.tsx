import { IndustryDetails, Industry } from "@/static/industryDetails";
import { IndustriesCard } from "../custom/industriesCard";

export const IndustriesServed = () => {
  return (
    <div className="bg-brand-700 flex flex-col gap-10 py-16 px-5 md:px-10 items-center">
      <section className="text-center text-base-white flex flex-col items-center gap-2.5">
        <h4 className="text-secondary-600">INDUSTRIES SERVED</h4>
        <h3 className="text-[30px] md:text-[36px] max-w-[90%] leading-[36px]">
          Trusted Across Key Industries
        </h3>
        <p className="md:text-[18px] md:max-w-[50%]">
          From welding inspection to failure analysis, we provide
          precision-engineered solutions across several industries.
        </p>
      </section>
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
