"use client";

import Image from "next/image";
import { BlurOverlay } from "@/components/shared/overlay";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ServicesCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export const ServicesCard = ({
  image,
  title,
  description,
  href,
}: ServicesCardProps) => {
  const router = useRouter();

  const handleRouting = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    router.push(href);

    setTimeout(() => {
      router.replace("/services", { scroll: false });
    }, 300);
  };

  return (
    <Link
      href={href}
      onClick={handleRouting}
      className="relative w-full h-[220px] md:h-[457px]"
    >
      <Image
        src={`/images/${image}`}
        alt={`Kavod ${title} Service`}
        fill
        className="object-cover object-center"
      />

      <BlurOverlay />

      <div className="w-full text-base-white z-20 absolute bottom-0 p-4">
        <h3 className="text-[18px] font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};
