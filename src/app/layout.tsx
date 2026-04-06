import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--bl-font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--bl-font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--bl-font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: 'Behemoth Labz | Research Compounds | USA-Made | Third-Party Tested',
    template: '%s | Behemoth Labz',
  },
  description:
    'USA-manufactured research compounds — SARMs, peptides, and nootropics. Every batch third-party tested with published Certificates of Analysis.',
  keywords: [
    'research compounds',
    'SARMs for research',
    'peptides for research',
    'buy SARMs',
    'buy peptides',
    'research chemicals USA',
    'certificate of analysis',
  ],
  robots: {
    index: true,
    follow: true,
    noarchive: false,
  },
  openGraph: {
    siteName: 'Behemoth Labz',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <AnnouncementBar />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
