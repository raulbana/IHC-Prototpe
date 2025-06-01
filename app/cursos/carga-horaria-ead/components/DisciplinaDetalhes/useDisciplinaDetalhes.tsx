import React, { useMemo } from "react";
import { DisciplinaDetalhesData } from "./DisciplinaDetalhes";

export interface UseDisciplinaDetalhesProps {
  disciplina: DisciplinaDetalhesData;
}

export interface UseDisciplinaDetalhesReturn {
  hasContent: (content: string | undefined) => boolean;
  renderField: (label: string, content: string | undefined, isRequired?: boolean) => React.ReactNode;
  renderLongField: (label: string, content: string | undefined, isRequired?: boolean) => React.ReactNode;
  isDataIncomplete: boolean;
  disciplinaData: {
    hasTitle: boolean;
    hasNatureza: boolean;
    hasCurso: boolean;
    hasSetor: boolean;
    hasEmenta: boolean;
    hasBibliografia: boolean;
    hasBibliografiaComplementar: boolean;
  };
}

export const useDisciplinaDetalhes = ({ disciplina }: UseDisciplinaDetalhesProps): UseDisciplinaDetalhesReturn => {
  const hasContent = (content: string | undefined): boolean => {
    return content !== undefined && content.trim() !== "";
  };

  const disciplinaData = useMemo(() => ({
    hasTitle: hasContent(disciplina.titulo),
    hasNatureza: hasContent(disciplina.natureza),
    hasCurso: hasContent(disciplina.curso),
    hasSetor: hasContent(disciplina.setor),
    hasEmenta: hasContent(disciplina.ementa),
    hasBibliografia: hasContent(disciplina.bibliografia),
    hasBibliografiaComplementar: hasContent(disciplina.bibliografiaComplementar),
  }), [disciplina]);

  const isDataIncomplete = useMemo(() => {
    return !disciplinaData.hasTitle && !disciplinaData.hasEmenta && !disciplinaData.hasBibliografia;
  }, [disciplinaData]);

  const renderField = (label: string, content: string | undefined, isRequired = false): React.ReactNode => {
    if (!hasContent(content)) {
      if (isRequired) {
        return (
          <div className="mb-2">
            <span className="font-medium text-gray-700">{label}:</span>{" "}
            <span className="text-gray-400 italic">Informação não disponível</span>
          </div>
        );
      }
      return null;
    }

    return (
      <div className="mb-2">
        <span className="font-medium text-gray-700">{label}:</span>{" "}
        <span className="text-gray-800">{content}</span>
      </div>
    );
  };

  const renderLongField = (label: string, content: string | undefined, isRequired = false): React.ReactNode => {
    if (!hasContent(content)) {
      if (isRequired) {
        return (
          <div className="mt-4">
            <div className="font-medium text-gray-700 mb-1">{label}:</div>
            <div className="text-gray-400 italic text-sm border-l-4 border-gray-300 pl-3">
              Informação não disponível
            </div>
          </div>
        );
      }
      return null;
    }

    return (
      <div className="mt-4">
        <div className="font-medium text-gray-700 mb-1">{label}:</div>
        <div className="text-sm text-gray-800 leading-relaxed border-l-4 border-blue-600 pl-3">
          {content}
        </div>
      </div>
    );
  };

  return {
    hasContent,
    renderField,
    renderLongField,
    isDataIncomplete,
    disciplinaData,
  };
};