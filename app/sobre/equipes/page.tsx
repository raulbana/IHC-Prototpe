import { useEquipes } from "./useEquipes";
import EquipesList from "./components/EquipesList/EquipesList";

export default function EquipesPage() {
  const { equipes } = useEquipes();

  return (
    <main className="xbg-white text-gray-800 py-8 px-4 md:px-16">
      <section className="max-w-3xl mx-auto my-4 rounded-xl p-4">
        <h2 className="text-3xl font-semibold mb-8 text-default-blue">
          Nossas Equipes
        </h2>

        <div>
          <EquipesList equipes={equipes} />
        </div>
      </section>
    </main>
  );
}