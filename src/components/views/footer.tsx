"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const phoneNumber = "+1 678 908 9470";
  const [copied, setCopied] = useState(false);

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(`${phoneNumber}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log("Failed to copy phone number:", error);
    }
  };

  return (
    <footer className="bg-brand-700 text-base-white p-5 md:p-10 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-7 md:gap-0">
        <div className="md:w-[50%] flex flex-col gap-2">
          <Image
            src="/images/KESMainLogo2.png"
            alt="Kavod Engineering Logo"
            width={131}
            height={29}
          />
          <p className="w-full md:w-[75%] lg:w-[55%] xl:w-[40%]">
            We are experts at precision engineering, coating, welding
            inspection, and quality assurance for safer, stronger
            infrastructure.
          </p>
        </div>

        <div className="md:w-[50%] md:pl-10 flex flex-col gap-10">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-0">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Quick Links</h3>
              <nav className="flex flex-col">
                <Link href="#about" className="hover:text-gray-600">
                  About us
                </Link>
                <Link href="/" className="hover:text-gray-600">
                  Services
                </Link>
                <Link href="/" className="hover:text-gray-600">
                  Contact us
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Socials</h3>
              <div className="flex flex-col ">
                <a
                  href="https://www.instagram.com/invites/contact/?igsh=kzhqo6r2gywy&utm_content=xksfjv0"
                  className="flex items-center gap-1 hover:text-gray-600"
                >
                  <Image
                    src="/svg/InstagramLogo.svg"
                    alt="Kavod Instagram"
                    width={16}
                    height={16}
                  />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/kavod-engineering-services/"
                  className="flex items-center gap-1 hover:text-gray-600"
                >
                  <Image
                    src="/svg/LinkedinLogo.svg"
                    alt="Kavod Linkedin"
                    width={16}
                    height={16}
                  />
                  LinkedIn
                </a>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 xl:grid-cols-2 gap-7 xl:gap-0">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Contact us</h3>
              <div>
                <button
                  onClick={copyPhoneNumber}
                  className="flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none hover:text-gray-600"
                >
                  <span>
                    <Image
                      src="/svg/Phone.svg"
                      alt="Kavod Instagram"
                      width={20}
                      height={20}
                    />
                  </span>
                  {copied ? "Copied ✅" : phoneNumber}
                </button>

                <a
                  href="mailto:support@kavodengineering.com"
                  className="flex items-center gap-1 no-underline hover:text-gray-600"
                >
                  <span>
                    <Image
                      src="/svg/EnvelopeSimple.svg"
                      alt="Kavod Instagram"
                      width={20}
                      height={20}
                    />
                  </span>
                  support@kavodengineering.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Location</h3>
              <div className="flex gap-1">
                <Image
                  src="/svg/MapPin.svg"
                  alt="Kavod Instagram"
                  width={20}
                  height={20}
                />
                Jacksonville, Florida, USA
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-3 justify-between border-t-[0.5px] pt-4">
        <span>
          &copy; {currentYear} &mdash; Copyright. KAVOD Engineering Services
        </span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};
