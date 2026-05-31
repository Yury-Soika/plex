import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms of Service - Plex',
  description:
    'Terms of Service for Plex digital studio. The terms governing the use of our website and the engagement of our design and development services.',
};

const TermsPage = () => {
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
            Terms of{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              Service
            </span>
          </h1>
          <p className='text-foreground-muted mb-12'>Last updated: May 2026</p>

          <div className='prose prose-invert max-w-none space-y-10 text-foreground-muted'>
            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>
                1. Introduction
              </h2>
              <p className='leading-relaxed'>
                These Terms of Service (&quot;Terms&quot;) govern your use of the
                Plex website at https://plex.ee and any design, development, or
                related services we provide (&quot;Services&quot;). By using our
                website or engaging our Services, you agree to these Terms. If you
                do not agree, please do not use the site or our Services.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>
                2. Our Services
              </h2>
              <p className='leading-relaxed'>
                Plex is a digital studio that designs and builds websites, booking
                systems, and mobile applications for nightlife and hospitality
                venues. The scope, deliverables, timeline, and price of any
                project are agreed in writing before work begins, following a
                discovery call. Concept projects shown on this site are
                demonstrations of our capabilities and are not offers of sale.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>
                3. Quotes, Fees, and Payment
              </h2>
              <p className='leading-relaxed'>
                Prices shown on this website are typical starting points and are
                not binding quotes. A firm, fixed-price quote is provided in a
                written proposal after we scope your project. Payment terms,
                including any deposit and milestone schedule, are set out in that
                proposal. Fees are exclusive of third-party costs (such as
                hosting, domains, app store fees, or paid integrations) unless
                stated otherwise.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>
                4. Client Responsibilities
              </h2>
              <p className='leading-relaxed'>
                To deliver on time, we rely on you to provide content, feedback,
                approvals, and access to any required accounts in a timely manner.
                Delays in providing these may affect the project timeline. You are
                responsible for ensuring that any materials you supply do not
                infringe the rights of third parties.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>
                5. Intellectual Property and Ownership
              </h2>
              <p className='leading-relaxed'>
                Upon full payment, ownership of the final source code and custom
                deliverables produced specifically for your project transfers to
                you, as described in your proposal. We retain the right to reuse
                general know-how, techniques, and non-client-specific components.
                Third-party and open-source components remain subject to their
                respective licenses. Unless you opt out in writing, we may
                reference completed work in our portfolio.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>
                6. Warranties and Support
              </h2>
              <p className='leading-relaxed'>
                We take care to deliver work to a professional standard. Any
                post-launch support window is specified in your proposal. Beyond
                that window, the Services are provided &quot;as is&quot; without
                warranties of any kind, to the extent permitted by law. We do not
                warrant that the Services will be uninterrupted or error-free.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>
                7. Limitation of Liability
              </h2>
              <p className='leading-relaxed'>
                To the maximum extent permitted by law, Plex shall not be liable
                for any indirect, incidental, or consequential damages, or for loss
                of profits, revenue, or data, arising out of or in connection with
                the Services. Our total liability for any claim shall not exceed the
                amount you paid for the Services giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>
                8. Third-Party Services
              </h2>
              <p className='leading-relaxed'>
                Our Services may rely on or integrate with third-party platforms
                (such as hosting providers, payment processors, and analytics
                tools). We are not responsible for the availability, performance, or
                policies of those third parties, and your use of them may be subject
                to their own terms.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>
                9. Changes to These Terms
              </h2>
              <p className='leading-relaxed'>
                We may update these Terms from time to time. We will post the
                revised Terms on this page and update the &quot;Last updated&quot;
                date. Your continued use of the site or our Services after changes
                take effect constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-foreground mb-3'>
                10. Contact Us
              </h2>
              <p className='leading-relaxed'>
                If you have questions about these Terms, please contact us at{' '}
                <a
                  href='mailto:contact@plex.ee'
                  className='text-accent hover:underline'
                >
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

export default TermsPage;
