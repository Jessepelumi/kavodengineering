import clsx from "clsx";
import React from "react";

interface customButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export const CustomButton = ({
  children,
  variant = "primary",
  className,
  onClick,
}: customButtonProps) => {
  const variantClasses = {
    primary:
      "text-brand-900 bg-secondary-500 hover:text-base-white before:bg-brand-700",
    secondary: "text-brand-900 bg-base-white before:bg-secondary-500",
  };

  return (
    <button
      className={clsx(
        "relative overflow-hidden text-[14px] py-2 px-4 transition-all duration-500 ease-in-out before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:transition-all before:duration-250 before:ease-in-out hover:before:w-full",
        variantClasses[variant],
        className
      )}
      onClick={onClick ? onClick : undefined}
    >
      {React.isValidElement<{ className?: string }>(children)
        ? React.cloneElement(children, {
            className: clsx(children.props.className, "relative"),
          })
        : children}
    </button>
  );
};
