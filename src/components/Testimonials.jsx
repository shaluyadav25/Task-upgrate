import { useState, useEffect } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { SectionHeading } from './ui/SectionHeading';
import './Testimonials.css';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonialsData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  // Auto-play interval with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  const current = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      className="section testimonials-section"
      aria-label="Client Testimonials Carousel"
    >
      <div className="container testimonials-container">
        <SectionHeading
          number="05"
          kicker="// VERIFIED CLIENT IMPACT"
          title="What Founders &amp; Leaders Say."
          subtitle="Real business transformations across Lucknow, Delhi NCR, and scaling enterprises throughout India."
        />

        {/* Carousel Card Container */}
        <div
          className="testimonials-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
        >
          {/* Giant Background Quote Graphic */}
          <div className="quote-mark-watermark" aria-hidden="true">
            &ldquo;
          </div>

          {/* Testimonial Active Slide */}
          <div className="testimonial-slide">
            {/* Top Impact Tag & Stars */}
            <div className="testimonial-slide__top">
              <span className="testimonial-highlight-pill">
                ✦ {current.highlight}
              </span>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star-icon">
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* The Quote Body */}
            <blockquote className="testimonial-quote">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Footer */}
            <div className="testimonial-author-row">
              <div className="author-info">
                <div
                  className="author-avatar"
                  style={{ backgroundColor: current.avatarBg }}
                >
                  {current.initials}
                </div>
                <div className="author-meta">
                  <div className="author-name-wrap">
                    <h3 className="author-name">{current.name}</h3>
                    <span className="author-verified-tag">&check; Verified Client</span>
                  </div>
                  <p className="author-role">
                    {current.role}, <strong>{current.company}</strong> &bull; {current.location}
                  </p>
                  <span className="author-service">Solution: {current.service}</span>
                </div>
              </div>

              {/* Navigation Controls: Arrows & Counter */}
              <div className="carousel-controls">
                <div className="carousel-counter">
                  <span>0{currentIndex + 1}</span>
                  <span className="counter-sep">/</span>
                  <span>0{total}</span>
                </div>

                <div className="carousel-arrows">
                  <button
                    type="button"
                    className="carousel-btn carousel-btn--prev"
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="carousel-btn carousel-btn--next"
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="carousel-dots" role="tablist" aria-label="Testimonial slides">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`carousel-dot ${currentIndex === idx ? 'carousel-dot--active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                role="tab"
                aria-selected={currentIndex === idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
