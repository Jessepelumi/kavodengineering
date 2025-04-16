"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export const CustomButton = ({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: CustomButtonProps) => {
  const variantClasses = {
    primary:
      "text-brand-900 bg-secondary-500 hover:text-base-white before:bg-brand-700",
    secondary: "text-brand-900 bg-base-white before:bg-secondary-500",
  };

  const baseClasses =
    "relative overflow-hidden text-[14px] py-2 px-4 transition-all duration-500 ease-in-out before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:transition-all before:duration-250 before:ease-in-out hover:before:w-full before:z-0";

  const buttonClasses = clsx(baseClasses, variantClasses[variant], className);

  const content = React.isValidElement<{ className?: string }>(children) ? (
    React.cloneElement(children, {
      className: clsx(children.props.className, "relative z-10"),
    })
  ) : (
    <span className="relative z-10">{children}</span>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  );
};
