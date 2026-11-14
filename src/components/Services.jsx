import { servicesData } from '../data/servicesData';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import './Services.css';

// Crisp SVG Icons for each service type
const renderServiceIcon = (type) => {
  switch (type) {
    case 'code':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'home':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'cart':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      );
    case 'globe':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'mobile':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'share':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case 'trending':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'target':
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
  }
};

export const Services = () => {
  return (
    <section id="services" className="section services-section">
      {/* Background System: Faint dotted grid pattern & two blurred gradient orbs */}
      <div className="services-bg-dots" aria-hidden="true" />
      <div className="services-orb services-orb--indigo" aria-hidden="true" />
      <div className="services-orb services-orb--lime" aria-hidden="true" />

      <div className="container services-container">
        <SectionHeading
          number="01"
          kicker="// SERVICES ARCHITECTURE"
          title="Engineered for Impact. Designed to Scale."
          subtitle="Explore our 8 core disciplines. From high-throughput enterprise systems to hyper-targeted performance marketing funnels."
        />

        {/* Bento Grid */}
        <div className="services-bento-grid">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className={`service-bento-card ${service.gridSpan} service-bento-card--hover-${service.hoverTheme}`}
            >
              <div className="service-card-inner">
                {/* Card Top: Number & Tag */}
                <div className="service-card-meta">
                  <span className="service-card-number">{service.number}</span>
                  <span className="service-card-tag">{service.tag}</span>
                </div>

                {/* Card Icon */}
                <div className="service-card-icon-wrap" aria-hidden="true">
                  {renderServiceIcon(service.iconType)}
                </div>

                {/* Card Main Info */}
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>
                </div>

                {/* Features list */}
                {service.features && (
                  <ul className="service-card-features">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="service-feature-pill">
                        <span className="service-feature-check">&check;</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Card Footer: Learn More Arrow */}
                <div className="service-card-footer">
                  <a href="#cta" className="service-learn-more" aria-label={`Inquire about ${service.title}`}>
                    <span>Learn more</span>
                    <span className="service-arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
