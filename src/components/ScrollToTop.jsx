import { useEffect, useState } from 'react';
import './ScrollToTop.css';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let rafId = null;
    const checkScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setVisible(window.scrollY > 400);
        rafId = null;
      });
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top-btn ${visible ? 'scroll-to-top-btn--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      type="button"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
