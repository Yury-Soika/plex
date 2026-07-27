const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = 'plex_cookie_consent';

export type AnalyticsEvent =
  | 'cta_click'
  | 'work_open'
  | 'insight_open'
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'calendar_click'
  | 'email_click';

type EventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;

  try {
    const cookie = document.cookie
      .split(';')
      .map((item) => item.trim())
      .find((item) => item.startsWith(`${CONSENT_KEY}=`));

    if (cookie?.split('=')[1] === 'all') return true;

    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) return false;
    return (JSON.parse(stored) as { choice?: string }).choice === 'all';
  } catch {
    return false;
  }
};

export const trackAnalyticsEvent = (
  event: AnalyticsEvent,
  parameters: EventParameters = {},
): boolean => {
  if (
    typeof window === 'undefined' ||
    !GA_ID ||
    !hasAnalyticsConsent() ||
    window.location.pathname.startsWith('/labs/') ||
    typeof window.gtag !== 'function'
  ) {
    return false;
  }

  window.gtag('event', event, parameters);
  return true;
};
