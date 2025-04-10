import Image from "next/image";

interface ServicesCardProps {
  image: string;
  title: string;
  description: string;
}

export const ServicesCard = ({
  image,
  title,
  description,
}: ServicesCardProps) => {
  return (
    <div className="relative w-full h-[220px] md:h-[450px]">
      <Image
        src={`/images/${image}`}
        alt={`Kavod ${title} Service`}
        fill
        className="object-cover object-center"
      />

      <div className="w-full absolute bottom-0 p-4 text-base-white bg-base-black-40 backdrop-blur-xs">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
