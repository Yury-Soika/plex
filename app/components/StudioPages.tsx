'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Linkedin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import { useLanguage } from '../i18n/LanguageProvider';
import { extended } from '../i18n/extended';
import { SOCIAL } from '../i18n/site';
import { trackAnalyticsEvent } from '../lib/analytics';
import type { Lang } from '../i18n/types';

const accent = 'plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent';

type WorkFilter = 'all' | 'websites' | 'commerce' | 'software' | 'mobile-ai';

const workFilterLabels: Record<Lang, Record<WorkFilter, string>> = {
  en: { all: 'All work', websites: 'Websites', commerce: 'Commerce & booking', software: 'Software & SaaS', 'mobile-ai': 'Mobile & AI' },
  et: { all: 'Kõik tööd', websites: 'Veebisaidid', commerce: 'E-kaubandus ja broneerimine', software: 'Tarkvara ja SaaS', 'mobile-ai': 'Mobiil ja AI' },
  pl: { all: 'Wszystkie', websites: 'Strony', commerce: 'Commerce i rezerwacje', software: 'Software i SaaS', 'mobile-ai': 'Mobile i AI' },
  ru: { all: 'Все работы', websites: 'Сайты', commerce: 'Commerce и бронирование', software: 'ПО и SaaS', 'mobile-ai': 'Mobile и AI' },
};

const projectFilters: Record<string, WorkFilter[]> = {
  aster: ['commerce'],
  relay: ['software', 'mobile-ai'],
  velvet: ['websites'],
  nightfall: ['commerce'],
  venue: ['software'],
  'venue-mobile': ['mobile-ai'],
};

const venueConnectionCopy: Record<Lang, { eyebrow: string; title: string; text: string; cta: string }> = {
  en: { eyebrow: 'Connected product ecosystem', title: 'One platform across web and mobile', text: 'Venue demonstrates the operational web platform; Venue Mobile shows how the same bookings, customer context, alerts, and role-aware work can follow staff away from a desk.', cta: 'Explore the connected product' },
  et: { eyebrow: 'Ühendatud tooteökosüsteem', title: 'Üks platvorm veebis ja mobiilis', text: 'Venue näitab operatiivset veebiplatvormi; Venue Mobile toob samad broneeringud, kliendikonteksti, teavitused ja rollipõhise töö töötajani töölauast eemal.', cta: 'Vaata ühendatud toodet' },
  pl: { eyebrow: 'Połączony ekosystem produktu', title: 'Jedna platforma w webie i mobile', text: 'Venue pokazuje operacyjną platformę webową, a Venue Mobile przenosi te same rezerwacje, kontekst klienta, alerty i zadania poza biurko.', cta: 'Zobacz połączony produkt' },
  ru: { eyebrow: 'Связанная экосистема продукта', title: 'Одна платформа в вебе и mobile', text: 'Venue показывает операционную веб-платформу, а Venue Mobile переносит те же бронирования, контекст клиентов, уведомления и ролевые задачи за пределы рабочего стола.', cta: 'Смотреть связанный продукт' },
};

const relatedWorkLabel: Record<Lang, string> = {
  en: 'Relevant work',
  et: 'Seotud tööd',
  pl: 'Powiązane realizacje',
  ru: 'Связанные работы',
};

const serviceProjectIds = [
  ['velvet'],
  ['aster', 'nightfall'],
  ['relay', 'venue'],
  ['venue-mobile', 'relay'],
];

const caseFactCopy: Record<Lang, {
  industry: string;
  product: string;
  surface: string;
  status: string;
  verified: string;
  notClaimed: string;
  notClaimedText: string;
  coverageEyebrow: string;
  coverageTitle: string;
}> = {
  en: { industry: 'Industry', product: 'Product type', surface: 'Primary surface', status: 'Evidence status', verified: 'What you can verify', notClaimed: 'What is not claimed', notClaimedText: 'No client relationship, production deployment, commercial result, user metric, or identical future outcome is claimed without approved source evidence.', coverageEyebrow: 'Capability coverage', coverageTitle: 'Evidence across the full Plex offer' },
  et: { industry: 'Valdkond', product: 'Toote tüüp', surface: 'Peamine pind', status: 'Tõenduse staatus', verified: 'Mida saab kontrollida', notClaimed: 'Mida ei väideta', notClaimedText: 'Ilma kinnitatud allikata ei väideta kliendisuhet, tootmiskasutust, äritulemust, kasutajamõõdikut ega samasugust tulevast tulemust.', coverageEyebrow: 'Võimekuste katvus', coverageTitle: 'Tõendid kogu Plexi pakkumise ulatuses' },
  pl: { industry: 'Branża', product: 'Typ produktu', surface: 'Główna powierzchnia', status: 'Status dowodu', verified: 'Co można zweryfikować', notClaimed: 'Czego nie deklarujemy', notClaimedText: 'Bez zatwierdzonego źródła nie deklarujemy relacji z klientem, wdrożenia produkcyjnego, wyniku biznesowego, metryki użytkowników ani identycznego przyszłego rezultatu.', coverageEyebrow: 'Pokrycie kompetencji', coverageTitle: 'Dowody dla pełnej oferty Plex' },
  ru: { industry: 'Отрасль', product: 'Тип продукта', surface: 'Основной интерфейс', status: 'Статус доказательства', verified: 'Что можно проверить', notClaimed: 'Что мы не заявляем', notClaimedText: 'Без подтверждённого источника мы не заявляем отношения с клиентом, production-внедрение, коммерческий результат, пользовательские метрики или идентичный будущий результат.', coverageEyebrow: 'Покрытие компетенций', coverageTitle: 'Доказательства по всей линейке Plex' },
};

const projectFacts: Record<Lang, Record<string, { industry: string; surface: string; proof: string }>> = {
  en: {
    aster: { industry: 'Retail & commerce', surface: 'Customer web product', proof: 'Working browser lab' },
    relay: { industry: 'Cross-industry operations', surface: 'Internal web application', proof: 'Working browser lab' },
    velvet: { industry: 'Hospitality', surface: 'Marketing website', proof: 'Rendered multi-page preview' },
    nightfall: { industry: 'Hospitality', surface: 'Customer web + admin', proof: 'Working reservation concept' },
    venue: { industry: 'Hospitality SaaS', surface: 'Operational web platform', proof: 'Rendered product preview' },
    'venue-mobile': { industry: 'Hospitality SaaS', surface: 'Mobile staff product', proof: 'React Native concept + screens' },
  },
  et: {
    aster: { industry: 'Jaekaubandus ja e-kaubandus', surface: 'Kliendi veebitoode', proof: 'Toimiv brauserilabor' },
    relay: { industry: 'Valdkondadeülene tegevus', surface: 'Sisemine veebirakendus', proof: 'Toimiv brauserilabor' },
    velvet: { industry: 'Külalislahkus', surface: 'Turundusveeb', proof: 'Renderdatud mitmeleheline eelvaade' },
    nightfall: { industry: 'Külalislahkus', surface: 'Kliendiveeb ja haldus', proof: 'Toimiv broneerimiskontseptsioon' },
    venue: { industry: 'Külalislahkuse SaaS', surface: 'Operatiivne veebiplatvorm', proof: 'Renderdatud toote eelvaade' },
    'venue-mobile': { industry: 'Külalislahkuse SaaS', surface: 'Töötajate mobiilitoode', proof: 'React Native kontseptsioon ja ekraanid' },
  },
  pl: {
    aster: { industry: 'Retail i e-commerce', surface: 'Produkt webowy klienta', proof: 'Działające laboratorium webowe' },
    relay: { industry: 'Operacje międzybranżowe', surface: 'Wewnętrzna aplikacja webowa', proof: 'Działające laboratorium webowe' },
    velvet: { industry: 'Hospitality', surface: 'Strona marketingowa', proof: 'Renderowany podgląd wielostronicowy' },
    nightfall: { industry: 'Hospitality', surface: 'Web klienta i panel', proof: 'Działająca koncepcja rezerwacji' },
    venue: { industry: 'Hospitality SaaS', surface: 'Operacyjna platforma webowa', proof: 'Renderowany podgląd produktu' },
    'venue-mobile': { industry: 'Hospitality SaaS', surface: 'Mobilny produkt dla zespołu', proof: 'Koncepcja React Native i ekrany' },
  },
  ru: {
    aster: { industry: 'Retail и e-commerce', surface: 'Клиентский веб-продукт', proof: 'Рабочая браузерная лаборатория' },
    relay: { industry: 'Межотраслевые операции', surface: 'Внутреннее веб-приложение', proof: 'Рабочая браузерная лаборатория' },
    velvet: { industry: 'Гостеприимство', surface: 'Маркетинговый сайт', proof: 'Многостраничное превью' },
    nightfall: { industry: 'Гостеприимство', surface: 'Клиентский веб и панель', proof: 'Рабочий концепт бронирования' },
    venue: { industry: 'Hospitality SaaS', surface: 'Операционная веб-платформа', proof: 'Отрисованное превью продукта' },
    'venue-mobile': { industry: 'Hospitality SaaS', surface: 'Мобильный продукт команды', proof: 'React Native-концепт и экраны' },
  },
};

const PageHero = ({
  eyebrow,
  title,
  highlight,
  intro,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
}) => (
  <header className='pb-16 pt-32 sm:pb-20 sm:pt-40'>
    <div className='plex-container'>
      <p className='plex-eyebrow mb-4'>{eyebrow}</p>
      <h1 className='max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl'>
        {title} <span className={accent}>{highlight}</span>
      </h1>
      <p className='mt-6 max-w-3xl text-lg leading-relaxed text-foreground-muted sm:text-xl'>
        {intro}
      </p>
    </div>
  </header>
);

const PageFrame = ({ children }: { children: React.ReactNode }) => (
  <main className='min-h-screen'>
    <Navbar />
    {children}
    <Footer />
  </main>
);

const PrimaryLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    onClick={() => trackAnalyticsEvent('cta_click', { location: 'studio_page', destination: href })}
    className='inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-purple-500/25 transition-colors hover:bg-accent-hover'
  >
    {children}
    <ArrowRight className='h-4 w-4' />
  </Link>
);

export const ServicesPageContent = () => {
  const { t, lang } = useLanguage();
  const x = extended[lang];

  return (
    <PageFrame>
      <PageHero {...x.pages.services} />

      <section className='border-y border-white/5 bg-surface/30 py-16 sm:py-20'>
        <div className='plex-container grid gap-6 md:grid-cols-2'>
          {t.services.items.map((service, index) => (
            <article key={service.title} className='rounded-3xl border border-white/10 bg-background/60 p-7 sm:p-9'>
              <div className='mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent'>
                {index < 2 ? <Code2 className='h-5 w-5' /> : index === 2 ? <Layers3 className='h-5 w-5' /> : <Sparkles className='h-5 w-5' />}
              </div>
              <h2 className='text-2xl font-bold tracking-tight'>{service.title}</h2>
              <p className='mt-3 leading-relaxed text-foreground-muted'>{service.description}</p>
              <ul className='mt-6 space-y-3'>
                {service.features.map((feature) => (
                  <li key={feature} className='flex items-start gap-3 text-sm text-foreground-muted'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-accent' />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className='mt-7 border-t border-white/10 pt-6'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground-dim'>
                  {relatedWorkLabel[lang]}
                </p>
                <div className='mt-3 flex flex-wrap gap-3'>
                  {serviceProjectIds[index].map((projectId) => {
                    const project = t.portfolio.projects.find((item) => item.id === projectId);
                    if (!project) return null;
                    return (
                      <Link
                        key={project.id}
                        href={`/work/${project.id}`}
                        onClick={() => trackAnalyticsEvent('work_open', { location: 'services_capability', project: project.id })}
                        className='inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-accent-hover'
                      >
                        {project.title} <ArrowUpRight className='h-3.5 w-3.5' />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='plex-section'>
        <div className='plex-container grid items-start gap-10 lg:grid-cols-[1fr_1.15fr]'>
          <div>
            <p className='plex-eyebrow mb-3'>{t.process.eyebrow}</p>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>{x.pages.services.deliveryTitle}</h2>
            <p className='mt-4 max-w-xl leading-relaxed text-foreground-muted'>{x.pages.services.deliveryText}</p>
          </div>
          <ol className='grid gap-4 sm:grid-cols-2'>
            {t.process.steps.map((step) => (
              <li key={step.step} className='rounded-2xl border border-white/10 bg-surface/40 p-6'>
                <span className='text-xs font-semibold tracking-[0.18em] text-accent'>{step.step}</span>
                <h3 className='mt-3 font-semibold'>{step.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-foreground-muted'>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id='engagements' className='border-y border-white/5 bg-surface/30 py-16 sm:py-20 scroll-mt-24'>
        <div className='plex-container'>
          <div className='max-w-2xl'>
            <p className='plex-eyebrow mb-3'>{t.pricing.eyebrow}</p>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>{t.pricing.title} {t.pricing.highlight}</h2>
            <p className='mt-4 text-foreground-muted'>{t.pricing.subtitle}</p>
          </div>
          <div className='mt-10 grid gap-5 lg:grid-cols-3'>
            {t.pricing.packages.map((item) => (
              <article key={item.name} className={`rounded-2xl border p-6 ${item.highlighted ? 'border-accent/40 bg-accent/10' : 'border-white/10 bg-background/60'}`}>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-accent'>{item.timeline}</p>
                <h3 className='mt-3 text-xl font-semibold'>{item.name}</h3>
                <p className='mt-3 text-sm leading-relaxed text-foreground-muted'>{item.description}</p>
              </article>
            ))}
          </div>
          <p className='mt-6 max-w-3xl text-sm leading-relaxed text-foreground-dim'>{t.pricing.note}</p>
        </div>
      </section>

      <section className='py-20'>
        <div className='plex-container'>
          <div className='rounded-3xl border border-accent/20 bg-gradient-to-br from-purple-500/10 to-blue-500/5 p-8 text-center sm:p-12'>
            <h2 className='text-2xl font-bold sm:text-3xl'>{t.contact.title} {t.contact.highlight}</h2>
            <p className='mx-auto mt-3 max-w-2xl text-foreground-muted'>{t.contact.subtitle}</p>
            <div className='mt-7'><PrimaryLink href='/contact'>{x.common.discuss}</PrimaryLink></div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
};

export const WorkPageContent = () => {
  const { t, lang } = useLanguage();
  const x = extended[lang];
  const [filter, setFilter] = useState<WorkFilter>('all');
  const filteredProjects = filter === 'all'
    ? t.portfolio.projects
    : t.portfolio.projects.filter((project) => projectFilters[project.id]?.includes(filter));

  return (
    <PageFrame>
      <PageHero {...x.pages.work} />
      <section className='border-y border-white/5 bg-surface/30 py-16 sm:py-20'>
        <div className='plex-container mb-14'>
          <p className='plex-eyebrow'>{caseFactCopy[lang].coverageEyebrow}</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl'>
            {caseFactCopy[lang].coverageTitle}
          </h2>
          <div className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
            {t.services.items.map((service, index) => {
              const targetFilter = (['websites', 'commerce', 'software', 'mobile-ai'] as WorkFilter[])[index];
              const names = serviceProjectIds[index]
                .map((id) => t.portfolio.projects.find((project) => project.id === id)?.title)
                .filter(Boolean)
                .join(' · ');
              return (
                <button
                  type='button'
                  key={service.title}
                  onClick={() => setFilter(targetFilter)}
                  className='rounded-2xl border border-white/10 bg-background/60 p-5 text-left transition-colors hover:border-accent/40'
                >
                  <span className='text-sm font-semibold text-foreground'>{service.title}</span>
                  <span className='mt-2 block text-xs leading-relaxed text-foreground-dim'>{names}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className='plex-container mb-10 flex flex-wrap gap-2' role='group' aria-label='Filter selected work'>
          {(Object.keys(workFilterLabels[lang]) as WorkFilter[]).map((option) => (
            <button
              type='button'
              key={option}
              onClick={() => setFilter(option)}
              aria-pressed={filter === option}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${filter === option ? 'bg-accent text-white' : 'border border-white/10 bg-white/5 text-foreground-muted hover:border-accent/40 hover:text-foreground'}`}
            >
              {workFilterLabels[lang][option]}
            </button>
          ))}
        </div>
        <div className='plex-container grid gap-7 md:grid-cols-2'>
          {filteredProjects.map((project) => (
            <article key={project.id} className='overflow-hidden rounded-3xl border border-white/10 bg-background/70'>
              <Link href={`/work/${project.id}`} className='group relative block aspect-[16/10] overflow-hidden bg-surface'>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className={`${project.apkUrl ? 'object-contain p-4' : 'object-cover object-top'} transition-transform duration-500 group-hover:scale-[1.03]`}
                  />
                )}
              </Link>
              <div className='p-7'>
                <p className='plex-eyebrow'>{project.category}</p>
                <div className='mt-3 flex items-start justify-between gap-5'>
                  <div>
                    <h2 className='text-2xl font-bold tracking-tight'>{project.title}</h2>
                    <span className='mt-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent'>
                      {x.common.interactiveConcept}
                    </span>
                  </div>
                  <Link href={`/work/${project.id}`} aria-label={`${x.common.viewCase}: ${project.title}`} className='rounded-full border border-white/10 p-3 text-foreground-muted transition-colors hover:border-accent hover:text-accent'>
                    <ArrowUpRight className='h-5 w-5' />
                  </Link>
                </div>
                <p className='mt-5 text-sm leading-relaxed text-foreground-muted'>{project.description}</p>
                <div className='mt-5 flex flex-wrap gap-2'>
                  {(projectFilters[project.id] ?? []).map((capability) => (
                    <span key={capability} className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground-dim'>
                      {workFilterLabels[lang][capability]}
                    </span>
                  ))}
                </div>
                <div className='mt-6 flex flex-wrap gap-4'>
                  <Link href={`/work/${project.id}`} className='text-xs font-semibold uppercase tracking-[0.16em] text-accent hover:text-accent-hover'>
                    {x.common.viewCase}
                  </Link>
                  {project.url && (
                    <a href={project.url} target='_blank' rel='noopener noreferrer' className='text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted hover:text-foreground'>
                      {x.common.openPreview}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className='plex-container mt-10 text-sm italic text-foreground-dim'>{t.portfolio.note}</p>
      </section>
    </PageFrame>
  );
};

export const HospitalityPageContent = () => {
  const { t, lang } = useLanguage();
  const x = extended[lang];
  const page = x.pages.hospitality;

  return (
    <PageFrame>
      <PageHero eyebrow={page.eyebrow} title={page.title} highlight={page.highlight} intro={page.intro} />
      <section className='border-y border-white/5 bg-surface/30 py-16 sm:py-20'>
        <div className='plex-container grid gap-8 lg:grid-cols-2'>
          <article className='rounded-3xl border border-white/10 bg-background/60 p-8'>
            <ShieldCheck className='h-7 w-7 text-accent' />
            <h2 className='mt-6 text-2xl font-bold'>{page.expertiseTitle}</h2>
            <p className='mt-4 leading-relaxed text-foreground-muted'>{page.expertiseText}</p>
          </article>
          <article className='rounded-3xl border border-white/10 bg-background/60 p-8'>
            <ArrowRight className='h-7 w-7 text-accent' />
            <h2 className='mt-6 text-2xl font-bold'>{page.transferableTitle}</h2>
            <p className='mt-4 leading-relaxed text-foreground-muted'>{page.transferableText}</p>
          </article>
        </div>
      </section>
      <section className='plex-section'>
        <div className='plex-container'>
          <p className='plex-eyebrow mb-3'>{t.portfolio.eyebrow}</p>
          <h2 className='text-3xl font-bold sm:text-4xl'>{t.portfolio.title} {t.portfolio.highlight}</h2>
          <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {t.portfolio.projects.filter((project) => ['velvet', 'nightfall', 'venue', 'venue-mobile'].includes(project.id)).map((project) => (
              <Link key={project.id} href={`/work/${project.id}`} className='group rounded-2xl border border-white/10 bg-surface/40 p-6 transition-colors hover:border-accent/40'>
                <p className='text-xs uppercase tracking-[0.16em] text-accent'>{project.category}</p>
                <h3 className='mt-3 text-lg font-semibold'>{project.title}</h3>
                <ArrowRight className='mt-6 h-4 w-4 text-foreground-dim transition-transform group-hover:translate-x-1 group-hover:text-accent' />
              </Link>
            ))}
          </div>
          <div className='mt-10'><PrimaryLink href='/contact'>{x.common.discuss}</PrimaryLink></div>
        </div>
      </section>
    </PageFrame>
  );
};

export const AboutPageContent = () => {
  const { t, lang } = useLanguage();
  const x = extended[lang];
  const page = x.pages.about;

  return (
    <PageFrame>
      <PageHero eyebrow={page.eyebrow} title={page.title} highlight={page.highlight} intro={page.intro} />
      <section className='border-y border-white/5 bg-surface/30 py-16 sm:py-20'>
        <div className='plex-container grid gap-6 md:grid-cols-3'>
          {t.about.values.map((value) => (
            <article key={value.title} className='rounded-2xl border border-white/10 bg-background/60 p-7'>
              <h2 className='text-xl font-semibold'>{value.title}</h2>
              <p className='mt-3 text-sm leading-relaxed text-foreground-muted'>{value.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className='plex-section'>
        <div className='plex-container grid gap-8 lg:grid-cols-[1fr_1.2fr]'>
          <div>
            <p className='plex-eyebrow mb-3'>{page.eyebrow}</p>
            <h2 className='text-3xl font-bold sm:text-4xl'>{page.responsibilityTitle}</h2>
          </div>
          <div className='rounded-3xl border border-white/10 bg-surface/40 p-8'>
            <div className='mb-6 flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-background/50 p-5'>
              <div>
                <p className='text-xs uppercase tracking-[0.16em] text-foreground-dim'>{page.founderLabel}</p>
                <p className='mt-1 text-lg font-semibold'>Yury Soika</p>
              </div>
              <a
                href={SOCIAL.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Yury Soika on LinkedIn'
                className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground-muted transition-colors hover:border-accent hover:text-accent'
              >
                <Linkedin className='h-4 w-4' />
              </a>
            </div>
            <p className='leading-relaxed text-foreground-muted'>{page.responsibilityText}</p>
            <p className='mt-6 border-t border-white/10 pt-6 text-sm leading-relaxed text-foreground-dim'>{page.transparency}</p>
            <div className='mt-7'><PrimaryLink href='/contact'>{x.common.discuss}</PrimaryLink></div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
};

export const ContactPageContent = () => (
  <PageFrame>
    <div className='pt-16'>
      <Contact />
    </div>
  </PageFrame>
);

const capabilityIndexes: Record<string, number[]> = {
  aster: [4, 6, 7, 11],
  velvet: [0, 1, 2, 3],
  nightfall: [4, 5, 6, 7],
  venue: [8, 9, 10, 11],
  'venue-mobile': [12, 13, 14, 15],
  relay: [8, 10, 14, 15],
};

export const CaseStudyPageContent = ({ slug }: { slug: string }) => {
  const { t, lang } = useLanguage();
  const x = extended[lang];
  const projectIndex = t.portfolio.projects.findIndex((item) => item.id === slug);
  const project = t.portfolio.projects[projectIndex];
  const caseCopy = x.cases[slug as keyof typeof x.cases];

  if (!project || !caseCopy) return null;

  const serviceFeatures = t.services.items.flatMap((service) => service.features);
  const capabilities = (capabilityIndexes[slug] ?? [0, 1, 2, 3]).map((index) => serviceFeatures[index]).filter(Boolean);
  const nextProject = t.portfolio.projects[(projectIndex + 1) % t.portfolio.projects.length];

  return (
    <PageFrame>
      <article>
        <header className='pb-16 pt-28 sm:pb-20 sm:pt-36'>
          <div className='plex-container'>
            <Link href='/work' className='inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-accent'>
              <ArrowLeft className='h-4 w-4' /> {x.pages.work.eyebrow}
            </Link>
            <div className='mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]'>
              <div>
                <p className='plex-eyebrow mb-3'>{project.category}</p>
                <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>{project.title}</h1>
                <p className='mt-5 text-lg leading-relaxed text-foreground-muted'>{project.description}</p>
                <div className='mt-6 flex flex-wrap items-center gap-3'>
                  <span className='rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent'>
                    {x.common.interactiveConcept}
                  </span>
                  {project.url && (
                    <a href={project.url} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted hover:text-accent'>
                      {x.common.openPreview} <ArrowUpRight className='h-4 w-4' />
                    </a>
                  )}
                  {project.apkUrl && (
                    <a href={project.apkUrl} className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground-muted hover:text-accent'>
                      {t.portfolio.actions.downloadApk} <ArrowUpRight className='h-4 w-4' />
                    </a>
                  )}
                </div>
              </div>
              <div className='relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl shadow-purple-900/20'>
                {project.image && <Image src={project.image} alt={`${project.title} product preview`} fill priority sizes='(min-width: 1024px) 55vw, 100vw' className={`${project.apkUrl ? 'object-contain p-5' : 'object-cover object-top'}`} />}
              </div>
            </div>
          </div>
        </header>

        <section className='border-y border-white/5 bg-surface/30 py-10'>
          <div className='plex-container grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
            {[
              [caseFactCopy[lang].industry, projectFacts[lang][slug]?.industry],
              [caseFactCopy[lang].product, project.category],
              [caseFactCopy[lang].surface, projectFacts[lang][slug]?.surface],
              [caseFactCopy[lang].status, projectFacts[lang][slug]?.proof],
            ].map(([label, value]) => (
              <div key={label} className='rounded-2xl border border-white/10 bg-background/55 p-5'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground-dim'>{label}</p>
                <p className='mt-2 text-sm font-semibold text-foreground'>{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='border-b border-white/5 py-16 sm:py-20'>
          <div className='plex-container grid gap-6 lg:grid-cols-3'>
            {[
              [x.common.context, caseCopy.context],
              [x.common.challenge, caseCopy.challenge],
              [x.common.approach, caseCopy.approach],
            ].map(([title, text]) => (
              <div key={title} className='rounded-2xl border border-white/10 bg-surface/40 p-7'>
                <h2 className='text-sm font-semibold uppercase tracking-[0.16em] text-accent'>{title}</h2>
                <p className='mt-4 leading-relaxed text-foreground-muted'>{text}</p>
              </div>
            ))}
          </div>
          <div className='plex-container mt-6 grid gap-4 lg:grid-cols-2'>
            <div className='rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-7'>
              <h2 className='text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300'>{caseFactCopy[lang].verified}</h2>
              <p className='mt-4 leading-relaxed text-foreground-muted'>{caseCopy.evidence}</p>
            </div>
            <div className='rounded-2xl border border-white/10 bg-surface/40 p-7'>
              <h2 className='text-sm font-semibold uppercase tracking-[0.16em] text-foreground-dim'>{caseFactCopy[lang].notClaimed}</h2>
              <p className='mt-4 leading-relaxed text-foreground-muted'>{caseFactCopy[lang].notClaimedText}</p>
            </div>
          </div>
        </section>

        {caseCopy.workflow && (
          <section className='plex-section border-b border-white/5'>
            <div className='plex-container'>
              <div className='max-w-3xl'>
                <p className='plex-eyebrow mb-3'>{project.title}</p>
                <h2 className='text-3xl font-bold tracking-tight sm:text-5xl'>{caseCopy.workflow.title}</h2>
                <p className='mt-5 text-lg leading-relaxed text-foreground-muted'>{caseCopy.workflow.intro}</p>
              </div>
              <ol className='mt-12 grid gap-4 md:grid-cols-5'>
                {caseCopy.workflow.steps.map((step, index) => (
                  <li key={step.title} className='relative rounded-2xl border border-white/10 bg-surface/40 p-5'>
                    <div className='flex items-center justify-between gap-3'>
                      <span className='flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-xs font-bold text-emerald-300'>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {index < caseCopy.workflow!.steps.length - 1 && (
                        <ArrowRight aria-hidden='true' className='hidden h-4 w-4 text-foreground-dim md:block' />
                      )}
                    </div>
                    <h3 className='mt-5 font-semibold text-foreground'>{step.title}</h3>
                    <p className='mt-2 text-sm leading-relaxed text-foreground-muted'>{step.text}</p>
                  </li>
                ))}
              </ol>
              <div className='mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-5 py-4 text-sm leading-relaxed text-foreground-muted'>
                {caseCopy.workflow.boundary}
              </div>
            </div>
          </section>
        )}

        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className='plex-section border-b border-white/5'>
            <div className='plex-container'>
              <p className='plex-eyebrow mb-3'>{t.portfolio.actions.viewGallery}</p>
              <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4'>
                {project.galleryImages.map((image) => (
                  <div key={image.src} className='relative aspect-[620/1320] overflow-hidden rounded-2xl border border-white/10 bg-surface/50'>
                    <Image src={image.src} alt={image.alt} fill sizes='(min-width: 640px) 25vw, 50vw' className='object-contain p-2' />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {(slug === 'venue' || slug === 'venue-mobile') && (
          <section className='border-b border-white/5 bg-surface/30 py-16 sm:py-20'>
            <div className='plex-container'>
              <div className='flex flex-col items-start justify-between gap-7 rounded-3xl border border-accent/20 bg-background/70 p-8 sm:flex-row sm:items-center sm:p-10'>
                <div className='max-w-3xl'>
                  <p className='plex-eyebrow'>{venueConnectionCopy[lang].eyebrow}</p>
                  <h2 className='mt-3 text-2xl font-bold tracking-tight sm:text-3xl'>{venueConnectionCopy[lang].title}</h2>
                  <p className='mt-4 leading-relaxed text-foreground-muted'>{venueConnectionCopy[lang].text}</p>
                </div>
                <Link
                  href={slug === 'venue' ? '/work/venue-mobile' : '/work/venue'}
                  className='inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent'
                >
                  {venueConnectionCopy[lang].cta} <ArrowRight className='h-4 w-4' />
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className='plex-section'>
          <div className='plex-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]'>
            <div>
              <p className='plex-eyebrow mb-3'>{x.common.capabilities}</p>
              <h2 className='text-3xl font-bold'>{t.services.title} {t.services.highlight}</h2>
            </div>
            <ul className='grid gap-4 sm:grid-cols-2'>
              {capabilities.map((capability) => (
                <li key={capability} className='flex items-start gap-3 rounded-2xl border border-white/10 bg-surface/40 p-5 text-sm text-foreground-muted'>
                  <Check className='mt-0.5 h-4 w-4 shrink-0 text-accent' /> {capability}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='pb-24'>
          <div className='plex-container'>
            <div className='flex flex-col items-start justify-between gap-6 rounded-3xl border border-accent/20 bg-gradient-to-br from-purple-500/10 to-blue-500/5 p-8 sm:flex-row sm:items-center sm:p-10'>
              <div>
                <p className='plex-eyebrow mb-2'>{x.common.nextProject}</p>
                <h2 className='text-2xl font-bold'>{nextProject.title}</h2>
              </div>
              <div className='flex flex-wrap gap-3'>
                <Link href={`/work/${nextProject.id}`} className='inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent'>
                  {x.common.viewCase} <ArrowRight className='h-4 w-4' />
                </Link>
                <PrimaryLink href='/contact'>{x.common.discuss}</PrimaryLink>
              </div>
            </div>
          </div>
        </section>
      </article>
    </PageFrame>
  );
};

export const ProofStrip = () => {
  const { lang } = useLanguage();
  return (
    <section className='border-y border-white/5 bg-surface/30'>
      <div className='plex-container grid md:grid-cols-3'>
        {extended[lang].proof.items.map((item, index) => (
          <div key={item.title} className={`py-7 md:px-7 ${index > 0 ? 'border-t border-white/5 md:border-l md:border-t-0' : ''}`}>
            <h2 className='text-sm font-semibold'>{item.title}</h2>
            <p className='mt-2 text-sm leading-relaxed text-foreground-muted'>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ProblemsSection = () => {
  const { lang } = useLanguage();
  const data = extended[lang].problems;
  return (
    <section className='plex-section border-y border-white/5 bg-surface/30'>
      <div className='plex-container'>
        <div className='max-w-2xl'>
          <p className='plex-eyebrow mb-3'>{data.eyebrow}</p>
          <h2 className='text-4xl font-bold tracking-tight sm:text-5xl'>{data.title} <span className={accent}>{data.highlight}</span></h2>
          <p className='mt-4 text-lg text-foreground-muted'>{data.intro}</p>
        </div>
        <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {data.items.map((item, index) => (
            <article key={item.title} className='rounded-2xl border border-white/10 bg-background/60 p-6'>
              <span className='text-xs font-semibold text-accent'>0{index + 1}</span>
              <h3 className='mt-4 text-lg font-semibold'>{item.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-foreground-muted'>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HospitalityTeaser = () => {
  const { lang } = useLanguage();
  const data = extended[lang].hospitalityTeaser;
  return (
    <section className='plex-section'>
      <div className='plex-container'>
        <div className='rounded-3xl border border-accent/20 bg-gradient-to-br from-purple-500/10 via-surface/50 to-blue-500/5 p-8 sm:p-12'>
          <p className='plex-eyebrow mb-3'>{data.eyebrow}</p>
          <h2 className='max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl'>{data.title} <span className={accent}>{data.highlight}</span></h2>
          <p className='mt-5 max-w-3xl text-lg leading-relaxed text-foreground-muted'>{data.text}</p>
          <Link href='/expertise/hospitality' className='mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent hover:text-accent-hover'>
            {data.cta} <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const FAQSection = () => {
  const { lang } = useLanguage();
  const data = extended[lang].faq;
  return (
    <section className='plex-section border-y border-white/5 bg-surface/30'>
      <div className='plex-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]'>
        <div>
          <p className='plex-eyebrow mb-3'>{data.eyebrow}</p>
          <h2 className='text-4xl font-bold tracking-tight sm:text-5xl'>{data.title} <span className={accent}>{data.highlight}</span></h2>
          <p className='mt-4 text-foreground-muted'>{data.intro}</p>
        </div>
        <div className='divide-y divide-white/10 border-y border-white/10'>
          {data.items.map((item) => (
            <details key={item.question} className='group py-5'>
              <summary className='flex list-none items-center justify-between gap-5 font-semibold'>
                {item.question}
                <span aria-hidden='true' className='text-xl text-accent transition-transform group-open:rotate-45'>+</span>
              </summary>
              <p className='max-w-2xl pt-4 text-sm leading-relaxed text-foreground-muted'>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
