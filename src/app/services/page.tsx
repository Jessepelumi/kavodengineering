import { ServiceHeader } from "./components/serviceHeader";
import { ServiceCard } from "./components/serviceCard";
import { ServicesContent } from "@/content/servicesContent";
import { SendMessageCard } from "@/app/contact/components/sendMessageCard";

export default function Services() {
  return (
    <>
      <ServiceHeader
        section="our services"
        title="Your Assurance,"
        titleTwo="Our Expertise"
        description="At Kavod Engineering Services, we combine deep technical know-how with rigorous quality standards to deliver solutions that keep your infrastructure safe, reliable, and compliant."
      />

      <div className="flex flex-col gap-15 md:gap-20 py-16 px-5 md:px-10">
        {ServicesContent.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            id={service.link}
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
