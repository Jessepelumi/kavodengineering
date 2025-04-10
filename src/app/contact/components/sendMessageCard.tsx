import Link from "next/link";

import { CustomButton } from "@/components/shared/customButton";
import { SectionHeading } from "@/components/shared/sectionHeading";
//import Image from "next/image";

export const SendMessageCard = () => {
  return (
    <section className="relative bg-brand-700 flex flex-col items-center text-center gap-2.5">
      {/* <h4 className="text-secondary-600">SEND US A MESSAGE</h4>
      <h3 className="text-[30px] md:text-[36px] max-w-[90%] leading-[36px]">
        Get Started with{" "}
        <span className="border-b-2 border-secondary-500">
          KAVOD Engineering
        </span>
      </h3>
      <p className="md:text-[18px] md:max-w-[65%] lg:max-w-[45%] xl:max-w-[30%]">
        Let's discuss how we can support your project with precision engineering
        and expert quality assurance.
      </p> */}

      {/* <div className="absolute top-0 w-full h-96">
        <Image
          src="/svg/KAVODOutline.svg"
          alt="Kavod Outline Logo"
          width={200}
          height={200}
          className="object-cover"
        />
      </div> */}

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
    </section>
  );
};
