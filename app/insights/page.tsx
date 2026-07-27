import type { Metadata } from 'next';
import { InsightsIndexContent } from '../components/InsightsPages';
import { SITE_URL } from '../i18n/site';

export const metadata: Metadata = {
  title: 'Insights on Digital Products & Operations | Plex',
  description:
    'Practical Plex perspectives on controlled AI automation, internal business tools, booking systems, and useful digital products.',
  alternates: { canonical: `${SITE_URL}/insights` },
  openGraph: {
    title: 'Insights on Digital Products & Operations | Plex',
    description:
      'Practical thinking for businesses making product, software, and automation decisions.',
    url: `${SITE_URL}/insights`,
    images: [{ url: '/og-image.png', alt: 'Plex digital product studio insights' }],
  },
};

export default function InsightsPage() {
  return <InsightsIndexContent />;
}
