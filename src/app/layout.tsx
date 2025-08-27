import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guia de Vendas Online',
  description: 'Aprenda passo a passo como iniciar e otimizar suas vendas online com estratégias comprovadas',
  keywords: 'vendas online, e-commerce, marketing digital, empreendedorismo',
  authors: [{ name: 'Guia de Vendas Online' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}