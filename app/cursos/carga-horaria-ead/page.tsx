"use client";

import { useCursosCargaHorariaEaD } from "./useCursosCargaHorariaEaD";
import DataTable from "@/app/components/DataTable/DataTable";
import DisciplinaDetalhes from "./components/DisciplinaDetalhes/DisciplinaDetalhes";

export default function CargaHorariaEAD() {
    const {
        setores,
        setorSelecionado,
        setSetorSelecionado,
        cursoSelecionado,
        setCursoSelecionado,
        disciplinaSelecionada,
        setDisciplinaSelecionada,
        setor,
        disciplinas,
        columns,
        detalhesRef,
        tabelaRef,
        fecharDetalhes,
    } = useCursosCargaHorariaEaD();

    return (
        <main className="min-h-screen bg-white text-gray-800 py-8 px-4 md:px-16">
            <section className="max-w-5xl mx-auto my-4 rounded-xl p-4">
                <h2 className="text-3xl font-semibold mb-4 text-default-blue">
                    CURSOS DE GRADUAÇÃO COM CARGA HORÁRIA EaD
                </h2>
                <div className="space-y-6">
                    <p className="text-lg">
                        Abaixo, apresentamos a lista dos cursos de graduação com carga horária EaD. As informações estão organizadas por setor, incluindo as disciplinas, a ementa e a bibliografia de cada curso, bem como a carga horária total.
                    </p>
                    <p className="text-lg">
                        <b>Observação</b>: O carregamento da lista pode levar alguns segundos. Solicitamos a gentileza de aguardar enquanto as informações são carregadas.
                    </p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto my-4 rounded-xl p-4 bg-gray-50 shadow" ref={tabelaRef}>
                <h3 className="text-2xl font-semibold mb-4 text-default-blue">Navegue pelos Setores e Cursos</h3>
                <div className="flex gap-4 items-end mb-6">
                    <div className="w-1/2">
                        <label className="block mb-1 font-medium">Setor:</label>
                        <select
                            className="border rounded px-2 py-1 w-full"
                            value={setorSelecionado ?? ""}
                            onChange={e => {
                                setSetorSelecionado(e.target.value === "" ? null : Number(e.target.value));
                                setCursoSelecionado(null);
                                setDisciplinaSelecionada(null);
                            }}
                        >
                            <option value="">Selecione um setor</option>
                            {setores.map((s, idx) => (
                                <option key={s.nome} value={idx}>{s.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="block mb-1 font-medium">Curso:</label>
                        <select
                            className={`border rounded px-2 py-1 w-full ${!setor ? 'bg-gray-200 text-gray-500 cursor-not-allowed opacity-70' : ''}`}
                            value={cursoSelecionado ?? ""}
                            onChange={e => {
                                setCursoSelecionado(e.target.value === "" ? null : Number(e.target.value));
                                setDisciplinaSelecionada(null);
                            }}
                            disabled={!setor}
                            title={!setor ? "Selecione um setor primeiro" : ""}
                        >
                            <option value="">Todos os cursos</option>
                            {setor?.cursos.map((c, idx) => (
                                <option key={c.nome} value={idx}>{c.nome}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <DataTable
                        data={disciplinas}
                        columns={columns}
                        controls={(row) => [
                            {
                                text: "Detalhes",
                                type: "SECONDARY",
                                size: "SMALL",
                                onClick: () => setDisciplinaSelecionada(row.detalhes),
                                children: "Ver",
                            },
                        ]}
                    />
                </div>
                <div ref={detalhesRef}>
                    {disciplinaSelecionada && (
                            <DisciplinaDetalhes 
                                disciplina={disciplinaSelecionada}
                                onClose={fecharDetalhes}
                            />
                        )}
                </div>
            </section>
        </main>
    );
}