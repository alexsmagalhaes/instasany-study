"use client"

import ReactLenis, { useLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface ScrollSmoothProps {
   children: ReactNode,
}

interface LenisProps {
   scroll: number,
}

function ScrollSmooth({ children }: ScrollSmoothProps) {
   const lenis = useLenis(({ scroll }: LenisProps) => {
      // called every scroll
   })

   const lenisBahavior: Object = {
      duration: 1.2,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      smoothTouch: false,
      touchMultiplier: 1.1,
   }

   return (
      <ReactLenis root options={lenisBahavior}>
         {children}
      </ReactLenis >
   )
}

export default ScrollSmooth;  