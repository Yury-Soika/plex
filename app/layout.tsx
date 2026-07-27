import type { Metadata } from 'next';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/playfair-display/400-italic.css';
import { en } from './i18n/content';
import { SITE_URL } from './i18n/site';
import { LanguageProvider } from './i18n/LanguageProvider';
import './globals.css';
import CookieBanner from './components/CookieBanner';
import Analytics from './components/Analytics';

const site = en.site;
const pageTitle = `${site.name} - ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Plex',
  title: pageTitle,
  description: site.description,
  alternates: { canonical: SITE_URL },
  manifest: '/manifest.webmanifest',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  keywords: [
    'digital studio',
    'custom websites',
    'e-commerce development',
    'SaaS development',
    'web applications',
    'mobile app development',
    'AI automation',
    'booking systems',
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
        alt: 'Plex — Independent digital product studio for ambitious businesses',
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
      <body className='antialiased' suppressHydrationWarning={true}>
        <a href='#main-content' className='skip-link'>Skip to main content</a>
        <LanguageProvider>
          <div id='main-content' tabIndex={-1}>{children}</div>
          <CookieBanner />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
};

export default RootLayout;
