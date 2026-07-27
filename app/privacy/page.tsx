import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LegalContent from '../components/LegalContent';
import { SITE_URL } from '../i18n/site';

export const metadata = {
  title: 'Privacy Policy - Plex',
  description:
    'Privacy policy and cookie policy for Plex digital agency. How we collect, use and protect your data.',
  alternates: { canonical: `${SITE_URL}/privacy` },
};

const PrivacyPage = () => {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <div className='pt-24 pb-20'>
        <LegalContent doc='privacy' />
      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPage;
