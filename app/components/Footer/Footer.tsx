import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-default-blue pt-6 text-center text-sm text-slate-600">
      <p>
        SEaDIP – Superintendência de Educação à Distância e Inovações
        Pedagógicas
      </p>
      <p>Praça Santos Andrade, 50 | Centro | CEP: 80.020-300 | Curitiba/PR</p>
      <p>Contato: seadip@ufpr.br</p>
      <div className="flex justify-center space-x-4 mt-4 p-4">
        <Link href="https://www.instagram.com" aria-label="Instagram">
          Instagram
        </Link>
        <Link href="https://www.youtube.com" aria-label="YouTube">
          YouTube
        </Link>
        <Link href="mailto:seadip@ufpr.br" aria-label="E-mail">
          E-mail
        </Link>
      </div>
    </footer>
  );
}
