import type { MetadataRoute } from 'next';

const SITE_URL = 'https://plex.ee';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: `${SITE_URL}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${SITE_URL}/privacy`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/terms`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/venue-mobile`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
];

export default sitemap;
