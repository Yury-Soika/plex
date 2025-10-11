'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Award, TrendingUp, Clock } from 'lucide-react';
import { getAbout } from '../utils/content';

export default function About() {
  const aboutData = getAbout();

  const iconMap = {
    users: Users,
    clock: Clock,
    award: Award,
    'trending-up': TrendingUp,
  };

  const stats = aboutData.stats.map((stat) => ({
    ...stat,
    icon: iconMap[stat.icon as keyof typeof iconMap] || Globe,
  }));
  return (
    <section id='about' className='py-32'>
      <div className='w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              {aboutData.title}{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                {aboutData.highlight}
              </span>
            </h2>

            <div className='space-y-4 text-lg text-foreground-muted leading-relaxed'>
              <p>{aboutData.content.mission}</p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className='grid grid-cols-2 gap-6'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className='bg-surface border border-white/5 rounded-2xl p-8 text-center hover:border-accent/50 transition-all duration-300'
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className='w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4'>
                    <Icon className='w-6 h-6 text-accent' />
                  </div>
                  <div className='text-2xl font-bold mb-2'>{stat.value}</div>
                  <div className='text-sm text-foreground-muted'>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className='mt-20 grid md:grid-cols-3 gap-8'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {aboutData.content.values.map((value, index) => (
            <div key={index} className='text-center'>
              <h3 className='text-xl font-bold mb-3 text-accent'>
                {value.title}
              </h3>
              <p className='text-foreground-muted'>{value.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
