'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

const Pricing = () => {
  const { t } = useLanguage();
  const pricingData = t.pricing;
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
          <p className='plex-eyebrow mb-3'>{pricingData.eyebrow}</p>
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

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
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
                  {pricingData.recommended}
                </span>
              )}

              <h3 className='text-xl font-semibold mb-2'>{pkg.name}</h3>
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

              {pkg.extras && pkg.extras.length > 0 && (
                <div className='mb-8'>
                  {pkg.extrasLabel && (
                    <p className='mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent'>
                      {pkg.extrasLabel}
                    </p>
                  )}
                  <ul className='space-y-3'>
                    {pkg.extras.map((feature, idx) => (
                      <li key={idx} className='flex items-start gap-2.5 text-sm'>
                        <Check className='w-4 h-4 text-accent flex-shrink-0 mt-0.5' />
                        <span className='text-foreground'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
                {pricingData.getStarted}
              </button>
            </motion.div>
          ))}
        </div>

        {pricingData.addOns && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='mt-8 rounded-2xl border border-white/10 bg-surface/40 p-6 sm:p-8'
          >
            <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6'>
              <h3 className='text-lg font-semibold'>{pricingData.addOns.title}</h3>
              <p className='text-sm text-foreground-muted'>
                {pricingData.addOns.subtitle}
              </p>
            </div>

            {pricingData.addOns.items.map((addon, index) => (
              <div
                key={index}
                className='flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 rounded-xl border border-white/10 bg-white/[0.02] p-6'
              >
                <div className='lg:w-1/3'>
                  <h4 className='text-lg font-semibold mb-1'>{addon.name}</h4>
                  {addon.timeline && (
                    <p className='text-[11px] uppercase tracking-[0.16em] text-foreground-dim mt-1'>
                      {addon.timeline}
                    </p>
                  )}
                  <p className='text-sm text-foreground-muted mt-3'>
                    {addon.description}
                  </p>
                </div>

                <ul className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5'>
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className='flex items-start gap-2.5 text-sm'>
                      <Check className='w-4 h-4 text-accent flex-shrink-0 mt-0.5' />
                      <span className='text-foreground-muted'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}

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
