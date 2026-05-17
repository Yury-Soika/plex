'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { getPortfolio } from '../utils/content';

const Portfolio = () => {
  const portfolioData = getPortfolio();
  const projects = portfolioData.projects;
  return (
    <section id='portfolio' className='py-32'>
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
            {portfolioData.title}{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              {portfolioData.highlight}
            </span>
          </h2>
          <p className='text-xl text-foreground-muted max-w-2xl mx-auto'>
            {portfolioData.subtitle}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Preview */}
              <div
                className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover object-top'
                  />
                ) : (
                  <div className='text-6xl font-bold text-white/10'>
                    {project.letter}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='flex gap-4'>
                    {project.url ? (
                      <a
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='px-8 py-1 bg-accent hover:bg-accent-hover text-white rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2'
                      >
                        {portfolioData.viewProject}
                        <ExternalLink className='w-4 h-4' />
                      </a>
                    ) : (
                      <span className='px-8 py-1 bg-white/10 text-white/50 rounded-lg font-semibold flex items-center gap-2 cursor-not-allowed'>
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className='p-6'>
                <div className='text-sm text-accent font-semibold mb-2'>
                  {project.category}
                </div>
                <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                <p className='text-foreground-muted leading-relaxed'>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about concept projects */}
        <motion.div
          className='text-center mt-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className='text-sm text-foreground-muted italic'>
            {portfolioData.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
