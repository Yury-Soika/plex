'use client';

import { ArrowLeft, ArrowRight, Check, Clock3 } from 'lucide-react';
import Link from 'next/link';
import Footer from './Footer';
import Navbar from './Navbar';
import { useLanguage } from '../i18n/LanguageProvider';
import { insights, type Insight } from '../i18n/insights';
import type { Lang } from '../i18n/types';
import { trackAnalyticsEvent } from '../lib/analytics';

const labels: Record<Lang, {
  name: string;
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  english: string;
  read: string;
  back: string;
  perspective: string;
  ideas: string;
  takeaway: string;
  related: string;
  ctaTitle: string;
  ctaText: string;
  cta: string;
}> = {
  en: {
    name: 'Insights',
    eyebrow: 'Plex perspectives',
    title: 'Practical thinking for',
    highlight: 'useful digital products.',
    intro: 'Field notes on product decisions, connected operations, and responsible automation—written for business leaders and product teams.',
    english: 'Published in English',
    read: 'Read article',
    back: 'Back to Insights',
    perspective: 'Plex perspective',
    ideas: 'Key ideas',
    takeaway: 'Practical takeaway',
    related: 'Continue reading',
    ctaTitle: 'Have a workflow or product decision to untangle?',
    ctaText: 'We can map the problem, test the useful scope, and decide what is worth building.',
    cta: 'Discuss your project',
  },
  et: {
    name: 'Teadmised',
    eyebrow: 'Plexi vaatenurgad',
    title: 'Praktilised mõtted',
    highlight: 'kasulikest digitoodetest.',
    intro: 'Märkmed tooteotsustest, ühendatud tööprotsessidest ja vastutustundlikust automatiseerimisest ettevõtete ja tootemeeskondade jaoks.',
    english: 'Avaldatud inglise keeles',
    read: 'Loe artiklit',
    back: 'Tagasi teadmiste juurde',
    perspective: 'Plexi vaatenurk',
    ideas: 'Põhiideed',
    takeaway: 'Praktiline kokkuvõte',
    related: 'Loe edasi',
    ctaTitle: 'Kas vajate selgust tööprotsessi või tooteotsuse osas?',
    ctaText: 'Kaardistame probleemi, kontrollime kasulikku mahtu ja otsustame, mida tasub ehitada.',
    cta: 'Arutame teie projekti',
  },
  pl: {
    name: 'Wiedza',
    eyebrow: 'Perspektywa Plex',
    title: 'Praktyczne podejście do',
    highlight: 'użytecznych produktów cyfrowych.',
    intro: 'Notatki o decyzjach produktowych, połączonych operacjach i odpowiedzialnej automatyzacji dla liderów biznesu i zespołów produktowych.',
    english: 'Opublikowano po angielsku',
    read: 'Czytaj artykuł',
    back: 'Wróć do Wiedzy',
    perspective: 'Perspektywa Plex',
    ideas: 'Kluczowe idee',
    takeaway: 'Praktyczny wniosek',
    related: 'Czytaj dalej',
    ctaTitle: 'Chcesz uporządkować proces lub decyzję produktową?',
    ctaText: 'Możemy zmapować problem, sprawdzić użyteczny zakres i zdecydować, co warto zbudować.',
    cta: 'Porozmawiajmy o projekcie',
  },
  ru: {
    name: 'Материалы',
    eyebrow: 'Взгляд Plex',
    title: 'Практический подход к',
    highlight: 'полезным цифровым продуктам.',
    intro: 'Заметки о продуктовых решениях, связанных операциях и ответственной автоматизации для руководителей и продуктовых команд.',
    english: 'Опубликовано на английском языке',
    read: 'Читать статью',
    back: 'Назад к материалам',
    perspective: 'Взгляд Plex',
    ideas: 'Ключевые идеи',
    takeaway: 'Практический вывод',
    related: 'Читайте также',
    ctaTitle: 'Нужно разобраться в процессе или продуктовом решении?',
    ctaText: 'Мы можем описать проблему, проверить полезный объём и решить, что действительно стоит создавать.',
    cta: 'Обсудить проект',
  },
};

const Frame = ({ children }: { children: React.ReactNode }) => (
  <main className='min-h-screen'>
    <Navbar />
    {children}
    <Footer />
  </main>
);

export const InsightsIndexContent = () => {
  const { lang } = useLanguage();
  const copy = labels[lang];

  return (
    <Frame>
      <header className='pb-14 pt-32 sm:pb-20 sm:pt-40'>
        <div className='plex-container'>
          <p className='plex-eyebrow mb-4'>{copy.eyebrow}</p>
          <h1 className='max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl'>
            {copy.title}{' '}
            <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
              {copy.highlight}
            </span>
          </h1>
          <p className='mt-6 max-w-3xl text-lg leading-relaxed text-foreground-muted sm:text-xl'>
            {copy.intro}
          </p>
          <p className='mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground-dim'>
            {copy.english}
          </p>
        </div>
      </header>

      <section lang='en' className='border-y border-white/5 bg-surface/30 py-16 sm:py-20'>
        <div className='plex-container grid gap-6 lg:grid-cols-3'>
          {insights.map((insight) => (
            <article key={insight.slug} className='flex flex-col rounded-3xl border border-white/10 bg-background/70 p-7 sm:p-8'>
              <p className='plex-eyebrow'>{insight.category}</p>
              <h2 className='mt-5 text-2xl font-bold leading-tight tracking-tight'>{insight.title}</h2>
              <p className='mt-4 flex-1 text-sm leading-relaxed text-foreground-muted'>{insight.description}</p>
              <ul className='mt-7 space-y-2 border-t border-white/10 pt-6'>
                {insight.keyIdeas.map((idea) => (
                  <li key={idea} className='flex items-center gap-2.5 text-xs text-foreground-muted'>
                    <Check className='h-3.5 w-3.5 shrink-0 text-accent' />
                    {idea}
                  </li>
                ))}
              </ul>
              <Link
                href={`/insights/${insight.slug}`}
                onClick={() => trackAnalyticsEvent('insight_open', { location: 'insights_index', article: insight.slug })}
                className='mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent transition-colors hover:text-accent-hover'
              >
                {copy.read} <ArrowRight className='h-4 w-4' />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Frame>
  );
};

export const InsightArticleContent = ({ insight }: { insight: Insight }) => {
  const { lang } = useLanguage();
  const copy = labels[lang];
  const related = insights.filter((item) => item.slug !== insight.slug);

  return (
    <Frame>
      <article lang='en'>
        <header className='pb-14 pt-32 sm:pb-20 sm:pt-40'>
          <div className='plex-container'>
            <Link href='/insights' className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted transition-colors hover:text-accent'>
              <ArrowLeft className='h-4 w-4' /> {copy.back}
            </Link>
            <div className='mt-12 max-w-4xl'>
              <p className='plex-eyebrow'>{insight.category}</p>
              <h1 className='mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl'>
                {insight.title}
              </h1>
              <p className='mt-6 max-w-3xl text-lg leading-relaxed text-foreground-muted sm:text-xl'>
                {insight.description}
              </p>
              <div className='mt-7 flex flex-wrap gap-3 text-xs text-foreground-dim'>
                <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1'>{copy.perspective}</span>
                <span className='inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1'>
                  <Clock3 className='h-3.5 w-3.5' /> Editorial guide
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className='border-y border-white/5 bg-surface/30'>
          <div className='plex-container grid gap-12 py-16 lg:grid-cols-[0.65fr_1.35fr] lg:py-24'>
            <aside className='lg:sticky lg:top-28 lg:self-start'>
              <p className='plex-eyebrow'>{copy.ideas}</p>
              <ul className='mt-5 space-y-3'>
                {insight.keyIdeas.map((idea) => (
                  <li key={idea} className='flex items-start gap-3 text-sm text-foreground-muted'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-accent' />
                    {idea}
                  </li>
                ))}
              </ul>
            </aside>

            <div className='max-w-3xl'>
              {insight.sections.map((section, index) => (
                <section key={section.heading} className={index > 0 ? 'mt-14 border-t border-white/10 pt-14' : ''}>
                  <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>{section.heading}</h2>
                  <div className='mt-5 space-y-5'>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className='text-base leading-8 text-foreground-muted sm:text-lg'>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className='mt-7 space-y-3 rounded-2xl border border-white/10 bg-background/60 p-6'>
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className='flex items-start gap-3 text-sm leading-relaxed text-foreground-muted'>
                          <Check className='mt-0.5 h-4 w-4 shrink-0 text-accent' />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className='mt-14 rounded-3xl border border-accent/25 bg-accent/10 p-7 sm:p-9'>
                <p className='plex-eyebrow'>{copy.takeaway}</p>
                <p className='mt-4 text-lg font-medium leading-relaxed text-foreground'>{insight.takeaway}</p>
              </section>
            </div>
          </div>
        </div>

        <section className='plex-section'>
          <div className='plex-container'>
            <p className='plex-eyebrow'>{copy.related}</p>
            <div className='mt-7 grid gap-5 md:grid-cols-2'>
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  onClick={() => trackAnalyticsEvent('insight_open', { location: 'related_insights', article: item.slug })}
                  className='group rounded-2xl border border-white/10 bg-surface/40 p-6 transition-colors hover:border-accent/40'
                >
                  <p className='text-xs uppercase tracking-[0.16em] text-foreground-dim'>{item.category}</p>
                  <h2 className='mt-3 text-xl font-semibold leading-snug'>{item.title}</h2>
                  <span className='mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent'>
                    {copy.read} <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </span>
                </Link>
              ))}
            </div>

            <div className='mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-accent/20 bg-gradient-to-br from-purple-500/10 to-blue-500/5 p-8 sm:flex-row sm:items-center sm:p-10'>
              <div>
                <h2 className='text-2xl font-bold'>{copy.ctaTitle}</h2>
                <p className='mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted'>{copy.ctaText}</p>
              </div>
              <Link
                href='/contact'
                onClick={() => trackAnalyticsEvent('cta_click', { location: 'insight_article', destination: 'contact', article: insight.slug })}
                className='inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent-hover'
              >
                {copy.cta} <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Frame>
  );
};
