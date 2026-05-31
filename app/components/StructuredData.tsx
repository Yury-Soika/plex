const SITE_URL = 'https://plex.ee';

// JSON-LD structured data so search engines understand Plex is a hospitality
// software studio. Rendered as a static <script> in the <body> — Google reads
// it regardless of placement.
const StructuredData = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'Plex',
    description:
      'Digital studio building custom websites, booking systems, and mobile apps for nightclubs, restaurants, and hospitality venues.',
    url: SITE_URL,
    email: 'contact@plex.ee',
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/icon.svg`,
    priceRange: '$$$',
    areaServed: 'Worldwide',
    knowsAbout: [
      'Web development',
      'Booking systems',
      'Mobile app development',
      'Hospitality technology',
      'Nightlife venue software',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Venue Websites',
            description:
              'Landing pages and full sites that turn visitors into bookings.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Table & Booking Systems',
            description:
              'Reservation flows your hosts and guests both actually enjoy.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Operations Dashboards',
            description:
              'Back-of-house tools for managing the venue end-to-end.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Staff Mobile Apps',
            description:
              'Native iOS & Android apps for on-the-floor venue teams.',
          },
        },
      ],
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
