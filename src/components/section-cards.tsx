'use client'

import GridContainer from "./container";
import Image from "next/image";
import { ReactNode, useRef } from "react";

// assets
import MockupImage from '/public/mockup-main.png'
import Card01 from '/public/image-01.png'
import Card02 from '/public/image-02.png'
import Card03 from '/public/image-03.png'
import Card04 from '/public/image-04.png'
import Card05 from '/public/image-05.png'
import Card06 from '/public/image-06.png'


function SectionCards(): ReactNode {

   return (
      <section className="w-full pb-20">
         <GridContainer>
            <Image
               className="sticky top-56 mx-auto -mt-[32rem] mb-16"
               src={MockupImage}
               alt="Mockup principal"
            />
            <h2 className="text-center text-7xl font-semibold text-black mb-16">
               Faça <span className="text-green-highlight">você</span> mesmo de casa
            </h2>
            <div className="relative w-full max-w-home-cards-area mx-auto h-home-cards-lenght">
               <Image className="absolute top-8 left-44" src={Card01} alt="Card01" />
               <Image className="absolute left-0 bottom-32" src={Card02} alt="Card02" />
               <Image className="absolute bottom-0 left-80" src={Card03} alt="Card03" />
               <Image className="absolute top-0 right-32" src={Card04} alt="Card04" />
               <Image className="absolute right-0 bottom-28" src={Card05} alt="Card05" />
               <Image className="absolute bottom-0 right-80" src={Card06} alt="Card06" />
            </div>
         </GridContainer>
      </section>
   )
}

export default SectionCards;