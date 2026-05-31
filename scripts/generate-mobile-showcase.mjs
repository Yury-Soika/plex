// Generates a branded Venue Mobile showcase image (1200x630) for LinkedIn,
// compositing two framed phone screenshots onto the Plex gradient.
// Output: public/preview-venue-mobile-showcase.png (for manual LinkedIn upload).
import { writeFileSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const inter400 = readFileSync(join(ROOT, 'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'));
const inter700 = readFileSync(join(ROOT, 'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff'));
const playfair = readFileSync(join(ROOT, 'node_modules/@fontsource/playfair-display/files/playfair-display-latin-400-italic.woff'));

const toDataUri = (p) => `data:image/png;base64,${readFileSync(join(ROOT, 'public', p)).toString('base64')}`;
const phoneA = toDataUri('preview-venue-mobile-tonight-framed.png');
const phoneB = toDataUri('preview-venue-mobile-bookings-framed.png');

const W = 1200;
const H = 630;
const accent = '#818cf8';

// Phone native ratio 620x1320 -> scale to height 470 (width ~221)
const phoneH = 470;
const phoneW = Math.round((620 / 1320) * phoneH);

const node = {
  type: 'div',
  props: {
    style: {
      width: W, height: H,
      background: `linear-gradient(135deg, #0a0a0f 0%, ${accent}22 50%, #0a0a0f 100%)`,
      display: 'flex', flexDirection: 'row', alignItems: 'center',
      padding: '0 72px', color: '#f4f4f6', fontFamily: 'Inter',
    },
    children: [
      // Left: text
      {
        type: 'div',
        props: {
          style: { display: 'flex', flexDirection: 'column', width: 560 },
          children: [
            // logo lockup
            {
              type: 'div',
              props: {
                style: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: { width: 48, height: 48, borderRadius: 12, background: '#7c6ff7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 700, color: '#fff' },
                      children: 'P',
                    },
                  },
                  { type: 'div', props: { style: { fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }, children: 'Plex' } },
                  { type: 'div', props: { style: { marginLeft: 6, fontSize: 14, color: '#a0a0b8', textTransform: 'uppercase', letterSpacing: 2.5, fontWeight: 600, display: 'flex' }, children: '· Concept · Live Demo' } },
                ],
              },
            },
            // headline
            {
              type: 'div',
              props: {
                style: { fontSize: 60, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, display: 'flex', flexWrap: 'wrap', marginBottom: 20 },
                children: [
                  'Venue ',
                  { type: 'span', props: { style: { color: accent, fontFamily: 'Playfair', fontStyle: 'italic' }, children: 'Mobile.' } },
                ],
              },
            },
            // subtitle
            { type: 'div', props: { style: { fontSize: 21, color: '#8b8d97', lineHeight: 1.5, marginBottom: 28, display: 'flex' }, children: 'React Native staff app — live dashboard, bookings, and guest CRM with VIP tiers, built for on-the-floor venue teams.' } },
            // footer
            { type: 'div', props: { style: { fontSize: 18, color: '#8b8d97', fontWeight: 500, display: 'flex' }, children: ['Built by Plex', { type: 'span', props: { style: { color: accent, fontWeight: 700, marginLeft: 12 }, children: 'plex.ee' } }] } },
          ],
        },
      },
      // Right: two phones
      {
        type: 'div',
        props: {
          style: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 24 },
          children: [
            { type: 'img', props: { src: phoneA, width: phoneW, height: phoneH, style: { marginTop: -20 } } },
            { type: 'img', props: { src: phoneB, width: phoneW, height: phoneH, style: { marginLeft: 24, marginTop: 40 } } },
          ],
        },
      },
    ],
  },
};

const svg = await satori(node, {
  width: W, height: H,
  fonts: [
    { name: 'Inter', data: inter400, weight: 400, style: 'normal' },
    { name: 'Inter', data: inter700, weight: 700, style: 'normal' },
    { name: 'Inter', data: inter700, weight: 800, style: 'normal' },
    { name: 'Playfair', data: playfair, weight: 400, style: 'italic' },
  ],
});

const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
const out = join(ROOT, 'public', 'preview-venue-mobile-showcase.png');
writeFileSync(out, png);
console.log(`✓ ${out} (${(png.length / 1024).toFixed(1)} KB)`);
