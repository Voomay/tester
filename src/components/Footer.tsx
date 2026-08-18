import React from 'react';
import { Phone, Mail, Globe, MapPin, Ticket } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" style={{
      backgroundColor: '#04070D',
      borderTop: '1px solid rgba(245, 184, 0, 0.2)',
      paddingTop: '3.5rem',
      paddingBottom: '2rem',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }} className="footer-grid">
          {/* Column 1: Brand Logo & Mission */}
          <div style={{ gridColumn: 'span 4' }} className="footer-col">
            <button 
              onClick={() => onNavigate('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, display: 'block', touchAction: 'manipulation' }}
              aria-label="IKAPA Fleet Management Home"
            >
              <img 
                src="/assets/ikapa_logo.png" 
                alt="IKAPA Fleet Management Logo"
                style={{ height: '54px', maxWidth: '270px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </button>

            <p style={{
              color: '#CBD5E1',
              fontSize: '0.88rem',
              lineHeight: 1.6,
              maxWidth: '360px',
              marginTop: '0.85rem'
            }}>
              We take care of everything so you can enjoy consistent, hands-off passive returns from your vehicle investment. From operating license relief and accredited driver placement to 24/7 monitoring, maintenance coordination, and transparent weekly payouts — iKhapa Fleet Management is Cape Town’s trusted e-hailing management partner.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div style={{ gridColumn: 'span 3' }} className="footer-col">
            <h4 style={{
              color: '#F5B800',
              fontFamily: 'Montserrat',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '1px',
              marginBottom: '1.15rem',
              textTransform: 'uppercase'
            }}>
              CONTACT US
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a href="tel:0825490398" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFFFFF', textDecoration: 'none', fontSize: '0.85rem', minHeight: '36px' }}>
                <div style={{ background: '#F5B800', padding: '6px', borderRadius: '4px', display: 'flex' }}>
                  <Phone size={14} color="#000000" />
                </div>
                <span>082 549 0398</span>
              </a>

              <a href="mailto:info@ikapafleet.co.za" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFFFFF', textDecoration: 'none', fontSize: '0.85rem', minHeight: '36px', wordBreak: 'break-all' }}>
                <div style={{ background: '#F5B800', padding: '6px', borderRadius: '4px', display: 'flex', flexShrink: 0 }}>
                  <Mail size={14} color="#000000" />
                </div>
                <span>info@ikapafleet.co.za</span>
              </a>

              <a href="https://www.ikapafleet.co.za" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFFFFF', textDecoration: 'none', fontSize: '0.85rem', minHeight: '36px' }}>
                <div style={{ background: '#F5B800', padding: '6px', borderRadius: '4px', display: 'flex' }}>
                  <Globe size={14} color="#000000" />
                </div>
                <span>www.ikapafleet.co.za</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFFFFF', fontSize: '0.85rem' }}>
                <div style={{ background: '#F5B800', padding: '6px', borderRadius: '4px', display: 'flex', flexShrink: 0 }}>
                  <MapPin size={14} color="#000000" />
                </div>
                <span>Ravensmead, Western Cape</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div style={{ gridColumn: 'span 2' }} className="footer-col">
            <h4 style={{
              color: '#F5B800',
              fontFamily: 'Montserrat',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '1px',
              marginBottom: '1.15rem',
              textTransform: 'uppercase'
            }}>
              QUICK LINKS
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Our Services', id: 'services' },
                { name: 'Why Ikapa', id: 'why-ikapa' },
                { name: 'In-Person Course', id: 'course' },
                { name: 'Contact Page', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => onNavigate(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#CBD5E1',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      padding: '4px 0',
                      textAlign: 'left',
                      transition: 'color 0.2s ease',
                      touchAction: 'manipulation'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F5B800')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div style={{ gridColumn: 'span 3' }} className="footer-col">
            <h4 style={{
              color: '#F5B800',
              fontFamily: 'Montserrat',
              fontWeight: 800,
              fontSize: '0.88rem',
              letterSpacing: '1px',
              marginBottom: '1.15rem',
              textTransform: 'uppercase'
            }}>
              IN-PERSON WORKSHOP
            </h4>

            <p style={{ color: '#FFFFFF', fontSize: '0.85rem', marginBottom: '0.85rem' }}>
              Ready to learn how to scale your vehicle fleet?
            </p>

            <button 
              onClick={() => onNavigate('course')}
              className="btn-gold" 
              style={{ width: '100%', borderRadius: '6px', padding: '0.65rem 1rem', fontSize: '0.82rem', marginBottom: '1.25rem', cursor: 'pointer', justifyContent: 'center' }}
            >
              <Ticket size={16} />
              <span>BUY COURSE TICKET</span>
            </button>

            {/* Social Icons (Facebook, Instagram, TikTok) */}
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(245, 184, 0, 0.6)',
                  backgroundColor: 'rgba(245, 184, 0, 0.08)',
                  color: '#F5B800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
                  touchAction: 'manipulation'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(245, 184, 0, 0.6)',
                  backgroundColor: 'rgba(245, 184, 0, 0.08)',
                  color: '#F5B800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
                  touchAction: 'manipulation'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(245, 184, 0, 0.6)',
                  backgroundColor: 'rgba(245, 184, 0, 0.08)',
                  color: '#F5B800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
                  touchAction: 'manipulation'
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.31 6.31 0 0 0 1.86-4.48V8.71a8.21 8.21 0 0 0 4.91 1.63v-3.65z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sub-Footer Legal Line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.5rem',
          color: '#64748B',
          fontSize: '0.75rem',
          gap: '1rem',
          flexWrap: 'wrap'
        }} className="sub-footer">
          <span>© 2025 IKAPA Fleet Management. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              onClick={() => onNavigate('privacy')} 
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px 0', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5B800')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button 
              onClick={() => onNavigate('terms')} 
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px 0', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5B800')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
            >
              Terms & Conditions
            </button>
            <span>|</span>
            <button 
              onClick={() => onNavigate('cookies')} 
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px 0', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5B800')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          .footer-col {
            grid-column: span 1 !important;
          }
          .footer-col:first-child {
            grid-column: span 2 !important;
          }
        }

        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
          .footer-col, .footer-col:first-child {
            grid-column: span 1 !important;
          }
          .sub-footer {
            flex-direction: column !important;
            text-align: center !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
