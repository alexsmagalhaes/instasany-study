"use client"

interface ButtonProps {
   content: string
}

function Button({ content }: ButtonProps) {
   return (
      <button className="py-4 px-5 hover:opacity-85 transition ease-linear bg-green-action rounded-full text-green-primary font-bold">
         {content}
      </button>
   )
}

export default Button;