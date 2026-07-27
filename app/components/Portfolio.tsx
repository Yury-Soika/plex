'use client';

import { motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Globe, Download, Apple, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageProvider';
import { trackAnalyticsEvent } from '../lib/analytics';

const Portfolio = () => {
  const { t } = useLanguage();
  const portfolioData = t.portfolio;
  const featuredProjectIds = ['aster', 'relay', 'velvet', 'nightfall', 'venue'];
  const projects = featuredProjectIds
    .map((id) => portfolioData.projects.find((project) => project.id === id))
    .filter((project): project is (typeof portfolioData.projects)[number] => Boolean(project));
  const [lightboxProject, setLightboxProject] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxImages = useMemo(() => {
    if (!lightboxProject) return [];

    const project = projects.find((item) => item.title === lightboxProject);
    if (!project) return [];

    const images = project.image
      ? [{ src: project.image, alt: `${project.title} main preview` }]
      : [];

    return [...images, ...(project.galleryImages ?? [])];
  }, [lightboxProject, projects]);

  const closeLightbox = useCallback(() => {
    setLightboxProject(null);
    setLightboxIndex(0);
  }, []);

  const showPreviousImage = useCallback(() => {
    setLightboxIndex((current) => (
      current === 0 ? lightboxImages.length - 1 : current - 1
    ));
  }, [lightboxImages.length]);

  const showNextImage = useCallback(() => {
    setLightboxIndex((current) => (
      current === lightboxImages.length - 1 ? 0 : current + 1
    ));
  }, [lightboxImages.length]);

  const openGallery = (projectTitle: string, imageIndex: number) => {
    const project = projects.find((item) => item.title === projectTitle);
    if (project) {
      trackAnalyticsEvent('work_open', {
        location: 'homepage_gallery',
        project: project.id,
      });
    }
    setLightboxProject(projectTitle);
    setLightboxIndex(imageIndex);
  };

  useEffect(() => {
    if (!lightboxProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPreviousImage();
      if (event.key === 'ArrowRight') showNextImage();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeLightbox, lightboxProject, showNextImage, showPreviousImage]);

  return (
    <section id='portfolio' className='plex-section'>
      <div className='plex-container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-2xl mb-16'
        >
          <p className='plex-eyebrow mb-3'>{portfolioData.eyebrow}</p>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            {portfolioData.title}{' '}
            <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
              {portfolioData.highlight}
            </span>
          </h2>
          <p className='mt-4 text-lg text-foreground-muted'>
            {portfolioData.subtitle}
          </p>
        </motion.div>

        <div className='space-y-20 lg:space-y-28'>
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;
            const hasGallery = Boolean(project.galleryImages?.length);
            const previewClassName = 'group relative block aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-surface shadow-2xl shadow-purple-900/20 hover:shadow-purple-600/30 transition-all duration-500 hover:-translate-y-1';
            const previewImage = project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes='(min-width: 1024px) 55vw, 100vw'
                className={`${project.apkUrl ? 'object-contain object-center p-3 sm:p-4' : 'object-cover object-top'} transition-transform duration-700 group-hover:scale-105`}
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className='text-9xl font-bold text-white/10'>{project.letter}</span>
              </div>
            );

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: '-80px' }}
                className={`grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  {hasGallery ? (
                    <button
                      type='button'
                      onClick={() => openGallery(project.title, 0)}
                      className={`${previewClassName} cursor-zoom-in`}
                      aria-label={`Open ${project.title} screenshot gallery`}
                    >
                      {previewImage}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                      <div className='absolute top-4 right-4 inline-flex items-center justify-center rounded-full bg-black/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300'>
                        {portfolioData.actions.viewGallery}
                      </div>
                    </button>
                  ) : (
                    project.url ? (
                      <a
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={() => trackAnalyticsEvent('work_open', { location: 'homepage_preview', project: project.id })}
                        className={previewClassName}
                      >
                        {previewImage}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                        <div className='absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300'>
                          <ArrowUpRight className='w-5 h-5' />
                        </div>
                      </a>
                    ) : (
                      <Link href={project.pageUrl ?? '/work'} className={previewClassName}>
                        {previewImage}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                      </Link>
                    )
                  )}

                  {project.galleryImages && (
                    <div className='mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3'>
                      {project.galleryImages.map((image, imageIndex) => (
                        <button
                          type='button'
                          key={image.src}
                          onClick={() => openGallery(project.title, imageIndex + 1)}
                          className='group/thumb relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-surface/70 transition-all hover:-translate-y-0.5 hover:border-accent/60 cursor-zoom-in'
                          aria-label={`Open ${image.alt}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes='(min-width: 640px) 25vw, 50vw'
                            className='object-contain object-center p-1.5 transition-transform duration-500 group-hover/thumb:scale-105'
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <p className='plex-eyebrow mb-3'>{project.category}</p>
                  <h3 className='text-3xl sm:text-4xl font-bold tracking-tight'>
                    {project.title}
                  </h3>
                  {project.tag && (
                    <span className='inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-full border border-accent/30 bg-accent/10 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent'>
                      {project.tag}
                    </span>
                  )}
                  <p className='mt-4 text-base text-foreground-muted leading-relaxed'>
                    {project.description}
                  </p>
                  {project.url && (
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      onClick={() => trackAnalyticsEvent('work_open', { location: 'homepage_demo_link', project: project.id })}
                      className='mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent hover:text-accent-hover transition-colors group'
                    >
                      <Globe className='w-4 h-4' />
                      {portfolioData.actions.visitSite}
                      <ArrowUpRight className='w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </a>
                  )}
                  {project.apkUrl && (
                    <div className='mt-6 flex flex-wrap items-center gap-3'>
                      <a
                        href={project.apkUrl}
                        className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold uppercase tracking-[0.18em] transition-colors shadow-lg shadow-purple-500/25'
                      >
                        <Download className='w-3.5 h-3.5' />
                        {portfolioData.actions.downloadApk}
                      </a>
                      <span className='inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-foreground-muted'>
                        <Apple className='w-3.5 h-3.5' />
                        {portfolioData.actions.iosComingSoon}
                      </span>
                    </div>
                  )}
                  {project.pageUrl && (
                    <Link
                      href={project.pageUrl}
                      onClick={() => trackAnalyticsEvent('work_open', { location: 'homepage_case_link', project: project.id })}
                      className={`${project.url || project.apkUrl ? 'mt-5' : 'mt-6'} inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent hover:text-accent-hover transition-colors group`}
                    >
                      {portfolioData.actions.viewDetails}
                      <ArrowUpRight className='w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {lightboxImages.length > 0 && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-md cursor-pointer'
            role='dialog'
            aria-modal='true'
            aria-label='Venue Mobile screenshot gallery'
            onClick={closeLightbox}
          >
            <button
              type='button'
              onClick={closeLightbox}
              className='absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20'
              aria-label='Close gallery'
            >
              <X className='h-5 w-5' />
            </button>

            <button
              type='button'
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              className='absolute left-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20'
              aria-label='Previous screenshot'
            >
              <ChevronLeft className='h-6 w-6' />
            </button>

            <button
              type='button'
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              className='absolute right-4 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20'
              aria-label='Next screenshot'
            >
              <ChevronRight className='h-6 w-6' />
            </button>

            <div
              className='relative h-full max-h-[86vh] w-full max-w-6xl cursor-default'
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={lightboxImages[lightboxIndex].src}
                alt={lightboxImages[lightboxIndex].alt}
                fill
                sizes='100vw'
                priority
                className='object-contain'
              />
            </div>

            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-medium text-white/80'>
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          </div>
        )}

        {portfolioData.note && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mt-16 text-center text-sm text-foreground-dim italic'
          >
            {portfolioData.note}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
