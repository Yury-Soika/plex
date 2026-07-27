'use client';

import { AlertTriangle, ArrowLeft, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Plex page error]', error);
  }, [error]);

  return (
    <main className='flex min-h-screen items-center bg-background py-20'>
      <div className='plex-container'>
        <div className='max-w-3xl rounded-3xl border border-white/10 bg-surface/40 p-8 sm:p-12'>
          <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-rose-400/25 bg-rose-400/10 text-rose-300'>
            <AlertTriangle className='h-5 w-5' />
          </div>
          <p className='plex-eyebrow mt-8'>Something interrupted this page</p>
          <h1 className='mt-4 text-4xl font-bold tracking-tight sm:text-5xl'>
            The page could not be displayed.
          </h1>
          <p className='mt-5 max-w-2xl leading-relaxed text-foreground-muted'>
            No form submission is assumed to have succeeded. You can retry safely,
            return to the studio overview, or email us if the problem continues.
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <button
              type='button'
              onClick={reset}
              className='inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent-hover'
            >
              <RotateCcw className='h-4 w-4' /> Try again
            </button>
            <Link
              href='/'
              className='inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent'
            >
              <ArrowLeft className='h-4 w-4' /> Back to Plex
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
