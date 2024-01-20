"use client"

import GridContainer from "./container";
import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// assets
import MockupImage from '/public/mockup-main.png'
import Card01 from '/public/image-01.png'
import Card02 from '/public/image-02.png'
import Card03 from '/public/image-03.png'
import Card04 from '/public/image-04.png'
import Card05 from '/public/image-05.png'
import Card06 from '/public/image-06.png'

function SectionCards(): ReactNode {

   const mockupPhoneRef = useRef(null);
   const titleRef = useRef(null);
   const sectionTriggerRef = useRef(null)
   const cardRef = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]

   function animateCards(images: null[], position: number) {
      gsap.fromTo(images,
         { opacity: 0, x: position },
         {
            opacity: 1, x: 0, duration: .5, stagger: .1,
            scrollTrigger: { trigger: sectionTriggerRef.current, start: 'center center' }
         })
   }

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(mockupPhoneRef.current,
         { opacity: 0, scale: 0.5, },
         { opacity: 1, scale: 1, duration: 1, ease: 'power4.out' }
      )
      gsap.fromTo(titleRef.current,
         { opacity: 0, },
         {
            opacity: 1, duration: 1,
            scrollTrigger: { trigger: sectionTriggerRef.current, start: '65% center', }
         }
      )

      const leftImages = [cardRef[0].current, cardRef[1].current, cardRef[2].current]
      const rightImages = [cardRef[3].current, cardRef[4].current, cardRef[5].current]

      animateCards(leftImages, 50)
      animateCards(rightImages, -50)
   }, [])

   return (
      <section ref={sectionTriggerRef} className="w-full pb-20">
         <GridContainer>
            <Image
               className="sticky top-56 mx-auto -mt-[32rem] mb-16 z-10 scale-50"
               src={MockupImage}
               alt="Mockup principal"
               ref={mockupPhoneRef}
            />
            <h2 ref={titleRef} className="text-center text-7xl font-semibold text-black mb-16">
               Faça <span className="text-green-highlight">você</span> mesmo de casa
            </h2>
            <div className="relative w-full max-w-home-cards-area mx-auto h-home-cards-lenght">
               <div ref={cardRef[0]} className="absolute opacity-0 top-8 left-44"><Image src={Card01} alt="Card01" /></div>
               <div ref={cardRef[1]} className="absolute opacity-0 left-0 bottom-32"><Image src={Card02} alt="Card02" /></div>
               <div ref={cardRef[2]} className="absolute opacity-0 bottom-0 left-80"><Image src={Card03} alt="Card03" /></div>
               <div ref={cardRef[3]} className="absolute opacity-0 top-0 right-32"><Image src={Card04} alt="Card04" /></div>
               <div ref={cardRef[4]} className="absolute opacity-0 right-0 bottom-28" ><Image src={Card05} alt="Card05" /></div>
               <div ref={cardRef[5]} className="absolute opacity-0 bottom-0 right-80"><Image src={Card06} alt="Card06" /></div>
            </div>
         </GridContainer>
      </section>
   )
}

export default SectionCards;