'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Download, Apple } from 'lucide-react';
import Image from 'next/image';
import { getPortfolio } from '../utils/content';

const Portfolio = () => {
  const portfolioData = getPortfolio();
  const projects = portfolioData.projects;

  return (
    <section id='portfolio' className='plex-section'>
      <div className='plex-container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-2xl mb-16'
        >
          <p className='plex-eyebrow mb-3'>Selected work</p>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            {portfolioData.title}{' '}
            <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
              {portfolioData.highlight}
            </span>
          </h2>
          <p className='mt-4 text-lg text-foreground-muted'>
            {portfolioData.subtitle}
          </p>
        </motion.div>

        <div className='space-y-20 lg:space-y-28'>
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: '-80px' }}
                className={`grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <a
                  href={project.url ?? '#'}
                  target={project.url ? '_blank' : undefined}
                  rel='noopener noreferrer'
                  className='group relative block aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-surface shadow-2xl shadow-purple-900/20 hover:shadow-purple-600/30 transition-all duration-500 hover:-translate-y-1'
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`transition-transform duration-700 group-hover:scale-105 ${project.apkUrl ? 'object-contain object-center p-4' : 'object-cover object-top'}`}
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className='text-9xl font-bold text-white/10'>{project.letter}</span>
                    </div>
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  {project.url && (
                    <div className='absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300'>
                      <ArrowUpRight className='w-5 h-5' />
                    </div>
                  )}
                </a>

                <div>
                  <p className='plex-eyebrow mb-3'>{project.category}</p>
                  <h3 className='text-3xl sm:text-4xl font-bold tracking-tight'>
                    {project.title}
                  </h3>
                  <p className='mt-4 text-base text-foreground-muted leading-relaxed'>
                    {project.description}
                  </p>
                  {project.url && (
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent hover:text-accent-hover transition-colors group'
                    >
                      <Globe className='w-4 h-4' />
                      Visit live site
                      <ArrowUpRight className='w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </a>
                  )}
                  {project.apkUrl && (
                    <div className='mt-6 flex flex-wrap items-center gap-3'>
                      <a
                        href={project.apkUrl}
                        className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold uppercase tracking-[0.18em] transition-colors shadow-lg shadow-purple-500/25'
                      >
                        <Download className='w-3.5 h-3.5' />
                        Download APK
                      </a>
                      <span className='inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-foreground-muted'>
                        <Apple className='w-3.5 h-3.5' />
                        iOS — Coming Soon
                      </span>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {portfolioData.note && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mt-16 text-center text-sm text-foreground-dim italic'
          >
            {portfolioData.note}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
