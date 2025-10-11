'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket } from 'lucide-react';
import { getProcess } from '../utils/content';

export default function Process() {
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
    number: step.step,
  }));
  return (
    <section id='process' className='py-32'>
      <div className='w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            {processData.title}{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              {processData.highlight}
            </span>
          </h2>
          <p className='text-xl text-foreground-muted max-w-2xl mx-auto'>
            {processData.subtitle}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className='relative'>
          {/* Connecting Line */}
          <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-blue-500/50 transform -translate-x-1/2' />

          <div className='space-y-12'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      isEven ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <div className='bg-surface border border-white/5 rounded-2xl p-10 hover:border-accent/50 transition-colors duration-300'>
                      <div className='flex items-center gap-4 mb-4 lg:hidden'>
                        <div className='w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center'>
                          <Icon className='w-8 h-8 text-accent' />
                        </div>
                        <div className='text-5xl font-bold text-accent/20'>
                          {step.number}
                        </div>
                      </div>

                      <h3 className='text-2xl font-bold mb-3'>{step.title}</h3>
                      <p className='text-foreground-muted leading-relaxed'>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Circle (Desktop) */}
                  <div className='hidden lg:flex relative z-10 w-20 h-20 bg-background border-4 border-accent rounded-full items-center justify-center'>
                    <Icon className='w-8 h-8 text-accent' />
                  </div>

                  {/* Spacer */}
                  <div className='hidden lg:block flex-1' />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
