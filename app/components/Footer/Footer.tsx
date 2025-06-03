import Link from "next/link";
import Image from 'next/image';
import LogoAcessoAInformacao from '@/app/assets/acesso-a-informacao.svg';
import LogoGovernoFederal from '@/app/assets/governo-federal.svg';

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
        <Link href="https://www.instagram.com/cipead" aria-label="Instagram" target="_blank">
          Instagram
        </Link>
        <Link href="https://www.youtube.com/channel/UCpdgtJ711ZSg029yKwyjzhA/featured" aria-label="YouTube" target="_blank">
          YouTube
        </Link>
        <Link href="mailto:seadip@ufpr.br" aria-label="E-mail" target="_blank">
          E-mail
        </Link>
      </div>
      <div className = "flex justify-evenly p-4">
        <a href="https://www.gov.br/acessoainformacao/pt-br" target="_blank">
          <Image src={LogoAcessoAInformacao} alt="Logo Acesso à Informação" width={120} height={100}/>
        </a>
        <a href="https://www.gov.br/pt-br" className="" target="_blank">
          <Image src={LogoGovernoFederal} alt="Logo Governo Federal" width={120} height={100}/>
        </a>
      </div>
    </footer>
  );
}
