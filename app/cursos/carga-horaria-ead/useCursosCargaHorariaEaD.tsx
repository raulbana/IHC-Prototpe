import { useState, useEffect, useMemo, useRef } from "react";
import { ColumnDef, CellContext } from "@tanstack/react-table";

type Disciplina = {
  titulo: string;
  natureza: "Obrigatória" | "Optativa";
  ementa: string;
  bibliografia: string;
  bibliografiaComplementar?: string;
};

type Curso = {
  nome: string;
  disciplinas: Disciplina[];
};

type Setor = {
  nome: string;
  cursos: Curso[];
};

export type DisciplinaDetalhes = Disciplina & { curso: string; setor: string };

type LinhaDisciplina = {
  id: string;
  disciplina: string;
  curso: string;
  natureza: "Obrigatória" | "Optativa";
  detalhes: DisciplinaDetalhes;
};

export function useCursosCargaHorariaEaD() {
  const [setores, setSetores] = useState<Setor[]>([]);
  const [setorSelecionado, setSetorSelecionado] = useState<number | null>(null);
  const [cursoSelecionado, setCursoSelecionado] = useState<number | null>(null);
  const [disciplinaSelecionada, setDisciplinaSelecionada] =
    useState<DisciplinaDetalhes | null>(null);
  const detalhesRef = useRef<HTMLDivElement>(null);
  const tabelaRef = useRef<HTMLDivElement>(null);

  const setor = setores[setorSelecionado ?? -1];

  const disciplinas = useMemo<LinhaDisciplina[]>(() => {
    if (!setor) return [];
    let cursosFiltrados = setor.cursos;
    if (cursoSelecionado !== null) {
      cursosFiltrados = [setor.cursos[cursoSelecionado]];
    }
    return cursosFiltrados.flatMap((c) =>
      c.disciplinas.map((disc, idx) => ({
        id: `${c.nome}-${idx}`,
        disciplina: disc.titulo,
        curso: c.nome,
        natureza: disc.natureza,
        detalhes: {
          ...disc,
          curso: c.nome,
          setor: setor.nome,
        },
      }))
    );
  }, [setor, cursoSelecionado]);

  const columns = useMemo<ColumnDef<LinhaDisciplina>[]>(
    () => [
      {
        accessorKey: "disciplina",
        header: "Disciplina",
        cell: (info: CellContext<LinhaDisciplina, unknown>) =>
          typeof info.getValue() === "string"
            ? info.getValue()
            : JSON.stringify(info.getValue() ?? ""),
      },
      {
        accessorKey: "curso",
        header: "Curso",
        cell: (info: CellContext<LinhaDisciplina, unknown>) =>
          typeof info.getValue() === "string"
            ? info.getValue()
            : JSON.stringify(info.getValue() ?? ""),
      },
      {
        accessorKey: "natureza",
        header: "Natureza",
        cell: (info: CellContext<LinhaDisciplina, unknown>) => {
          const value = info.getValue();
          if (typeof value === "string") {
            return value;
          } else if (value != null) {
            return JSON.stringify(value);
          } else {
            return "";
          }
        },
      },
    ],
    []
  );

  useEffect(() => {
    async function loadSetores() {
      const response = await fetch("/assets/cursos-carga-horaria-ead.json");
      const data = await response.json();
      setSetores(data);
    }
    loadSetores();
  }, []);

  useEffect(() => {
    if (disciplinaSelecionada && detalhesRef.current) {
      setTimeout(() => {
        detalhesRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [disciplinaSelecionada]);

  const fecharDetalhes = () => {
    setDisciplinaSelecionada(null);
    setTimeout(() => {
      tabelaRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return {
    setores,
    setorSelecionado,
    setSetorSelecionado,
    cursoSelecionado,
    setCursoSelecionado,
    disciplinaSelecionada,
    setDisciplinaSelecionada,
    disciplinas,
    columns,
    setor,
    detalhesRef,
    tabelaRef,
    fecharDetalhes,
  };
}
