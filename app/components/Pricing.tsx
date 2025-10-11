'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { getPricing } from '../utils/content';

export default function Pricing() {
  const pricingData = getPricing();
  const packages = pricingData.packages;
  return (
    <section id='pricing' className='py-32 bg-surface/50'>
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
            {pricingData.title}{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              {pricingData.highlight}
            </span>
          </h2>
          <p className='text-xl text-foreground-muted max-w-2xl mx-auto'>
            {pricingData.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-background border rounded-2xl p-10 ${
                pkg.highlighted
                  ? 'border-accent shadow-2xl shadow-accent/20 md:scale-105'
                  : 'border-white/5'
              } hover:border-accent/50 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {pkg.highlighted && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold'>
                  Most Popular
                </div>
              )}

              <div className='mb-6'>
                <h3 className='text-2xl font-bold mb-2'>{pkg.name}</h3>
                <div className='text-3xl font-bold text-accent mb-2'>
                  {pkg.price}
                </div>
                <p className='text-sm text-foreground-muted'>
                  {pkg.description}
                </p>
              </div>

              <ul className='space-y-4 mb-8'>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-3'>
                    <Check className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                    <span className='text-foreground-muted'>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-accent hover:bg-accent-hover text-white'
                    : 'bg-surface hover:bg-surface/80 text-white border border-white/10'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className='text-center mt-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='text-foreground-muted'>
            {pricingData.note}{' '}
            <span className='text-accent font-semibold cursor-pointer hover:underline'>
              {pricingData.customQuote}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
