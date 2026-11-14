import { useState, useEffect } from 'react';

const checkReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Hook for smooth animated counter with easeOutExpo easing curve.
 * @param {number} end - The target number to count up to
 * @param {number} duration - Animation duration in milliseconds
 * @param {boolean} isInView - Trigger flag (e.g. from useInView)
 * @returns {number} Current animated counter value (integer)
 */
export function useCountUp(end, duration = 2000, isInView = true) {
  const [count, setCount] = useState(() => (checkReducedMotion() ? end : 0));

  useEffect(() => {
    if (!isInView) return;
    if (checkReducedMotion()) return;

    let startTimestamp = null;
    let animationFrameId;

    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = Math.floor(easeOutQuart(progress) * end);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, isInView]);

  return count;
}

export default useCountUp;
