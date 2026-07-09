import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <div className="page-transition">
      <Seo
        title="Page Not Found | GUE Industrial Parks Ltd"
        description="The page you requested could not be found on the GUE Industrial Parks Ltd website."
        path="/404"
        robots="noindex, nofollow"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Page Not Found',
          url: 'https://www.gueindustries.com/404',
        }}
      />

      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container">
          <div className="page-hero-content">
            <p className="section-label" style={{ color: 'var(--color-accent)' }}>404</p>
            <h1 className="page-hero-title">Page Not Found</h1>
            <p className="page-hero-desc">
              The page you requested does not exist or may have been moved. Return to the homepage or contact our team.
            </p>
            <div className="page-hero-actions">
              <Link to="/" className="btn-primary">Back Home</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
