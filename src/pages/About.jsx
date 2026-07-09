import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';

const whatWeDo = [
  { title: 'Manufacturing', desc: 'Blending, filling, cooking, and assembly lines tailored to consumer staples.' },
  { title: 'Finishing', desc: 'Labeling, kitting, sealing, and secondary packaging to retail-ready standards.' },
  { title: 'Quality', desc: 'GMP-aligned SOPs, in-line checks, batch records, and traceability for audits.' },
  { title: 'Logistics', desc: 'Warehousing, inventory control, and routed dispatch to keep deliveries on time.' },
];

const howWeWork = [
  'Joint planning on formulations, SKUs, and packaging outcomes.',
  'Line design and validation with QA checkpoints and SOPs.',
  'Pilot runs to lock quality, yield, and cycle times.',
  'Scale-up with batch records, traceability, and on-time dispatch.',
];

const visionPoints = [
  { bold: 'Tariff-free reach:', text: 'Unlocking continental markets with lower barriers.' },
  { bold: 'Local-first production:', text: 'Nigeria-led manufacturing that scales across West Africa.' },
  { bold: 'Pan-African supply:', text: 'Affordable, reliable goods for 1.3B consumers.' },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <div className="page-transition" ref={sectionRef}>
      <Seo
        title="About | GUE Industrial Parks Ltd"
        description="Learn about GUE Industrial Parks Ltd, our manufacturing model, GMP-aligned operations, AfCFTA strategy, and how we scale consumer goods production in Nigeria."
        path="/about"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About GUE Industrial Parks Ltd',
          url: 'https://www.gueindustries.com/about',
          description: 'Overview of GUE Industrial Parks Ltd, its operations, quality approach, and expansion strategy across Africa.',
        }}
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?w=1920&h=1080&fit=crop&q=80')` }} />
        <div className="page-hero-overlay" />
        <div className="container">
          <div className="page-hero-content">
            <p className="section-label" style={{ color: 'var(--color-accent)' }}>About Us</p>
            <h1 className="page-hero-title">Manufacturing Partner for Everyday Consumer Goods</h1>
            <p className="page-hero-desc">
              We design, run, and scale production lines for cooking oil, rice, detergents, beverages, spices, personal care, and household essentials—built in Nigeria, aligned to GMP, and ready for AfCFTA markets.
            </p>
            <div className="page-hero-actions">
              <Link to="/products" className="btn-primary">View Products <ArrowRight size={16} className="arrow" /></Link>
              <Link to="/services" className="btn-secondary">What We Do</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container">
          <div className="feature-split">
            <div className="reveal-left">
              <p className="section-label">Who we are</p>
              <h2 className="section-title">Built for Africa's Consumer Market</h2>
              <p className="section-description" style={{ marginBottom: 'var(--space-lg)' }}>
                GUE INDUSTRIAL PARKS LTD. is a Nigeria-based manufacturer and contract packer for everyday consumer goods. We operate lean, safe, and compliant lines to take products from formulation to shelf with speed and reliability.
              </p>
              <p className="section-description">
                Our teams blend engineering discipline, QA rigor, and supply chain coordination—so brands can scale in Nigeria and expand across Africa under AfCFTA.
              </p>
              <p className="section-description" style={{ marginTop: 'var(--space-sm)' }}>
                GUE INDUSTRIAL PARKS LTD. is a subsidiary of GUE Group Limited, the holding company. Visit GUE Group:{' '}
                <a href="https://www.guegroup.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  www.guegroup.com
                </a>
              </p>
            </div>
            <div className="reveal-right">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1610891015188-5369212db097?w=900&h=700&fit=crop&q=80" alt="Operators working on production line" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" style={{ background: 'var(--color-forest-deep)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto var(--space-3xl)' }}>
            <h2 className="section-title light">What We Do</h2>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
            {whatWeDo.map((item, i) => (
              <div className="reveal" key={item.title} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-2xl)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-accent)', marginBottom: 'var(--space-sm)' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className="feature-split reverse">
            <div className="reveal-left">
              <p className="section-label">Our Process</p>
              <h2 className="section-title">How We Work</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {howWeWork.map((step, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    gap: 'var(--space-md)',
                    marginBottom: 'var(--space-lg)',
                    fontSize: '1rem',
                    color: 'var(--color-gray-600)',
                    lineHeight: 1.7,
                    alignItems: 'flex-start',
                  }}>
                    <span style={{
                      flexShrink: 0,
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'var(--color-forest-deep)',
                      color: 'var(--color-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                    }}>
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-right">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1761370981247-1dfd749ec96b?w=900&h=700&fit=crop&q=80" alt="Team reviewing production processes" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto var(--space-3xl)' }}>
            <h2 className="section-title">Our Commitments</h2>
          </div>
          <div className="card-grid-2">
            <div className="commitment-card reveal" style={{ transitionDelay: '0.1s' }}>
              <h3 className="commitment-title">Compliance & Safety</h3>
              <p className="commitment-desc">GMP discipline, batch traceability, and safety-first operations aligned to Nigerian regulations and global best practice.</p>
            </div>
            <div className="commitment-card reveal" style={{ transitionDelay: '0.2s' }}>
              <h3 className="commitment-title">Speed & Reliability</h3>
              <p className="commitment-desc">Pilot-to-scale execution with locked yields, cycle times, and delivery SLAs for on-spec, on-time outcomes.</p>
            </div>
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
            <Link to="/contact" className="btn-dark">Partner With Us <ArrowRight size={16} className="arrow" /></Link>
          </div>
        </div>
      </section>

      {/* Vision for Africa */}
      <section className="section" style={{ background: 'var(--color-forest-deep)' }}>
        <div className="container">
          <div className="feature-split">
            <div className="reveal-left">
              <p className="section-label" style={{ color: 'var(--color-accent)' }}>Our Vision</p>
              <h2 className="section-title light">Our Vision for Africa</h2>
              <p className="section-description light" style={{ marginBottom: 'var(--space-xl)' }}>
                Leveraging AfCFTA to expand market access, build resilient supply chains, and deliver quality consumer goods made in Africa for Africa.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {visionPoints.map((point, i) => (
                  <li key={i} style={{
                    marginBottom: 'var(--space-md)',
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.65,
                  }}>
                    <strong style={{ color: 'var(--color-white)' }}>{point.bold}</strong> {point.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-right">
              <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                <div className="feature-image">
                  <img src="https://images.unsplash.com/photo-1734254807102-fbf62b0cc513?w=900&h=520&fit=crop" alt="Market operator in Nigeria" loading="lazy" style={{ height: 240 }} />
                </div>
                <div className="feature-image">
                  <img src="https://images.unsplash.com/photo-1734255026082-82fdc81991f0?w=900&h=520&fit=crop" alt="West African market" loading="lazy" style={{ height: 240 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
