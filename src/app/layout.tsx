import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header, Footer } from '../components/layout';

export const metadata: Metadata = {
  title: {
    default: 'Werbeagentur | Kreativ. Strategisch. Wirksam.',
    template: '%s | Werbeagentur',
  },
  description: 'Ihre Werbeagentur für Branding, Performance-Marketing und digitale Kampagnen. Kreativ. Strategisch. Wirksam.',
  keywords: ['Werbeagentur', 'Branding', 'Marketing', 'Webdesign', 'Berlin', 'Digitalagentur'],
  authors: [{ name: 'Werbeagentur' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Werbeagentur',
    title: 'Werbeagentur | Kreativ. Strategisch. Wirksam.',
    description: 'Ihre Werbeagentur für Branding, Performance-Marketing und digitale Kampagnen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Werbeagentur | Kreativ. Strategisch. Wirksam.',
    description: 'Ihre Werbeagentur für Branding, Performance-Marketing und digitale Kampagnen.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
