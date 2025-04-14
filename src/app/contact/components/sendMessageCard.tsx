import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "@/components/shared/customButton";
import { SectionHeading } from "@/components/shared/sectionHeading";

export const SendMessageCard = () => {
  return (
    <section className="relative bg-brand-700 py-7 px-4 md:py-12 overflow-hidden">
      <div className="hidden md:block absolute bottom-0 left-[-250px] z-0">
        <Image
          src="/images/KESOutline.png"
          alt="Kavod Outline Logo"
          height={600}
          width={600}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-2.5">
        <SectionHeading
          section="send us a message"
          title="Get Started with"
          paragraph="Let's discuss how we can support your project with precision engineering and expert quality assurance."
          className="items-center"
          variant="white"
        >
          <span className="underline underline-offset-8 decoration-secondary-500 ml-2">
            KAVOD Engineering
          </span>
        </SectionHeading>

        <CustomButton variant="secondary" className="w-fit">
          <Link href="/contact">Get a consultation</Link>
        </CustomButton>
      </div>
    </section>
  );
};
