import type { Metadata } from 'next';
import { ServicesPageContent } from '../components/StudioPages';
import { SITE_URL } from '../i18n/site';

export const metadata: Metadata = {
  title: 'Custom Websites, SaaS, Mobile & Automation | Plex',
  description: 'Explore Plex services: custom websites, e-commerce, booking systems, SaaS and web applications, mobile products, AI integrations and business automation.',
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
