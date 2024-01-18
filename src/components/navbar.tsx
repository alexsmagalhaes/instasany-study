import { ReactNode } from "react";
import Image from "next/image"
import Link from "next/link";
import GridContainer from "./container";

//Assets
import Logo from '/public/logo.svg'
import SearchIcon from '/public/icon-search.svg'
import UserIcon from '/public/icon-user.svg'

const arrayLinks = [
   'Início',
   'Benefícios',
   'Para quem é o curso?',
   'Preços promocionais',
   'Sobre nós',
]

const activityStyled: string = 'bg-green-activity !text-opacity-100 rounded-full';

function Navbar(): ReactNode {
   return (
      <nav className="w-full h-24 bg-green-primary flex items bg-center relative top-0 z-50">
         <GridContainer className="flex items-center justify-between">
            <Image
               src={Logo}
               alt='logo InstaSany'
            />
            <div className="flex items-center gap-20">
               <div className="flex gap-2">
                  {
                     arrayLinks.map((item, index) => {
                        return (
                           <Link
                              key={`menu-link-${index}`}
                              href='#'
                              className={`px-3 pt-2 pb-1 text-white text-opacity-40 hover:text-opacity-100 transition ease-linear ${index === 0 ? activityStyled : ''}`}>
                              {item}
                           </Link>
                        )
                     })
                  }
               </div>
               <div className="flex items-center gap-6">
                  <button>
                     <Image
                        src={SearchIcon}
                        alt="Botão de busca"
                     />
                  </button>
                  <button className="flex items-center gap-2">
                     <Image
                        src={UserIcon}
                        alt="Botão de usuário"
                     />
                     <span className="text-white font-medium">Fazer login</span>
                  </button>
               </div>
            </div>
         </GridContainer>
      </nav>
   )
}

export default Navbar;