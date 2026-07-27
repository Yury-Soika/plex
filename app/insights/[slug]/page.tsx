import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InsightArticleContent } from '../../components/InsightsPages';
import { findInsight, insights } from '../../i18n/insights';
import { SITE_URL } from '../../i18n/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = findInsight(slug);
  if (!insight) return {};

  return {
    title: `${insight.title} | Plex Insights`,
    description: insight.description,
    alternates: { canonical: `${SITE_URL}/insights/${insight.slug}` },
    openGraph: {
      type: 'article',
      title: insight.title,
      description: insight.description,
      url: `${SITE_URL}/insights/${insight.slug}`,
      images: [{ url: '/og-image.png', alt: `${insight.title} — Plex Insights` }],
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = findInsight(slug);
  if (!insight) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.description,
    author: { '@type': 'Person', name: 'Yury Soika' },
    publisher: { '@type': 'Organization', name: 'Plex', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/insights/${insight.slug}`,
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <InsightArticleContent insight={insight} />
    </>
  );
}
