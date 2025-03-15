import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <aside className="bg-base-white px-5 flex justify-between items-center py-3 lg:px-10">
      <div className="flex items-center gap-14">
        <Image
          src="/images/KESMainLogo.png"
          alt="Kavod Engineering Main Logo"
          width={128}
          height={64}
          priority
          className="h-auto w-auto"
        />
        <nav className="hidden lg:flex justify-between space-x-7 text-gray-600 text-[14px]">
          <Link href="/">About us</Link>
          <Link href="/">Services</Link>
          <Link href="/">Contact</Link>
        </nav>
      </div>
      <button className="relative overflow-hidden text-[14px] bg-secondary-500 py-2 px-4 rounded-3xl transition-all duration-500 ease-in-out before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-brand-500 before:transition-all before:duration-250 before:ease-in-out hover:before:w-full hover:text-base-white">
        <span className="relative z-10">Coming soon</span>
      </button>
    </aside>
  );
};
