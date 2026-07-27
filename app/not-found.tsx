import { ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function NotFound() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <section className='flex min-h-[72vh] items-center pb-20 pt-32'>
        <div className='plex-container'>
          <p className='plex-eyebrow'>404 · Page not found</p>
          <h1 className='mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl'>
            This page is not part of the{' '}
            <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
              current Plex site.
            </span>
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted'>
            The address may be outdated or incomplete. Return to the studio overview,
            explore selected work, or contact us if you were looking for something specific.
          </p>
          <div className='mt-9 flex flex-wrap gap-3'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent-hover'
            >
              <ArrowLeft className='h-4 w-4' /> Back to Plex
            </Link>
            <Link
              href='/work'
              className='inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent'
            >
              View selected work
            </Link>
            <a
              href='mailto:contact@plex.ee'
              className='inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent'
            >
              <Mail className='h-4 w-4' /> Email Plex
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
