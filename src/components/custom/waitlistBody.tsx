import WaitlistForm from "./waitlistForm";

export const WaitlistBody = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <article className="z-20 flex flex-col justify-center items-center text-center gap-4">
        <h1 className="text-[36px] leading-[42px] sm:text-[52px] md:text-[64px]  md:leading-[68px] font-bold max-w-[95%] md:max-w-[70%] xl:max-w-[50%]">
          Be the First to Experience KAVOD
        </h1>
        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] max-w-[90%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[33%]">
          Kavod Engineering Services offers expert welding inspection, coatings
          and corrosion control, quality assurance, materials testing, and CWI
          training. Join our waitlist and be the first to access our full
          website and services.
        </p>
      </article>

      <WaitlistForm />
    </div>
  );
};
