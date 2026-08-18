import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT US', id: 'about' },
    { name: 'OUR SERVICES', id: 'services' },
    { name: 'WHY IKAPA', id: 'why-ikapa' },
    { name: 'IN-PERSON WORKSHOP', id: 'course' },
    { name: 'CONTACT US', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const isTransparent = !isScrolled && !mobileMenuOpen;

  return (
    <>
      <header className={`header-nav ${isTransparent ? 'transparent' : 'scrolled'}`}>
        <div className="container header-container">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              padding: 0, 
              display: 'flex', 
              alignItems: 'center',
              touchAction: 'manipulation'
            }}
            aria-label="IKAPA Fleet Management Home"
          >
            <img 
              src="/assets/ikapa_logo.png" 
              alt="IKAPA Fleet Management" 
              className="header-logo-img"
            />
          </button>

          {/* Desktop Nav Items */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        display: 'inline-block',
                        padding: '0.4rem 0.2rem'
                      }}
                    >
                      {link.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              onClick={onOpenModal} 
              className="btn-gold header-cta-btn" 
            >
              GET STARTED
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ 
                background: mobileMenuOpen ? 'rgba(245, 184, 0, 0.2)' : 'rgba(12, 17, 27, 0.8)', 
                border: '1.5px solid #F5B800', 
                color: '#F5B800', 
                padding: '0.45rem',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                touchAction: 'manipulation'
              }}
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown/Drawer with Backdrop */}
        {mobileMenuOpen && (
          <div 
            className="mobile-menu-overlay animate-slide-menu"
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              bottom: 0,
              height: 'calc(100vh - 64px)',
              backgroundColor: 'rgba(6, 9, 16, 0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem 2rem',
              zIndex: 999,
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ 
                color: '#94A3B8', 
                fontSize: '0.72rem', 
                fontFamily: 'Montserrat', 
                fontWeight: 800, 
                letterSpacing: '1.5px',
                marginBottom: '0.5rem'
              }}>
                MENU NAVIGATION
              </div>

              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button 
                    key={link.id} 
                    onClick={() => handleNavClick(link.id)}
                    style={{
                      background: isActive ? 'rgba(245, 184, 0, 0.12)' : 'transparent',
                      border: isActive ? '1px solid rgba(245, 184, 0, 0.4)' : '1px solid transparent',
                      borderRadius: '8px',
                      color: isActive ? '#F5B800' : '#FFFFFF',
                      textAlign: 'left',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 800,
                      fontSize: '1rem',
                      letterSpacing: '0.5px',
                      padding: '0.85rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      minHeight: '48px',
                      touchAction: 'manipulation'
                    }}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={16} color={isActive ? '#F5B800' : '#64748B'} />
                  </button>
                );
              })}
            </div>

            {/* Mobile Bottom Quick Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(245, 184, 0, 0.2)' }}>
              <button 
                onClick={() => handleNavClick('course')}
                className="btn-gold"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.85rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: 900
                }}
              >
                <ShoppingBag size={18} />
                <span>BUY MASTERCLASS TICKETS</span>
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <a 
                  href="tel:0825490398"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#151C28',
                    border: '1px solid rgba(245, 184, 0, 0.4)',
                    color: '#F5B800',
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    padding: '0.75rem 0.5rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    minHeight: '44px'
                  }}
                >
                  <Phone size={16} />
                  <span>Call Us</span>
                </a>

                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(245, 184, 0, 0.2)',
                    border: '1px solid #F5B800',
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    padding: '0.75rem 0.5rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    minHeight: '44px'
                  }}
                >
                  <span>Quick Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .header-logo-img {
          height: 54px;
          max-width: 280px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: height 0.2s ease;
        }

        .header-cta-btn {
          font-size: 0.82rem;
          padding: 0.6rem 1.35rem;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .header-logo-img {
            height: 52px;
            max-width: 250px;
          }
          .header-cta-btn {
            font-size: 0.76rem;
            padding: 0.5rem 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .header-logo-img {
            height: 48px;
            max-width: 220px;
          }
          .header-cta-btn {
            display: none; /* Keep clean on small mobile, accessible via prominent mobile menu button */
          }
        }
      `}</style>
    </>
  );
};
