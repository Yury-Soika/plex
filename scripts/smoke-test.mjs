#!/usr/bin/env node

const baseUrl = (process.env.PLEX_BASE_URL || 'http://127.0.0.1:3100').replace(/\/$/, '');
const productionUrl = 'https://plex.ee';

const publicRoutes = [
  '/',
  '/services',
  '/work',
  '/work/aster',
  '/work/relay',
  '/work/velvet',
  '/work/nightfall',
  '/work/venue',
  '/work/venue-mobile',
  '/insights',
  '/insights/controlled-ai-automation',
  '/insights/internal-tool-or-spreadsheet',
  '/insights/booking-system-operations',
  '/expertise/hospitality',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

const failures = [];
let assertions = 0;

const assert = (condition, message) => {
  assertions += 1;
  if (!condition) failures.push(message);
};

const request = async (path, options = {}) => {
  try {
    return await fetch(`${baseUrl}${path}`, {
      redirect: 'manual',
      signal: AbortSignal.timeout(10_000),
      ...options,
    });
  } catch (error) {
    throw new Error(`Could not request ${path}: ${error.message}`);
  }
};

const canonicalFrom = (html) => {
  const tag = [...html.matchAll(/<link\b[^>]*>/gi)]
    .map((match) => match[0])
    .find((item) => /\brel=["']canonical["']/i.test(item));
  return tag?.match(/\bhref=["']([^"']+)["']/i)?.[1] ?? null;
};

const hasNoIndex = (html) =>
  [...html.matchAll(/<meta\b[^>]*>/gi)]
    .map((match) => match[0])
    .some((item) =>
      /\bname=["']robots["']/i.test(item) &&
      /\bcontent=["'][^"']*noindex/i.test(item),
    );

const htmlByRoute = new Map();

for (const route of publicRoutes) {
  const response = await request(route);
  const body = await response.text();
  htmlByRoute.set(route, body);

  assert(response.status === 200, `${route} returned ${response.status}, expected 200`);
  assert(
    response.headers.get('content-type')?.includes('text/html'),
    `${route} did not return HTML`,
  );

  const expectedCanonical = `${productionUrl}${route === '/' ? '' : route}`;
  assert(
    canonicalFrom(body) === expectedCanonical,
    `${route} canonical was ${canonicalFrom(body) ?? 'missing'}, expected ${expectedCanonical}`,
  );
}

const legacyMobile = await request('/venue-mobile');
assert(legacyMobile.status === 308, `/venue-mobile returned ${legacyMobile.status}, expected 308`);
assert(
  legacyMobile.headers.get('location') === '/work/venue-mobile',
  `/venue-mobile redirect target was ${legacyMobile.headers.get('location') ?? 'missing'}`,
);

for (const [route, destination] of [
  ['/labs/aster', 'https://demo.plex.ee/aster/'],
  ['/labs/relay', 'https://demo.plex.ee/relay/'],
]) {
  const response = await request(route);
  assert(response.status === 308, `${route} returned ${response.status}, expected 308`);
  assert(
    response.headers.get('location') === destination,
    `${route} redirect target was ${response.headers.get('location') ?? 'missing'}, expected ${destination}`,
  );
}

const missing = await request('/release-smoke-test-missing-page');
const missingBody = await missing.text();
assert(missing.status === 404, `Missing route returned ${missing.status}, expected 404`);
assert(missingBody.includes('current Plex site'), 'Missing route did not render the branded Plex 404');
assert(hasNoIndex(missingBody), 'Missing route did not include noindex');

const invoice = await request('/invoice');
const invoiceBody = await invoice.text();
assert(invoice.status === 200, `/invoice returned ${invoice.status}, expected 200`);
assert(hasNoIndex(invoiceBody), '/invoice did not include noindex');
assert(
  canonicalFrom(invoiceBody) === `${productionUrl}/invoice`,
  '/invoice canonical is missing or incorrect',
);

const home = await request('/');
const requiredHeaders = {
  'content-security-policy': ['default-src', 'frame-ancestors', 'api.emailjs.com'],
  'strict-transport-security': ['max-age=31536000'],
  'x-content-type-options': ['nosniff'],
  'x-frame-options': ['DENY'],
  'referrer-policy': ['strict-origin-when-cross-origin'],
  'permissions-policy': ['camera=()', 'microphone=()'],
};

for (const [header, fragments] of Object.entries(requiredHeaders)) {
  const value = home.headers.get(header);
  assert(Boolean(value), `Missing ${header} response header`);
  for (const fragment of fragments) {
    assert(value?.includes(fragment), `${header} does not contain ${fragment}`);
  }
}

const robots = await request('/robots.txt');
const robotsBody = await robots.text();
assert(robots.status === 200, `/robots.txt returned ${robots.status}`);
assert(robotsBody.includes('Disallow: /invoice'), 'robots.txt does not exclude /invoice');
assert(robotsBody.includes('Sitemap: https://plex.ee/sitemap.xml'), 'robots.txt sitemap URL is incorrect');

const sitemap = await request('/sitemap.xml');
const sitemapBody = await sitemap.text();
assert(sitemap.status === 200, `/sitemap.xml returned ${sitemap.status}`);
for (const route of publicRoutes) {
  const expectedUrl = `${productionUrl}${route}`;
  assert(sitemapBody.includes(`<loc>${expectedUrl}</loc>`), `Sitemap is missing ${expectedUrl}`);
}
assert(!sitemapBody.includes('<loc>https://plex.ee/invoice</loc>'), 'Sitemap exposes /invoice');

const manifest = await request('/manifest.webmanifest');
const manifestBody = await manifest.json();
assert(manifest.status === 200, `/manifest.webmanifest returned ${manifest.status}`);
assert(manifestBody.name === 'Plex — Independent Digital Product Studio', 'Manifest name is incorrect');
assert(manifestBody.start_url === '/', 'Manifest start URL is incorrect');
assert(manifestBody.icons?.some((icon) => icon.src === '/icon.svg'), 'Manifest icon is missing');

const internalPaths = new Set();
for (const html of htmlByRoute.values()) {
  for (const match of html.matchAll(/\bhref=["']([^"']+)["']/gi)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/_next/')) continue;
    const path = href.split('#')[0].split('?')[0] || '/';
    internalPaths.add(path);
  }
}

for (const path of [...internalPaths].sort()) {
  const response = await request(path);
  assert(
    response.status >= 200 && response.status < 400,
    `Internal link ${path} returned ${response.status}`,
  );
}

if (failures.length > 0) {
  console.error(`\nPlex smoke test failed: ${failures.length} of ${assertions} assertions failed.\n`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Plex smoke test passed: ${assertions} assertions across ${publicRoutes.length} public routes and ${internalPaths.size} discovered internal links.`,
);
