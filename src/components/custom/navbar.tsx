"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <>
      <aside className="bg-base-white px-5 flex justify-between items-center py-3 lg:px-10">
        <div className="flex items-center gap-14">
          <Link href="/">
            <Image
              src="/images/KESMainLogo.png"
              alt="Kavod Engineering Main Logo"
              width={128}
              height={64}
              priority
              className="h-auto w-auto"
            />
          </Link>
          <nav className="hidden md:flex justify-between space-x-7 text-gray-600 font-semibold text-[14px]">
            <Link
              href="/services"
              className={`hover:text-brand-700 hover:font-semibold ${
                pathname === "/services" ? "text-brand-700 font-semibold" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`hover:text-brand-700 hover:font-semibold ${
                pathname === "/contact" ? "text-brand-700 font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
        <button className="hidden md:block relative overflow-hidden text-[14px] bg-secondary-500 py-2 px-4 rounded-3xl transition-all duration-500 ease-in-out before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-brand-500 before:transition-all before:duration-250 before:ease-in-out hover:before:w-full hover:text-base-white">
          <Link href="/contact" className="relative z-10">
            Get a consultation
          </Link>
        </button>
        <button
          onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
          className="visible md:hidden"
        >
          <Image
            src="svg/ListIcon.svg"
            alt="Menu Button"
            width={24}
            height={24}
          />
        </button>
      </aside>

      <MobileNavbar
        isOpen={isMobileNavbarOpen}
        closeMenu={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
      />
    </>
  );
};

interface MobileNavbarProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const MobileNavbar = ({ isOpen, closeMenu }: MobileNavbarProps) => {
  return (
    <section
      className={`fixed top-0 w-full h-dvh bg-base-white py-10 px-6 flex flex-col justify-between items-end md:hidden ${
        isOpen ? "-translate-x-0" : "translate-x-full"
      } transform transition-transform duration-400`}
    >
      <div className="w-full">
        <div className="flex justify-between items-center border-b-[0.5px] py-5 pr-2.5">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/KESMainLogo.png"
              alt="Kavod Engineering Main Logo"
              width={128}
              height={64}
              priority
              className="h-auto w-auto"
            />
          </Link>
          <button onClick={closeMenu} className="">
            <Image src="svg/X.svg" alt="Cancle Button" width={24} height={24} />
          </button>
        </div>
        <nav>
          <Link
            href="/services"
            className="flex justify-between items-center border-b-[0.5px] py-5 pr-2.5"
            onClick={closeMenu}
          >
            Services
            <Image
              src="/svg/ArrowUpRight.svg"
              alt="Navigate to Services"
              width={16}
              height={16}
            />
          </Link>

          <Link
            href="/contact"
            className="flex justify-between items-center border-b-[0.5px] py-5 pr-2.5"
            onClick={closeMenu}
          >
            Contact
            <Image
              src="/svg/ArrowUpRight.svg"
              alt="Navigate to Services"
              width={16}
              height={16}
            />
          </Link>
        </nav>
      </div>

      <button className="w-fit relative overflow-hidden text-[14px] bg-secondary-500 py-2 px-4 rounded-3xl transition-all duration-500 ease-in-out before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-brand-500 before:transition-all before:duration-250 before:ease-in-out hover:before:w-full hover:text-base-white">
        <Link href="/contact" className="relative z-10" onClick={closeMenu}>
          Get a consultation
        </Link>
      </button>
    </section>
  );
};
