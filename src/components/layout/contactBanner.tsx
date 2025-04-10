"use client";

import Image from "next/image";
import { useState } from "react";

export const ContactBanner = () => {
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
    <aside className="bg-brand-700 text-base-white text-[12px] py-2.5 px-5 md:px-10 flex justify-between items-start md:items-center">
      {/* email and phone */}
      <div className="flex flex-col gap-1 md:gap-5 md:flex-row">
        <a
          href="mailto:support@kavodengineering.com"
          className="flex items-center gap-1 no-underline hover:text-gray-600"
        >
          <span>
            <Image
              src="/svg/EnvelopeSimple.svg"
              alt="Kavod Instagram"
              width={16}
              height={16}
            />
          </span>
          support@kavodengineering.com
        </a>

        <button
          onClick={copyPhoneNumber}
          className="flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none hover:text-gray-600"
        >
          <span>
            <Image
              src="/svg/Phone.svg"
              alt="Kavod Instagram"
              width={16}
              height={16}
            />
          </span>
          {copied ? "Copied ✅" : phoneNumber}
        </button>
      </div>

      {/* socials */}
      <div className="flex gap-2 items-center">
        <a href="https://www.instagram.com/invites/contact/?igsh=kzhqo6r2gywy&utm_content=xksfjv0">
          <Image
            src="/svg/InstagramLogo.svg"
            alt="Kavod Instagram"
            width={16}
            height={16}
          />
        </a>
        <a href="https://www.linkedin.com/company/kavod-engineering-services/">
          <Image
            src="/svg/LinkedinLogo.svg"
            alt="Kavod Linkedin"
            width={16}
            height={16}
          />
        </a>
      </div>
    </aside>
  );
};
