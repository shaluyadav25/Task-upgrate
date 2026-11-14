import { useEffect, useState } from 'react';
import './CursorGlow.css';

const checkIsTouch = () => {
  if (typeof window === 'undefined') return true;
  return !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
};

/**
 * Ambient cursor glow that follows mouse on desktop.
 * Automatically disabled on touch screens and prefers-reduced-motion.
 */
export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const isTouch = checkIsTouch();

  useEffect(() => {
    if (isTouch) return;

    let rafId = null;

    const handlePointerMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        setVisible(true);
        rafId = null;
      });
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      className={`cursor-glow ${visible ? 'cursor-glow--visible' : ''}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;
