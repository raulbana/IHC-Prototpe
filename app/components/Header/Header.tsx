"use client";
import React from "react";
import Link from "next/link";
import { useHeader } from "./useHeader";
import { CaretDown, CaretUp } from "phosphor-react";

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const { 
    federalLinks, 
    handleVLibrasClick,
    languages,
    selectedLanguage,
    isLanguageDropdownOpen,
    toggleLanguageDropdown,
    selectLanguage,
    languageDropdownRef
  } = useHeader();

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
            <div className="relative flex items-center" ref={languageDropdownRef}>
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center bg-blue-800 px-3 py-1 rounded hover:bg-blue-900 transition-colors"
                title="Selecionar idioma"
                aria-expanded={isLanguageDropdownOpen}
                aria-haspopup="true"
              >
                <span className="mr-1">{selectedLanguage.flag}</span>
                <span className="text-xs font-semibold mr-1">{selectedLanguage.code.split('-')[0].toUpperCase()}</span>
                {isLanguageDropdownOpen ? (
                  <CaretUp size={12} weight="bold" aria-label="Fechar menu de idiomas" />
                ) : (
                  <CaretDown size={12} weight="bold" aria-label="Abrir menu de idiomas" />
                )}
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[180px]">
                  <ul className="py-1">
                    {languages.map((language) => (
                      <li key={language.code}>
                        <button
                          onClick={() => selectLanguage(language)}
                          className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                            selectedLanguage.code === language.code
                              ? 'bg-blue-50 text-blue-700 font-medium'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          title={`Alterar idioma para ${language.name}`}
                        >
                          <span className="mr-2">{language.flag}</span>
                          <span>{language.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </ul>
        </nav>


      </div>
    </header>
  );
};

export default Header;