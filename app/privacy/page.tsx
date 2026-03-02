import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
        <div className='w-full max-w-3xl mx-auto px-8 sm:px-12 lg:px-16'>
          <Link
            href='/'
            className='inline-block text-foreground-muted hover:text-accent text-sm mb-8 transition-colors'
          >
            ← Back to home
          </Link>

          <h1 className='text-4xl sm:text-5xl font-bold mb-4'>
            Privacy <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>Policy</span>
          </h1>
          <p className='text-foreground-muted mb-12'>
            Last updated: March 2025
          </p>

          <div className='prose prose-invert max-w-none space-y-10 text-foreground-muted'>
            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>1. Introduction</h2>
              <p className='leading-relaxed'>
                Plex (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://plex.ee or use our services. Please read this policy carefully.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>2. Information We Collect</h2>
              <p className='leading-relaxed mb-3'>
                We may collect information that you provide directly to us, including:
              </p>
              <ul className='list-disc pl-6 space-y-1'>
                <li>Name and contact information (e.g. email address) when you use our contact form</li>
                <li>Company or project details you share when requesting a quote or proposal</li>
                <li>Communications and correspondence with us</li>
              </ul>
              <p className='leading-relaxed mt-3'>
                We also automatically collect certain technical information when you visit our site, such as IP address, browser type, device information, and pages visited. We may use cookies and similar technologies for this purpose.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>3. How We Use Your Information</h2>
              <p className='leading-relaxed'>
                We use the information we collect to respond to your enquiries, provide and improve our services, send relevant updates (with your consent), analyse site usage, and comply with legal obligations. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>4. Cookies and Similar Technologies</h2>
              <p className='leading-relaxed'>
                Our website may use cookies and similar technologies to remember your preferences, understand how you use our site, and improve your experience. You can manage or disable cookies through your browser settings. Essential cookies are necessary for the site to function; other cookies are used for analytics and preference storage.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>5. Data Sharing and Disclosure</h2>
              <p className='leading-relaxed'>
                We may share your information with service providers who assist us in operating our website and business (e.g. hosting, analytics), subject to confidentiality obligations. We may also disclose information where required by law or to protect our rights and safety.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>6. Data Retention and Security</h2>
              <p className='leading-relaxed'>
                We retain your information only for as long as necessary to fulfil the purposes described in this policy or as required by law. We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, or loss.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>7. Your Rights</h2>
              <p className='leading-relaxed'>
                Depending on your location, you may have the right to access, correct, or delete your personal data, object to or restrict certain processing, and data portability. To exercise these rights or ask questions about our practices, please contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>8. Changes to This Policy</h2>
              <p className='leading-relaxed'>
                We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>9. Contact Us</h2>
              <p className='leading-relaxed'>
                If you have questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a href='mailto:contact@plex.ee' className='text-accent hover:underline'>
                  contact@plex.ee
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPage;
