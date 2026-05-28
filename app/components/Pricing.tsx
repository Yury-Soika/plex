'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { getPricing } from '../utils/content';

const Pricing = () => {
  const pricingData = getPricing();
  const packages = pricingData.packages;

  return (
    <section id='pricing' className='plex-section'>
      <div className='plex-container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-2xl mb-14'
        >
          <p className='plex-eyebrow mb-3'>Pricing</p>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            {pricingData.title}{' '}
            <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
              {pricingData.highlight}
            </span>
          </h2>
          <p className='mt-4 text-lg text-foreground-muted'>
            {pricingData.subtitle}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                pkg.highlighted
                  ? 'border-accent/50 bg-gradient-to-b from-purple-950/40 to-surface shadow-2xl shadow-purple-600/20'
                  : 'border-white/10 bg-surface/40 hover:border-white/20'
              }`}
            >
              {pkg.highlighted && (
                <span className='absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-purple-500/40'>
                  Most Popular
                </span>
              )}

              <h3 className='text-xl font-semibold mb-2'>{pkg.name}</h3>
              <div className='plex-display text-3xl text-accent mb-1'>
                {pkg.price}
              </div>
              {pkg.timeline && (
                <p className='text-[11px] uppercase tracking-[0.16em] text-foreground-dim mb-3'>
                  {pkg.timeline}
                </p>
              )}
              <p className='text-sm text-foreground-muted mb-6 min-h-[40px]'>
                {pkg.description}
              </p>

              <ul className='space-y-3 mb-8'>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-2.5 text-sm'>
                    <Check className='w-4 h-4 text-accent flex-shrink-0 mt-0.5' />
                    <span className='text-foreground-muted'>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`w-full rounded-full py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                  pkg.highlighted
                    ? 'bg-accent hover:bg-accent-hover text-white shadow-lg shadow-purple-500/30'
                    : 'border border-white/15 bg-white/5 hover:bg-white/10 text-foreground'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-12 text-sm text-foreground-muted'
        >
          {pricingData.note}{' '}
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className='text-accent font-semibold hover:text-accent-hover hover:underline transition-colors'
          >
            {pricingData.customQuote}
          </button>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
