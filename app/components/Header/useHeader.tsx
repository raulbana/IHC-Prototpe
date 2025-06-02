import { useMemo } from "react";

export interface HeaderLink {
  text: string;
  href: string;
  title?: string;
}

export interface UseHeaderReturn {
  federalLinks: HeaderLink[];
  handleVLibrasClick: () => void;
}

export const useHeader = (): UseHeaderReturn => {
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

  return {
    federalLinks,
    handleVLibrasClick
  };
};