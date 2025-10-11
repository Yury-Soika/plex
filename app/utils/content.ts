import contentData from '../data/content.json';

// Type definitions for better TypeScript support
export type NavigationLink = {
  name: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  icon: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  gradient: string;
  letter: string;
};

export type TechItem = {
  name: string;
  category: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type PricingPackage = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
};

export type Stat = {
  icon: string;
  label: string;
  value: string;
};

export type Value = {
  title: string;
  description: string;
};

// Content getter functions
export const getContent = () => contentData;

export const getSiteInfo = () => contentData.site;
export const getNavigation = () => contentData.navigation;
export const getHero = () => contentData.hero;
export const getServices = () => contentData.services;
export const getPortfolio = () => contentData.portfolio;
export const getTechStack = () => contentData.techStack;
export const getProcess = () => contentData.process;
export const getPricing = () => contentData.pricing;
export const getAbout = () => contentData.about;
export const getContact = () => contentData.contact;
export const getFooter = () => contentData.footer;

// Helper function to get page title
export const getPageTitle = (section?: string) => {
  const siteName = contentData.site.name;
  const siteTagline = contentData.site.tagline;

  if (!section) return `${siteName} - ${siteTagline}`;

  const sectionNames: { [key: string]: string } = {
    services: 'Services',
    portfolio: 'Portfolio',
    process: 'Process',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
  };

  return `${sectionNames[section] || section} - ${siteName}`;
};
