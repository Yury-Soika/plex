'use client';

import Link from 'next/link';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { SOCIAL } from '../i18n/site';
import type { Lang } from '../i18n/types';

const cookiePreferenceLabels: Record<Lang, string> = {
  en: 'Cookie preferences',
  et: 'Küpsiste eelistused',
  pl: 'Ustawienia plików cookie',
  ru: 'Настройки cookie',
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, lang } = useLanguage();
  const footerData = t.footer;
  const siteInfo = t.site;

  return (
    <footer className='border-t border-white/10 bg-background py-16'>
      <div className='plex-container'>
        <div className='grid md:grid-cols-3 gap-10 mb-12'>
          <div>
            <div className='flex items-center gap-2.5 mb-4'>
              <span className='inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500 to-violet-400 text-slate-950 font-bold text-sm'>
                P
              </span>
              <span className='text-lg font-semibold tracking-tight'>
                {siteInfo.name}
              </span>
            </div>
            <p className='text-sm text-foreground-muted leading-relaxed max-w-xs'>
              {footerData.description}
            </p>
            {footerData.badge && (
              <p className='mt-4 inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-foreground-dim'>
                {footerData.badge}
              </p>
            )}
            {footerData.address && (
              <p className='mt-4 text-xs leading-relaxed text-foreground-dim max-w-xs'>
                {footerData.address}
              </p>
            )}
          </div>

          <div>
            <h3 className='text-xs font-medium uppercase tracking-[0.18em] text-foreground-dim mb-4'>
              {footerData.quickLinksTitle}
            </h3>
            <ul className='space-y-2.5'>
              {footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className='text-sm text-foreground-muted hover:text-accent transition-colors'
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className='text-sm text-foreground-muted hover:text-accent transition-colors'
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-xs font-medium uppercase tracking-[0.18em] text-foreground-dim mb-4'>
              {footerData.contactTitle}
            </h3>
            <a
              href={`mailto:${footerData.email}`}
              className='text-sm text-foreground-muted hover:text-accent transition-colors'
            >
              {footerData.email}
            </a>
            <div className='mt-4 flex items-center gap-2'>
              <a
                href={SOCIAL.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Plex on LinkedIn'
                className='inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-foreground-muted transition-colors hover:border-accent hover:text-accent'
              >
                <Linkedin className='h-4 w-4' />
              </a>
              <a
                href={SOCIAL.instagram}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Plex on Instagram'
                className='inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-foreground-muted transition-colors hover:border-accent hover:text-accent'
              >
                <Instagram className='h-4 w-4' />
              </a>
              <a
                href={SOCIAL.facebook}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Plex on Facebook'
                className='inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-foreground-muted transition-colors hover:border-accent hover:text-accent'
              >
                <Facebook className='h-4 w-4' />
              </a>
            </div>
            <div className='mt-4 flex flex-wrap gap-3'>
              {footerData.legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='text-xs text-foreground-dim hover:text-foreground-muted transition-colors'
                >
                  {link.name}
                </Link>
              ))}
              <button
                type='button'
                onClick={() => window.dispatchEvent(new Event('plex-open-consent'))}
                className='text-xs text-foreground-dim hover:text-foreground-muted transition-colors'
              >
                {cookiePreferenceLabels[lang]}
              </button>
            </div>
          </div>
        </div>

        <div className='pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-foreground-dim'>
          <p>
            © {currentYear} {siteInfo.name}. {footerData.copyright}
          </p>
          <p>{footerData.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
