'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Calendar, Mail, MessageSquare, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { extended } from '../i18n/extended';
import { trackAnalyticsEvent } from '../lib/analytics';

const inputCls =
  'w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground-dim outline-none focus:border-accent/60 transition-colors';

const Contact = () => {
  const { t, lang } = useLanguage();
  const contactData = t.contact;
  const extra = extended[lang];
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasStarted = useRef(false);

  const trackFormStart = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackAnalyticsEvent('contact_form_start', { location: 'contact_form' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        trackAnalyticsEvent('contact_form_submit', { outcome: 'unconfigured' });
        throw new Error('Contact delivery is not configured');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          ...formData,
          time: new Date().toLocaleString(),
        },
        publicKey
      );
      setStatus('success');
      trackAnalyticsEvent('contact_form_submit', { outcome: 'success' });
      setFormData({ name: '', company: '', email: '', projectType: '', timeline: '', budget: '', message: '' });
    } catch {
      setStatus('error');
      if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        trackAnalyticsEvent('contact_form_submit', { outcome: 'delivery_error' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id='contact' className='plex-section bg-surface/30 border-y border-white/5'>
      <div className='plex-container max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-2xl mb-14'
        >
          <p className='plex-eyebrow mb-3'>{contactData.eyebrow}</p>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            {contactData.title}{' '}
            <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
              {contactData.highlight}
            </span>
          </h2>
          <p className='mt-4 text-lg text-foreground-muted'>
            {contactData.subtitle}
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-10 items-start'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <a
              href='https://cal.com/plexstudio'
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => trackAnalyticsEvent('calendar_click', { location: 'contact_details' })}
              className='block rounded-2xl border border-accent/30 bg-gradient-to-br from-purple-950/40 to-surface/40 p-6 hover:border-accent/50 transition-colors group'
            >
              <div className='flex items-start gap-4'>
                <div className='w-11 h-11 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0'>
                  <Calendar className='w-5 h-5 text-accent' />
                </div>
                <div>
                  <div className='text-sm font-semibold mb-1'>
                    {contactData.bookCall.title}
                  </div>
                  <div className='text-sm text-foreground-muted'>
                    {contactData.bookCall.text}
                  </div>
                  <span className='inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-accent'>
                    {contactData.bookCall.cta}
                  </span>
                </div>
              </div>
            </a>

            <div className='flex items-start gap-4'>
              <div className='w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0'>
                <Mail className='w-5 h-5 text-accent' />
              </div>
              <div>
                <div className='text-sm font-semibold mb-1'>{contactData.emailLabel}</div>
                <a
                  href='mailto:contact@plex.ee'
                  onClick={() => trackAnalyticsEvent('email_click', { location: 'contact_details' })}
                  className='text-foreground-muted hover:text-accent transition-colors text-sm'
                >
                  contact@plex.ee
                </a>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0'>
                <MessageSquare className='w-5 h-5 text-accent' />
              </div>
              <div>
                <div className='text-sm font-semibold mb-1'>{contactData.responseLabel}</div>
                <div className='text-sm text-foreground-muted'>
                  {contactData.responseValue}
                </div>
              </div>
            </div>

            <div className='rounded-2xl border border-white/10 bg-background/60 p-6'>
              <p className='text-xs uppercase tracking-[0.18em] text-foreground-dim mb-4'>
                {contactData.expectations.title}
              </p>
              <ul className='space-y-2.5 text-sm text-foreground-muted'>
                {contactData.expectations.items.map((item, index) => (
                  <li key={index} className='flex items-start gap-2.5'>
                    <span className='mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            onFocus={trackFormStart}
            className='rounded-2xl border border-white/10 bg-background/40 p-7 space-y-4'
          >
            <div>
              <label htmlFor='name' className='block text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted mb-2'>
                {contactData.form.name}
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className={inputCls}
                placeholder={contactData.form.placeholders.name}
              />
            </div>

            <div>
              <label htmlFor='company' className='block text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted mb-2'>
                {extra.pages.contact.company} <span className='normal-case tracking-normal text-foreground-dim'>({extra.pages.contact.optional})</span>
              </label>
              <input
                type='text'
                id='company'
                name='company'
                value={formData.company}
                onChange={handleChange}
                autoComplete='organization'
                className={inputCls}
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted mb-2'>
                {contactData.form.email}
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete='email'
                className={inputCls}
                placeholder={contactData.form.placeholders.email}
              />
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div>
                <label htmlFor='projectType' className='block text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted mb-2'>
                  {extra.pages.contact.projectType}
                </label>
                <select
                  id='projectType'
                  name='projectType'
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={inputCls}
                >
                  <option value='' disabled>—</option>
                  {t.services.items.map((service) => (
                    <option key={service.title} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor='timeline' className='block text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted mb-2'>
                  {extra.pages.contact.timeline} <span className='normal-case tracking-normal text-foreground-dim'>({extra.pages.contact.optional})</span>
                </label>
                <input
                  type='text'
                  id='timeline'
                  name='timeline'
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder='Q4 2026'
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label htmlFor='budget' className='block text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted mb-2'>
                {extra.pages.contact.budget} <span className='normal-case tracking-normal text-foreground-dim'>({extra.pages.contact.optional})</span>
              </label>
              <select
                id='budget'
                name='budget'
                value={formData.budget}
                onChange={handleChange}
                className={inputCls}
              >
                <option value=''>—</option>
                <option value='Under €5,000'>&lt; €5,000</option>
                <option value='€5,000–€15,000'>€5,000–€15,000</option>
                <option value='€15,000–€40,000'>€15,000–€40,000</option>
                <option value='€40,000+'>€40,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor='message' className='block text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted mb-2'>
                {contactData.form.message}
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputCls} resize-none`}
                placeholder={contactData.form.placeholders.message}
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent hover:bg-accent-hover disabled:cursor-wait disabled:opacity-60 text-white py-3 text-xs font-semibold uppercase tracking-[0.18em] shadow-lg shadow-purple-500/30 transition-all'
            >
              {contactData.form.submit}
              <Send className='w-4 h-4' />
            </button>

            <div aria-live='polite' aria-atomic='true'>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-center text-sm text-emerald-300'
              >
                {contactData.success}
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='rounded-xl border border-rose-400/30 bg-rose-500/10 p-3 text-center text-sm text-rose-300'
              >
                {contactData.error}
              </motion.div>
            )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
