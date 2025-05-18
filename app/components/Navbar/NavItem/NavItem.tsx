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
      className={`${isSelected ? "bg-white-500 rounded p-2" : ""} ${
        isDisabled ? "cursor-not-allowed" : ""
      } p-2 rounded`}
    >
      <Link href={navigateTo} passHref legacyBehavior>
        <a className={`${isSelected ? "font-bold" : ""} text-white hover:underline`}>
          {text}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
