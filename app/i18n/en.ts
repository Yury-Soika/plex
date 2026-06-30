import type { Content } from './types';

export const en: Content = {
  site: {
    name: 'Plex',
    tagline: 'Digital Studio for Nightlife & Hospitality',
    description:
      'Websites, booking systems, and mobile apps for nightclubs, restaurants, and hospitality venues. Built with Next.js, NestJS, and React Native.',
  },
  nav: {
    links: [
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Process', href: '#process' },
      { name: 'Packages', href: '#pricing' },
      { name: 'About', href: '#about' },
    ],
    contact: 'Contact',
  },
  hero: {
    badge: 'Digital studio · Nightlife & hospitality',
    headline: 'Websites, booking systems, and apps',
    highlight: 'for venues that take guest experience seriously.',
    subheadline:
      'We build the front-of-house and back-of-house digital tools that nightclubs, restaurants, and hospitality venues actually use — designed and coded from scratch for your venue.',
    cta: { primary: 'Start a Project', secondary: 'See Our Work' },
    stats: {
      live: '4 concept projects live',
      stack: 'Next.js · NestJS · React Native',
      focus: 'Hospitality-only',
    },
    demoLabel: 'Demo',
    explore: 'Explore',
  },
  services: {
    eyebrow: 'Services',
    title: 'What We',
    highlight: 'Build',
    subtitle: 'Four kinds of products, all custom-built for hospitality venues.',
    items: [
      {
        title: 'Venue Websites',
        description: 'Landing pages and full sites that turn visitors into bookings',
        features: [
          'Event calendar & lineup',
          'Photo & video gallery',
          'Reservation CTA flows',
          'Press / media kit pages',
        ],
        icon: 'code',
      },
      {
        title: 'Table & Booking Systems',
        description: 'Reservation flows your hosts and guests both actually enjoy',
        features: [
          'Visual table layouts',
          'Time slots & blackouts',
          'Deposits & cover charges',
          'Guest tier handling (VIP / regular)',
        ],
        icon: 'calendar',
      },
      {
        title: 'Operations Dashboards',
        description: 'Back-of-house tools for managing the venue end-to-end',
        features: [
          'Bookings, events & guest CRM',
          'Staff scheduling & roles',
          'Revenue & occupancy analytics',
          'Role-based access (CASL)',
        ],
        icon: 'zap',
      },
      {
        title: 'Staff Mobile Apps',
        description: 'Native iOS & Android apps for on-the-floor venue teams',
        features: [
          'React Native (iOS + Android)',
          'Live booking confirmations',
          'Push notifications for new bookings',
          'Biometric login & offline support',
        ],
        icon: 'smartphone',
      },
    ],
  },
  portfolio: {
    eyebrow: 'Selected work',
    title: 'Selected',
    highlight: 'Work',
    subtitle:
      'A growing showcase of production-grade concept projects — built to demonstrate exactly what we deliver for clients. Every line of code, every pixel, every interaction is real and shipping.',
    note: 'Your project gets the same standard. Concept work today, your venue tomorrow.',
    actions: {
      viewGallery: 'View gallery',
      visitSite: 'Visit live site',
      downloadApk: 'Download APK',
      iosComingSoon: 'iOS — Coming Soon',
      viewDetails: 'View full details',
      demo: 'Demo',
    },
    projects: [
      {
        id: 'velvet',
        category: 'Nightclub Website',
        tag: 'Concept · Live Demo',
        description:
          'A luxury nightclub website concept with VIP booking, event calendar, immersive photo gallery, and rich motion design. Built end-to-end with Next.js and Tailwind.',
      },
      {
        id: 'nightfall',
        category: 'Booking Platform',
        tag: 'Concept · Live Demo',
        description:
          'A complete table reservation system: real-time availability, multi-step booking flow, blackout dates, and a full admin dashboard. Next.js front-end, NestJS API, PostgreSQL.',
      },
      {
        id: 'venue',
        category: 'SaaS Management Platform',
        tag: 'Concept · Live Demo',
        description:
          'A full operations platform for nightlife venues — bookings, events, guest CRM with VIP tiers, floor plan, staff, and analytics. CASL-based role permissions, JWT auth, demo-mode for read-only access.',
      },
      {
        id: 'venue-mobile',
        category: 'React Native · Android',
        tag: 'Concept · APK Available',
        description:
          'Staff companion app for the Venue platform. Live dashboard metrics, booking management, guest CRM with VIP tiers, role-based access — all optimized for on-the-floor mobile use.',
      },
    ],
  },
  tech: {
    eyebrow: 'Stack',
    title: 'Our Tech',
    highlight: 'Stack',
    subtitle:
      'The tools we reach for on every project. Battle-tested, performant, and a joy to work with.',
    technologies: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'NestJS', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'React Native', category: 'Mobile' },
    ],
    benefits: [
      {
        icon: '⚡',
        title: 'Fast on day one',
        description:
          'Server-rendered Next.js, optimized images, and PostgreSQL out of the box. Your site loads in under a second on a phone — measured, not promised.',
      },
      {
        icon: '🔑',
        title: 'You own everything',
        description:
          'Source code on your GitHub. Database on your host. Deploy keys in your hands. No vendor lock-in, no monthly SaaS fees on top.',
      },
      {
        icon: '🧩',
        title: 'Built to extend',
        description:
          "Modular architecture so the next feature isn't a rewrite. Add a payment provider, a new role, or a mobile app without touching the foundation.",
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'How We',
    highlight: 'Work',
    subtitle:
      'Four steps from first call to launch. Fixed price, fixed timeline, no scope-creep surprises.',
    stepLabel: 'Step',
    steps: [
      {
        step: '01',
        title: 'Discovery Call',
        description:
          'A free 30-minute call to understand your venue, your goals, and the exact problem you want solved. You leave with a clear scope and a fixed-price quote.',
      },
      {
        step: '02',
        title: 'Design & Prototype',
        description:
          "We design the key screens in Figma, walk you through them, and iterate until you're sure. You approve before any production code is written.",
      },
      {
        step: '03',
        title: 'Build & Review',
        description:
          'We build in weekly sprints with a staging URL you can check anytime. You see progress every Friday, not in a big-bang at the end.',
      },
      {
        step: '04',
        title: 'Launch & Handoff',
        description:
          'Deploy to production, hand over the source code and credentials, walk your team through anything they need. Support window starts here.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Packages',
    title: 'Our',
    highlight: 'Packages',
    subtitle: 'Three clear starting points, plus add-ons when you need them.',
    recommended: 'Recommended',
    getStarted: 'Get Started',
    packages: [
      {
        name: 'Landing Page',
        timeline: '2–3 weeks',
        description:
          'A fast, sharp one-page site that gets your venue found and looking the part.',
        features: [
          'Custom-built — no templates',
          'Up to 5 sections',
          'Looks perfect on every phone',
          'Set up to show on Google (SEO)',
          'Contact form that emails you',
          'Visitor analytics',
          'Domain & hosting handled',
        ],
        highlighted: false,
      },
      {
        name: 'Full Website',
        timeline: '5–8 weeks',
        description:
          'A full site that takes bookings online and gives you one dashboard to run them.',
        features: [
          'Custom-built — no templates',
          'Up to 5 sections',
          'Looks perfect on every phone',
          'Set up to show on Google (SEO)',
          'Contact form that emails you',
          'Visitor analytics',
          'Domain & hosting handled',
        ],
        extrasLabel: 'Added on top of Landing Page',
        extras: [
          'Online booking & reservations',
          'Take deposits & payments (Stripe)',
          'Admin dashboard to manage bookings',
          'Staff logins with roles',
          'Your site & data, owned by you',
          '2 months support after launch',
        ],
        highlighted: true,
      },
      {
        name: 'Full Platform',
        timeline: '12–20 weeks',
        description:
          'Not a site plus an app — one unified system: web, backend, and a staff app all sharing the same live data.',
        features: [
          'Custom-built — no templates',
          'Up to 5 sections',
          'Looks perfect on every phone',
          'Set up to show on Google (SEO)',
          'Contact form that emails you',
          'Visitor analytics',
          'Domain & hosting handled',
          'Online booking & reservations',
          'Take deposits & payments (Stripe)',
          'Admin dashboard to manage bookings',
          'Staff logins with roles',
          'Your site & data, owned by you',
          '2 months support after launch',
        ],
        extrasLabel: 'Added on top of Full Website',
        extras: [
          'Staff mobile app — included (iOS & Android)',
          'Live updates across web & app, in real time',
          'Analytics & occupancy dashboards',
          'Detailed staff permissions',
          'Built to scale as you grow',
          '6 months support after launch',
        ],
        highlighted: false,
      },
    ],
    addOns: {
      title: 'Add a Mobile App',
      subtitle:
        'A second product — a native app on top of your Full Website. (The Full Platform already includes one.)',
      items: [
        {
          name: 'Staff Mobile App',
          timeline: '8–12 weeks',
          description:
            "Live bookings, guest list, and instant new-booking alerts in your floor team's pocket — a native iOS & Android app added on to your Full Website.",
          features: [
            'Native iOS & Android',
            'Push alerts for new bookings',
            'Secure staff logins',
            'Works offline',
            'Published to App Store & Play Store',
            '3 months support after launch',
          ],
        },
      ],
    },
    note: 'A Full Website plus the staff app gives you a site and an app that share your bookings. The Full Platform builds those same pieces as one live system — real-time updates across web and app, analytics dashboards, room to scale, and 6 months of support. Not sure which fits? Every project starts with a free discovery call and a firm fixed-price quote.',
    customQuote: 'Need something different?',
  },
  about: {
    eyebrow: 'Who we are',
    title: 'About',
    highlight: 'Plex',
    mission:
      'Plex is a small digital studio focused exclusively on nightlife and hospitality. We build the websites, booking systems, and mobile apps that venues actually need — not templates, not marketing fluff. Our concept projects show exactly what we can ship; your project gets the same level of care.',
    values: [
      {
        title: 'Hospitality-only',
        description:
          "We don't take dental clinics or crypto landing pages. Every project we ship is for clubs, bars, restaurants, or hospitality venues.",
      },
      {
        title: 'Custom-built',
        description:
          'No themes, no page builders. Every product is hand-written Next.js, NestJS, and React Native — designed and coded for your venue specifically.',
      },
      {
        title: 'Owned by you',
        description:
          'You get the full source code, the database, the deploy keys. No vendor lock-in, no monthly SaaS fees, no surprises.',
      },
    ],
    stats: [
      { icon: 'users', label: 'Specialization', value: 'Nightlife & Hospitality' },
      { icon: 'clock', label: 'Core stack', value: 'Next.js · NestJS · React Native' },
      { icon: 'award', label: 'Concept projects', value: '4 built' },
      { icon: 'trending-up', label: 'Engagement', value: 'Fixed-price · No retainer' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Start a',
    highlight: 'Project',
    subtitle:
      "Tell us about your venue and what you're trying to build. We respond within 24 hours with a free discovery call.",
    bookCall: {
      title: 'Book a free intro call',
      text: "Pick a time that works for you — we'll talk through what your venue needs.",
      cta: 'Open calendar →',
    },
    emailLabel: 'Email',
    responseLabel: 'Response time',
    responseValue: 'Within 24 hours, weekdays',
    form: {
      name: 'Full Name',
      email: 'Email Address',
      message: 'Tell us about your project',
      submit: 'Send Message',
      placeholders: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Tell us about your project...',
      },
    },
    expectations: {
      title: 'What to expect:',
      items: [
        'Response within 24 hours',
        'Free consultation call',
        'Custom project proposal',
        'No commitment required',
      ],
    },
    success: "Message sent. We'll get back to you soon.",
    error: 'Something went wrong. Please try again or email us directly.',
  },
  footer: {
    description:
      'A focused digital studio building websites, booking systems, and mobile apps for nightlife and hospitality venues.',
    badge: 'EU-registered studio · Serving venues worldwide',
    address: 'Plex · Vesivärava tn 50-201, Tallinn, Estonia',
    quickLinksTitle: 'Quick Links',
    contactTitle: 'Get in Touch',
    email: 'contact@plex.ee',
    builtWith: 'Built with Next.js, TypeScript & Tailwind CSS',
    quickLinks: [
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Process', href: '#process' },
      { name: 'Contact', href: '#contact' },
    ],
    legalLinks: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    copyright: 'All rights reserved.',
  },
  cookie: {
    title: 'Cookies & similar technologies',
    body: 'We use essential cookies to make Plex work as intended and, with your consent, additional cookies to understand how our site is used.',
    seeOur: 'See our',
    policyLink: 'Privacy & Cookies Policy',
    allowAll: 'Allow all',
    onlyEssential: 'Only essential',
  },
  legal: { backHome: '← Back to home', lastUpdated: 'Last updated:' },
  terms: {
    title: 'Terms of',
    highlight: 'Service',
    updated: 'May 2026',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'These Terms of Service ("Terms") govern your use of the Plex website at https://plex.ee and any design, development, or related services we provide ("Services"). By using our website or engaging our Services, you agree to these Terms. If you do not agree, please do not use the site or our Services.',
        ],
      },
      {
        heading: '2. Our Services',
        paragraphs: [
          'Plex is a digital studio that designs and builds websites, booking systems, and mobile applications for nightlife and hospitality venues. The scope, deliverables, timeline, and price of any project are agreed in writing before work begins, following a discovery call. Concept projects shown on this site are demonstrations of our capabilities and are not offers of sale.',
        ],
      },
      {
        heading: '3. Quotes, Fees, and Payment',
        paragraphs: [
          'A firm, fixed-price quote is provided in a written proposal after we scope your project. Payment terms, including any deposit and milestone schedule, are set out in that proposal. Fees are exclusive of third-party costs (such as hosting, domains, app store fees, or paid integrations) unless stated otherwise.',
        ],
      },
      {
        heading: '4. Client Responsibilities',
        paragraphs: [
          'To deliver on time, we rely on you to provide content, feedback, approvals, and access to any required accounts in a timely manner. Delays in providing these may affect the project timeline. You are responsible for ensuring that any materials you supply do not infringe the rights of third parties.',
        ],
      },
      {
        heading: '5. Intellectual Property and Ownership',
        paragraphs: [
          'Upon full payment, ownership of the final source code and custom deliverables produced specifically for your project transfers to you, as described in your proposal. We retain the right to reuse general know-how, techniques, and non-client-specific components. Third-party and open-source components remain subject to their respective licenses. Unless you opt out in writing, we may reference completed work in our portfolio.',
        ],
      },
      {
        heading: '6. Warranties and Support',
        paragraphs: [
          'We take care to deliver work to a professional standard. Any post-launch support window is specified in your proposal. Beyond that window, the Services are provided "as is" without warranties of any kind, to the extent permitted by law. We do not warrant that the Services will be uninterrupted or error-free.',
        ],
      },
      {
        heading: '7. Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by law, Plex shall not be liable for any indirect, incidental, or consequential damages, or for loss of profits, revenue, or data, arising out of or in connection with the Services. Our total liability for any claim shall not exceed the amount you paid for the Services giving rise to the claim.',
        ],
      },
      {
        heading: '8. Third-Party Services',
        paragraphs: [
          'Our Services may rely on or integrate with third-party platforms (such as hosting providers, payment processors, and analytics tools). We are not responsible for the availability, performance, or policies of those third parties, and your use of them may be subject to their own terms.',
        ],
      },
      {
        heading: '9. Changes to These Terms',
        paragraphs: [
          'We may update these Terms from time to time. We will post the revised Terms on this page and update the "Last updated" date. Your continued use of the site or our Services after changes take effect constitutes acceptance of the revised Terms.',
        ],
      },
      {
        heading: '10. Contact Us',
        paragraphs: ['If you have questions about these Terms, please contact us at'],
        contact: true,
      },
    ],
  },
  privacy: {
    title: 'Privacy',
    highlight: 'Policy',
    updated: 'March 2025',
    sections: [
      {
        heading: '1. Introduction',
        paragraphs: [
          'Plex ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://plex.ee or use our services. Please read this policy carefully.',
        ],
      },
      {
        heading: '2. Information We Collect',
        paragraphs: ['We may collect information that you provide directly to us, including:'],
        list: [
          'Name and contact information (e.g. email address) when you use our contact form',
          'Company or project details you share when requesting a quote or proposal',
          'Communications and correspondence with us',
        ],
        paragraphsAfter: [
          'We also automatically collect certain technical information when you visit our site, such as IP address, browser type, device information, and pages visited. We may use cookies and similar technologies for this purpose.',
        ],
      },
      {
        heading: '3. How We Use Your Information',
        paragraphs: [
          'We use the information we collect to respond to your inquiries, provide and improve our services, send relevant updates (with your consent), analyze site usage, and comply with legal obligations. We do not sell your personal data to third parties.',
        ],
      },
      {
        heading: '4. Cookies and Similar Technologies',
        paragraphs: [
          'Our website may use cookies and similar technologies to remember your preferences, understand how you use our site, and improve your experience. You can manage or disable cookies through your browser settings. Essential cookies are necessary for the site to function; other cookies are used for analytics and preference storage.',
        ],
      },
      {
        heading: '5. Data Sharing and Disclosure',
        paragraphs: [
          'We may share your information with service providers who assist us in operating our website and business (e.g. hosting, analytics), subject to confidentiality obligations. We may also disclose information where required by law or to protect our rights and safety.',
        ],
      },
      {
        heading: '6. Data Retention and Security',
        paragraphs: [
          'We retain your information only for as long as necessary to fulfill the purposes described in this policy or as required by law. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or loss.',
        ],
      },
      {
        heading: '7. Your Rights',
        paragraphs: [
          'Depending on your location, you may have the right to access, correct, or delete your personal data, object to or restrict certain processing, and data portability. To exercise these rights or ask questions about our practices, please contact us using the details below.',
        ],
      },
      {
        heading: '8. Changes to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the "Last updated" date. We encourage you to review this policy periodically.',
        ],
      },
      {
        heading: '9. Contact Us',
        paragraphs: ['If you have questions about this Privacy Policy or our data practices, please contact us at'],
        contact: true,
      },
    ],
  },
};
