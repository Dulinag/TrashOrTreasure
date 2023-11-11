import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "../app/components/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>


      <footer
          className="block"
          style={{ position: 'relative', top:0, bottom: 0, left: 0, right: 0 }}
        >
          <Navbar />
        </footer> 
    </html>
  )
}
