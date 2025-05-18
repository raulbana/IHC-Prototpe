import React from "react";

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
      <a
        href={navigateTo}
        className={`${isDisabled ? "text-gray-500" : "text-white"} ${
          isSelected ? "font-bold" : ""
        }`}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault();
          }
        }}
      >
        {text}
      </a>
    </li>
  );
};

export default NavItem;
