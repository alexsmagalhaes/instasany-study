import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import ScrollSmooth from '@/services/scroll-smooth'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Instasany Case de Estudo',
  description: 'Site desenvolvido apenas para fins educativos',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="pt">
      <ScrollSmooth>
        <body className={`${epilogue.className} relative`}>
          <Navbar />
          {children}
        </body>
      </ScrollSmooth>
    </html>
  )
}
