import type { Metadata } from 'next';
import { SITE_URL } from '../i18n/site';

export const metadata: Metadata = {
  title: 'Invoice Tool | Plex',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/invoice` },
};

export default function InvoiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
