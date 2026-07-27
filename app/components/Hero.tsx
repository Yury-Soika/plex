'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../i18n/LanguageProvider';
import { trackAnalyticsEvent } from '../lib/analytics';

const Hero = () => {
  const { t } = useLanguage();
  const hero = t.hero;
  const portfolio = t.portfolio;
  const coreProjectIds = ['aster', 'relay', 'velvet', 'nightfall', 'venue'];
  const projects = coreProjectIds
    .map((id) => portfolio.projects.find((project) => project.id === id))
    .filter((project): project is (typeof portfolio.projects)[number] => Boolean(project));

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='top'
      className='relative min-h-screen flex items-center overflow-hidden pt-28 pb-20'
    >
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.15),transparent_55%)]' />
        <div className='absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-purple-600/15 rounded-full blur-3xl' />
        <div className='absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-violet-700/15 rounded-full blur-3xl' />
      </div>

      <div className='plex-container relative z-10'>
        <div className='grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center'>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground-muted backdrop-blur-sm'
            >
              <span className='h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse' />
              {hero.badge}
            </motion.span>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight'
            >
              {hero.headline}{' '}
              <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
                {hero.highlight}
              </span>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className='mt-6 max-w-xl text-base sm:text-lg text-foreground-muted leading-relaxed'
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='mt-9 flex flex-col sm:flex-row gap-4'
            >
              <button
                onClick={() => {
                  trackAnalyticsEvent('cta_click', { location: 'homepage_hero', destination: 'contact' });
                  scrollToSection('contact');
                }}
                className='inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-hover text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] shadow-xl shadow-purple-500/30 transition-all'
              >
                {hero.cta.primary}
                <ArrowRight className='w-4 h-4' />
              </button>
              <button
                onClick={() => {
                  trackAnalyticsEvent('cta_click', { location: 'homepage_hero', destination: 'portfolio' });
                  scrollToSection('portfolio');
                }}
                className='inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm transition-all'
              >
                {hero.cta.secondary}
              </button>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='mt-10 flex flex-wrap items-center gap-6 text-xs text-foreground-muted'
            >
              <span className='flex items-center gap-2'>
                <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
                {hero.stats.live}
              </span>
              <span className='flex items-center gap-2'>
                <span className='h-1.5 w-1.5 rounded-full bg-purple-400' />
                {hero.stats.stack}
              </span>
              <span className='flex items-center gap-2'>
                <span className='h-1.5 w-1.5 rounded-full bg-fuchsia-400' />
                {hero.stats.focus}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative hidden h-[500px] md:block lg:h-[560px]'
          >
            {projects.map((project, i) => {
              const positions = [
                'top-0 left-0 -rotate-2 z-10',
                'top-5 right-0 rotate-2 z-20',
                'top-[31%] left-2 rotate-1 z-30',
                'top-[35%] right-2 -rotate-1 z-40',
                'bottom-0 left-1/2 -translate-x-1/2 rotate-1 z-50',
              ];
              return (
                <motion.a
                  key={project.title}
                  href={project.url ?? '#portfolio'}
                  target={project.url ? '_blank' : undefined}
                  rel='noopener noreferrer'
                  onClick={() => trackAnalyticsEvent('work_open', { location: 'homepage_hero', project: project.id })}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
                  whileHover={{ scale: 1.04, rotate: 0, zIndex: 40 }}
                  className={`absolute w-[57%] aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/40 ring-1 ring-black/40 ${positions[i]}`}
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes='(min-width: 1024px) 39vw, 70vw'
                      className='object-cover object-top'
                    />
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between'>
                    <span className='text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium'>
                      {project.title}
                    </span>
                    <span className='text-[10px] uppercase tracking-[0.2em] text-accent'>
                      {hero.demoLabel}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => {
          trackAnalyticsEvent('cta_click', { location: 'homepage_scroll_prompt', destination: 'portfolio' });
          scrollToSection('portfolio');
        }}
        initial={false}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1 }, y: { duration: 2, repeat: Infinity } }}
        className='absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-foreground-dim hover:text-foreground transition-colors'
        aria-label='Scroll to portfolio'
      >
        <span className='text-[10px] uppercase tracking-[0.22em]'>{hero.explore}</span>
        <ArrowDown className='w-4 h-4' />
      </motion.button>
    </section>
  );
};

export default Hero;
