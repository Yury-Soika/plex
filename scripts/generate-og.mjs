// Generates a static PNG at public/og-image.png.
// Run once locally; commit the resulting PNG. No runtime deps in production.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'public', 'og-image.png');
mkdirSync(dirname(outPath), { recursive: true });

import { readFileSync } from 'node:fs';
const interFont400 = readFileSync(join(__dirname, '..', 'node_modules', '@fontsource', 'inter', 'files', 'inter-latin-400-normal.woff'));
const interFont700 = readFileSync(join(__dirname, '..', 'node_modules', '@fontsource', 'inter', 'files', 'inter-latin-700-normal.woff'));
const playfairFont = readFileSync(join(__dirname, '..', 'node_modules', '@fontsource', 'playfair-display', 'files', 'playfair-display-latin-400-italic.woff'));

const node = {
  type: 'div',
  props: {
    style: {
      width: 1200,
      height: 630,
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '72px',
      color: '#f4f4f6',
      position: 'relative',
      fontFamily: 'Inter',
    },
    children: [
      // Top: logo + name
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', gap: 16 },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  width: 64, height: 64, borderRadius: 16, background: '#7c6ff7',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 36, fontWeight: 700, color: '#fff',
                },
                children: 'P',
              },
            },
            { type: 'div', props: { style: { fontSize: 36, fontWeight: 700, letterSpacing: -1 }, children: 'Plex' } },
          ],
        },
      },
      // Middle: eyebrow + headline
      {
        type: 'div',
        props: {
          style: { display: 'flex', flexDirection: 'column', gap: 24 },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex', alignItems: 'center', gap: 12,
                  fontSize: 18, color: '#a0a0b8',
                  textTransform: 'uppercase', letterSpacing: 3, fontWeight: 600,
                },
                children: [
                  { type: 'div', props: { style: { width: 8, height: 8, borderRadius: 4, background: '#a855f7' } } },
                  'Digital Studio · Nightlife & Hospitality',
                ],
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  fontSize: 72, fontWeight: 800, lineHeight: 1.05,
                  letterSpacing: -2, maxWidth: 1000, display: 'flex', flexWrap: 'wrap',
                },
                children: [
                  'Websites, booking systems, and apps for ',
                  {
                    type: 'span',
                    props: {
                      style: { color: '#a855f7', fontFamily: 'Playfair', fontStyle: 'italic' },
                      children: 'venues that care.',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      // Bottom: tech stack + url
      {
        type: 'div',
        props: {
          style: { display: 'flex', gap: 32, fontSize: 20, color: '#8b8d97', fontWeight: 500 },
          children: [
            'Next.js',
            { type: 'span', props: { style: { color: '#4a4c57' }, children: '·' } },
            'NestJS',
            { type: 'span', props: { style: { color: '#4a4c57' }, children: '·' } },
            'React Native',
            { type: 'span', props: { style: { marginLeft: 'auto', color: '#7c6ff7' }, children: 'plex.ee' } },
          ],
        },
      },
    ],
  },
};

const svg = await satori(node, {
  width: 1200,
  height: 630,
  fonts: [
    { name: 'Inter', data: interFont400, weight: 400, style: 'normal' },
    { name: 'Inter', data: interFont700, weight: 700, style: 'normal' },
    { name: 'Inter', data: interFont700, weight: 800, style: 'normal' },
    { name: 'Playfair', data: playfairFont, weight: 400, style: 'italic' },
  ],
});

const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
writeFileSync(outPath, png);
console.log(`✓ Wrote ${outPath} (${(png.length / 1024).toFixed(1)} KB)`);
