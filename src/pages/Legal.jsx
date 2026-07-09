import Seo from '../components/Seo';

export default function Legal() {
  return (
    <div className="page-transition">
      <Seo
        title="Legal Information | GUE Industrial Parks Ltd"
        description="Corporate and legal information for GUE Industrial Parks Ltd, including registration details and policy references."
        path="/legal"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Legal Information',
          url: 'https://www.gueindustries.com/legal',
        }}
      />

      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <div className="page-hero-content">
            <p className="section-label" style={{ color: 'var(--color-accent)' }}>Legal</p>
            <h1 className="page-hero-title">Legal Information</h1>
            <p className="page-hero-desc">
              Corporate identity, registration details, and website policy references for GUE Industrial Parks Ltd.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container container-narrow">
          <div className="legal-content">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Corporate Details</h2>
            <p className="section-description">
              GUE Industrial Parks Ltd is a subsidiary of GUE Group Limited and operates as a manufacturing and packaging business serving Nigerian and regional markets.
            </p>

            <h3 className="legal-subtitle">Registered Information</h3>
            <p className="legal-paragraph">Company: GUE Industrial Parks Ltd</p>
            <p className="legal-paragraph">RC Number: 9482491</p>
            <p className="legal-paragraph">Tax ID: 2620709291598</p>
            <p className="legal-paragraph">Parent Company: GUE Group Limited (RC 7501599)</p>
            <p className="legal-paragraph">Location: Wannune, Tarka, Nigeria</p>

            <h3 className="legal-subtitle">Policy References</h3>
            <p className="legal-paragraph">
              Please review our Privacy Policy and Terms of Service for information on website use, contact submissions, and general business communications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}