import type { Metadata } from 'next';
import { AboutPageContent } from '../components/StudioPages';
import { SITE_URL } from '../i18n/site';

export const metadata: Metadata = {
  title: 'About Plex — Independent Digital Product Studio',
  description: 'Plex is an independent Tallinn-based digital product studio connecting business context, product design and software delivery.',
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
