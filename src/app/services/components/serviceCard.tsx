import { SectionHeading } from "@/components/shared/sectionHeading";
import Image from "next/image";

interface ServiceCardProps {
  index: number;
  section: string;
  title: string;
  description: string;
  image: string;
  id: string;
}

export const ServiceCard = ({
  index,
  section,
  title,
  description,
  image,
  id,
}: ServiceCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <section
      id={id}
      className={`flex flex-col md:flex-row gap-5 md:gap-10 scroll-mt-[100px] ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-1/2 space-y-2.5">
        <SectionHeading section={section} title={title} />
        <p>{description}</p>
      </div>
      <div className="relative md:w-1/2 h-[240px] md:h-[400px] bg-gray-75">
        <Image
          src={`/images/${image}`}
          alt={`Kavod ${title}`}
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};
