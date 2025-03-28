"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CustomButton } from "../custom/customButton";

// static navigation bar component
export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  // function to handle scrolling into the about section
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <aside className="bg-base-white px-5 flex justify-between items-center py-3 lg:px-10">
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

        <div className="flex items-center space-x-7">
          <nav className="hidden md:flex justify-between space-x-7 text-gray-600 text-[14px]">
            <a href="" onClick={handleScroll} className="hover:text-brand-700">
              About us
            </a>

            <Link
              href="/services"
              className={`hover:text-brand-700 ${
                pathname === "/services" ? "text-brand-700" : ""
              }`}
            >
              Services
            </Link>
          </nav>

          <CustomButton className="hidden md:block">
            <Link href="/contact">Get a consultation</Link>
          </CustomButton>
        </div>

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

// collapsible mobile navigation component
interface MobileNavbarProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const MobileNavbar = ({ isOpen, closeMenu }: MobileNavbarProps) => {
  const handleMobileScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMenu();
  };

  return (
    <section
      className={`fixed top-0 w-full h-dvh bg-base-white py-10 px-6 flex flex-col justify-between md:hidden ${
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
          <a
            href=""
            className="flex justify-between items-center border-b-[0.5px] py-5 pr-2.5"
            onClick={handleMobileScroll}
          >
            About us
            <Image
              src="/svg/ArrowUpRight.svg"
              alt="Navigate to Services"
              width={16}
              height={16}
            />
          </a>

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
        </nav>
      </div>

      <CustomButton className="py-3.5">
        <Link href="/contact" onClick={closeMenu}>
          Get a consultation
        </Link>
      </CustomButton>
    </section>
  );
};
