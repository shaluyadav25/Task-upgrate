import { useEffect, useRef, useState } from 'react';
import { statsData, darkSectionStatement } from '../data/statsData';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import './Stats.css';

// Subcomponent for each animated stat item
const StatItem = ({ stat, isInView }) => {
  const animatedValue = useCountUp(stat.value, 2000, isInView);

  return (
    <div className="stat-card">
      <div className="stat-card__number-wrap">
        <span className="stat-card__number">{animatedValue}</span>
        <span className="stat-card__suffix">{stat.suffix}</span>
      </div>
      <h3 className="stat-card__label">{stat.label}</h3>
      <p className="stat-card__subtext">{stat.subtext}</p>
    </div>
  );
};

export const Stats = () => {
  const [ref, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
  const sectionRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Parallax scroll effect on the full-width dark WebP image
  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // When section is near viewport, translate background image smoothly
        if (rect.top < windowHeight && rect.bottom > 0) {
          const relativePos = (windowHeight - rect.top) / (windowHeight + rect.height);
          // Shift -30px to +30px
          const offset = (relativePos - 0.5) * 60;
          setParallaxOffset(offset);
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section section--dark stats-section">
      {/* 1. Full-Width Dark Image with Parallax Effect & Gradient Overlay */}
      <div className="stats-bg-parallax" aria-hidden="true">
        <img
          src="/media/stats-bg.webp"
          alt="High-resolution dark cyberspace connectivity network"
          width="1920"
          height="1080"
          loading="lazy"
          className="stats-parallax-img"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`
          }}
        />
        <div className="stats-parallax-gradient" />
      </div>

      {/* 2. Ambient Mesh Dark Glow */}
      <div className="stats-ambient-glow" aria-hidden="true" />

      <div ref={ref} className="container stats-container">
        {/* Massive Statement */}
        <div className="stats-header">
          <div className="stats-kicker-wrap">
            <span className="stats-kicker">{darkSectionStatement.kicker}</span>
          </div>
          <h2 className="stats-statement">
            We code. We design. We market.{' '}
            <span className="stats-statement-highlight">You grow.</span>
          </h2>
          <p className="stats-subline">{darkSectionStatement.subline}</p>
        </div>

        {/* 4 Animated Counters Grid */}
        <div className="stats-grid">
          {statsData.map((stat) => (
            <StatItem key={stat.id} stat={stat} isInView={isInView} />
          ))}
        </div>

        {/* Bottom Editorial Banner */}
        <div className="stats-footer-strip">
          <div className="stats-footer-item">
            <span className="stats-dot" />
            <span>HQ: Lucknow, Uttar Pradesh</span>
          </div>
          <div className="stats-footer-item">
            <span className="stats-dot" />
            <span>Pan-India Client Delivery</span>
          </div>
          <div className="stats-footer-item">
            <span className="stats-dot" />
            <span>Full-Stack Lifecycle Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
