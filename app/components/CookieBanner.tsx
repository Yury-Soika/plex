'use client';

import { useEffect, useState } from 'react';

const CONSENT_COOKIE_NAME = 'plex_cookie_consent';
const CONSENT_STORAGE_KEY = 'plex_cookie_consent';

type ConsentChoice = 'essential' | 'all';

const readConsentChoice = (): ConsentChoice | null => {
  if (typeof window === 'undefined') return null;

  try {
    if (document.cookie.includes(`${CONSENT_COOKIE_NAME}=`)) {
      const match = document.cookie
        .split(';')
        .map((c) => c.trim())
        .find((c) => c.startsWith(`${CONSENT_COOKIE_NAME}=`));

      if (match) {
        const value = match.split('=')[1] as ConsentChoice;
        if (value === 'essential' || value === 'all') {
          return value;
        }
      }
    }

    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as { choice?: ConsentChoice };
      if (parsed.choice === 'essential' || parsed.choice === 'all') {
        return parsed.choice;
      }
    }
  } catch (error) {
    console.error('[CookieBanner] Failed to read consent choice:', error);
  }

  return null;
};

const persistConsentChoice = (choice: ConsentChoice) => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        choice,
        timestamp: new Date().toISOString(),
      })
    );
  } catch (error) {
    console.error('[CookieBanner] Failed to persist consent choice:', error);
  }

  const oneYearInSeconds = 60 * 60 * 24 * 365;
  document.cookie = `${CONSENT_COOKIE_NAME}=${choice}; path=/; max-age=${oneYearInSeconds}`;
};

const CookieBanner = () => {
  // Track whether we've checked stored consent on the client
  const [hasCheckedConsent, setHasCheckedConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const existingChoice = readConsentChoice();
    if (!existingChoice) {
      setIsVisible(true);
    }
    setHasCheckedConsent(true);
  }, []);

  // Avoid initial flash: render nothing until we've checked on the client
  if (!hasCheckedConsent) return null;
  if (!isVisible) return null;

  const handleChoice = (choice: ConsentChoice) => {
    persistConsentChoice(choice);
    setIsVisible(false);
  };

  return (
    <div className='fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-surface/95 backdrop-blur-lg'>
      <div className='mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 text-sm text-foreground-muted sm:flex-row sm:items-center sm:justify-between sm:px-6'>
        <div className='space-y-1'>
          <p className='font-semibold text-foreground'>Cookies & similar technologies</p>
          <p>
            We use essential cookies to make Plex work as intended and, with your consent,
            additional cookies to understand how our site is used and to improve our services.
          </p>
          <p className='text-xs'>
            You can learn more in our{' '}
            <a
              href='/privacy'
              className='text-accent underline underline-offset-2 hover:text-accent-hover'
            >
              Privacy & Cookies Policy
            </a>
            .
          </p>
        </div>

        <div className='flex flex-shrink-0 flex-row gap-2 sm:flex-col sm:items-end'>
          <button
            type='button'
            onClick={() => handleChoice('all')}
            className='rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover'
          >
            Allow all cookies
          </button>
          <button
            type='button'
            onClick={() => handleChoice('essential')}
            className='px-3 py-2 text-xs font-medium text-foreground-muted underline-offset-2 hover:text-foreground hover:underline'
          >
            Only essential
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

