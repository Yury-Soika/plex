import Link from 'next/link';
import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Cennik (Polska) — Plex',
  description:
    'Cennik stron i aplikacji Plex dla klubów, lokali i biznesu nocnego w Polsce. Custom, nie szablony.',
  robots: { index: false, follow: false },
};

const tiers = [
  {
    name: 'Strona',
    price: 'od 2 500 zł',
    tagline: 'Jednostronicowa strona premium',
    features: [
      'Custom design — nie szablon',
      'Wersja PL / EN',
      'W pełni mobilna',
      'Galeria, mapa, kontakt',
      'Optymalizacja pod Google',
      'Pierwsza wersja w 48h',
    ],
    highlight: false,
  },
  {
    name: 'Strona + Rezerwacja',
    price: 'od 4 000 zł',
    tagline: 'Strona z rezerwacją loży VIP online',
    features: [
      'Wszystko z pakietu „Strona”',
      'Formularz rezerwacji VIP / stolika',
      'Powiadomienia SMS / e-mail',
      'Mniej nieodebranych telefonów',
    ],
    highlight: true,
  },
  {
    name: 'Pakiet Pełny',
    price: 'od 6 500 zł',
    tagline: 'Strona, rezerwacja i panel do samodzielnej edycji',
    features: [
      'Wszystko z pakietu wyżej',
      'Panel / CMS — edytuj wydarzenia i galerię',
      'Podgląd rezerwacji',
      'Pełna niezależność',
    ],
    highlight: false,
  },
];

const addons = [
  { name: 'Rezerwacja VIP (sam moduł)', price: '+1 500 zł' },
  { name: 'Panel / CMS (samodzielna edycja)', price: '+3 000 zł' },
  { name: 'Płatności online — depozyty (Przelewy24 / PayU)', price: '+2 000 zł' },
  { name: 'Opieka & hosting (aktualizacje, drobne zmiany)', price: '120 zł/mc' },
];

const PlPricesPage = () => {
  return (
    <main className='min-h-screen'>
      <Navbar />

      <div className='pt-28 pb-20'>
        <div className='plex-container'>
          <Link
            href='/'
            className='inline-block text-foreground-muted hover:text-accent text-sm mb-10 transition-colors'
          >
            ← Powrót na stronę główną
          </Link>

          {/* HERO */}
          <p className='plex-eyebrow mb-3'>Cennik · Polska</p>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl'>
            Strony i aplikacje, które{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              sprzedają
            </span>
            .
          </h1>
          <p className='text-foreground-muted mt-5 max-w-2xl text-lg'>
            Przejrzyste ceny dla klubów, lokali i biznesu nocnego. Custom, nie szablony —
            i wszystko należy do Ciebie. Ceny startowe netto dla pierwszych klientów w Polsce.
          </p>

          {/* MAIN TIERS */}
          <div className='mt-14 grid gap-6 lg:grid-cols-3'>
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl border p-8 transition ${
                  t.highlight
                    ? 'border-accent bg-surface-2 shadow-[0_0_50px_-12px_rgba(168,85,247,0.45)]'
                    : 'border-border-c bg-surface'
                }`}
              >
                {t.highlight && (
                  <span className='absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white'>
                    Polecane
                  </span>
                )}
                <h3 className='text-lg font-semibold'>{t.name}</h3>
                <p className='text-foreground-muted text-sm mt-1'>{t.tagline}</p>
                <div className='mt-5 flex items-baseline gap-2'>
                  <span className='text-3xl font-bold'>{t.price}</span>
                </div>
                <ul className='mt-6 space-y-3'>
                  {t.features.map((f) => (
                    <li key={f} className='flex items-start gap-2.5 text-sm text-foreground-muted'>
                      <Check size={17} className='mt-0.5 shrink-0 text-accent' />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href='/#contact'
                  className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                    t.highlight
                      ? 'bg-accent text-white hover:bg-accent-hover'
                      : 'border border-border-c text-foreground hover:border-accent'
                  }`}
                >
                  Zapytaj o wycenę
                </Link>
              </div>
            ))}
          </div>

          {/* ADD-ONS */}
          <h2 className='mt-20 text-2xl font-semibold'>Dodatki</h2>
          <div className='mt-6 grid gap-3 sm:grid-cols-2'>
            {addons.map((a) => (
              <div
                key={a.name}
                className='flex items-center justify-between gap-4 rounded-xl border border-border-c bg-surface px-5 py-4'
              >
                <span className='text-sm text-foreground-muted'>{a.name}</span>
                <span className='shrink-0 text-right'>
                  <span className='font-semibold'>{a.price}</span>
                </span>
              </div>
            ))}
          </div>

          {/* MOBILE APP */}
          <div className='mt-16 rounded-2xl border border-border-c bg-gradient-to-b from-surface-2 to-surface p-8 sm:p-10'>
            <p className='plex-eyebrow mb-2'>Faza 2</p>
            <div className='flex flex-wrap items-end justify-between gap-4'>
              <div className='max-w-xl'>
                <h2 className='text-2xl font-semibold'>Aplikacja mobilna (iOS + Android)</h2>
                <p className='text-foreground-muted text-sm mt-2'>
                  Wydarzenia, powiadomienia push, rezerwacje i program lojalnościowy.
                  Najlepsze rozwiązanie, gdy strona już działa i przyciąga gości.
                </p>
              </div>
              <div className='text-right'>
                <div className='text-3xl font-bold'>od 18 000 zł</div>
                <div className='text-foreground-dim text-sm'>wycena po zakresie</div>
              </div>
            </div>
          </div>

          {/* NOTE */}
          <div className='mt-12 rounded-2xl border border-border-c bg-surface p-6 text-sm text-foreground-muted'>
            <p>
              Ceny netto. Płatność 50% z góry, 50% przy starcie. Do tego dochodzą drobne
              koszty własne klienta: domena (~80–150 zł/rok) i hosting (objęty planem opieki).
            </p>
            <p className='mt-3 text-foreground'>
              <strong>Rabat na start</strong> dla pierwszych klientów — zapytaj o szczegóły.
            </p>
            <p className='mt-3'>
              Zobacz na żywo, jak to wygląda:{' '}
              <a href='https://velvet.plex.ee' target='_blank' rel='noreferrer' className='text-accent hover:underline'>velvet.plex.ee</a>
              {' · '}
              <a href='https://nightfall.plex.ee' target='_blank' rel='noreferrer' className='text-accent hover:underline'>nightfall.plex.ee</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default PlPricesPage;
