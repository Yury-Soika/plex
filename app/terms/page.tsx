import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LegalContent from '../components/LegalContent';
import { SITE_URL } from '../i18n/site';

export const metadata = {
  title: 'Terms of Service - Plex',
  description:
    'Terms of Service for Plex digital studio. The terms governing the use of our website and the engagement of our design and development services.',
  alternates: { canonical: `${SITE_URL}/terms` },
};

const TermsPage = () => {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <div className='pt-24 pb-20'>
        <LegalContent doc='terms' />
      </div>
      <Footer />
    </main>
  );
};

export default TermsPage;
