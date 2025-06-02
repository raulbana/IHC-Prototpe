import { usePathname } from "next/navigation";

const useBreadcrumb = () => {
  const breadcrumbLabels: Record<string, string> = {
    "": "Início",
    apresentacao: "Apresentação",
    historico: "Histórico",
    equipes: "Equipes",
    faq: "Perguntas Frequentes",
    contato: "Contato",
    "ufpr-virtual": "UFPR Virtual",
    "ufpr-aberta": "UFPR Aberta",
    acesso: "Acesso",
    client: "Cliente",
    signup: "Criação de Usuário",
    "abertura-turmas": "Abertura de Turmas",
    "suporte-usuario": "Suporte ao Usuário",
    graduacao: "Graduação",
    aperfeicoamento: "Aperfeiçoamento",
    especializacao: "Especialização",
    "capacitacao-docentes": "Capacitação para Docentes",
    "carga-horaria-ead": "Carga Horária EaD",
    "legislacao-ufpr": "Legislação UFPR",
    "legislacao-nacional": "Legislação Nacional",
    "legislacao-uab": "Legislação UAB",
    "instrumentos-avaliacao-inep": "Instrumentos de Avaliação (INEP)",
    "pareceres-cne": "Pareceres (CNE)",
    "guias-manuais": "Guias e Manuais",
    termos: "Termos",
    templates: "Templates",
    formularios: "Formulários",
    "materiais-docentes": "Materiais para Docentes",
    "contato-labcipead": "Contato LABCIPEAD",
    "uab-historico": "Histórico UAB",
    "uab-polos": "Polos UAB",
    "uab-cursos": "Cursos UAB",
    "uab-manuais-orientacoes": "Manuais e Orientações UAB",
    "uab-formularios-templates": "Formulários e Templates UAB",
    "relatorios-documentos": "Relatórios e Documentos",
    "pagamento-bolsas-uab": "Pagamento de Bolsas (UAB)",
    sobre: "Sobre",
    cursos: "Cursos",
  };

  function isPageAvailable(href: string) {
    const validPaths = [
      "/",
      "/apresentacao",
      "/historico",
      "/sobre/equipes",
      "/faq",
      "/contato",
      "/ufpr-virtual",
      "/ufpr-aberta",
      "/acesso",
      "/client/signup",
      "/abertura-turmas",
      "/suporte-usuario",
      "/graduacao",
      "/aperfeicoamento",
      "/especializacao",
      "/capacitacao-docentes",
      "/cursos/carga-horaria-ead",
      "/legislacao-ufpr",
      "/legislacao-nacional",
      "/legislacao-uab",
      "/instrumentos-avaliacao-inep",
      "/pareceres-cne",
      "/guias-manuais",
      "/termos",
      "/templates",
      "/formularios",
      "/materiais-docentes",
      "/contato-labcipead",
      "/uab-historico",
      "/uab-polos",
      "/uab-cursos",
      "/uab-manuais-orientacoes",
      "/uab-formularios-templates",
      "/relatorios-documentos",
      "/pagamento-bolsas-uab",
    ];
    return validPaths.includes(href);
  }

  function getBreadcrumbs(pathname: string) {
    const segments = pathname.replace(/(^\/)|(\/$)/g, "").split("/");
    const crumbs = segments.map((seg, idx) => {
      const href = "/" + segments.slice(0, idx + 1).join("/");
      return {
        label:
          breadcrumbLabels[seg] || seg.charAt(0).toUpperCase() + seg.slice(1),
        href,
      };
    });

    return [
      { label: "Início", href: "/" },
      ...crumbs.filter((c) => c.href !== "/"),
    ];
  }

  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);

  return {
    breadcrumbs,
    isPageAvailable,
  };
};

export default useBreadcrumb;
