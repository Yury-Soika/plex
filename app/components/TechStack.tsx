'use client';

import { motion } from 'framer-motion';
import { getTechStack } from '../utils/content';

const TechStack = () => {
  const techData = getTechStack();
  const technologies = techData.technologies;

  return (
    <section id='tech' className='plex-section'>
      <div className='plex-container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-2xl mb-12'
        >
          <p className='plex-eyebrow mb-3'>Stack</p>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            {techData.title}{' '}
            <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
              {techData.highlight}
            </span>
          </h2>
          <p className='mt-4 text-lg text-foreground-muted'>
            {techData.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className='flex flex-wrap gap-2.5 mb-16'
        >
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-sm text-foreground-muted hover:border-accent/40 hover:text-foreground transition-colors'
            >
              <span className='h-1.5 w-1.5 rounded-full bg-accent' />
              {tech.name}
              <span className='text-[10px] uppercase tracking-[0.18em] text-foreground-dim'>
                {tech.category}
              </span>
            </span>
          ))}
        </motion.div>

        <div className='grid md:grid-cols-3 gap-6'>
          {techData.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='rounded-2xl border border-white/10 bg-surface/40 p-7 hover:border-accent/40 transition-colors'
            >
              <div className='text-3xl mb-3'>{benefit.icon}</div>
              <h3 className='text-lg font-semibold mb-2'>{benefit.title}</h3>
              <p className='text-sm text-foreground-muted leading-relaxed'>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
