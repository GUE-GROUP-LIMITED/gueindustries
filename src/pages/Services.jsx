import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Cog, Package, ShieldCheck, Truck, BarChart3, Globe, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';

const services = [
  {
    icon: <Cog size={24} />,
    title: 'Manufacturing & Assembly',
    desc: 'Blending, cooking, filling, and assembly lines tuned for consistent yields and throughput.',
  },
  {
    icon: <Package size={24} />,
    title: 'Finishing & Packaging',
    desc: 'Labeling, kitting, sealing, shrink, and secondary packaging to retail-ready standards.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Quality & Compliance',
    desc: 'GMP-aligned SOPs, batch documentation, and QA checkpoints for audit readiness.',
  },
  {
    icon: <Truck size={24} />,
    title: 'Logistics & Warehousing',
    desc: 'Storage, inventory control, and routed dispatch to keep deliveries on time.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Process Optimization',
    desc: 'Line balancing, yield improvement, and capacity planning to reduce cost per unit.',
  },
  {
    icon: <Globe size={24} />,
    title: 'AfCFTA Readiness',
    desc: 'Packaging, labeling, and compliance aligned for regional trade within AfCFTA.',
  },
];

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <div className="page-transition" ref={sectionRef}>
      <Seo
        title="Services | GUE Industrial Parks Ltd"
        description="Explore GUE Industrial Parks Ltd services: manufacturing, finishing, packaging, quality assurance, warehousing, logistics, and AfCFTA-ready production support."
        path="/services"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Contract manufacturing and packaging',
          provider: {
            '@type': 'Organization',
            name: 'GUE Industrial Parks Ltd',
            url: 'https://www.gueindustries.com/',
          },
          areaServed: 'Nigeria and West Africa',
          url: 'https://www.gueindustries.com/services',
          description: 'Manufacturing, finishing, packaging, quality, logistics, and AfCFTA-ready production services.',
        }}
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop&q=80')` }} />
        <div className="page-hero-overlay" />
        <div className="container">
          <div className="page-hero-content">
            <p className="section-label" style={{ color: 'var(--color-accent)' }}>What We Offer</p>
            <h1 className="page-hero-title">Services That Move Products From Formulation to Shelf</h1>
            <p className="page-hero-desc">
              Manufacturing, finishing, quality, and logistics for everyday consumer goods—built in Nigeria, aligned to GMP, and ready for AfCFTA markets.
            </p>
            <div className="page-hero-actions">
              <Link to="/products" className="btn-primary">View Products <ArrowRight size={16} className="arrow" /></Link>
              <Link to="/contact" className="btn-secondary">Talk to Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto var(--space-3xl)' }}>
            <p className="section-label">Our capabilities</p>
            <h2 className="section-title">What We Deliver</h2>
            <p className="section-description" style={{ margin: '0 auto' }}>
              End-to-end capability across manufacturing, finishing, quality, and logistics—so your SKUs launch faster, stay compliant, and reach market on time.
            </p>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {services.map((service, i) => (
              <div className="service-card reveal" key={service.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="service-card-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className="feature-split">
            <div className="reveal-left">
              <p className="section-label">End-to-end</p>
              <h2 className="section-title">From Raw Materials to Market</h2>
              <p className="section-description" style={{ marginBottom: 'var(--space-xl)' }}>
                We manage the entire production chain. From initial formulation planning through manufacturing, quality assurance, finishing and packaging, to final warehousing and distribution.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                {['Formulation', 'Production', 'Quality Control', 'Distribution'].map((step, i) => (
                  <div key={step} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}>
                    <span style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: 'var(--color-forest-deep)',
                      color: 'var(--color-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}>{i + 1}</span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-forest-deep)' }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1595246135406-803418233494?w=900&h=700&fit=crop&q=80" alt="Packaging and finishing process" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-forest-deep)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="reveal">
            <h2 className="section-title light">Ready to Build or Scale Your Line?</h2>
            <p className="section-description light" style={{ margin: '0 auto var(--space-xl)', textAlign: 'center' }}>
              Let's plan formulations, SKUs, packaging, and logistics to get your products shelf-ready across Nigeria and West Africa.
            </p>
            <Link to="/contact" className="btn-primary">Talk to Our Team <ArrowRight size={16} className="arrow" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
