import { useRef, useEffect, useState } from 'react';
import { processData } from '../data/processData';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import './Process.css';

export const Process = () => {
  const sectionRef = useRef(null);
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress as section passes through viewport
        const start = windowHeight * 0.8;
        const end = -rect.height * 0.2;
        const progress = (start - rect.top) / (start - end);

        const clamped = Math.min(100, Math.max(0, progress * 100));
        setTimelineProgress(clamped);
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="process" ref={sectionRef} className="section process-section">
      <div className="container">
        <SectionHeading
          number="03"
          kicker="// 4-STAGE SPRINT LIFECYCLE"
          title="From First Conversation to Frictionless Launch."
          subtitle="Discover &rarr; Design &rarr; Develop &rarr; Deliver. A transparent, milestone-driven execution cycle with zero surprises."
        />

        {/* Horizontal Timeline Container */}
        <div className="process-timeline-wrap">
          {/* Background Track Line */}
          <div className="process-timeline-bar" aria-hidden="true">
            <div
              className="process-timeline-progress"
              style={{ width: `${timelineProgress}%` }}
            />
          </div>

          {/* 4 Process Steps */}
          <div className="process-steps-grid">
            {processData.map((step, idx) => {
              const isPast = timelineProgress >= (idx + 1) * 22;

              return (
                <div key={step.step} className="process-step-col">
                  {/* Step Node */}
                  <div className={`process-node ${isPast ? 'process-node--active' : ''}`}>
                    <span className="process-node__num">{step.step}</span>
                  </div>

                  {/* Step Card */}
                  <Card className="process-card">
                    <div className="process-card__header">
                      <span className="process-card__duration">{step.duration}</span>
                      <span className="process-card__badge">Phase {step.step}</span>
                    </div>

                    <h3 className="process-card__name">{step.name}</h3>
                    <h4 className="process-card__subtitle">{step.subtitle}</h4>
                    <p className="process-card__desc">{step.description}</p>

                    <div className="process-card__deliverables">
                      <span className="process-card__deliv-title">Deliverables:</span>
                      <div className="process-tags">
                        {step.deliverables.map((d, dIdx) => (
                          <span key={dIdx} className="process-tag">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
