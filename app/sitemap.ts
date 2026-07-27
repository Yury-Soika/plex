import type { MetadataRoute } from 'next';

const SITE_URL = 'https://plex.ee';

const routes = [
  '/',
  '/services',
  '/work',
  '/work/aster',
  '/work/velvet',
  '/work/nightfall',
  '/work/venue',
  '/work/venue-mobile',
  '/work/relay',
  '/insights',
  '/insights/controlled-ai-automation',
  '/insights/internal-tool-or-spreadsheet',
  '/insights/booking-system-operations',
  '/expertise/hospitality',
  '/about',
  '/contact',
];

const sitemap = (): MetadataRoute.Sitemap => [
  ...routes.map((route, index) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'monthly' as const,
    priority: index === 0 ? 1 : route.startsWith('/work/') ? 0.7 : 0.8,
  })),
  {
    url: `${SITE_URL}/privacy`,
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/terms`,
    changeFrequency: 'yearly',
    priority: 0.3,
  },
];

export default sitemap;
