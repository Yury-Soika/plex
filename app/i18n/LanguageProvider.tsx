'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { content, type ResolvedContent } from './content';
import { HTML_LANG, LANGS, type Lang } from './types';

const STORAGE_KEY = 'plex_lang';
const DEFAULT_LANG: Lang = 'en';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: ResolvedContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const isLang = (value: unknown): value is Lang =>
  typeof value === 'string' && (LANGS as string[]).includes(value);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Restore the saved choice on mount (server always renders the default).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(stored) && stored !== lang) setLangState(stored);
    } catch {
      // ignore storage errors
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep <html lang> and the persisted choice in sync with the active language.
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage errors
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
