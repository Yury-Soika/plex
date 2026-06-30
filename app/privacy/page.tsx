import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LegalContent from '../components/LegalContent';

export const metadata = {
  title: 'Privacy Policy - Plex',
  description:
    'Privacy policy and cookie policy for Plex digital agency. How we collect, use and protect your data.',
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
