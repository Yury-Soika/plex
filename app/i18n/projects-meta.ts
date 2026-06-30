import type { ProjectMeta } from './types';

// Language-independent project data. Translatable copy (category, tag,
// description) lives in each language file, matched to these entries by id.
export const projectsMeta: ProjectMeta[] = [
  {
    id: 'velvet',
    title: 'Velvet Lounge',
    gradient: 'from-purple-500/20 to-pink-500/20',
    letter: 'V',
    url: 'https://velvet.plex.ee',
    image: '/preview-velvet-lounge.png',
  },
  {
    id: 'nightfall',
    title: 'Nightfall Terrace',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    letter: 'N',
    url: 'https://nightfall.plex.ee',
    image: '/preview-nightfall-terrace.png',
  },
  {
    id: 'venue',
    title: 'Venue',
    gradient: 'from-violet-500/20 to-blue-500/20',
    letter: 'V',
    url: 'https://venue.plex.ee',
    image: '/preview-venue.png',
  },
  {
    id: 'venue-mobile',
    title: 'Venue Mobile',
    gradient: 'from-indigo-500/20 to-fuchsia-500/20',
    letter: 'V',
    image: '/preview-venue-mobile-tonight-framed.png',
    pageUrl: '/venue-mobile',
    apkUrl:
      'https://github.com/Yury-Soika/venue-mobile/releases/download/v1.0.0/app-release.apk',
    galleryImages: [
      { src: '/preview-venue-mobile-bookings-framed.png', alt: 'Venue Mobile bookings screen' },
      { src: '/preview-venue-mobile-events-framed.png', alt: 'Venue Mobile events screen' },
      { src: '/preview-venue-mobile-guests-framed.png', alt: 'Venue Mobile guests screen' },
      { src: '/preview-venue-mobile-profile-framed.png', alt: 'Venue Mobile profile screen' },
    ],
  },
];
