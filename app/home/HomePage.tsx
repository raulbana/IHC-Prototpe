import { useHome } from "./useHome";
import NewsList from "./components/NewsList/NewsList";
import ImageCardsSection from "./components/ImageCardsSection/ImageCardsSection";

export default function HomePage() {
  const { newsItems, imageCards } = useHome();

  return (
    <main className="min-h-screen bg-white text-gray-800 py-8 px-4 md:px-16">
      <section className="max-w-3xl mx-auto my-4 rounded-xl p-4">
        <h2 className="text-3xl font-semibold mb-4 text-default-blue">
          Início
        </h2>
        <div className="space-y-6">
          <NewsList newsItems={newsItems} />
        </div>
        <div className="mt-16 py-4 border-t border-default-blue">
          <h2 className="text-3xl font-semibold mb-4 text-default-blue">
            Links Úteis
          </h2>
          <ImageCardsSection cards={imageCards} />
        </div>
      </section>
    </main>
  );
}
