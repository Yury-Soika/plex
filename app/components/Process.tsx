'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';
import { getProcess } from '../utils/content';

const Process = () => {
  const processData = getProcess();

  const iconMap = {
    '01': Search,
    '02': Palette,
    '03': Code,
    '04': Rocket,
  };

  const steps = processData.steps.map((step) => ({
    ...step,
    icon: iconMap[step.step as keyof typeof iconMap] || Search,
  }));

  return (
    <section id='process' className='plex-section bg-surface/30 border-y border-white/5'>
      <div className='plex-container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-2xl mb-14'
        >
          <p className='plex-eyebrow mb-3'>How we work</p>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            {processData.title}{' '}
            <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
              {processData.highlight}
            </span>
          </h2>
          <p className='mt-4 text-lg text-foreground-muted'>
            {processData.subtitle}
          </p>
        </motion.div>

        <div className='relative'>
          <div className='hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent' />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='relative'
                >
                  <div className='relative z-10 flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-full border border-accent/40 bg-background shadow-lg shadow-purple-900/30'>
                    <Icon className='w-5 h-5 text-accent' />
                  </div>

                  <div className='text-center'>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-2'>
                      Step {step.step}
                    </p>
                    <h3 className='text-lg font-semibold mb-3'>{step.title}</h3>
                    <p className='text-sm text-foreground-muted leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
