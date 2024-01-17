import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const epilogue = Epilogue({ 
  subsets: ['latin'],
  weight : ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Instasany Case de Estudo',
  description: 'Site desenvolvido apenas para fins educativos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={epilogue.className}>
        <Navbar/>
        {children}  
      </body>
    </html>
  )
}
