import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { getPageTitle, getSiteInfo } from './utils/content';
import './globals.css';
import CookieBanner from './components/CookieBanner';

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

export const metadata: Metadata = {
  title: getPageTitle(),
  description: getSiteInfo().description,
  keywords: [
    'web development',
    'digital agency',
    'nightlife',
    'entertainment',
    'web apps',
    'SaaS',
    'booking systems',
  ],
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
        {children}
        <CookieBanner />
      </body>
    </html>
  );
};

export default RootLayout;
