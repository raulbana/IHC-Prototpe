import { useEffect, useState } from "react";
import { NavGroupProps } from "./NavGroup/NavGroup";
import { usePathname } from "next/navigation";

const initialMenuData: NavGroupProps[] = [
  {
    title: "Sobre",
    items: [
      {
        isSelected: false,
        isDisabled: false,
        text: "Apresentação",
        navigateTo: "/apresentacao",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Histórico",
        navigateTo: "/historico",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Equipe",
        navigateTo: "/equipe",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Perguntas Frequentes (FAQ)",
        navigateTo: "/faq",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Contato",
        navigateTo: "/contato",
      },
    ],
    isOpen: false,
  },
  {
    title: "Ensino e Plataformas",
    items: [
      {
        isSelected: false,
        isDisabled: false,
        text: "UFPR Virtual",
        navigateTo: "/ufpr-virtual",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "UFPR Aberta",
        navigateTo: "/ufpr-aberta",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Acesso",
        navigateTo: "/acesso",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Criação de Usuário",
        navigateTo: "/client/Access",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Abertura de Turmas",
        navigateTo: "/abertura-turmas",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Suporte ao Usuário",
        navigateTo: "/suporte-usuario",
      },
    ],
    isOpen: false,
  },
  {
    title: "Cursos e Capacitações",
    items: [
      {
        isSelected: false,
        isDisabled: false,
        text: "Graduação",
        navigateTo: "/graduacao",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Aperfeiçoamento",
        navigateTo: "/aperfeicoamento",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Especialização",
        navigateTo: "/especializacao",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Capacitação para Docentes",
        navigateTo: "/capacitacao-docentes",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Carga Horária EaD",
        navigateTo: "/cursos/carga-horaria-ead",
      },
    ],
    isOpen: false,
  },
  {
    title: "Legislação e Documentos",
    items: [
      {
        isSelected: false,
        isDisabled: false,
        text: "Legislação UFPR",
        navigateTo: "/legislacao-ufpr",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Legislação Nacional",
        navigateTo: "/legislacao-nacional",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Legislação UAB",
        navigateTo: "/legislacao-uab",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Instrumentos de Avaliação (INEP)",
        navigateTo: "/instrumentos-avaliacao-inep",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Pareceres (CNE)",
        navigateTo: "/pareceres-cne",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Guias e Manuais",
        navigateTo: "/guias-manuais",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Termos",
        navigateTo: "/termos",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Templates",
        navigateTo: "/templates",
      },
    ],
    isOpen: false,
  },
  {
    title: "Laboratório CIPEAD",
    items: [
      {
        isSelected: false,
        isDisabled: false,
        text: "Formulários",
        navigateTo: "/formularios",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Materiais para Docentes",
        navigateTo: "/materiais-docentes",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Contato LABCIPEAD",
        navigateTo: "/contato-labcipead",
      },
    ],
    isOpen: false,
  },
  {
    title: "Universidade Aberta do Brasil (UAB)",
    items: [
      {
        isSelected: false,
        isDisabled: false,
        text: "Histórico",
        navigateTo: "/uab-historico",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Polos",
        navigateTo: "/uab-polos",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Equipe",
        navigateTo: "/uab-equipe",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Cursos",
        navigateTo: "/uab-cursos",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Manuais e Orientações",
        navigateTo: "/uab-manuais-orientacoes",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Formulários e Templates",
        navigateTo: "/uab-formularios-templates",
      },
    ],
    isOpen: false,
  },
  {
    title: "Transparência",
    items: [
      {
        isSelected: false,
        isDisabled: false,
        text: "Relatórios e Documentos",
        navigateTo: "/relatorios-documentos",
      },
      {
        isSelected: false,
        isDisabled: false,
        text: "Pagamento de Bolsas (UAB)",
        navigateTo: "/pagamento-bolsas-uab",
      },
    ],
    isOpen: false,
  },
];

// ...restante do hook permanece igual...

const useSidebarMenu = () => {
  const [menuData, setMenuData] = useState(initialMenuData);
  const pathname = usePathname();

  const toggleSection = (title: string) => {
    setMenuData((prevMenuData) =>
      prevMenuData.map((section) =>
        section.title === title
          ? { ...section, isOpen: !section.isOpen }
          : section
      )
    );
  };

  const createOnToggle = (title: string) => () => toggleSection(title);

  const initializeMenu = () => {
    setMenuData((prevMenuData) =>
      prevMenuData.map((section) => ({
        ...section,
        isOpen: false,
        onToggle: createOnToggle(section.title),
      }))
    );
  };

  useEffect(() => {
    initializeMenu();
  }, []);

  const updateSectionItems = (
    section: NavGroupProps,
    pathname: string
  ): NavGroupProps => {
    return {
      ...section,
      items: section.items.map((item) => ({
        ...item,
        isSelected: item.navigateTo === pathname,
      })),
    };
  };

  useEffect(() => {
    setMenuData((prevMenuData) =>
      prevMenuData.map((section) => updateSectionItems(section, pathname))
    );
  }, [pathname]);

  return {
    menuData,
    toggleSection,
  };
};

export default useSidebarMenu;
