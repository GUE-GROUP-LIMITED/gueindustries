import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Seo from '../components/Seo';

const products = [
  {
    title: 'Household Cleaning Products',
    desc: 'Detergents, bleach, floor cleaners, and disinfectants manufactured to international standards. Affordable, effective formulations trusted by Nigerian households.',
    image: 'https://images.unsplash.com/photo-1550963295-019d8a8a61c5?w=600&h=400&fit=crop',
    items: [
      'Powder detergent',
      'Liquid detergent',
      'Liquid antiseptic disinfectant',
      'Concentrated liquid disinfectant',
      'Dishwashing liquid (degreasing)',
      'Room freshener',
    ],
  },
  {
    title: 'Personal Care & Hygiene',
    desc: 'Bar soaps, liquid soaps, hand sanitizers, and body lotions. Quality personal care essentials for everyday use across West Africa.',
    image: 'https://images.unsplash.com/photo-1599144836816-334b13e2f7b0?w=600&h=400&fit=crop',
    items: [
      'Shampoo',
      'Hair conditioner',
      'Hair cream (hair food)',
      'Body cream',
      'Petroleum jelly',
    ],
  },
  {
    title: 'Food & Beverage Products',
    desc: 'Packaged drinking water, fruit juices, and processed food items. NAFDAC-approved products meeting strict safety and quality standards.',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop',
    items: ['Packaged drinking water', 'Fruit juices', 'Processed food products'],
  },
  {
    title: 'Cooking & Kitchen Essentials',
    desc: 'Cooking oil, seasonings, spices, and condiments packaged for the Nigerian kitchen. Fresh, authentic flavors at competitive prices.',
    image: 'https://images.unsplash.com/photo-1654064756910-974764816931?w=600&h=400&fit=crop',
    items: ['Cooking oil', 'Seasonings', 'Spices', 'Condiments'],
  },
  {
    title: 'Disposable & Packaging Items',
    desc: 'Plastic bags, food containers, disposable plates, and cups. Durable, hygienic packaging solutions for homes and businesses.',
    image: 'https://images.unsplash.com/photo-1648587456176-4969b0124b12?w=600&h=400&fit=crop',
    items: ['Plastic bags', 'Food containers', 'Disposable plates', 'Disposable cups'],
  },
  {
    title: 'Baby & Childcare Products',
    desc: 'Diapers, baby wipes, baby powder, and lotions. Safe, gentle products trusted by Nigerian parents for their children\'s care.',
    image: 'https://images.unsplash.com/photo-1697906099284-44220d8868c3?w=600&h=400&fit=crop',
    items: ['Diapers', 'Baby wipes', 'Baby powder', 'Baby lotions'],
  },
  {
    title: 'Animal Feed & Nutrition',
    desc: 'Premium feed formulations for poultry, fish, cattle, goats, and other livestock. Nutrient-rich, balanced feeds supporting optimal animal health and productivity across African farms.',
    image: 'https://images.unsplash.com/photo-1636986766802-a9bf23d30448?w=600&h=400&fit=crop',
    items: ['Poultry feed', 'Fish feed', 'Cattle feed', 'Goat feed'],
  },
];

export default function Products() {
  const sectionRef = useScrollReveal();
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="page-transition" ref={sectionRef}>
      <Seo
        title="Products | GUE Industrial Parks Ltd"
        description="View GUE Industrial Parks Ltd product categories including household cleaning, personal care, food and beverage, packaging, baby care, and animal feed."
        path="/products"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Products by GUE Industrial Parks Ltd',
          url: 'https://www.gueindustries.com/products',
          description: 'Consumer goods product categories manufactured and packaged by GUE Industrial Parks Ltd.',
        }}
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1598285385411-c5952310875e?w=1920&h=1080&fit=crop&q=80')` }} />
        <div className="page-hero-overlay" />
        <div className="container">
          <div className="page-hero-content">
            <p className="section-label" style={{ color: 'var(--color-accent)' }}>Our Portfolio</p>
            <h1 className="page-hero-title">Our Products</h1>
            <p className="page-hero-desc">
              Quality everyday products manufactured for the Nigerian and West African market. From household essentials to personal care, we deliver trusted goods at accessible prices.
            </p>
            <div className="page-hero-actions">
              <a href="#products" className="btn-primary">Explore Products <ArrowDown size={16} className="arrow" /></a>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section" id="products" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: 'var(--space-3xl)' }}>
            <p className="section-label">Product Range</p>
            <h2 className="section-title">Quality Consumer Goods</h2>
            <p className="section-description">
              Manufactured for everyday Nigerian and West African consumers with quality, safety, and affordability at the core.
            </p>
          </div>
          <div className="card-grid-2" style={{ gap: 'var(--space-xl)' }}>
            {products.map((product, i) => (
              <div className="product-card reveal" key={product.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="product-card-image">
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{product.title}</h3>
                  <p className="product-card-desc">{product.desc}</p>
                  <button
                    type="button"
                    className="product-card-link"
                    onClick={() => toggleExpanded(product.title)}
                    style={{ background: 'none', border: 'none', padding: 0 }}
                  >
                    {expanded[product.title] ? 'Show Less' : 'Show More'} <ArrowRight size={14} />
                  </button>
                  {expanded[product.title] && (
                    <div style={{ marginTop: 'var(--space-md)' }}>
                      <p style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-forest-deep)', marginBottom: 'var(--space-xs)' }}>
                        Products in this category:
                      </p>
                      <ul style={{ listStyle: 'disc', paddingLeft: '1.1rem', color: 'var(--color-gray-600)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                        {product.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container">
          <div className="cta-banner reveal-scale">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">Interested in Our Products?</h2>
              <p className="cta-banner-desc">
                Contact us for partnership inquiries, distribution opportunities, and product information.
                We're building quality consumer goods for African markets.
              </p>
              <div>
                <Link to="/contact" className="btn-primary">Get in Touch <ArrowRight size={16} className="arrow" /></Link>
              </div>
            </div>
            <div className="cta-banner-image">
              <img src="https://images.unsplash.com/photo-1621954938124-02e637ba3584?w=800&h=500&fit=crop&q=80" alt="Manufacturing facility" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
