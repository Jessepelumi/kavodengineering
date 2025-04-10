import Image from "next/image";

interface VisionMissionTextProps {
  icon: string;
  title: string;
  paragraph: string;
}

export const VisionMissionText = ({
  icon,
  title,
  paragraph,
}: VisionMissionTextProps) => {
  return (
    <article className="space-y-3">
      <div className="flex gap-2 items-center text-[20px] md:text-[24px]">
        <Image src={`svg/${icon}`} alt={title} width={24} height={24} />
        {title}
      </div>
      <p>{paragraph}</p>
    </article>
  );
};
