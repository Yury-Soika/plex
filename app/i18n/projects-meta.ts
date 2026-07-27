import type { ProjectMeta } from './types';

// Language-independent project data. Translatable copy (category, tag,
// description) lives in each language file, matched to these entries by id.
export const projectsMeta: ProjectMeta[] = [
  {
    id: 'aster',
    title: 'Aster Supply',
    gradient: 'from-amber-500/20 to-orange-500/20',
    letter: 'A',
    url: 'https://demo.plex.ee/aster/',
    image: '/preview-aster-commerce.svg',
    pageUrl: '/work/aster',
  },
  {
    id: 'velvet',
    title: 'Velvet Lounge',
    gradient: 'from-purple-500/20 to-pink-500/20',
    letter: 'V',
    url: 'https://velvet.plex.ee',
    image: '/preview-velvet-lounge.webp',
    pageUrl: '/work/velvet',
  },
  {
    id: 'nightfall',
    title: 'Nightfall Terrace',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    letter: 'N',
    url: 'https://nightfall.plex.ee',
    image: '/preview-nightfall-terrace.webp',
    pageUrl: '/work/nightfall',
  },
  {
    id: 'venue',
    title: 'Venue',
    gradient: 'from-violet-500/20 to-blue-500/20',
    letter: 'V',
    url: 'https://venue.plex.ee/product',
    image: '/preview-venue.webp',
    pageUrl: '/work/venue',
  },
  {
    id: 'venue-mobile',
    title: 'Venue Mobile',
    gradient: 'from-indigo-500/20 to-fuchsia-500/20',
    letter: 'V',
    image: '/preview-venue-mobile-tonight-framed.png',
    pageUrl: '/work/venue-mobile',
    apkUrl:
      'https://github.com/Yury-Soika/venue-mobile/releases/download/v1.0.0/app-release.apk',
    galleryImages: [
      { src: '/preview-venue-mobile-bookings-framed.png', alt: 'Venue Mobile bookings screen' },
      { src: '/preview-venue-mobile-events-framed.png', alt: 'Venue Mobile events screen' },
      { src: '/preview-venue-mobile-guests-framed.png', alt: 'Venue Mobile guests screen' },
      { src: '/preview-venue-mobile-profile-framed.png', alt: 'Venue Mobile profile screen' },
    ],
  },
  {
    id: 'relay',
    title: 'Relay',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    letter: 'R',
    url: 'https://demo.plex.ee/relay/',
    image: '/preview-relay-ops.svg',
    pageUrl: '/work/relay',
  },
];
