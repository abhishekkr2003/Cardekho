import { Footer, Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CarDekeho_Archit',
  description: 'Discover the best car in world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className="relative">
      <Navbar/>
        {children}
        <Footer/>
        </body>
  
    </html>
  )
}
