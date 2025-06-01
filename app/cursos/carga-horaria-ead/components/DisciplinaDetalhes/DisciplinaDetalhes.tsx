import React from "react";
import { useDisciplinaDetalhes } from "./useDisciplinaDetalhes";

export interface DisciplinaDetalhesData {
  titulo: string;
  natureza: string;
  curso: string;
  setor: string;
  ementa: string;
  bibliografia: string;
  bibliografiaComplementar?: string;
}

export interface DisciplinaDetalhesProps {
  disciplina: DisciplinaDetalhesData;
  className?: string;
  onClose?: () => void;
}

const DisciplinaDetalhes: React.FC<DisciplinaDetalhesProps> = ({
  disciplina,
  className = "",
  onClose,
}) => {
  const {
    renderField,
    renderLongField,
    isDataIncomplete,
    disciplinaData,
  } = useDisciplinaDetalhes({ disciplina });

  return (
    <div className={`mt-8 ${className}`}>
      <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 leading-tight">
              {disciplinaData.hasTitle ? disciplina.titulo : "Título não disponível"}
              {disciplinaData.hasNatureza && (
              <span className="inline-block mt-1 ms-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {disciplina.natureza}
              </span>
            )}
            </h3>
            
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="ml-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 text-xl font-bold leading-none cursor-pointer"
              aria-label="Fechar detalhes"
              title="Fechar detalhes"
            >
              ×
            </button>
          )}
        </div>
        
        <div className="space-y-1 mb-4 p-4 bg-gray-50 rounded-md">
          {renderField("Curso", disciplina.curso, true)}
          {renderField("Setor", disciplina.setor, true)}
        </div>
        
        <div className="space-y-4">
          {renderLongField("Ementa", disciplina.ementa, true)}
          {renderLongField("Bibliografia", disciplina.bibliografia, true)}
          {renderLongField("Bibliografia Complementar", disciplina.bibliografiaComplementar)}
        </div>

        {isDataIncomplete && (
          <div className="text-center py-8">
            <div className="text-gray-400 text-sm">
              <p className="mb-2">⚠️ Dados incompletos</p>
              <p>As informações desta disciplina não estão completamente disponíveis.</p>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default DisciplinaDetalhes;