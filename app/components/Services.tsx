'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Calendar, Sparkles } from 'lucide-react';
import { getServices } from '../utils/content';

export default function Services() {
  const servicesData = getServices();

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
    <section id='services' className='py-32 bg-surface/50'>
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
            {servicesData.title}{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              {servicesData.highlight}
            </span>
          </h2>
          <p className='text-xl text-foreground-muted max-w-2xl mx-auto'>
            {servicesData.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className='bg-background border border-white/5 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='mb-4'>
                  <div className='w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center'>
                    <Icon className='w-6 h-6 text-accent' />
                  </div>
                </div>

                <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
                <p className='text-foreground-muted mb-4 text-sm leading-relaxed'>
                  {service.description}
                </p>

                <ul className='space-y-2'>
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='text-sm text-foreground-muted flex items-center'
                    >
                      <span className='w-1.5 h-1.5 bg-accent rounded-full mr-2' />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
