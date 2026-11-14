import { useState } from 'react';
import { valuesData } from '../data/valuesData';
import { SectionHeading } from './ui/SectionHeading';
import './Values.css';

export const Values = () => {
  // Default first item active
  const [activeId, setActiveId] = useState(valuesData[0].id);

  const toggleValue = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="values" className="section values-section">
      <div className="container values-container">
        <SectionHeading
          number="04"
          kicker="// CULTURE &amp; OPERATING PRINCIPLES"
          title="Our Guiding Code of Conduct."
          subtitle="Explore the 6 foundational values that steer every sprint, line of code, and client interaction at upgrate Infotech."
        />

        {/* Interactive Accordion List */}
        <div className="values-accordion-list" role="tablist">
          {valuesData.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`value-item ${isActive ? 'value-item--active' : ''}`}
                onMouseEnter={() => setActiveId(item.id)}
              >
                {/* Trigger Row */}
                <button
                  type="button"
                  className="value-item__header"
                  onClick={() => toggleValue(item.id)}
                  aria-expanded={isActive}
                  aria-controls={`value-panel-${item.id}`}
                  id={`value-tab-${item.id}`}
                >
                  <div className="value-item__title-wrap">
                    <span className="value-item__number">{item.number}</span>
                    <h3 className="value-item__title">{item.title}</h3>
                  </div>
                  <span className="value-item__short">{item.short}</span>
                  <div className="value-item__toggle-icon" aria-hidden="true">
                    <span className="toggle-line toggle-line--horizontal" />
                    <span className={`toggle-line toggle-line--vertical ${isActive ? 'is-collapsed' : ''}`} />
                  </div>
                </button>

                {/* Collapsible Content */}
                <div
                  id={`value-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`value-tab-${item.id}`}
                  className={`value-item__content ${isActive ? 'value-item__content--open' : ''}`}
                >
                  <div className="value-item__inner">
                    <p className="value-item__desc">{item.description}</p>
                    <div className="value-item__principle">
                      <span className="principle-label">Operating Principle:</span>
                      <blockquote className="principle-quote">"{item.principle}"</blockquote>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
