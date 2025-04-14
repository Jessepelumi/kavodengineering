import { ServiceHeader } from "./components/serviceHeader";
import { ServiceCard } from "./components/serviceCard";
import { ServicesContent } from "@/content/servicesContent";
import { SendMessageCard } from "@/app/contact/components/sendMessageCard";

export default function Services() {
  return (
    <>
      <ServiceHeader
        section="our services"
        title="Our Expertise, Your Assurance"
        description="At KAVOD, we specialize in advanced material testing, inspections, and failure analysis to help businesses maintain the highest safety, durability, and compliance standards."
      />

      <div className="flex flex-col gap-15 md:gap-20 py-16 px-5 md:px-10">
        {ServicesContent.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            image={service.image}
            section={service.section}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <div className="flex flex-col gap-10 py-16 px-5 md:px-10">
        <SendMessageCard />
      </div>
    </>
  );
}
