import { BlackOverlay } from "@/components/shared/overlay";
import Image from "next/image";

interface VisionMissionTextProps {
  image: string;
  title: string;
  paragraph: string;
}

export const VisionMissionText = ({
  image,
  title,
  paragraph,
}: VisionMissionTextProps) => {
  return (
    <section className="space-y-3">
      <div className="relative h-[280px] bg-gray-100">
        <Image
          src={`/images/${image}`}
          alt={title}
          fill
          className="object-cover object-center"
        />

        <BlackOverlay />

        <div className="absolute z-20 w-full p-5 bottom-0 text-base-white text-2xl font-semibold">
          {title}
        </div>
      </div>
      <p>{paragraph}</p>
    </section>
  );
};
