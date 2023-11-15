import type { Metadata } from 'next';
import { Tenor_Sans } from 'next/font/google';
import './globals.css';

const tenor = Tenor_Sans({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Casa Acunzo',
  description: 'Vinhos e Bebidas de excelência',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link rel='icon' href='./logoPadrao.png'/>
      </head>
      <body className={tenor.className}>{children}</body>
    </html>
  )
}
