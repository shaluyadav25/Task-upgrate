import { useRef, useState } from 'react';
import './Button.css';

/**
 * Premium Magnetic Button with slide-arrow effect
 * @param {Object} props
 * @param {'primary' | 'lime' | 'dark' | 'outline' | 'ghost'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {string} [props.href]
 * @param {boolean} [props.showArrow=false]
 * @param {boolean} [props.magnetic=true]
 * @param {React.ReactNode} [props.icon]
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  showArrow = false,
  magnetic = true,
  icon,
  children,
  className = '',
  target,
  rel,
  onClick,
  ...rest
}) => {
  const buttonRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!magnetic || !buttonRef.current) return;
    // Don't apply magnetic effect on coarse pointers (touch)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Subtle pull towards cursor (-6px to +6px)
    const pullX = (e.clientX - centerX) * 0.2;
    const pullY = (e.clientY - centerY) * 0.2;

    const clampedX = Math.max(-8, Math.min(8, pullX));
    const clampedY = Math.max(-8, Math.min(8, pullY));

    setTransform({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  const style = transform.x !== 0 || transform.y !== 0
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  const classes = `btn btn--${variant} btn--${size} ${showArrow ? 'btn--with-arrow' : ''} ${className}`.trim();

  const content = (
    <>
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__text">{children}</span>
      {showArrow && (
        <span className="btn__arrow" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        className={classes}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        target={target}
        rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
        onClick={onClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      className={classes}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
