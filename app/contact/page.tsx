import type { Metadata } from 'next';
import { ContactPageContent } from '../components/StudioPages';
import { SITE_URL } from '../i18n/site';

export const metadata: Metadata = {
  title: 'Discuss a Website or Software Project | Plex',
  description: 'Tell Plex about your website, e-commerce, SaaS, mobile, integration or automation project and receive a considered response.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
