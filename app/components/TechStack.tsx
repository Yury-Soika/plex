'use client';

import { motion } from 'framer-motion';
import { getTechStack } from '../utils/content';

export default function TechStack() {
  const techData = getTechStack();
  const technologies = techData.technologies;
  return (
    <section id='tech' className='py-32 bg-surface/50'>
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
            {techData.title}{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              {techData.highlight}
            </span>
          </h2>
          <p className='text-xl text-foreground-muted max-w-3xl mx-auto'>
            {techData.subtitle}
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className='bg-background border border-white/5 rounded-xl p-6 text-center hover:border-accent/50 hover:bg-surface/50 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className='text-3xl font-bold text-accent mb-2'>
                {tech.name.substring(0, 2)}
              </div>
              <div className='font-semibold mb-1'>{tech.name}</div>
              <div className='text-xs text-foreground-muted'>
                {tech.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why This Matters */}
        <motion.div
          className='grid md:grid-cols-3 gap-8'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {techData.benefits.map((benefit, index) => (
            <div key={index} className='text-center'>
              <div className='text-4xl font-bold text-accent mb-2'>
                {benefit.icon}
              </div>
              <h3 className='text-xl font-bold mb-2'>{benefit.title}</h3>
              <p className='text-foreground-muted text-sm'>
                {benefit.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
