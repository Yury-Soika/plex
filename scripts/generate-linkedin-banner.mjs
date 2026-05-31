// Generates a LinkedIn personal-profile banner PNG (1584x396) at
// public/linkedin-banner.png, matching the Plex brand. Run locally.
// Bottom-left is kept clear because LinkedIn overlays the profile photo there.
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'public', 'linkedin-banner.png');
mkdirSync(dirname(outPath), { recursive: true });

const interFont400 = readFileSync(join(__dirname, '..', 'node_modules', '@fontsource', 'inter', 'files', 'inter-latin-400-normal.woff'));
const interFont700 = readFileSync(join(__dirname, '..', 'node_modules', '@fontsource', 'inter', 'files', 'inter-latin-700-normal.woff'));
const playfairFont = readFileSync(join(__dirname, '..', 'node_modules', '@fontsource', 'playfair-display', 'files', 'playfair-display-latin-400-italic.woff'));

const W = 1584;
const H = 396;

const node = {
  type: 'div',
  props: {
    style: {
      width: W,
      height: H,
      background: 'linear-gradient(120deg, #0a0a0f 0%, #1a0a2e 55%, #0a0a0f 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // Big left padding keeps text clear of the overlaid profile photo.
      paddingLeft: 470,
      paddingRight: 80,
      color: '#f4f4f6',
      fontFamily: 'Inter',
    },
    children: [
      // Logo + name
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  width: 48, height: 48, borderRadius: 12, background: '#7c6ff7',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, fontWeight: 700, color: '#fff',
                },
                children: 'P',
              },
            },
            { type: 'div', props: { style: { fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }, children: 'Plex' } },
            {
              type: 'div',
              props: {
                style: {
                  marginLeft: 6, fontSize: 15, color: '#a0a0b8',
                  textTransform: 'uppercase', letterSpacing: 2.5, fontWeight: 600,
                  display: 'flex', alignItems: 'center',
                },
                children: '· Digital Studio',
              },
            },
          ],
        },
      },
      // Headline
      {
        type: 'div',
        props: {
          style: {
            fontSize: 46, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.5,
            display: 'flex', flexWrap: 'wrap', marginBottom: 22,
          },
          children: [
            'Websites, booking systems & apps for ',
            {
              type: 'span',
              props: {
                style: { color: '#a855f7', fontFamily: 'Playfair', fontStyle: 'italic' },
                children: 'hospitality venues.',
              },
            },
          ],
        },
      },
      // Stack + URL
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', gap: 20, fontSize: 19, color: '#8b8d97', fontWeight: 500 },
          children: [
            'Next.js',
            { type: 'span', props: { style: { color: '#4a4c57' }, children: '·' } },
            'NestJS',
            { type: 'span', props: { style: { color: '#4a4c57' }, children: '·' } },
            'React Native',
            { type: 'span', props: { style: { marginLeft: 28, color: '#7c6ff7', fontWeight: 700 }, children: 'plex.ee' } },
          ],
        },
      },
    ],
  },
};

const svg = await satori(node, {
  width: W,
  height: H,
  fonts: [
    { name: 'Inter', data: interFont400, weight: 400, style: 'normal' },
    { name: 'Inter', data: interFont700, weight: 700, style: 'normal' },
    { name: 'Inter', data: interFont700, weight: 800, style: 'normal' },
    { name: 'Playfair', data: playfairFont, weight: 400, style: 'italic' },
  ],
});

const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
writeFileSync(outPath, png);
console.log(`✓ Wrote ${outPath} (${(png.length / 1024).toFixed(1)} KB)`);
