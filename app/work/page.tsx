import type { Metadata } from 'next';
import { WorkPageContent } from '../components/StudioPages';
import { SITE_URL } from '../i18n/site';

export const metadata: Metadata = {
  title: 'Selected Product & Software Work | Plex',
  description: 'Explore Plex concept case studies across conversion websites, booking and self-service, SaaS operations and mobile workflows.',
  alternates: { canonical: `${SITE_URL}/work` },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
