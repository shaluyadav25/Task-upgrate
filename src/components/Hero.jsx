import { contactInfo } from '../data/navData';
import { Button } from './ui/Button';
import { BackgroundMedia } from './ui/BackgroundMedia';
import { useMousePosition } from '../hooks/useMousePosition';
import './Hero.css';

export const Hero = () => {
  const { normalizedX, normalizedY, isTouch } = useMousePosition();

  // Subtle parallax multiplier for desktop fine-pointer devices
  const parallaxX = isTouch ? 0 : normalizedX * 14;
  const parallaxY = isTouch ? 0 : normalizedY * 10;
  const reverseParallaxX = isTouch ? 0 : -normalizedX * 12;
  const reverseParallaxY = isTouch ? 0 : -normalizedY * 8;

  return (
    <section id="hero" className="hero-section">
      {/* Cinematic Looping Background Video System with Poster Fallback */}
      <BackgroundMedia
        videoSrc="/media/hero.mp4"
        webmSrc="/media/hero.webm"
        poster="/media/hero-poster.jpg"
        overlayOpacity={0.85}
      />

      <div className="container hero-container">
        {/* Left Column: Text Content */}
        <div className="hero-content">
          {/* Small Label with Status Pill */}
          <div className="hero-badge-wrap">
            <span className="hero-status-pill">
              <span className="hero-status-dot" />
              Software. Design. Marketing.
            </span>
            <span className="hero-city-tag">Lucknow, India</span>
          </div>

          {/* Giant Headline */}
          <h1 className="hero-title">
            Upgrate your{' '}
            <span className="hero-title-highlight">
              business
              <svg
                className="hero-underline-svg"
                viewBox="0 0 320 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 21C85 9 205 7 316 19"
                  stroke="#C6F432"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M18 24C95 14 210 12 308 22"
                  stroke="#4F46E5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            with us.
          </h1>

          {/* Sub-line */}
          <p className="hero-subline">
            <span>Smart.</span>
            <span className="hero-subline-dot">&bull;</span>
            <span>Scalable.</span>
            <span className="hero-subline-dot">&bull;</span>
            <span>Seamless.</span>
          </p>

          {/* Paragraph */}
          <p className="hero-description">
            Custom software and marketing solutions that deliver results. One partner for all your IT and digital needs.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <Button
              href={`tel:${contactInfo.phonePrimaryRaw}`}
              variant="lime"
              size="lg"
              showArrow={true}
              aria-label="Call upgrate Infotech now"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4743 21.8326 20.7294C21.721 20.9845 21.5574 21.2132 21.3522 21.3999C21.147 21.5866 20.9047 21.7272 20.641 21.8123C20.3773 21.8974 20.098 21.9251 19.82 21.893C16.7428 21.5583 13.787 20.5074 11.19 18.82C8.77382 17.2692 6.73078 15.2262 5.18 12.81C3.48625 10.2016 2.43501 7.23253 2.11 4.14C2.07797 3.86311 2.1054 3.58474 2.19018 3.32194C2.27497 3.05915 2.41525 2.81768 2.60144 2.61314C2.78763 2.4086 3.01552 2.24545 3.26998 2.13426C3.52445 2.02307 3.79979 1.96631 4.078 1.968H7.078C7.56291 1.96321 8.03328 2.13374 8.40228 2.44806C8.77128 2.76239 9.01467 3.20038 9.088 3.682C9.22485 4.6006 9.47045 5.49845 9.818 6.352C9.9723 6.72899 10.0152 7.1423 9.94165 7.54271C9.86811 7.94312 9.68132 8.31307 9.404 8.608L8.134 9.878C9.55998 12.3852 11.6148 14.44 14.122 15.866L15.392 14.596C15.6871 14.3188 16.057 14.132 16.4574 14.0585C16.8578 13.9849 17.2711 14.0279 17.648 14.182C18.5016 14.5296 19.3994 14.7752 20.318 14.912C20.8053 14.9858 21.2483 15.2335 21.5645 15.6089C21.8807 15.9843 22.0487 16.4623 22.038 16.952L22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              Call Now
            </Button>

            <Button
              href="#services"
              variant="outline"
              size="lg"
              showArrow={true}
              className="hero-btn-explore"
            >
              Explore Services
            </Button>
          </div>

          {/* Social Proof Mini Bar */}
          <div className="hero-proof-bar">
            <div className="hero-avatars">
              <span className="avatar avatar--1">RK</span>
              <span className="avatar avatar--2">AM</span>
              <span className="avatar avatar--3">NG</span>
              <span className="avatar avatar--4">+500</span>
            </div>
            <div className="hero-proof-text">
              <strong>500+ Indian Enterprises</strong>
              <span>trust upgrate to build &amp; scale</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Floating Cards Collage */}
        <div className="hero-visual">
          <div className="hero-stage">
            {/* 1. Mini CRM Dashboard Card */}
            <div
              className="floating-card crm-card"
              style={{
                transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`
              }}
            >
              <div className="crm-card__header">
                <div className="crm-card__indicator" />
                <span className="crm-card__title">Real Estate CRM &bull; Live Pipeline</span>
                <span className="crm-card__tag">Active</span>
              </div>
              <div className="crm-card__metric">
                <span className="crm-card__num">68.4%</span>
                <span className="crm-card__growth">+14.2% vs last month</span>
              </div>
              <div className="crm-pipeline">
                <div className="crm-pipeline__bar">
                  <span className="crm-pipeline__fill" style={{ width: '68%' }} />
                </div>
                <div className="crm-pipeline__labels">
                  <span>Captured</span>
                  <span>Site Visit</span>
                  <span className="crm-pipeline__won">Deals Closed</span>
                </div>
              </div>
            </div>

            {/* 2. Growth Chart Card */}
            <div
              className="floating-card chart-card"
              style={{
                transform: `translate3d(${reverseParallaxX}px, ${reverseParallaxY}px, 0)`
              }}
            >
              <div className="chart-card__top">
                <span className="chart-card__badge">PERFORMANCE</span>
                <span className="chart-card__rate">+148%</span>
              </div>
              <p className="chart-card__label">Organic Traffic &amp; Meta Ads Surge</p>
              {/* SVG Sparkline Graphic */}
              <svg className="chart-card__svg" viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="70" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4F46E5" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 60 Q 30 52, 60 48 T 120 30 T 180 20 T 240 8 L 240 70 L 0 70 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0 60 Q 30 52, 60 48 T 120 30 T 180 20 T 240 8"
                  stroke="#4F46E5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="240" cy="8" r="4.5" fill="#C6F432" stroke="#111111" strokeWidth="2" />
              </svg>
            </div>

            {/* 3. Floating Notification Chip */}
            <div
              className="floating-card notification-chip"
              style={{
                transform: `translate3d(${parallaxX * 0.7}px, ${parallaxY * 0.7}px, 0)`
              }}
            >
              <div className="notif-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="notif-content">
                <span className="notif-headline">+300 leads this month</span>
                <span className="notif-subtext">PropTech client campaign &bull; 2m ago</span>
              </div>
            </div>

            {/* 4. Rotating Circular Text Badge */}
            <div className="circular-badge-wrap" aria-hidden="true">
              <div className="circular-badge">
                <svg viewBox="0 0 160 160" className="circular-badge__svg">
                  <path
                    id="circlePath"
                    d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                    fill="none"
                  />
                  <text className="circular-badge__text">
                    <textPath href="#circlePath" startOffset="0%">
                      WE CODE &bull; WE DESIGN &bull; WE MARKET &bull;&nbsp;
                    </textPath>
                  </text>
                </svg>
                <div className="circular-badge__center">
                  <span className="circular-badge__star">&bull;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
