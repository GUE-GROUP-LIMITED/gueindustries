import Seo from '../components/Seo';

export default function Terms() {
  return (
    <div className="page-transition">
      <Seo
        title="Terms of Service | GUE Industrial Parks Ltd"
        description="Review the terms governing the use of the GUE Industrial Parks Ltd website, content, and contact channels."
        path="/terms"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Terms of Service',
          url: 'https://www.gueindustries.com/terms',
        }}
      />

      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <div className="page-hero-content">
            <p className="section-label" style={{ color: 'var(--color-accent)' }}>Legal</p>
            <h1 className="page-hero-title">Terms of Service</h1>
            <p className="page-hero-desc">
              These terms govern access to and use of the GUE Industrial Parks Ltd website and related communications.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container container-narrow">
          <div className="legal-content">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Use of This Website</h2>
            <p className="section-description">
              This website is provided for general information about GUE Industrial Parks Ltd, its products, services, and contact channels.
            </p>

            <h3 className="legal-subtitle">Content Accuracy</h3>
            <p className="legal-paragraph">
              We aim to keep information current and accurate, but we do not guarantee that all website content will always be complete, current, or error free.
            </p>

            <h3 className="legal-subtitle">Intellectual Property</h3>
            <p className="legal-paragraph">
              Unless otherwise stated, website content, branding, copy, and design elements belong to GUE Industrial Parks Ltd or are used with permission.
            </p>

            <h3 className="legal-subtitle">External Links</h3>
            <p className="legal-paragraph">
              This website may include links to external sites. We are not responsible for the content, privacy practices, or availability of third-party websites.
            </p>

            <h3 className="legal-subtitle">Limitation of Liability</h3>
            <p className="legal-paragraph">
              Use of this website is at your own risk. GUE Industrial Parks Ltd will not be liable for losses resulting from reliance on website content, technical interruptions, or third-party integrations.
            </p>

            <h3 className="legal-subtitle">Changes</h3>
            <p className="legal-paragraph">
              We may update these terms from time to time. Continued use of the site after updates constitutes acceptance of the revised terms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}