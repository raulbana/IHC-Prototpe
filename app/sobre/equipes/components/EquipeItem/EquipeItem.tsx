"use client"
import React, { useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";

export interface MembroProps {
  nome: string;
  cargo?: string;
  lattes?: string;
  agenda?: string;
  escala?: string;
  teletrabalho?: boolean;
}

export interface SecaoProps {
  titulo: string;
  membros: MembroProps[];
}

export interface EquipeItemProps {
  nome: string;
  secoes: SecaoProps[];
}

const EquipeItem: React.FC<EquipeItemProps> = ({ nome, secoes }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className=" pb-8">
      <button
        onClick={toggleExpand}
        className="w-full flex items-center justify-between text-2xl font-semibold text-default-blue pb-2 focus:outline-none group"
      >
        <h3 className="py-4 border-b border-default-blue">{nome}</h3>
        <div className="text-default-blue transition-transform duration-200">
          {isExpanded ? (
            <CaretUp size={24} weight="bold" />
          ) : (
            <CaretDown size={24} weight="bold" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="space-y-10 mt-6 transition-all duration-300 ease-in-out pt-2 pb-12 border-b border-default-blue">
          {secoes.map((secao, secaoIndex) => (
            <div key={secaoIndex} className="ml-4">
              <h4 className="text-xl font-medium text-default-blue mb-4 ">
                {secao.titulo}
              </h4>

              {secao.membros.length > 0 ? (
                <ul className="space-y-4 ml-4">
                  {secao.membros.map((membro, membroIndex) => (
                    <li
                      key={membroIndex}
                      className="border-l-2 border-gray-200 pl-4 py-1"
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{membro.nome}</span>
                          {membro.cargo && (
                            <span className="text-sm text-gray-500">
                              {membro.cargo}
                            </span>
                          )}
                        </div>

                        {(membro.lattes || membro.agenda) && (
                          <div className="text-sm mt-1 flex gap-3 text-blue-600">
                            {membro.lattes && (
                              <a href={membro.lattes} className="hover:underline">
                                Lattes
                              </a>
                            )}
                            {membro.agenda && (
                              <a href={membro.agenda} className="hover:underline">
                                Agenda
                              </a>
                            )}
                          </div>
                        )}

                        {membro.escala && (
                          <div className="text-sm text-gray-600 mt-1">
                            Escala presencial: {membro.escala}
                          </div>
                        )}

                        {membro.teletrabalho && (
                          <div className="text-sm text-gray-600 mt-1">
                            Teletrabalho integral
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 ml-4">–</p>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

export default EquipeItem;