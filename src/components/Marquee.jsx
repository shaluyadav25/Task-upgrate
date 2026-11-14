import { marqueeItems } from '../data/servicesData';
import './Marquee.css';

export const Marquee = () => {
  // Triple the items to ensure seamless, jitter-free infinite looping
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="marquee-section" aria-label="Services Ticker">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {items.map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span className="marquee-dot" aria-hidden="true" />
              <span className="marquee-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
