import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '../components/utilities/Navbar'

const gabarito = Gabarito({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Animelist',
  description: 'Websiet untuk belajar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* backtick dipake biar kita bisa masukkin css dark kita */}
      <body className={`${gabarito.className} bg-color-dark`} >

        <Navbar></Navbar>
        {children}</body>
    </html>
  )
}
