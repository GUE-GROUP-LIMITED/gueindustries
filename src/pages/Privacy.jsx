import Seo from '../components/Seo';

export default function Privacy() {
  return (
    <div className="page-transition">
      <Seo
        title="Privacy Policy | GUE Industrial Parks Ltd"
        description="Read the privacy policy for GUE Industrial Parks Ltd, including how contact details, enquiry information, and website data are handled."
        path="/privacy"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Privacy Policy',
          url: 'https://www.gueindustries.com/privacy',
        }}
      />

      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <div className="page-hero-content">
            <p className="section-label" style={{ color: 'var(--color-accent)' }}>Legal</p>
            <h1 className="page-hero-title">Privacy Policy</h1>
            <p className="page-hero-desc">
              This page explains how GUE Industrial Parks Ltd collects, uses, and protects personal information submitted through this website.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container container-narrow">
          <div className="legal-content">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Information We Collect</h2>
            <p className="section-description">
              We may collect information you provide directly, including your name, email address, phone number, subject, and message when you contact us.
            </p>

            <h3 className="legal-subtitle">How We Use Information</h3>
            <p className="legal-paragraph">
              We use submitted information to respond to enquiries, discuss partnerships, support business communications, and improve our website experience.
            </p>

            <h3 className="legal-subtitle">Sharing of Information</h3>
            <p className="legal-paragraph">
              We do not sell your personal information. Information may be shared with service providers or professional advisers only when necessary to operate the website or respond to legitimate business requests.
            </p>

            <h3 className="legal-subtitle">Data Security</h3>
            <p className="legal-paragraph">
              We take reasonable administrative and technical measures to protect information submitted through the site, but no internet transmission or storage method is guaranteed to be fully secure.
            </p>

            <h3 className="legal-subtitle">Your Choices</h3>
            <p className="legal-paragraph">
              You may contact us to request updates or corrections to information you have submitted through this website.
            </p>

            <h3 className="legal-subtitle">Contact</h3>
            <p className="legal-paragraph">
              Privacy enquiries can be sent to info@gueindustries.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}