'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../i18n/LanguageProvider';
import { LANGS, LANG_LABELS } from '../i18n/types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useLanguage();
  const navigation = t.nav;
  const siteInfo = t.site;
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
    setIsOpen(false);
  };

  const navigateToSection = (href: string) => {
    if (pathname === '/') {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    const hash = href.startsWith('#') ? href : `#${href}`;
    router.push(`/${hash}`);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-background/85 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className='plex-container'>
        <div className='flex items-center justify-between py-4'>
          <button
            onClick={handleLogoClick}
            className='flex items-center gap-2.5 group'
          >
            <span className='inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500 to-violet-400 text-slate-950 font-bold text-sm shadow-lg shadow-purple-500/30'>
              P
            </span>
            <span className='text-lg font-semibold tracking-tight text-foreground'>
              {siteInfo.name}
            </span>
          </button>

          <div className='hidden md:flex items-center gap-8'>
            <div className='flex items-center gap-7 text-xs font-medium uppercase tracking-[0.18em] text-foreground-muted'>
              {navigation.links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigateToSection(link.href)}
                  className='hover:text-foreground transition-colors'
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className='flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5'>
              {LANGS.map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                    lang === code
                      ? 'bg-accent text-white'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                >
                  {LANG_LABELS[code]}
                </button>
              ))}
            </div>
            <button
              onClick={() => navigateToSection('#contact')}
              className='rounded-full border border-accent/60 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-hover hover:bg-accent hover:text-white transition-all'
            >
              {navigation.contact}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 text-foreground-muted hover:text-foreground transition-colors'
            aria-label='Toggle menu'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {isOpen && (
          <div className='md:hidden py-4 border-t border-white/10'>
            <div className='flex flex-col gap-1'>
              {navigation.links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigateToSection(link.href)}
                  className='py-2.5 text-left text-xs font-medium uppercase tracking-[0.18em] text-foreground-muted hover:text-foreground transition-colors'
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => navigateToSection('#contact')}
                className='mt-3 rounded-full bg-accent hover:bg-accent-hover px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors'
              >
                {navigation.contact}
              </button>
              <div className='mt-3 flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5 self-start'>
                {LANGS.map((code) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                      lang === code
                        ? 'bg-accent text-white'
                        : 'text-foreground-muted hover:text-foreground'
                    }`}
                  >
                    {LANG_LABELS[code]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
