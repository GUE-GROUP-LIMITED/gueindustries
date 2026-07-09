import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => () => {
    document.body.style.overflow = '';
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
    { href: 'https://www.guegroup.com', label: 'Gue Group' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <Link to="/" className="navbar-logo">
              <img src="/logo.png" alt="GUE INDUSTRIAL PARKS LTD. Logo" />
              <div className="nav-name">
                GUE <em>Industrial Parks</em>
              </div>
            </Link>

            <div className="navbar-links">
              {navLinks.map((link) => (
                link.path ? (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    {link.label}
                  </a>
                )
              ))}
            </div>

            <div className="navbar-cta">
              <Link to="/contact" className="btn-outline" onClick={closeMenu}>Get in Touch</Link>
              <button
                className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          link.path ? (
            <Link
              key={link.path}
              to={link.path}
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          )
        ))}
      </div>
    </>
  );
}
