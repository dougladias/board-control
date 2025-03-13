import Image from 'next/image';
import heroImg from '../../public/assets/hero.svg';


export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center 
    min-h-[calc(100vh-88px)]">
      <h2 className="font-bold text-3xl mb-8 text-blue-600
      md:text-4xl">
        Gerencie Seus Funcionários
      </h2>
      <h1 className="font-medium text-2xl mb-4 ">
        Atendimento Personalizado
      </h1>
      <Image 
      src={heroImg}
      alt="Imagem do Controle"
      width={600}      
      className="max-w-sm md:max-w-x1"
      draggable={false}
      />
    </main>
  );
}
