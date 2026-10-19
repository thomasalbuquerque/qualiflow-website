import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { site } from '@/config/site';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'QualiFlow | Tratamento de Água, Esgoto e Análise de Potabilidade',
    template: '%s | QualiFlow',
  },
  description: site.description,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: site.name,
    images: [{ url: '/images/hero-home.png', width: 1280, height: 720 }],
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='pt-BR' className={`${montserrat.variable} ${roboto.variable}`}>
      <body className='flex min-h-screen flex-col'>
        <a
          href='#conteudo'
          className='sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-60 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-brand-navy focus:shadow-lg'
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id='conteudo' tabIndex={-1} className='flex-1 focus:outline-none'>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
