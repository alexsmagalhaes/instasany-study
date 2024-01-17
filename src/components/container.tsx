import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerProps{
   children: ReactNode,
   className?: string,
}

function GridContainer({children, className}: GridContainerProps){

   const defaultClass = 'mx-auto max-w-container-default w-full'
   const combinedClass = twMerge(defaultClass, className);

   return(
       <div className={combinedClass}>
         {children}
      </div>
   )
}

export default GridContainer;