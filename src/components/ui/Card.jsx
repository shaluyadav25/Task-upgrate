import './Card.css';

/**
 * Bento card wrapper with 28px border-radius, thin borders, and subtle shadow.
 * @param {Object} props
 * @param {'light' | 'dark' | 'surface' | 'tinted'} [props.variant='surface']
 * @param {string} [props.className]
 * @param {boolean} [props.hoverEffect=true]
 * @param {React.ReactNode} props.children
 */
export const Card = ({
  variant = 'surface',
  className = '',
  hoverEffect = true,
  children,
  ...rest
}) => {
  return (
    <div
      className={`bento-card bento-card--${variant} ${hoverEffect ? 'bento-card--hover' : ''} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
