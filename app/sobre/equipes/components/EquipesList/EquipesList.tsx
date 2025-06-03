import React from "react";
import EquipeItem, { EquipeItemProps } from "../EquipeItem/EquipeItem";

export interface EquipesListProps {
  equipes: EquipeItemProps[];
}

const EquipesList: React.FC<EquipesListProps> = ({ equipes }) => {
  return (
    <div className="space-y-4">
      {equipes.map((equipe, index) => (
        <EquipeItem key={index} nome={equipe.nome} secoes={equipe.secoes} />
      ))}
    </div>
  );
};

export default EquipesList;