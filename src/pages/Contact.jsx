import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Phone, Mail, Factory, Globe, TrendingUp, ArrowRight, ArrowDown } from 'lucide-react';
import Seo from '../components/Seo';

const visionCards = [
  { icon: <Factory size={32} />, title: 'Manufacturing Hub', desc: 'Nigeria-based production facility' },
  { icon: <Globe size={32} />, title: 'AfCFTA Ready', desc: 'Positioned for continental trade' },
  { icon: <TrendingUp size={32} />, title: 'Growth Focused', desc: 'Scaling to serve African markets' },
];

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    if (formData.name.trim().length < 2) errors.push('Name must be at least 2 characters');
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email)) errors.push('Please enter a valid email');
    if (formData.subject.trim().length < 3) errors.push('Subject must be at least 3 characters');
    if (formData.message.trim().length < 10) errors.push('Message must be at least 10 characters');

    if (errors.length > 0) {
      setFeedback({ type: 'error', messages: errors });
      return;
    }

    setFeedback({ type: 'success', messages: ['Thank you for your message! We will get back to you soon. For immediate assistance, call +234 704 695 2003.'] });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFeedback(null), 5000);
  };

  return (
    <div className="page-transition" ref={sectionRef}>
      <Seo
        title="Contact | GUE Industrial Parks Ltd"
        description="Contact GUE Industrial Parks Ltd for manufacturing partnerships, product information, distribution opportunities, and business inquiries in Nigeria and West Africa."
        path="/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact GUE Industrial Parks Ltd',
          url: 'https://www.gueindustries.com/contact',
          description: 'Contact page for GUE Industrial Parks Ltd with location, email, phone, and inquiry form.',
        }}
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1759384628232-134f0d2f154d?w=1920&h=1080&fit=crop&q=80')` }} />
        <div className="page-hero-overlay" />
        <div className="container">
          <div className="page-hero-content">
            <p className="section-label" style={{ color: 'var(--color-accent)' }}>Get in Touch</p>
            <h1 className="page-hero-title">Contact Us</h1>
            <p className="page-hero-desc">
              Contact GUE INDUSTRIAL PARKS LTD. for partnership inquiries, distribution opportunities, and product information. We're building quality consumer goods for African markets.
            </p>
            <div className="page-hero-actions">
              <a href="#contact-form" className="btn-primary">Send Message <ArrowDown size={16} className="arrow" /></a>
              <Link to="/products" className="btn-secondary">View Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Company Info */}
      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto var(--space-md)' }}>
            <h2 className="section-title">Contact Us</h2>
            <p style={{ fontSize: '0.92rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-sage)', fontWeight: 600 }}>
              GUE INDUSTRIAL PARKS LTD. | RC Number: 9482491 | Registered May 17, 2024
            </p>
          </div>
          <p className="section-description reveal" style={{ textAlign: 'center', margin: '0 auto var(--space-3xl)', maxWidth: 800, fontSize: '1rem' }}>
            Get in touch with GUE INDUSTRIAL PARKS LTD.! As we launch our manufacturing operations in Nigeria, we welcome inquiries about partnerships, distribution opportunities, and product information. Contact us to learn how we're building quality consumer goods for African markets.
            {' '}GUE INDUSTRIAL PARKS LTD. is a subsidiary of GUE Group Limited, the holding company. Visit GUE Group:{' '}
            <a href="https://www.guegroup.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
              www.guegroup.com
            </a>
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-sm" id="contact-form" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrapper reveal-left">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-forest-deep)', marginBottom: 'var(--space-sm)' }}>
                Partner With Us
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-gray-600)', marginBottom: 'var(--space-xl)', lineHeight: 1.6 }}>
                Interested in our products, distribution opportunities, or manufacturing partnerships? Fill out the form below and our team will respond promptly.
              </p>

              {feedback && (
                <div className={`form-feedback ${feedback.type}`}>
                  {feedback.messages.map((msg, i) => (
                    <div key={i}>{msg}</div>
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input className="form-input" id="name" name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email</label>
                  <input className="form-input" id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input className="form-input" id="subject" name="subject" type="text" placeholder="Enter the subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Your Message</label>
                  <textarea className="form-textarea" id="message" name="message" placeholder="Enter your message here" rows="5" value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message <ArrowRight size={16} className="arrow" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="reveal-right">
              <div className="contact-info-card">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: 'var(--space-2xl)' }}>Contact Details</h3>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={20} /></div>
                  <div>
                    <div className="contact-info-label">Address</div>
                    <div className="contact-info-value">Wannune, Tarka, Nigeria</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={20} /></div>
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <div className="contact-info-value">+234 704 695 2003</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Mail size={20} /></div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">info@gueindustries.com</div>
                    <div className="contact-info-value" style={{ opacity: 0.7 }}>contact@gueindustries.com</div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--space-xl)', marginTop: 'var(--space-xl)' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 'var(--space-md)' }}>Business Hours</h4>
                  <div style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
                    <div><strong style={{ color: 'var(--color-white)' }}>Monday to Friday:</strong> 9:00 AM - 5:00 PM</div>
                    <div><strong style={{ color: 'var(--color-white)' }}>Saturday:</strong> 10:00 AM - 2:00 PM</div>
                    <div><strong style={{ color: 'var(--color-white)' }}>Sunday:</strong> Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continental Vision */}
      <section className="section" style={{ background: 'var(--color-forest-deep)', textAlign: 'center' }}>
        <div className="container">
          <div className="reveal">
            <p className="section-label" style={{ color: 'var(--color-accent)' }}>Our Vision</p>
            <h2 className="section-title light">Our Continental Vision</h2>
            <p className="section-description light" style={{ margin: '0 auto var(--space-3xl)', textAlign: 'center', maxWidth: 800 }}>
              Based in Wannune, Tarka, Nigeria, GUE INDUSTRIAL PARKS LTD. is positioned to leverage the African Continental Free Trade Area (AfCFTA) agreement. We're starting local manufacturing with a vision to expand across West Africa and beyond.
            </p>
          </div>
          <div className="stat-grid reveal">
            {visionCards.map((card) => (
              <div key={card.title} style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-2xl)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ marginBottom: 'var(--space-md)', color: 'var(--color-accent)' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-accent)', marginBottom: 'var(--space-xs)' }}>{card.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-sm" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-description" style={{ margin: '0 auto' }}>
              Our office is conveniently located in Wannune, Tarka, Nigeria. Use the map below for directions.
            </p>
          </div>
          <div className="map-container reveal-scale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31519.85003505591!2d9.5141928!3d7.4110731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104cc1efcb1c2c4f%3A0xab1b22d40217c51b!2sTarka%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1690382759601!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
              allowFullScreen=""
              loading="lazy"
              title="GUE INDUSTRIAL PARKS LTD. Location"
            />
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-gray-600)', marginBottom: 'var(--space-md)' }}>
              We're here to answer any questions you may have about our manufacturing services, products, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
