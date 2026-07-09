import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const companyLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
  { label: 'History', path: '/about' },
];

const serviceLinks = [
  { label: 'Manufacturing', path: '/services' },
  { label: 'Finishing & Packaging', path: '/services' },
  { label: 'Quality Control', path: '/services' },
  { label: 'Logistics', path: '/services' },
  { label: 'Process Optimization', path: '/services' },
];

const legalLinks = [
  { label: 'Terms', path: '/terms' },
  { label: 'Privacy', path: '/privacy' },
  { label: 'Legal', path: '/legal' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
];

const groupLinks = [
  { label: 'Gue Group Limited', href: 'https://www.guegroup.com' },
  { label: 'Gue Smart Farming', href: 'https://www.guesmartfarming.com' },
  { label: 'Gue Realty', href: 'https://www.guerealty.com' },
  { label: 'Gue Cyber Nigeria', href: 'https://www.guecyber.ng' },
  { label: 'Gue Cyber Belgium', href: 'https://www.guecyber.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-header">
            <h2 className="subscribe-title">Partner With Us</h2>
            <Link to="/contact" className="subscribe-arrow" aria-label="Contact us">
              <ArrowUpRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand-col">
              <h3 className="footer-brand-name">
                GUE <em>Industrial Parks</em>
              </h3>
              <p className="footer-brand-sub">
                Manufacturing · Processing · Packaging · Industrial Solutions · Subsidiary of Gue Group Limited
              </p>
              <p className="footer-contact-lines">
                Wannune, Tarka, Nigeria<br />
                0904 115 7068<br />
                info@gueindustries.com<br />
                contact@gueindustries.com
              </p>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-nav-title">Company</h4>
              <ul>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="footer-nav-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-nav-title">Our Services</h4>
              <ul>
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="footer-nav-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-nav-title">Gue Group</h4>
              <ul>
                {groupLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-nav-link" target="_blank" rel="noopener noreferrer">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-nav-title">Legal</h4>
              <ul>
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="footer-nav-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © 2025–{currentYear} GUE INDUSTRIAL PARKS LTD. · RC 9482491 · Tax ID: 2620709291598 ·
              Subsidiary of Gue Group Limited (RC 7501599) · Nigeria
            </span>
            <a href="mailto:info@gueindustries.com" className="footer-mail-link">info@gueindustries.com</a>
            <div className="footer-socials">
              <a href="https://facebook.com" className="footer-social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com" className="footer-social-icon" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com" className="footer-social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-group-note">
            Registered 13 April 2026 · A subsidiary of GUE Group Limited (RC 7501599) ·
            <a href="https://www.guegroup.com/" target="_blank" rel="noopener noreferrer">www.guegroup.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
