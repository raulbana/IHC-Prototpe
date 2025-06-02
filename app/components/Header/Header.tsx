"use client";
import React from "react";
import Link from "next/link";
import { useHeader } from "./useHeader";
import { Span } from "next/dist/trace";

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const { federalLinks, handleVLibrasClick } = useHeader();

  return (
    <header className={`bg-default-blue text-white text-sm ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 max-w-full">

        <nav className="flex-1 mx-8">
          <ul className="flex items-center justify-center space-x-2">
        <div className="flex items-center">
          <Link 
            href="https://gov.br" 
            className="flex items-center bg-blue-800 px-3 py-1 rounded hover:bg-blue-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            title="Portal do Governo Federal"
          >
            <span className="font-semibold">🇧🇷 GOV</span>
          </Link>
        </div>
        <span className="text-blue-300">|</span>
            {federalLinks.map((link, index) => (
              <React.Fragment key={link.text}>
                <li>
                  <Link 
                    href={link.href}
                    className="hover:underline hover:text-blue-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                  >
                    {link.text}
                  </Link>
                </li>
                {index < federalLinks.length - 1 && (
                  <li className="text-blue-300">|</li>
                )}
              </React.Fragment>
            ))}
            <span className="text-blue-300">|</span>
            <div className="flex items-center">
            <button 
                className="flex items-center bg-blue-800 px-3 py-1 rounded hover:bg-blue-900 transition-colors"
                onClick={handleVLibrasClick}
                title="Conteúdo acessível em Libras usando o VLibras Widget com opções dos Avatares Ícaro, Hosana ou Guga"
            >
                <img 
                  src="https://vlibras.gov.br/app2//assets/access_icon.svg" 
                  alt="Ícone de Acesso em Libras" 
                  className="w-6 h-6 mr-1" 
                />
                <span className="text-xs font-semibold">VLibras</span>
            </button>
            </div>
            <span className="text-blue-300">|</span>

          </ul>
        </nav>


      </div>
    </header>
  );
};

export default Header;