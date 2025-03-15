import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-700 p-5 md:p-10 flex flex-col items-center gap-10">
      <Image
        src="/images/KESMainLogo2.png"
        alt="Kavod Engineering Logo"
        width={262}
        height={58}
      />
      <div className="w-full text-base-white text-center flex flex-col md:flex-row gap-3 justify-between items-center border-t-[0.5px] pt-4">
        <span>
          &copy; {currentYear} &mdash; Copyright. KAVOD Engineering Services
        </span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};
