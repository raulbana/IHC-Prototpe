import { useMemo } from "react";
import { NewsItemProps } from "./components/NewsItem/NewsItem";
import { ImageLinkCardProps } from "../components/ImageLinkCard/ImageLinkCard";

export function useHome() {
  const newsItems: NewsItemProps[] = useMemo(
    () => [
      {
        id: 17,
        title:
          "EDITAL Nº 17/2025 – HOMOLOGAÇÃO DO RESULTADO E CLASSIFICAÇÃO FINAL – SELEÇÃO DE BOLSISTAS PARA ATUAÇÃO NAS ÁREAS DE AUDIOVISUAL E SUPORTE DE TECNOLOGIA DA INFORMAÇÃO NO LABORATÓRIO DE CULTURA DIGITAL, DA UFPR.",
        date: "30 de abril de 2025",
      },
      {
        id: 15,
        title:
          "EDITAL Nº 15/2025 – PROCESSO DE SELEÇÃO PARA CONCESSÃO DE BOLSA DE COORDENADOR DE CURSO I PARA ATUAR NO PROGRAMA SISTEMA UAB DA UFPR – CURSO DE ESPECIALIZAÇÃO EM EDUCAÇÃO DE JOVENS E ADULTOS DO CAMPO.",
        date: "29 de abril de 2025",
      },
      {
        id: 16,
        title:
          "EDITAL Nº 16/2025 – RESULTADO FINAL – PROCESSO DE SELEÇÃO PARA CONCESSÃO DE BOLSA DE COORDENADOR DE TUTORIA PARA ATUAR NO PROGRAMA UAB DA UFPR.",
        date: "29 de abril de 2025",
      },
    ],
    []
  );

  const imageCards: ImageLinkCardProps[] = [
    {
      imageSrc:
        "https://cipead.ufpr.br/wp-content/uploads/2020/12/960x540-640x360.png",
      imageAlt: "Sistema de Bibliotecas da UFPR",
      linkUrl:
        "http://cipead.ufpr.br//index.php/sistema-de-bibliotecas-da-ufpr/",
    },
    {
      imageSrc:
        "https://cipead.ufpr.br/wp-content/uploads/2019/09/acessoaomoodle_banner.png",
      imageAlt: "Acesso ao Moodle",
      linkUrl: "https://ufprvirtual.ufpr.br/",
    },
    {
      imageSrc:
        "https://cipead.ufpr.br/wp-content/uploads/2019/09/cursos_banner.png",
      imageAlt: "Acesso a apresentação de cursos",
      linkUrl: "http://cipead.ufpr.br//index.php/cursos/apresentacao/",
    },
  ];

  return { newsItems, imageCards };
}
