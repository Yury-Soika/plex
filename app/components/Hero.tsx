'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { getHero } from '../utils/content';

export default function Hero() {
  const hero = getHero();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background gradient effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20' />

      {/* Content */}
      <div className='relative z-10 w-full max-w-3xl mx-auto text-center px-8 sm:px-12 lg:px-16 xl:px-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Brand */}
          <motion.h1
            className='text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hero.title}
          </motion.h1>

          {/* Main Headline */}
          <motion.h2
            className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {hero.headline}
            <br />
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              {hero.highlight}
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className='text-xl sm:text-2xl text-foreground-muted mb-12 mx-auto text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-32'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className='px-12 py-2 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50 w-full sm:w-auto'
            >
              {hero.cta.primary}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className='px-12 py-2 bg-surface hover:bg-surface/80 text-white font-semibold rounded-lg border border-white/10 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto'
            >
              {hero.cta.secondary}
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className='absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          onClick={() => scrollToSection('services')}
        >
          <ArrowDown className='w-8 h-8 text-foreground-muted' />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl' />
    </section>
  );
}
