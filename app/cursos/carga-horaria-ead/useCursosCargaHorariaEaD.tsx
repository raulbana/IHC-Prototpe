import { useState, useEffect, useMemo, useRef } from "react";

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

export function useCursosCargaHorariaEaD() {
  const [setores, setSetores] = useState<Setor[]>([]);
  const [setorSelecionado, setSetorSelecionado] = useState<number | null>(null);
  const [cursoSelecionado, setCursoSelecionado] = useState<number | null>(null);
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<
    any | null
  >(null);
  const detalhesRef = useRef<HTMLDivElement>(null);
  const tabelaRef = useRef<HTMLDivElement>(null);

  const setor = setores[setorSelecionado ?? -1];

  const disciplinas = useMemo(() => {
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

  const columns = useMemo(
    () => [
      {
        accessorKey: "disciplina",
        header: "Disciplina",
        cell: (info: any) => info.getValue(),
      },
      {
        accessorKey: "curso",
        header: "Curso",
        cell: (info: any) => info.getValue(),
      },
      {
        accessorKey: "natureza",
        header: "Natureza",
        cell: (info: any) => info.getValue(),
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
