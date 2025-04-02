interface ServiceContactHeaderProps {
  section: string;
  title: string;
  description: string;
}

export const ServiceContactHeader = ({
  section,
  title,
  description,
}: ServiceContactHeaderProps) => {
  return (
    <header className="relative flex justify-center items-center bg-[url('/images/consultation.jpeg')] bg-cover bg-center py-[200px]">
      <div className="absolute inset-0 bg-base-black-70"></div>

      <section className="flex flex-col gap-2 items-center text-center text-base-white z-10">
        <h4 className="text-secondary-500 font-medium uppercase">{section}</h4>
        <h3 className="text-[36px] leading-[42px] sm:text-[52px] md:text-[64px]  md:leading-[68px] font-bold max-w-[95%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[70%]">
          {title}
        </h3>
        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[45%]">
          {description}
        </p>
      </section>
    </header>
  );
};
