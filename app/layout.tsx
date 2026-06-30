import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { en } from './i18n/content';
import { SITE_URL } from './i18n/site';
import { LanguageProvider } from './i18n/LanguageProvider';
import './globals.css';
import CookieBanner from './components/CookieBanner';
import Analytics from './components/Analytics';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
});

const site = en.site;
const pageTitle = `${site.name} - ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pageTitle,
  description: site.description,
  keywords: [
    'digital studio',
    'nightlife',
    'hospitality',
    'restaurants',
    'nightclubs',
    'booking systems',
    'venue management',
    'Next.js',
    'React Native',
  ],
  authors: [{ name: 'Plex', url: SITE_URL }],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Plex',
    title: pageTitle,
    description: site.description,
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Plex — Digital Studio for Nightlife & Hospitality',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: site.description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/icon.svg',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <LanguageProvider>
          {children}
          <CookieBanner />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
};

export default RootLayout;
