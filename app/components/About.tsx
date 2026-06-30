'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageProvider';

const About = () => {
  const { t } = useLanguage();
  const aboutData = t.about;

  return (
    <section id='about' className='plex-section'>
      <div className='plex-container'>
        <div className='grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-start'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className='plex-eyebrow mb-3'>{aboutData.eyebrow}</p>
            <h2 className='text-4xl sm:text-5xl font-bold tracking-tight mb-6'>
              {aboutData.title}{' '}
              <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
                {aboutData.highlight}
              </span>
            </h2>
            <p className='text-lg text-foreground-muted leading-relaxed'>
              {aboutData.mission}
            </p>

            <div className='mt-10 grid grid-cols-2 gap-4'>
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                  className='border-l-2 border-accent/40 pl-4 py-1'
                >
                  <div className='plex-display text-2xl text-foreground mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-xs uppercase tracking-[0.18em] text-foreground-dim'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            {aboutData.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className='rounded-2xl border border-white/10 bg-surface/40 p-6 hover:border-accent/40 transition-colors'
              >
                <h3 className='text-base font-semibold text-accent mb-2'>
                  {value.title}
                </h3>
                <p className='text-sm text-foreground-muted leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
