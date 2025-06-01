"use client";

import useSidebarMenu from "./useSidebarMenu";
import NavGroup from "./NavGroup/NavGroup";
import Image from "next/image";
import type { ReactNode } from "react";

export interface SidebarMenuProps {
  children?: ReactNode;
}

const SidebarMenu = ({ children }: SidebarMenuProps) => {
  const { menuData, toggleSection, navigateToHome } = useSidebarMenu();
  
  return (
    <div className="flex min-h-screen w-full">
      <aside className="flex flex-col w-64 h-screen bg-default-blue text-white fixed left-0 top-0 z-30">
        <div className="flex w-full justify-center items-center p-2 cursor-pointer">
          <Image
            alt="seadip-banner"
            src="https://cipead.ufpr.br/wp-content/uploads/2025/01/bannersite25.png"
            width={300}
            height={60}
            onClick={navigateToHome}
            priority
          />
        </div>
        <nav className="flex-1 sidebar-scroll overflow-y-auto p-4 space-y-4">
          {menuData.map((section) => (
            <NavGroup
              key={section.title}
              title={section.title}
              items={section.items}
              isOpen={section.isOpen}
              onToggle={() => toggleSection(section.title)}
            />
          ))}
        </nav>
      </aside>
      <main className="flex-1 ml-64 overflow-x-hidden overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default SidebarMenu;
