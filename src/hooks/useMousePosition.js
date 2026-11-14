import { useState, useEffect } from 'react';

const checkIsTouch = () => {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  );
};

/**
 * Custom hook to track mouse position and normalized coordinates.
 * Detects touch devices and disables pointer tracking appropriately.
 * @returns {{ x: number, y: number, normalizedX: number, normalizedY: number, isTouch: boolean }}
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState(() => ({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isTouch: checkIsTouch()
  }));

  useEffect(() => {
    if (mousePosition.isTouch) return;

    let rafId = null;

    const handleMouseMove = (event) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = event;
        const width = window.innerWidth;
        const height = window.innerHeight;

        const normalizedX = (clientX / width) * 2 - 1;
        const normalizedY = (clientY / height) * 2 - 1;

        setMousePosition((prev) => ({
          ...prev,
          x: clientX,
          y: clientY,
          normalizedX,
          normalizedY
        }));
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mousePosition.isTouch]);

  return mousePosition;
}

export default useMousePosition;
