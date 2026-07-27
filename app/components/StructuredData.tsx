const SITE_URL = 'https://plex.ee';

// JSON-LD structured data so search engines understand Plex is an independent
// digital product studio. Rendered as a static <script> in the <body> — Google reads
// it regardless of placement.
const StructuredData = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'Plex',
    description:
      'Independent digital product studio building custom websites, e-commerce, SaaS platforms, web applications, mobile products, and practical AI automation for ambitious businesses.',
    url: SITE_URL,
    email: 'contact@plex.ee',
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/icon.svg`,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EE',
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Worldwide' },
    ],
    founder: {
      '@type': 'Person',
      name: 'Yury Soika',
      sameAs: 'https://www.linkedin.com/in/yury-soika/',
    },
    knowsAbout: [
      'Web development',
      'E-commerce development',
      'Booking systems',
      'SaaS development',
      'Web application development',
      'Mobile app development',
      'Business process automation',
      'Artificial intelligence',
      'Hospitality technology',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Websites & Landing Pages',
            description:
              'Custom websites and landing pages built for clarity, conversion, and maintainable content.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce & Booking',
            description:
              'Catalogues, payments, reservations, and customer flows built around the business.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS & Web Applications',
            description:
              'Customer portals, subscriptions, internal tools, and operational dashboards.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile, AI & Automation',
            description:
              'Mobile products, integrations, AI workflows, and business automation.',
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
