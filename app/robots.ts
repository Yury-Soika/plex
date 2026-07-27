import type { MetadataRoute } from 'next';

const SITE_URL = 'https://plex.ee';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: ['/invoice', '/invoice/'],
  },
  sitemap: `${SITE_URL}/sitemap.xml`,
  host: SITE_URL,
});

export default robots;
