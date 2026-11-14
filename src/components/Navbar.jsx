import { useState, useEffect, useRef } from 'react';
import { navLinks, contactInfo } from '../data/navData';
import { Button } from './ui/Button';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  // Track scroll state for slight pill compression / background intensification
  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 25);
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-wrapper--scrolled' : ''}`}>
      <div className="navbar-pill">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-logo" onClick={closeAllMenus} aria-label="upgrate Infotech Home">
          <span className="navbar-logo__text">upgrate</span>
          <span className="navbar-logo__dot" aria-hidden="true" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          <ul className="navbar-links">
            {navLinks.map((item) => {
              if (item.hasMegaMenu) {
                return (
                  <li
                    key={item.label}
                    className="navbar-item navbar-item--has-dropdown"
                    onMouseEnter={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                  >
                    <button
                      type="button"
                      className={`navbar-link navbar-dropdown-trigger ${servicesDropdownOpen ? 'is-active' : ''}`}
                      onClick={() => setServicesDropdownOpen((prev) => !prev)}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`dropdown-chevron ${servicesDropdownOpen ? 'dropdown-chevron--flipped' : ''}`}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 4.5L6 8L9.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {/* Mega Dropdown Panel */}
                    <div
                      className={`mega-dropdown ${servicesDropdownOpen ? 'mega-dropdown--visible' : ''}`}
                      role="region"
                      aria-label="Services Mega Menu"
                    >
                      <div className="mega-dropdown__header">
                        <span className="mega-dropdown__badge">OUR CAPABILITIES</span>
                        <p className="mega-dropdown__tagline">11 End-to-End IT &amp; Marketing Solutions</p>
                      </div>
                      <div className="mega-dropdown__grid">
                        {item.services.map((srv, idx) => (
                          <a
                            key={idx}
                            href={srv.href}
                            className="mega-dropdown__item"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <div className="mega-dropdown__item-header">
                              <span className="mega-dropdown__bullet" />
                              <span className="mega-dropdown__title">{srv.title}</span>
                            </div>
                            <span className="mega-dropdown__desc">{srv.desc}</span>
                          </a>
                        ))}
                      </div>
                      <div className="mega-dropdown__footer">
                        <span>Need a custom software consultation?</span>
                        <a href="tel:+917705888867" className="mega-dropdown__link">
                          Call +91-7705888867 &rarr;
                        </a>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.label} className="navbar-item">
                  <a href={item.href} className="navbar-link">
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA: WhatsApp Button */}
        <div className="navbar-actions">
          <Button
            href={contactInfo.whatsappUrl}
            variant="lime"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            showArrow={true}
            className="navbar-whatsapp-btn"
            aria-label="Chat with upgrate Infotech on WhatsApp"
            icon={
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.04 3.69C14.24 3.69 16.31 4.55 17.86 6.11C19.42 7.66 20.28 9.73 20.27 11.93C20.27 16.48 16.58 20.15 12.04 20.15ZM16.56 14.36C16.31 14.23 15.09 13.63 14.86 13.55C14.64 13.46 14.47 13.42 14.3 13.67C14.14 13.92 13.66 14.48 13.51 14.65C13.37 14.81 13.22 14.83 12.97 14.71C12.72 14.58 11.92 14.32 10.97 13.47C10.23 12.81 9.73 12 9.58 11.75C9.44 11.5 9.56 11.37 9.69 11.24C9.8 11.13 9.94 10.95 10.06 10.81C10.19 10.66 10.23 10.56 10.31 10.4C10.39 10.23 10.35 10.09 10.29 9.96C10.23 9.84 9.74 8.63 9.53 8.13C9.33 7.65 9.13 7.71 8.97 7.71C8.82 7.7 8.65 7.7 8.49 7.7C8.32 7.7 8.05 7.76 7.82 8.01C7.59 8.26 6.95 8.86 6.95 10.08C6.95 11.3 7.84 12.47 7.96 12.64C8.09 12.8 9.71 15.3 12.2 16.37C12.79 16.63 13.25 16.78 13.61 16.9C14.2 17.08 14.74 17.06 15.17 16.99C15.65 16.92 16.64 16.39 16.85 15.81C17.05 15.22 17.05 14.73 16.99 14.62C16.93 14.52 16.8 14.48 16.56 14.36Z" />
              </svg>
            }
          >
            WhatsApp Now
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`navbar-toggle-btn ${mobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="navbar-toggle-line navbar-toggle-line--top" />
            <span className="navbar-toggle-line navbar-toggle-line--middle" />
            <span className="navbar-toggle-line navbar-toggle-line--bottom" />
          </button>
        </div>
      </div>

      {/* Full-Screen Animated Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'mobile-menu-overlay--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <span className="mobile-menu-logo">
              upgrate<span className="navbar-logo__dot" />
            </span>
            <button
              type="button"
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              &times;
            </button>
          </div>

          <div className="mobile-menu-content">
            <ul className="mobile-nav-list">
              <li>
                <a href="#hero" className="mobile-nav-link" onClick={closeAllMenus}>
                  01 // Home
                </a>
              </li>
              <li>
                <a href="#about" className="mobile-nav-link" onClick={closeAllMenus}>
                  02 // About us
                </a>
              </li>
              <li className="mobile-nav-item--accordion">
                <button
                  type="button"
                  className="mobile-nav-link mobile-nav-accordion-trigger"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  aria-expanded={mobileServicesOpen}
                >
                  <span>03 // Services</span>
                  <span className="mobile-accordion-icon">{mobileServicesOpen ? '−' : '+'}</span>
                </button>
                {mobileServicesOpen && (
                  <ul className="mobile-services-sublist">
                    {navLinks
                      .find((l) => l.hasMegaMenu)
                      ?.services.map((srv, idx) => (
                        <li key={idx}>
                          <a href={srv.href} className="mobile-services-sublink" onClick={closeAllMenus}>
                            {srv.title}
                          </a>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
              <li>
                <a href="#why-choose" className="mobile-nav-link" onClick={closeAllMenus}>
                  04 // Why Choose Us
                </a>
              </li>
              <li>
                <a href="#process" className="mobile-nav-link" onClick={closeAllMenus}>
                  05 // Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="mobile-nav-link" onClick={closeAllMenus}>
                  06 // Reviews
                </a>
              </li>
              <li>
                <a href="#footer" className="mobile-nav-link" onClick={closeAllMenus}>
                  07 // Contact
                </a>
              </li>
            </ul>

            <div className="mobile-menu-footer">
              <div className="mobile-menu-contact">
                <span className="mobile-menu-kicker">LUCKNOW HEADQUARTERS</span>
                <p>Shushant Golf City, Shaheed Path, Lucknow</p>
                <a href="tel:+917705888867" className="mobile-phone-link">
                  +91-7705888867
                </a>
              </div>
              <div className="mobile-menu-buttons">
                <Button
                  href={contactInfo.whatsappUrl}
                  variant="lime"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-cta-full"
                >
                  WhatsApp Now
                </Button>
                <Button
                  href="tel:+917705888867"
                  variant="outline"
                  size="md"
                  className="mobile-cta-full"
                >
                  Call +91-7705888867
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
