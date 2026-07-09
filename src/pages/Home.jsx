import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Cog, ShieldCheck, Package, Truck, ArrowRight } from 'lucide-react';

const whyChooseUs = [
  {
    icon: <Cog size={24} />,
    title: 'Production Excellence',
    desc: 'Lean, safety-led lines engineered for throughput, traceability, and consistent output.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Quality & Compliance',
    desc: 'GMP-aligned SOPs, batch documentation, and QA checkpoints for audit readiness.',
  },
  {
    icon: <Package size={24} />,
    title: 'Finishing & Packaging',
    desc: 'Labeling, kitting, secondary packaging, and contract fills to your specs.',
  },
  {
    icon: <Truck size={24} />,
    title: 'Supply Reliability',
    desc: 'Integrated planning, warehousing, and logistics to keep deliveries on schedule.',
  },
];

const facilities = [
  {
    title: 'Production Lines',
    desc: 'Automated and semi-automated lines with QA checkpoints and full traceability.',
    image: 'https://images.unsplash.com/photo-1621954938124-02e637ba3584?w=520&h=360&fit=crop&q=80',
  },
  {
    title: 'Finishing & Packaging',
    desc: 'Filling, labeling, sealing, kitting, and secondary packaging tailored to your SKUs.',
    image: 'https://images.unsplash.com/photo-1595246135406-803418233494?w=520&h=360&fit=crop&q=80',
  },
  {
    title: 'Warehousing & Distribution',
    desc: 'Secure storage, inventory control, and routed dispatch to keep deliveries on time.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=520&h=360&fit=crop&q=80',
  },
];

const marqueeItems = [
  'Manufacturing', 'Packaging', 'Finishing', 'Quality Control',
  'Logistics', 'AfCFTA', 'Consumer Goods', 'Production',
  'Manufacturing', 'Packaging', 'Finishing', 'Quality Control',
  'Logistics', 'AfCFTA', 'Consumer Goods', 'Production',
];

const heroPills = [
  'Consumer Goods',
  'Baby Foods',
  'Animal Feeds',
  'Industrial Parks',
  'Packaging',
  'Import & Export',
];

const serviceAccentColors = ['var(--gue-red)', 'var(--gue-navy)', 'var(--gue-slate)', 'var(--color-forest-light)'];

export default function Home() {
  const sectionRef = useScrollReveal();

  return (
    <div className="page-transition" ref={sectionRef}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-image" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1595798896730-9fdf2e709649?w=1920&h=1080&fit=crop&q=80')`
        }} />
        <div className="hero-topbar" />
        <div className="hero-grid-overlay" />
        <div className="hero-bg-overlay" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Manufacturing<br />
                & Packaging Hub
              </h1>
              <p className="hero-subtitle">
                GUE INDUSTRIAL PARKS LTD. turns raw materials into shelf-ready consumer goods—cooking oil, rice,
                detergents, beverages, spices, personal care, and household essentials—built for Africa under AfCFTA.
              </p>
              <div className="hero-actions">
                <Link to="/products" className="btn-primary">
                  Shop Now <ArrowRight size={16} className="arrow" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
              <div className="hero-pills" aria-label="Capabilities">
                {heroPills.map((pill) => (
                  <span className="hero-pill" key={pill}>{pill}</span>
                ))}
              </div>
            </div>
            <div className="hero-images">
              <img
                src="https://images.unsplash.com/photo-1621954938124-02e637ba3584?w=800&h=600&fit=crop&q=80"
                alt="GUE INDUSTRIAL PARKS LTD. manufacturing facility"
                className="hero-main-image"
                loading="eager"
              />
              <div className="hero-thumb-row">
                <img
                  src="https://images.unsplash.com/photo-1595246135406-803418233494?w=400&h=300&fit=crop&q=80"
                  alt="Packaging operations"
                  className="hero-thumb"
                  loading="eager"
                />
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop&q=80"
                  alt="Distribution warehouse"
                  className="hero-thumb"
                  loading="eager"
                />
                <img
                  src="https://images.unsplash.com/photo-1654064756910-974764816931?w=400&h=300&fit=crop&q=80"
                  alt="Consumer products"
                  className="hero-thumb"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar" aria-label="Company credentials">
        <div className="container trust-bar-inner">
          <span className="trust-item">CAC Registered · RC 9482491</span>
          <span className="trust-item">Subsidiary of Gue Group Limited</span>
          <span className="trust-item">Registered 13 April 2026</span>
          <span className="trust-item">Tax ID: 2620709291598</span>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-section">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span className="marquee-item" key={i}>
              <span className="dot" />{item}
            </span>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto var(--space-3xl)' }}>
            <p className="section-kicker">// Why choose us</p>
            <p className="section-label">Why choose us</p>
            <h2 className="section-title">Why Brands Choose GUE</h2>
            <p className="section-description" style={{ margin: '0 auto' }}>
              We build reliable production and packaging pipelines for everyday consumer goods—combining GMP
              discipline, QA rigor, and on-time delivery so your products launch fast and scale smoothly across Africa.
            </p>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {whyChooseUs.map((item, i) => (
              <div
                className="service-card reveal"
                key={item.title}
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  '--card-accent': serviceAccentColors[i % serviceAccentColors.length],
                }}
              >
                <div className="service-card-icon">{item.icon}</div>
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
            <Link to="/contact" className="btn-dark">
              Contact Us Today <ArrowRight size={16} className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section — Split Layout */}
      <section className="section" style={{ background: 'var(--color-forest-deep)' }}>
        <div className="container">
          <div className="feature-split">
            <div className="reveal-left">
              <p className="section-kicker">// Facilities</p>
              <p className="section-label" style={{ color: 'var(--color-accent)' }}>Our Facilities</p>
              <h2 className="section-title light" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Built for Consumer Goods Manufacturing
              </h2>
              <p className="section-description light" style={{ marginBottom: 'var(--space-xl)' }}>
                Cooking oil, rice, detergents, beverages, spices, personal care, and household essentials.
                We combine modern equipment with skilled teams for safe, efficient, and scalable output.
              </p>
              <Link to="/services" className="btn-primary">
                Explore More <ArrowRight size={16} className="arrow" />
              </Link>
            </div>
            <div className="reveal-right">
              <div className="feature-image">
                <img
                  src="https://images.unsplash.com/photo-1610891015188-5369212db097?w=900&h=700&fit=crop&q=80"
                  alt="Manufacturing facility operators"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Cards */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: 'var(--space-3xl)' }}>
            <p className="section-kicker">// Infrastructure</p>
            <h2 className="section-title">Our Facilities</h2>
            <p className="section-description">
              State-of-the-art infrastructure designed for efficiency, compliance, and scale.
            </p>
          </div>
          <div className="card-grid-3">
            {facilities.map((fac, i) => (
              <div className="product-card reveal" key={fac.title} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="product-card-image">
                  <img src={fac.image} alt={fac.title} loading="lazy" />
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{fac.title}</h3>
                  <p className="product-card-desc">{fac.desc}</p>
                  <Link to="/services" className="product-card-link">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Strip */}
      <section className="section-sm" style={{ background: 'var(--color-warm-white)', paddingTop: 0 }}>
        <div className="container">
          <div className="group-strip-card reveal-scale">
            <div className="group-strip-main">
              <p className="group-strip-label">// Part of the Group</p>
              <h3 className="group-strip-title">A Subsidiary of Gue Group Limited</h3>
              <p className="group-strip-desc">
                GUE Industrial Parks Ltd operates under Gue Group Limited (RC 7501599), alongside
                Gue Cyber, GUE Engineering, GUE Realty, GUE Smart Farming, GUE Educational, and GUE Mobility.
              </p>
            </div>
            <div className="group-strip-links">
              <a href="https://www.guegroup.com" target="_blank" rel="noreferrer">Gue Group</a>
              <a href="https://www.guesmartfarming.com" target="_blank" rel="noreferrer">Smart Farming</a>
              <a href="https://www.guerealty.com" target="_blank" rel="noreferrer">Gue Realty</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-sm" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container">
          <div className="cta-banner reveal-scale">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">
                Ready to Build or Scale Your Production Line?
              </h2>
              <p className="cta-banner-desc">
                We handle production lines, finishing, labeling, and contract packaging with GMP discipline,
                QA rigor, and on-time delivery—so your products launch faster and scale reliably.
              </p>
              <div>
                <Link to="/contact" className="btn-primary">
                  Talk to Us <ArrowRight size={16} className="arrow" />
                </Link>
              </div>
            </div>
            <div className="cta-banner-image">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop&q=80"
                alt="GUE INDUSTRIAL PARKS LTD. warehouse"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
