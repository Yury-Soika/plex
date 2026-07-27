'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { hasAnalyticsConsent } from '../lib/analytics';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const clearGoogleAnalyticsCookies = () => {
  document.cookie
    .split(';')
    .map((item) => item.trim().split('=')[0])
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
    .forEach((name) => {
      document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
    });
};

const Analytics = () => {
  const pathname = usePathname();
  const [consented, setConsented] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (hasAnalyticsConsent()) setConsented(true);

    // CookieBanner dispatches this when the visitor makes a choice, so GA
    // can start (or stay off) immediately without a page reload.
    const onConsentChange = (event: Event) => {
      const choice = (event as CustomEvent<string>).detail;
      if (choice !== 'all') {
        window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
        clearGoogleAnalyticsCookies();
      }
      setConsented(choice === 'all');
    };

    window.addEventListener('plex-consent-change', onConsentChange);
    return () =>
      window.removeEventListener('plex-consent-change', onConsentChange);
  }, []);

  useEffect(() => {
    if (!GA_ID || !consented || !ready || pathname.startsWith('/labs/')) return;

    window.gtag?.('config', GA_ID, {
      anonymize_ip: true,
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [consented, pathname, ready]);

  if (pathname.startsWith('/labs/')) return null;
  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script id='ga-init' strategy='afterInteractive' onReady={() => setReady(true)}>
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){window.dataLayer.push(arguments);}
          window.gtag('js', new Date());
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy='afterInteractive'
      />
    </>
  );
};

export default Analytics;
