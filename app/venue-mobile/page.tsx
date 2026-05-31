import Link from 'next/link';
import Image from 'next/image';
import { Download, Apple, ArrowLeft, Smartphone, Bell, Fingerprint, LayoutDashboard, Users, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SITE_URL = 'https://plex.ee';
const APK_URL = 'https://github.com/Yury-Soika/venue-mobile/releases/download/v1.0.0/app-release.apk';
const RELEASES_URL = 'https://github.com/Yury-Soika/venue-mobile/releases';

export const metadata = {
  title: 'Venue Mobile — React Native Staff App | Plex',
  description:
    'Venue Mobile is a React Native staff companion app for nightlife venues: live dashboard, booking management, and guest CRM with VIP tiers — built for on-the-floor teams.',
  alternates: { canonical: `${SITE_URL}/venue-mobile` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/venue-mobile`,
    title: 'Venue Mobile — React Native Staff App',
    description:
      'Staff companion app for nightlife venues: live dashboard, booking management, and guest CRM with VIP tiers.',
    images: [
      { url: '/preview-venue-mobile-showcase.png', width: 1200, height: 630, alt: 'Venue Mobile — React Native Staff App' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venue Mobile — React Native Staff App',
    description:
      'Staff companion app for nightlife venues: live dashboard, booking management, and guest CRM with VIP tiers.',
    images: ['/preview-venue-mobile-showcase.png'],
  },
};

const features = [
  { icon: LayoutDashboard, title: 'Live dashboard', description: "Tonight's metrics — covers, bookings, and occupancy — updated in real time." },
  { icon: Smartphone, title: 'Booking management', description: 'Confirm, edit, and track reservations from the floor, on any device.' },
  { icon: Users, title: 'Guest CRM with VIP tiers', description: 'Pull up guest history and VIP status the moment they arrive.' },
  { icon: Bell, title: 'Push notifications', description: 'Instant alerts for new bookings so the team never misses a request.' },
  { icon: ShieldCheck, title: 'Role-based access', description: 'Hosts, managers, and staff each see exactly what they should.' },
  { icon: Fingerprint, title: 'Biometric login & offline', description: 'Fast Face ID / fingerprint sign-in, with offline support for spotty venues.' },
];

const screenshots = [
  { src: '/preview-venue-mobile-tonight-framed.png', alt: 'Venue Mobile — tonight dashboard' },
  { src: '/preview-venue-mobile-bookings-framed.png', alt: 'Venue Mobile — bookings screen' },
  { src: '/preview-venue-mobile-events-framed.png', alt: 'Venue Mobile — events screen' },
  { src: '/preview-venue-mobile-guests-framed.png', alt: 'Venue Mobile — guest CRM screen' },
  { src: '/preview-venue-mobile-profile-framed.png', alt: 'Venue Mobile — profile screen' },
];

const VenueMobilePage = () => {
  return (
    <main className='min-h-screen'>
      <Navbar />

      <div className='mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 pt-28 sm:pt-32 pb-20'>
        <Link
          href='/#portfolio'
          className='group inline-flex items-center gap-2 text-foreground-muted hover:text-accent text-sm mb-12 transition-colors'
        >
          <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-0.5' />
          Back to portfolio
        </Link>

        {/* Hero */}
        <div className='grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center'>
          <div>
            <p className='plex-eyebrow mb-3'>Concept · React Native · Android</p>
            <h1 className='text-4xl sm:text-5xl font-bold tracking-tight'>
              Venue{' '}
              <span className='plex-display bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent'>
                Mobile
              </span>
            </h1>
            <p className='mt-5 text-lg text-foreground-muted leading-relaxed'>
              The staff companion app for the Venue platform. A React Native build that
              puts live dashboard metrics, booking management, and a VIP-aware guest CRM
              in the pockets of on-the-floor teams.
            </p>

            <div className='mt-8 flex flex-wrap items-center gap-3'>
              <a
                href={APK_URL}
                className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold uppercase tracking-[0.18em] transition-colors shadow-lg shadow-purple-500/25'
              >
                <Download className='w-4 h-4' />
                Download APK
              </a>
              <span className='inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-foreground-muted'>
                <Apple className='w-4 h-4' />
                iOS — Coming Soon
              </span>
            </div>
            <p className='mt-4 text-xs text-foreground-dim'>
              Android APK ·{' '}
              <a href={RELEASES_URL} target='_blank' rel='noopener noreferrer' className='text-accent hover:underline'>
                view all releases on GitHub
              </a>
            </p>
          </div>

          {/* Showcase image */}
          <div className='relative aspect-[1200/630] w-full rounded-2xl overflow-hidden border border-white/10 bg-surface shadow-2xl shadow-purple-900/20'>
            <Image
              src='/preview-venue-mobile-showcase.png'
              alt='Venue Mobile app showcase'
              fill
              priority
              className='object-cover'
            />
          </div>
        </div>

        {/* Features */}
        <div className='mt-24'>
          <p className='plex-eyebrow mb-3'>What it does</p>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight mb-12'>
            Built for the floor, not the back office
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {features.map((feature) => (
              <div
                key={feature.title}
                className='rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors hover:border-accent/40'
              >
                <span className='inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent mb-4'>
                  <feature.icon className='h-5 w-5' />
                </span>
                <h3 className='text-lg font-semibold mb-1.5'>{feature.title}</h3>
                <p className='text-sm text-foreground-muted leading-relaxed'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className='mt-24'>
          <p className='plex-eyebrow mb-3'>Screens</p>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight mb-12'>
            Every screen, hand-built
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5'>
            {screenshots.map((shot) => (
              <div
                key={shot.src}
                className='relative aspect-[620/1320] overflow-hidden rounded-2xl border border-white/10 bg-surface/70'
              >
                <Image src={shot.src} alt={shot.alt} fill className='object-contain p-2' />
              </div>
            ))}
          </div>
        </div>

        {/* Tech + CTA */}
        <div className='mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-10 sm:p-14 text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold tracking-tight'>
            Want an app like this for your venue?
          </h2>
          <p className='mt-4 text-foreground-muted max-w-2xl mx-auto'>
            Venue Mobile is a concept build that shows exactly what we deliver. Your
            staff app gets the same standard — custom React Native, built around how
            your team actually works.
          </p>
          <p className='mt-6 text-xs text-foreground-dim uppercase tracking-[0.18em]'>
            React Native · TypeScript · REST API · Push Notifications · Offline Support
          </p>
          <Link
            href='/#contact'
            className='mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold uppercase tracking-[0.18em] transition-colors shadow-lg shadow-purple-500/25'
          >
            Start a Project
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default VenueMobilePage;
