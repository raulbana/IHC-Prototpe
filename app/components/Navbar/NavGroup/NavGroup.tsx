import React from "react";
import NavItem, { NavItemProps } from "../NavItem/NavItem";
import { CaretRight } from "phosphor-react";

export interface NavGroupProps {
  title: string;
  items: NavItemProps[];
  isOpen: boolean;
  onToggle?: () => void;
}

const NavGroup: React.FC<NavGroupProps> = ({
  title,
  items,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left py-2 font-semibold transition-colors"
      >
        {title}
        <CaretRight
          className={`transition-transform duration-200 cursor-pointer ${
            isOpen ? "rotate-90" : ""
          }`}
          size={16}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="ml-4 mt-1 space-y-1">
          {items.map((item) => (
            <NavItem key={item.text} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavGroup;
