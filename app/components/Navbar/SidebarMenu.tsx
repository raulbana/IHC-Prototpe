"use client";

import useSidebarMenu from "./useSidebarMenu";
import NavGroup from "./NavGroup/NavGroup";
import Image from "next/image";
import type { ReactNode } from "react";
import { List as HamburgerIcon, X } from "phosphor-react";

export interface SidebarMenuProps {
  children?: ReactNode;
}

const SidebarMenu = ({ children }: SidebarMenuProps) => {
  const { menuData, toggleSection, navigateToHome, isOpen, setIsOpen } =
    useSidebarMenu();

  return (
    <div className="flex min-h-screen w-full">
      <aside
        className={`fixed left-0 top-0 z-30 h-screen transition-all duration-300
          ${isOpen ? "w-64 bg-default-blue text-white" : "w-18 bg-default-blue"}
          flex flex-col`}
      >
        {isOpen ? (
          <>
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
              <div className="flex justify-center mt-4">
                <button
                  className="bg-default-blue text-white p-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar menu lateral"
                  type="button"
                >
                  <X size={28} color="white" />
                </button>
              </div>
            </nav>
          </>
        ) : (
          <button
            className="flex items-center justify-center h-full w-full"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menu lateral"
            type="button"
          >
            <HamburgerIcon size={28} color="white" />
          </button>
        )}
      </aside>
      {/* Conteúdo principal */}
      <main
        className={`flex-1 overflow-x-hidden overflow-y-auto transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-3"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default SidebarMenu;
