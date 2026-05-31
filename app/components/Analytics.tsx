'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_COOKIE_NAME = 'plex_cookie_consent';

// Mirrors the consent logic in CookieBanner: analytics only loads when the
// visitor has chosen "Allow all".
const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;

  try {
    const match = document.cookie
      .split(';')
      .map((c) => c.trim())
      .find((c) => c.startsWith(`${CONSENT_COOKIE_NAME}=`));
    if (match && match.split('=')[1] === 'all') return true;

    const stored = window.localStorage.getItem(CONSENT_COOKIE_NAME);
    if (stored) {
      const parsed = JSON.parse(stored) as { choice?: string };
      return parsed.choice === 'all';
    }
  } catch {
    return false;
  }

  return false;
};

const Analytics = () => {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (hasAnalyticsConsent()) setConsented(true);

    // CookieBanner dispatches this when the visitor makes a choice, so GA
    // can start (or stay off) immediately without a page reload.
    const onConsentChange = (event: Event) => {
      const choice = (event as CustomEvent<string>).detail;
      setConsented(choice === 'all');
    };

    window.addEventListener('plex-consent-change', onConsentChange);
    return () =>
      window.removeEventListener('plex-consent-change', onConsentChange);
  }, []);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy='afterInteractive'
      />
      <Script id='ga-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
};

export default Analytics;
