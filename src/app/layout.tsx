import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  preload: true,
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  preload: true,
})

export const metadata: Metadata = {
  title: 'NOKES Web Studios | Sites e Experiências Digitais',
  description: 'Nokes Web Studios — criação de sites profissionais, experiências digitais e presença online para empresas.',
  keywords: 'web design, desenvolvimento web, sites responsivos, presença digital, landing pages',
  authors: [{ name: 'NOKES Web Studios' }],
  creator: 'NOKES Web Studios',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nokes.com.br',
    siteName: 'NOKES Web Studios',
    title: 'NOKES Web Studios | Sites e Experiências Digitais',
    description: 'Criação de sites profissionais e experiências digitais para empresas.',
    images: [{
      url: 'https://nokes.com.br/og-image.png',
      width: 1200,
      height: 630,
      alt: 'NOKES Web Studios',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOKES Web Studios',
    description: 'Criação de sites profissionais e experiências digitais para empresas.',
    images: ['https://nokes.com.br/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-black text-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}