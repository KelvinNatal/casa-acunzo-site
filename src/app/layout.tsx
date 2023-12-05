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
    <html lang="pt-br" className='scroll-smooth'>
      <head>
        <meta name="title" content="Casa Acunzo"/>
        <meta name="description" content="Desfrute de uma experiência sensorial incomparável em nossa casa de vinhos, explore uma seleção cuidadosamente escolhida de rótulos de qualidade."/>
        <meta name="keywords" content="vinhos, vinicolas, Casa Acunzo, comprar vinho, experiencia, bebidas"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>
        <meta name="revisit-after" content="1 days"/>
      </head>
      <body className={tenor.className}>{children}</body>
    </html>
  )
}
