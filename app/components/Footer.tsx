'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { getFooter, getSiteInfo } from '../utils/content';

export default function Footer() {
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
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className='text-foreground-muted hover:text-accent transition-colors text-sm'
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
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

            {/* Social Links */}
            <div className='flex gap-4'>
              <a
                href={footerData.social.linkedin}
                className='w-10 h-10 bg-background border border-white/5 rounded-lg flex items-center justify-center hover:border-accent/50 transition-colors'
                aria-label='LinkedIn'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='w-5 h-5 text-foreground-muted' />
              </a>
              <a
                href={footerData.social.twitter}
                className='w-10 h-10 bg-background border border-white/5 rounded-lg flex items-center justify-center hover:border-accent/50 transition-colors'
                aria-label='Twitter'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Twitter className='w-5 h-5 text-foreground-muted' />
              </a>
              <a
                href={footerData.social.github}
                className='w-10 h-10 bg-background border border-white/5 rounded-lg flex items-center justify-center hover:border-accent/50 transition-colors'
                aria-label='GitHub'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='w-5 h-5 text-foreground-muted' />
              </a>
            </div>
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
}
