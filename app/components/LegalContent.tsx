'use client';

import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageProvider';
import { EMAIL } from '../i18n/site';

const LegalContent = ({ doc }: { doc: 'terms' | 'privacy' }) => {
  const { t } = useLanguage();
  const data = t[doc];

  return (
    <div className='w-full max-w-3xl mx-auto px-8 sm:px-12 lg:px-16'>
      <Link
        href='/'
        className='inline-block text-foreground-muted hover:text-accent text-sm mb-8 transition-colors'
      >
        {t.legal.backHome}
      </Link>

      <h1 className='text-4xl sm:text-5xl font-bold mb-4'>
        {data.title}{' '}
        <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
          {data.highlight}
        </span>
      </h1>
      <p className='text-foreground-muted mb-12'>
        {t.legal.lastUpdated} {data.updated}
      </p>

      <div className='prose prose-invert max-w-none space-y-10 text-foreground-muted'>
        {data.sections.map((section) => (
          <section key={section.heading}>
            <h2 className='text-xl font-semibold text-foreground mb-3'>
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, idx) => (
              <p key={idx} className='leading-relaxed mb-3 last:mb-0'>
                {paragraph}
                {section.contact && idx === section.paragraphs.length - 1 && (
                  <>
                    {' '}
                    <a
                      href={`mailto:${EMAIL}`}
                      className='text-accent hover:underline'
                    >
                      {EMAIL}
                    </a>
                    .
                  </>
                )}
              </p>
            ))}
            {section.list && (
              <ul className='list-disc pl-6 space-y-1'>
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {section.paragraphsAfter?.map((paragraph, idx) => (
              <p key={idx} className='leading-relaxed mt-3'>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default LegalContent;
