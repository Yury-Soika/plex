'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

const Services = () => {
  const { t } = useLanguage();
  const servicesData = t.services;

  const iconMap = {
    code: Code2,
    zap: Sparkles,
    calendar: Calendar,
    smartphone: Smartphone,
  };

  const services = servicesData.items.map((service) => ({
    ...service,
    icon: iconMap[service.icon as keyof typeof iconMap] || Code2,
  }));

  return (
    <section id='services' className='plex-section bg-surface/30 border-y border-white/5'>
      <div className='plex-container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-2xl mb-14'
        >
          <p className='plex-eyebrow mb-3'>{servicesData.eyebrow}</p>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            {servicesData.title}{' '}
            <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
              {servicesData.highlight}
            </span>
          </h2>
          <p className='mt-4 text-lg text-foreground-muted'>
            {servicesData.subtitle}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className='group relative bg-background/60 border border-white/10 rounded-2xl p-6 hover:border-accent/40 hover:bg-surface/60 transition-all duration-300'
              >
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='relative'>
                  <div className='w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5'>
                    <Icon className='w-5 h-5 text-accent' />
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{service.title}</h3>
                  <p className='text-sm text-foreground-muted mb-5 leading-relaxed'>
                    {service.description}
                  </p>
                  <ul className='space-y-1.5'>
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className='text-xs text-foreground-dim flex items-start gap-2'
                      >
                        <span className='mt-1 w-1 h-1 bg-accent/60 rounded-full shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
