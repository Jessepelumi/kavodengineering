import Image from "next/image";

interface IndustriesCardProps {
  icon: string;
  title: string;
  details: string;
}

export const IndustriesCard = ({
  icon,
  title,
  details,
}: IndustriesCardProps) => {
  return (
    <div className="text-base-white">
      <div className="bg-transparent-70 h-[40px] w-[40px] flex justify-center items-center">
        <Image
          src={icon}
          alt={`Kavod ${title} Service`}
          width={24}
          height={24}
        />
      </div>
      <h3 className="text-[20px] py-2">{title}</h3>
      <p>{details}</p>
    </div>
  );
};
