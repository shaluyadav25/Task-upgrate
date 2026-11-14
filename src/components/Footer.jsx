import { footerData } from '../data/footerData';
import './Footer.css';

// SVG Icons for social links
const renderSocialIcon = (name) => {
  switch (name) {
    case 'Facebook':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'Threads':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.89 12.18c-.37 1.48-1.57 2.45-3.06 2.45-1.98 0-3.48-1.55-3.48-3.6 0-2.18 1.62-3.8 3.75-3.8 1.87 0 3.12 1.15 3.39 2.76h-1.56c-.22-.84-.96-1.41-1.83-1.41-1.28 0-2.2 1.04-2.2 2.45 0 1.34.88 2.3 2.1 2.3.93 0 1.65-.55 1.87-1.42l1.02.27z"/>
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case 'YouTube':
    default:
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
  }
};

export const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      {/* Background System: Faint World Map & Global Network Lines SVG at 5% opacity */}
      <div className="footer-network-map" aria-hidden="true">
        <svg
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="footer-map-svg"
        >
          {/* World Grid Lines */}
          <line x1="0" y1="150" x2="1200" y2="150" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="0" y1="300" x2="1200" y2="300" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="6 8" />
          <line x1="0" y1="450" x2="1200" y2="450" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="300" y1="0" x2="300" y2="600" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="6 8" />
          <line x1="900" y1="0" x2="900" y2="600" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 6" />

          {/* Abstract Continental Node Clusters */}
          {/* North America */}
          <circle cx="250" cy="220" r="4" fill="#FFFFFF" />
          <circle cx="210" cy="200" r="2.5" fill="#FFFFFF" />
          <circle cx="290" cy="240" r="3" fill="#FFFFFF" />
          {/* Europe */}
          <circle cx="580" cy="180" r="3.5" fill="#FFFFFF" />
          <circle cx="610" cy="190" r="2.5" fill="#FFFFFF" />
          {/* India / Lucknow Hub (Highlighted) */}
          <circle cx="780" cy="270" r="6" fill="#C6F432" />
          <circle cx="780" cy="270" r="14" stroke="#C6F432" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="760" cy="290" r="3" fill="#FFFFFF" />
          <circle cx="810" cy="280" r="3" fill="#FFFFFF" />
          {/* East Asia */}
          <circle cx="920" cy="230" r="3.5" fill="#FFFFFF" />
          <circle cx="960" cy="260" r="3" fill="#FFFFFF" />
          {/* Australia */}
          <circle cx="980" cy="460" r="3" fill="#FFFFFF" />

          {/* Network Arcs Originating from Lucknow Hub */}
          <path d="M780 270 Q 520 120 250 220" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="5 5" />
          <path d="M780 270 Q 680 180 580 180" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="4 4" />
          <path d="M780 270 Q 860 210 920 230" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="4 4" />
          <path d="M780 270 Q 900 380 980 460" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="container footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Company Profile & Address */}
          <div className="footer-col footer-col--brand">
            <a href="#hero" className="footer-logo" aria-label="upgrate Infotech">
              <span>upgrate</span>
              <span className="footer-logo__dot" />
            </a>
            <p className="footer-description">{footerData.company.description}</p>

            <div className="footer-contact-block">
              <span className="footer-contact-label">LUCKNOW HEADQUARTERS</span>
              <address className="footer-address">{footerData.contact.address}</address>

              <div className="footer-contact-links">
                <a href={`mailto:${footerData.contact.email}`} className="footer-contact-anchor">
                  <span className="contact-icon">&commat;</span>
                  {footerData.contact.email}
                </a>

                {footerData.contact.phones.map((phone, pIdx) => (
                  <a
                    key={pIdx}
                    href={`tel:${phone.raw}`}
                    className="footer-contact-anchor"
                  >
                    <span className="contact-icon">&#9742;</span>
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              {footerData.servicesLinks.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="footer-nav-link">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect & Socials */}
          <div className="footer-col footer-col--social">
            <h4 className="footer-col-title">Connect</h4>
            <p className="footer-social-intro">
              Follow our latest client case studies, engineering blogs, and market insights.
            </p>

            <div className="footer-social-icons">
              {footerData.socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  className="social-icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow upgrate Infotech on ${soc.name}`}
                >
                  {renderSocialIcon(soc.name)}
                </a>
              ))}
            </div>

            <div className="footer-chat-card">
              <span className="chat-card-title">Direct WhatsApp Desk</span>
              <p className="chat-card-sub">Instant response within 15 minutes</p>
              <a
                href={footerData.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="chat-card-btn"
              >
                Open WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Giant "upgrate" Wordmark */}
        <div className="footer-wordmark-wrap" aria-hidden="true">
          <span className="footer-wordmark">upgrate</span>
          <span className="footer-wordmark-dot" />
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">{footerData.company.copyright}</p>
          <p className="footer-credit">
            Crafted with precision &bull; Lucknow, Uttar Pradesh, India
          </p>
          <div className="footer-legal-links">
            <a href="#privacy" className="footer-legal-link">
              Privacy Policy
            </a>
            <span className="footer-legal-sep">&bull;</span>
            <a href="#terms" className="footer-legal-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
