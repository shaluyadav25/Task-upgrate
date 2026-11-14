import { useState, useEffect, useRef } from 'react';

const checkSupported = () => typeof window !== 'undefined' && 'IntersectionObserver' in window;

/**
 * Custom hook to detect when an element enters the viewport using IntersectionObserver.
 * @param {Object} options - IntersectionObserverInit options
 * @param {boolean} triggerOnce - Whether to only trigger once when in view
 * @returns {[import('react').RefObject, boolean]} [ref, isInView]
 */
export function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true
} = {}) {
  const [isInView, setIsInView] = useState(() => !checkSupported());
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !checkSupported()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

export default useInView;
