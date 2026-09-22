"use client";

import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "icon" | "custom";
}

const PrimaryButton = ({
  children,
  className = "",
  variant = "default",
  ...rest
}: PrimaryButtonProps) => {
  const baseClasses =
    "bg-button-default hover:bg-button-hover cursor-pointer transition-colors text-white ";

  const variantClasses = {
    default: "px-4 py-2 rounded-lg button-primary flex-1",
    icon: "p-2 rounded-full button-primary",
    custom: ""
  };

  return (
    <section className="flex items-center">
      <button
        className={`${className}  ${baseClasses} ${variantClasses[variant]} hover:shadow-[0_0_5px_0px_#831fc1]`}
        {...rest}
      >
        {children}
      </button>
    </section>
  );
};

export default PrimaryButton;
