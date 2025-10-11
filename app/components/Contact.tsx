'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { getContact } from '../utils/content';

export default function Contact() {
  const contactData = getContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id='contact' className='py-32 bg-surface/50'>
      <div className='w-full max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            {contactData.title}{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              {contactData.highlight}
            </span>
          </h2>
          <p className='text-xl text-foreground-muted max-w-2xl mx-auto'>
            {contactData.subtitle}
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-bold mb-6'>
              {contactData.title} {contactData.highlight}
            </h3>

            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Mail className='w-6 h-6 text-accent' />
                </div>
                <div>
                  <div className='font-semibold mb-1'>Email</div>
                  <a
                    href='mailto:contact@plex.ee'
                    className='text-foreground-muted hover:text-accent transition-colors'
                  >
                    contact@plex.ee
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <MessageSquare className='w-6 h-6 text-accent' />
                </div>
                <div>
                  <div className='font-semibold mb-1'>Response Time</div>
                  <div className='text-foreground-muted'>
                    We typically respond within 24 hours
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-8 p-8 bg-background border border-white/5 rounded-2xl'>
              <h4 className='font-bold mb-4'>
                {contactData.expectations.title}
              </h4>
              <ul className='space-y-3 text-foreground-muted text-sm'>
                {contactData.expectations.items.map((item, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 bg-accent rounded-full' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold mb-2'
                >
                  {contactData.form.name}
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-white'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold mb-2'
                >
                  {contactData.form.email}
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-white'
                  placeholder='john@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold mb-2'
                >
                  {contactData.form.message}
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none text-white'
                  placeholder='Tell us about your project...'
                />
              </div>

              <button
                type='submit'
                className='w-full px-12 py-2 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2'
              >
                {contactData.form.submit}
                <Send className='w-5 h-5' />
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-center text-green-400'
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
