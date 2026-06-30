// Language vocabulary types for the Plex site.
// One canonical `Content` shape; every language provides a full object of it,
// so TypeScript flags any missing translation at build time.

export type Lang = 'en' | 'et' | 'pl' | 'ru';

export const LANGS: Lang[] = ['en', 'et', 'pl', 'ru'];

// Short labels for the navbar switcher.
export const LANG_LABELS: Record<Lang, string> = {
  en: 'EN',
  et: 'ET',
  pl: 'PL',
  ru: 'RU',
};

// ISO codes for the <html lang> attribute (et = Estonian, not es/Spanish).
export const HTML_LANG: Record<Lang, string> = {
  en: 'en',
  et: 'et',
  pl: 'pl',
  ru: 'ru',
};

export type NavLink = { name: string; href: string };

export type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  icon: string;
};

// Language-independent project data lives in projects-meta.ts.
export type ProjectMeta = {
  id: string;
  title: string;
  gradient: string;
  letter: string;
  url?: string;
  image?: string;
  pageUrl?: string;
  apkUrl?: string;
  galleryImages?: { src: string; alt: string }[];
};

// Translatable per-project copy, matched to ProjectMeta by id.
export type ProjectCopy = {
  id: string;
  category: string;
  tag?: string;
  description: string;
};

// What components actually consume: meta merged with the active language copy.
export type ResolvedProject = ProjectMeta & Omit<ProjectCopy, 'id'>;

export type TechItem = { name: string; category: string };
export type Benefit = { icon: string; title: string; description: string };
export type ProcessStep = { step: string; title: string; description: string };

export type PricingPackage = {
  name: string;
  timeline?: string;
  description: string;
  features: string[];
  // Higher tiers repeat the inherited features above, then list what they add
  // on top under this label (modular-house pattern).
  extrasLabel?: string;
  extras?: string[];
  highlighted: boolean;
};

export type AddOnItem = {
  name: string;
  timeline?: string;
  description: string;
  features: string[];
};

export type Stat = { icon: string; label: string; value: string };
export type Value = { title: string; description: string };

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  // Paragraphs rendered after the list (when a section has both).
  paragraphsAfter?: string[];
  // When true, the contact email link is rendered after the paragraphs.
  contact?: boolean;
};

export type Content = {
  site: { name: string; tagline: string; description: string };
  nav: { links: NavLink[]; contact: string };
  hero: {
    badge: string;
    headline: string;
    highlight: string;
    subheadline: string;
    cta: { primary: string; secondary: string };
    stats: { live: string; stack: string; focus: string };
    demoLabel: string;
    explore: string;
  };
  services: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    items: ServiceItem[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    note: string;
    actions: {
      viewGallery: string;
      visitSite: string;
      downloadApk: string;
      iosComingSoon: string;
      viewDetails: string;
      demo: string;
    };
    projects: ProjectCopy[];
  };
  tech: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    technologies: TechItem[];
    benefits: Benefit[];
  };
  process: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    stepLabel: string;
    steps: ProcessStep[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    recommended: string;
    getStarted: string;
    packages: PricingPackage[];
    addOns: { title: string; subtitle: string; items: AddOnItem[] };
    note: string;
    customQuote: string;
  };
  about: {
    eyebrow: string;
    title: string;
    highlight: string;
    mission: string;
    values: Value[];
    stats: Stat[];
  };
  contact: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    bookCall: { title: string; text: string; cta: string };
    emailLabel: string;
    responseLabel: string;
    responseValue: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      placeholders: { name: string; email: string; message: string };
    };
    expectations: { title: string; items: string[] };
    success: string;
    error: string;
  };
  footer: {
    description: string;
    badge: string;
    address: string;
    quickLinksTitle: string;
    contactTitle: string;
    email: string;
    builtWith: string;
    quickLinks: NavLink[];
    legalLinks: NavLink[];
    copyright: string;
  };
  cookie: {
    title: string;
    body: string;
    seeOur: string;
    policyLink: string;
    allowAll: string;
    onlyEssential: string;
  };
  legal: { backHome: string; lastUpdated: string };
  terms: {
    title: string;
    highlight: string;
    updated: string;
    sections: LegalSection[];
  };
  privacy: {
    title: string;
    highlight: string;
    updated: string;
    sections: LegalSection[];
  };
};
