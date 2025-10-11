'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { getNavigation, getSiteInfo } from '../utils/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = getNavigation();
  const siteInfo = getSiteInfo();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
          >
            {siteInfo.name}
          </button>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navigation.links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className='text-foreground-muted hover:text-white transition-colors'
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className='px-6 py-2 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors'
            >
              {navigation.contact}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 text-foreground-muted hover:text-white transition-colors'
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className='md:hidden py-4 border-t border-white/5'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className='flex flex-col gap-4'>
              {navigation.links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className='text-foreground-muted hover:text-white transition-colors text-left'
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className='px-6 py-2 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors text-center'
              >
                {navigation.contact}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
