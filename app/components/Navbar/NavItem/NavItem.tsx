import React from "react";
import Link from "next/link";

export interface NavItemProps {
  isSelected: boolean;
  isDisabled: boolean;
  text: string;
  navigateTo: string;
}

const NavItem: React.FC<NavItemProps> = ({
  isSelected,
  isDisabled,
  text,
  navigateTo,
}) => {
  return (
    <li
      className={`p-2 rounded transition-colors ${
        isSelected
          ? "bg-white text-default-blue font-bold"
          : "text-white hover:bg-white/10"
      } ${isDisabled ? "cursor-not-allowed opacity-60" : ""}`}
    >
      <Link
        href={navigateTo}
        className="block w-full"
        tabIndex={isDisabled ? -1 : 0}
        aria-disabled={isDisabled}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
