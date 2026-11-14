import './SectionHeading.css';

/**
 * Editorial Section Heading component with number tag and kicker
 * @param {Object} props
 * @param {string} [props.number] - e.g. "01", "02"
 * @param {string} props.kicker - small uppercase label e.g. "SERVICES"
 * @param {string | React.ReactNode} props.title - Main headline
 * @param {string | React.ReactNode} [props.subtitle] - Optional descriptive paragraph
 * @param {'left' | 'center'} [props.align='left']
 * @param {'light' | 'dark'} [props.theme='light']
 * @param {string} [props.className]
 */
export const SectionHeading = ({
  number,
  kicker,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = ''
}) => {
  return (
    <div className={`section-heading section-heading--${align} section-heading--${theme} ${className}`}>
      <div className="section-heading__meta">
        {number && <span className="section-heading__number">[{number}]</span>}
        {kicker && <span className="section-heading__kicker">{kicker}</span>}
      </div>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
