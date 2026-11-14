import { contactInfo } from '../data/navData';
import { Button } from './ui/Button';
import './CTA.css';

export const CTA = () => {
  return (
    <section id="cta" className="section cta-section">
      <div className="container">
        <div className="cta-card">
          {/* Animated Mesh Gradient Background (indigo, violet, lime) */}
          <div className="cta-mesh-gradient" aria-hidden="true" />

          {/* Ambient Inner Glow & Vignette */}
          <div className="cta-inner-glow" aria-hidden="true" />

          <div className="cta-content">
            <span className="cta-kicker">// START YOUR DIGITAL EVOLUTION</span>

            <h2 className="cta-title">
              Ready to upgrate your <span className="cta-title-highlight">business?</span>
            </h2>

            <p className="cta-description">
              Let's build your bespoke software, automate your CRM pipelines, or scale your customer acquisition.
              One cohesive team in Lucknow, delivering nationwide excellence.
            </p>

            {/* Buttons: Lime button & WhatsApp button */}
            <div className="cta-buttons">
              <Button
                href={`tel:${contactInfo.phonePrimaryRaw}`}
                variant="lime"
                size="lg"
                showArrow={true}
                aria-label="Call for free consultation"
              >
                Call for Consultation
              </Button>

              <Button
                href={contactInfo.whatsappUrl}
                variant="dark"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                showArrow={true}
                aria-label="Chat with upgrate Infotech on WhatsApp"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.04 3.69C14.24 3.69 16.31 4.55 17.86 6.11C19.42 7.66 20.28 9.73 20.27 11.93C20.27 16.48 16.58 20.15 12.04 20.15ZM16.56 14.36C16.31 14.23 15.09 13.63 14.86 13.55C14.64 13.46 14.47 13.42 14.3 13.67C14.14 13.92 13.66 14.48 13.51 14.65C13.37 14.81 13.22 14.83 12.97 14.71C12.72 14.58 11.92 14.32 10.97 13.47C10.23 12.81 9.73 12 9.58 11.75C9.44 11.5 9.56 11.37 9.69 11.24C9.8 11.13 9.94 10.95 10.06 10.81C10.19 10.66 10.23 10.56 10.31 10.4C10.39 10.23 10.35 10.09 10.29 9.96C10.23 9.84 9.74 8.63 9.53 8.13C9.33 7.65 9.13 7.71 8.97 7.71C8.82 7.7 8.65 7.7 8.49 7.7C8.32 7.7 8.05 7.76 7.82 8.01C7.59 8.26 6.95 8.86 6.95 10.08C6.95 11.3 7.84 12.47 7.96 12.64C8.09 12.8 9.71 15.3 12.2 16.37C12.79 16.63 13.25 16.78 13.61 16.9C14.2 17.08 14.74 17.06 15.17 16.99C15.65 16.92 16.64 16.39 16.85 15.81C17.05 15.22 17.05 14.73 16.99 14.62C16.93 14.52 16.8 14.48 16.56 14.36Z" />
                  </svg>
                }
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Quick Guarantees / Badges */}
            <div className="cta-badges">
              <span className="cta-badge-item">
                <span className="cta-badge-dot" />
                Direct Access to Senior Engineers
              </span>
              <span className="cta-badge-item">
                <span className="cta-badge-dot" />
                Zero Vendor Lock-in
              </span>
              <span className="cta-badge-item">
                <span className="cta-badge-dot" />
                Office: Shaheed Path, Lucknow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
