// Generates og-image.png for velvet-lounge, nightfall-terrace, and venue.
// Run from the plex project root which has satori + resvg + fontsource.
// Uses a DARK Plex-style gradient (dark mid-stop) so white headline text stays
// readable; the per-site accent appears only on the logo, eyebrow, and the
// italic highlight word.
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const inter400 = readFileSync(join(ROOT, 'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'));
const inter700 = readFileSync(join(ROOT, 'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff'));
const playfair = readFileSync(join(ROOT, 'node_modules/@fontsource/playfair-display/files/playfair-display-latin-400-italic.woff'));

const fonts = [
  { name: 'Inter', data: inter400, weight: 400, style: 'normal' },
  { name: 'Inter', data: inter700, weight: 700, style: 'normal' },
  { name: 'Inter', data: inter700, weight: 800, style: 'normal' },
  { name: 'Playfair', data: playfair, weight: 400, style: 'italic' },
];

const W = 1200;
const H = 630;

const makeNode = ({ accent, darkAccent, eyebrow, headline, highlightedWord, sub, url }) => ({
  type: 'div',
  props: {
    style: {
      width: W, height: H,
      // Dark mid-stop (not a bright accent tint) keeps text readable.
      background: `linear-gradient(135deg, #0a0a0f 0%, ${darkAccent} 50%, #0a0a0f 100%)`,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: '72px', color: '#f4f4f6', fontFamily: 'Inter',
    },
    children: [
      // Top: logo badge + site name
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', gap: 16 },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  width: 56, height: 56, borderRadius: 14, background: accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 30, fontWeight: 700, color: '#fff',
                },
                children: url.split('.')[0].slice(0, 1).toUpperCase(),
              },
            },
            {
              type: 'div',
              props: {
                style: { display: 'flex', flexDirection: 'column', gap: 2 },
                children: [
                  { type: 'div', props: { style: { fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }, children: url } },
                  {
                    type: 'div',
                    props: {
                      style: { fontSize: 14, color: accent, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 },
                      children: eyebrow,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      // Middle: headline
      {
        type: 'div',
        props: {
          style: { display: 'flex', flexDirection: 'column', gap: 20 },
          children: [
            {
              type: 'div',
              props: {
                style: { fontSize: 68, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, display: 'flex', flexWrap: 'wrap' },
                children: [
                  headline + ' ',
                  {
                    type: 'span',
                    props: {
                      style: { color: accent, fontFamily: 'Playfair', fontStyle: 'italic' },
                      children: highlightedWord,
                    },
                  },
                ],
              },
            },
            { type: 'div', props: { style: { fontSize: 22, color: '#b4b4c4', maxWidth: 820, lineHeight: 1.5 }, children: sub } },
          ],
        },
      },
      // Bottom: built-by badge
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 18, color: '#9a9aac', fontWeight: 500 },
          children: [
            'Built by Plex — Digital Studio for Nightlife & Hospitality',
            { type: 'span', props: { style: { color: accent, fontWeight: 700 }, children: 'plex.ee' } },
          ],
        },
      },
    ],
  },
});

const images = [
  {
    outDir: join(ROOT, '..', 'velvet-lounge', 'public'),
    outFile: 'og-image.png',
    accent: '#c084fc', darkAccent: '#1f0a2e',
    eyebrow: 'Concept · Live Demo',
    headline: 'Premium nightclub experience',
    highlightedWord: 'in Nocturne Bay.',
    sub: 'VIP tables, signature cocktails, and late-night events in an intimate lounge atmosphere.',
    url: 'velvet.plex.ee',
  },
  {
    outDir: join(ROOT, '..', 'nightfall-terrace', 'web', 'public'),
    outFile: 'og-image.png',
    accent: '#38bdf8', darkAccent: '#082130',
    eyebrow: 'Concept · Live Demo',
    headline: 'Rooftop reservations,',
    highlightedWord: 'effortlessly.',
    sub: 'Skyline views, signature cocktails, and a seamless booking experience for Nightfall Terrace.',
    url: 'nightfall.plex.ee',
  },
  {
    outDir: join(ROOT, '..', 'venue', 'web', 'public'),
    outFile: 'og-image.png',
    accent: '#818cf8', darkAccent: '#0e1230',
    eyebrow: 'Concept · Live Demo',
    headline: 'Operations platform for',
    highlightedWord: 'nightlife venues.',
    sub: 'Bookings, events, guest CRM with VIP tiers, staff management, and analytics — all in one dashboard.',
    url: 'venue.plex.ee',
  },
];

for (const img of images) {
  const svg = await satori(makeNode(img), { width: W, height: H, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
  mkdirSync(img.outDir, { recursive: true });
  const out = join(img.outDir, img.outFile);
  writeFileSync(out, png);
  console.log(`✓ ${out} (${(png.length / 1024).toFixed(1)} KB)`);
}
