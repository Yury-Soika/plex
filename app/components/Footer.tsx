'use client';

import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { getFooter, getSiteInfo } from '../utils/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerData = getFooter();
  const siteInfo = getSiteInfo();

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
          </div>

          <div>
            <h3 className='text-xs font-medium uppercase tracking-[0.18em] text-foreground-dim mb-4'>
              {footerData.quickLinksTitle}
            </h3>
            <ul className='space-y-2.5'>
              {footerData.links.quick.map((link) => (
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
            {footerData.social?.linkedin && (
              <div className='mt-4'>
                <a
                  href={footerData.social.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Plex on LinkedIn'
                  className='inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-foreground-muted transition-colors hover:border-accent hover:text-accent'
                >
                  <Linkedin className='h-4 w-4' />
                </a>
              </div>
            )}
            <div className='mt-4 flex flex-wrap gap-3'>
              {footerData.links.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='text-xs text-foreground-dim hover:text-foreground-muted transition-colors'
                >
                  {link.name}
                </Link>
              ))}
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
