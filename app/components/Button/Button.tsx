"use client";

import React from "react";

export type ButtonType =
  | "PRIMARY"
  | "SECONDARY"
  | "TERTIARY"
  | "DANGER"
  | "SUCCESS"
  | "WARNING"
  | "QUATERNARY"
  | "DISABLED";

export type ButtonSize = "SMALL" | "MEDIUM" | "LARGE";

export type IconPosition = "LEFT" | "RIGHT";

export interface ButtonProps {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
  disabled?: boolean;
  extraClass?: string;
  size?: ButtonSize;
  typeButton?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  iconPosition?: IconPosition;
}

function getTypeClass(type: ButtonType): string {
  switch (type) {
    case "PRIMARY":
      return "bg-default-blue text-white hover:bg-blue-700";
    case "SECONDARY":
      return "bg-white text-default-blue border border-default-blue hover:bg-blue-50";
    case "DANGER":
      return "bg-red-600 text-white hover:bg-red-700";
    case "SUCCESS":
      return "bg-green-600 text-white hover:bg-green-700";
    case "WARNING":
      return "bg-yellow-400 text-black hover:bg-yellow-500";
    case "DISABLED":
      return "bg-gray-300 text-gray-500 cursor-not-allowed";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

function getSizeClass(size: ButtonSize): string {
  switch (size) {
    case "SMALL":
      return "px-3 py-1 text-xs";
    case "LARGE":
      return "px-6 py-3 text-lg";
    default:
      return "px-4 py-2 text-sm";
  }
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "PRIMARY",
  disabled = false,
  extraClass = "",
  size = "MEDIUM",
  typeButton = "button",
  children,
  iconPosition = "LEFT",
}) => {
  const baseClass =
    "inline-flex items-center justify-center rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const typeClass = getTypeClass(type);
  const sizeClass = getSizeClass(size);

  return (
    <button
      type={typeButton}
      className={`${baseClass} ${typeClass} ${sizeClass} ${extraClass}`}
      onClick={onClick}
      disabled={disabled || type === "DISABLED"}
    >
      {iconPosition === "LEFT" && children}
      {text && <span className="mx-1">{text}</span>}
      {iconPosition === "RIGHT" && children}
      {!text && !children && <span />}
    </button>
  );
};

export default Button;
