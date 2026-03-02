'use client';

import Link from 'next/link';
import { getFooter, getSiteInfo } from '../utils/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerData = getFooter();
  const siteInfo = getSiteInfo();

  return (
    <footer className='bg-surface/50 border-t border-white/5 py-20'>
      <div className='w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* Brand */}
          <div>
            <div className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4'>
              {siteInfo.name}
            </div>
            <p className='text-foreground-muted text-sm leading-relaxed'>
              {footerData.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-bold mb-4'>{footerData.quickLinksTitle}</h3>
            <ul className='space-y-2'>
              {footerData.links.quick.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className='text-foreground-muted hover:text-accent transition-colors text-sm'
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className='text-foreground-muted hover:text-accent transition-colors text-sm'
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-bold mb-4'>{footerData.contactTitle}</h3>
            <p className='text-foreground-muted text-sm mb-4'>
              <a
                href={`mailto:${footerData.email}`}
                className='hover:text-accent transition-colors'
              >
                {footerData.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-foreground-muted text-sm'>
            © {currentYear} {siteInfo.name}. {footerData.copyright}
          </p>
          <p className='text-foreground-muted text-sm'>
            {footerData.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
