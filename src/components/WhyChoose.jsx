import { whyChooseData } from '../data/whyChooseData';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import './WhyChoose.css';

export const WhyChoose = () => {
  return (
    <section id="why-choose" className="section why-choose-section">
      <div className="container why-choose-container">
        {/* Left Column: Sticky Narrative */}
        <div className="why-choose-left">
          <div className="why-choose-sticky-content">
            <SectionHeading
              number="02"
              kicker="// THE UPGRATE ADVANTAGE"
              title="Why Fast-Growing Businesses Choose Us."
              subtitle="We don't just write code or launch campaigns; we engineer resilient digital engines tailored to your exact commercial model."
            />

            <div className="why-choose-proof-pill">
              <span className="why-choose-check">&check;</span>
              <span>Single point of ownership for tech + marketing</span>
            </div>

            <div className="why-choose-cta-wrap">
              <Button href="#cta" variant="primary" size="md" showArrow={true}>
                Start Your Project
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Stacked Bento Cards */}
        <div className="why-choose-right">
          <div className="why-choose-stack">
            {whyChooseData.map((item) => (
              <Card key={item.number} className="why-card">
                <div className="why-card__header">
                  <div className="why-card__meta">
                    <span className="why-card__number">{item.number}</span>
                    <span className="why-card__tag">{item.tag}</span>
                  </div>
                  <span className="why-card__metric-pill">{item.metrics}</span>
                </div>

                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
