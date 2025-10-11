import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getPageTitle, getSiteInfo } from './utils/content';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
