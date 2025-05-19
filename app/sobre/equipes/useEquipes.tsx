import { useMemo } from "react";

interface MembroProps {
  nome: string;
  cargo?: string;
  lattes?: string;
  agenda?: string;
  escala?: string;
  teletrabalho?: boolean;
}

interface SecaoProps {
  titulo: string;
  membros: MembroProps[];
}

interface EquipeProps {
  nome: string;
  secoes: SecaoProps[];
}

export function useEquipes() {
  const equipes: EquipeProps[] = useMemo(
    () => [
      {
        nome: "EQUIPE da SEaDIP",
        secoes: [
          {
            titulo: "SUPERINTENDENTE",
            membros: [
              {
                nome: "Glauco Gomes de Menezes",
                lattes: "#",
                agenda: "#",
              },
            ],
          },
          {
            titulo: "Unidade de Apoio Administrativo",
            membros: [],
          },
          {
            titulo: "Unidade de Controle e Execução Orçamentária",
            membros: [
              {
                nome: "Naia Paula Yolanda Bittencourt Tortato",
                escala: "Terça-feira e Quarta-feira",
              },
            ],
          },
          {
            titulo: "COORDENADORIA DE INOVAÇÃO EDUCACIONAL",
            membros: [
              {
                nome: "Sandramara Scandelari Kusano de Paula Soares",
                cargo: "Coordenadora",
                lattes: "#",
                agenda: "#",
              },
            ],
          },
          {
            titulo: "Seção EaD",
            membros: [
              {
                nome: "Anna Jungbluth",
                escala: "Segunda-feira e Sexta-feira",
              },
              {
                nome: "Marina Lupepso",
                teletrabalho: true,
              },
              {
                nome: "Renata Ramos das Neves",
                escala: "Terça-feira e Quinta-feira",
              },
              {
                nome: "Samara Oliveira Marques da Silva",
                escala: "Quarta-feira e Quinta-feira",
              },
            ],
          },
          {
            titulo: "Seção de Inovação Tecnológica",
            membros: [
              {
                nome: "Fabiana Costa Rabello",
                escala: "Terça-feira e Quarta-feira",
              },
              {
                nome: "José Eduardo dos Santos Geremias Junior",
                escala: "Segunda-feira e Terça-feira",
              },
              {
                nome: "Tiago Leinig",
                escala: "Quinta-feira e Sexta-feira",
              },
              {
                nome: "Renato Ramos",
                escala: "Trabalho presencial todos os dias",
              },
            ],
          },
        ],
      },
      {
        nome: "EQUIPE da UAB",
        secoes: [
          {
            titulo: "Coordenação",
            membros: [
              {
                nome: "Glauco Gomes de Menezes",
                cargo: "Coordenador UAB",
              },
              {
                nome: "Gláucia da Silva Brito",
                cargo: "Coordenadora Adjunta UAB",
              },
            ],
          },
        ],
      },
    ],
    []
  );

  return { equipes };
}