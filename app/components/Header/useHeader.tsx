import { useMemo, useState, useRef, useEffect } from "react";

export interface HeaderLink {
  text: string;
  href: string;
  title?: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface UseHeaderReturn {
  federalLinks: HeaderLink[];
  handleVLibrasClick: () => void;
  // Language dropdown
  languages: Language[];
  selectedLanguage: Language;
  isLanguageDropdownOpen: boolean;
  toggleLanguageDropdown: () => void;
  selectLanguage: (language: Language) => void;
  closeLanguageDropdown: () => void;
  languageDropdownRef: React.RefObject<HTMLDivElement | null>;
}

export const useHeader = (): UseHeaderReturn => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    code: 'pt-BR',
    name: 'Português (Brasil)',
    flag: '🇧🇷'
  });
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = useMemo(() => [
    {
      code: 'pt-BR',
      name: 'Português (Brasil)',
      flag: '🇧🇷'
    },
    {
      code: 'en-US',
      name: 'English (US)',
      flag: '🇺🇸'
    }
  ], []);

  const federalLinks: HeaderLink[] = useMemo(() => [
    {
      text: "Simplifique!",
      href: "http://www.gov.br/economia/pt-br/canais_atendimento/ouvidoria/simplifique",
      title: "Simplifique - Portal de Desburocratização"
    },
    {
      text: "Comunica BR",
      href: "https://www.gov.br/secom/pt-br/acesso-a-informacao/comunicabr/",
      title: "Portal de Comunicação do Governo Federal"
    },
    {
      text: "Participe",
      href: "https://www.gov.br/pt-br/participacao-social/",
      title: "Portal de Participação Social"
    },
    {
      text: "Acesso à informação",
      href: "http://www.gov.br/acessoainformacao/",
      title: "Portal de Acesso à Informação"
    },
    {
      text: "Legislação",
      href: "http://www.planalto.gov.br/legislacao",
      title: "Portal da Legislação"
    },
    {
      text: "Canais",
      href: "https://gov.br/pt-br/canais-do-executivo-federal",
      title: "Canais do Executivo Federal"
    }
  ], []);

  const handleVLibrasClick = () => {
    console.log('VLibras ativado - Funcionalidade será implementada futuramente');
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
    console.log(`Idioma alterado para: ${language.name}`);
  };

  const closeLanguageDropdown = () => {
    setIsLanguageDropdownOpen(false);
  };

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        closeLanguageDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    federalLinks,
    handleVLibrasClick,
    languages,
    selectedLanguage,
    isLanguageDropdownOpen,
    toggleLanguageDropdown,
    selectLanguage,
    closeLanguageDropdown,
    languageDropdownRef,
  };
}