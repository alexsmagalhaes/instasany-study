import GridContainer from "./container";
import Image from "next/image";
import Button from "./button";

// assets
import FileIcon from '/public/icon-file.svg'
import HeroIcon01 from '/public/icon-hand-01.svg'
import HeroIcon02 from '/public/icon-hand-02.svg'
import MockupShape from '/public/mockup.svg'
import MockupImage from '/public/mockup-main.png'


function SectionHero() {
   return (
      <header className="w-full bg-green-primary relative h-home-hero border-t bg-home-hero bg-no-repeat bg-top border-t-green-border pt-16 overflow-hidden">
         <GridContainer className="flex flex-col items-center">
            <div className="text-center max-w-home-hero-heading w-full">
               <h3 className="text-xl font-medium text-green-activity mb-4">Novo curso focado em instagram</h3>
               <h1 className="text-white text-7xl/normal font-semibold mb-2">Destrave as suas habilidades</h1>
            </div>
            <div className="flex items-center justify-center gap-10">
               <button className="flex items-center gap-2">
                  <Image
                     src={FileIcon}
                     alt='Botão de lista de espera'
                  />
                  <span className="text-white font-medium">Assinar lista de espera</span>
               </button>
               <Button content='Começar agora' />
            </div>
            <div className="relative w-full max-w-home-hero-icons-area mt-4 h-28">
               <Image
                  className="absolute left-0 bottom-0"
                  src={HeroIcon01}
                  alt="Icone"
               />
               <Image
                  className="absolute top-0 right-0"
                  src={HeroIcon02}
                  alt="Icone"
               />
            </div>
            <div className="w-full max-w-home-hero-mockups-area flex justify-between absolute -bottom-44">
               <Image
                  className="-rotate-12 relative top-[1.125rem] left-[3.3125rem]"
                  src={MockupShape}
                  alt="Mockup"
               />
               <Image
                  className="rotate-12 relative top-[1.125rem] right-[3.3125rem]"
                  src={MockupShape}
                  alt="Mockup"
               />
            </div>
         </GridContainer>
      </header>
   )
}

export default SectionHero;