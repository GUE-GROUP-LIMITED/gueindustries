import { Link } from 'react-router-dom';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ],
  'Our Services': [
    { label: 'Manufacturing', path: '/services' },
    { label: 'Finishing & Packaging', path: '/services' },
    { label: 'Quality Control', path: '/services' },
    { label: 'Logistics', path: '/services' },
    { label: 'Process Optimization', path: '/services' },
  ],
};

const faqItems = [
  'What products does GUE Industries manufacture?',
  'How can I partner with GUE Industries?',
  'What regions do you serve?',
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
              ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div className="footer-col" key={title}>
                <h4 className="footer-col-title">{title}</h4>
                {links.map((link) => (
                  <Link key={link.label} to={link.path}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

            {/* Contact Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-gray-600)', lineHeight: '1.8' }}>
                Wannune, Tarka, Nigeria<br />
                +234 704 695 2003<br />
                info@gueindustries.com<br />
                contact@gueindustries.com
              </p>
            </div>

            {/* FAQ Column */}
            <div className="footer-col">
              <h3 className="footer-faq-title">
                Maybe Your Question Has Been Answered, Check This Out.
              </h3>
              {faqItems.map((item) => (
                <div className="footer-faq-item" key={item}>
                  <span>{item}</span>
                  <span className="faq-arrow">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-links">
              <Link to="/">Terms</Link>
              <Link to="/">Privacy</Link>
              <Link to="/">Legal</Link>
            </div>
            <span>© 2024–{currentYear} GUE Industries Limited. RC 7501599.</span>
            <div className="footer-socials">
              <a href="https://facebook.com" className="footer-social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://twitter.com" className="footer-social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="https://instagram.com" className="footer-social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
