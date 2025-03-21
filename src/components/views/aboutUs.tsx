import Image from "next/image";

export const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col xl:flex-row gap-10 xl:gap-14 py-10 px-5 md:py-16 md:px-10">
      <section className="xl:w-1/2">
        <h4 className="text-secondary-600 pb-2">ABOUT US</h4>
        <h3 className="pb-2 text-[30px] md:text-[36px] xl:max-w-[60%] md:max-w-[50%] leading-[36px] md:leading-[42px]">
          Experts in Welding & Inspection
        </h3>
        <p className="xl:max-w-[80%]">
          At KAVOD, we combine deep expertise in welding engineering, material
          science, and quality assurance to help clients deliver safer,
          stronger, and more reliable infrastructure.
        </p>
      </section>
      <section className="xl:w-1/2 flex flex-col gap-10 xl:gap-14">
        <article className="">
          <div className="flex gap-2 items-center pb-5 text-[20px] md:text-[24px]">
            <Image
              src="/svg/Target.svg"
              alt="Kavod Mission"
              width={24}
              height={24}
            />
            Our Mission
          </div>
          <p>
            To deliver expert inspection, quality assurance, and welding testing
            solutions that ensure the integrity safety, and reliability of
            critical infrastructure &mdash; empowering our clients to meet
            industry standard and exceed performance expectations.
          </p>
        </article>
        <article>
          <div className="flex gap-2 items-center pb-5 text-[20px] md:text-[24px]">
            <Image
              src="/svg/Eye.svg"
              alt="Kavod Mission"
              width={24}
              height={24}
            />
            Our Vision
          </div>
          <p>
            To be a trusted leader in welding engineering and quality assurance
            services, setting the benchmark for technical excellence,
            exceptional quality, and innovation and client-focused solutions.
          </p>
        </article>
      </section>
    </div>
  );
};
