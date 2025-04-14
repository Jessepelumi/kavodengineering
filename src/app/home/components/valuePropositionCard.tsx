import Image from "next/image";
import clsx from "clsx";

interface ValuePropositionCardProps {
  image: string;
  imageClassName?: string;
  title: string;
  description: string;
}

export const ValuePropositionCard = ({
  image,
  imageClassName,
  title,
  description,
}: ValuePropositionCardProps) => {
  return (
    <div className="h-[240px] bg-custom-background flex flex-col justify-between p-4">
      <div className={clsx("relative", imageClassName)}>
        <Image
          src={`/svg/${image}`}
          alt={`Kavod Provides ${title}`}
          fill
          className="object-cover object-center"
        />
      </div>
      <div>
        <h3 className="text-[20px] font-medium">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
