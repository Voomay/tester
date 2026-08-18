import React from 'react';
import { ChevronRight, Cookie, Settings, ArrowLeft, CheckCircle2, Info } from 'lucide-react';

interface CookiesPageProps {
  onNavigate: (page: string) => void;
}

export const CookiesPage: React.FC<CookiesPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ paddingBottom: '5rem' }} className="animate-fade-in">
      {/* Cover Header Section */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '9rem',
        paddingBottom: '4rem',
        marginBottom: '3rem',
        backgroundImage: `
          linear-gradient(90deg, rgba(6, 9, 16, 0.96) 0%, rgba(6, 9, 16, 0.85) 45%, rgba(6, 9, 16, 0.6) 80%, rgba(6, 9, 16, 0.4) 100%),
          linear-gradient(180deg, rgba(6, 9, 16, 0.8) 0%, rgba(6, 9, 16, 0.4) 40%, rgba(6, 9, 16, 0.9) 100%),
          url('/assets/ikapa_cover_car.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Ambient Glow */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '10%',
          width: '400px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(245, 184, 0, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb Trail */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#94A3B8',
            fontSize: '0.8rem',
            fontFamily: 'Montserrat',
            fontWeight: 700,
            marginBottom: '1.5rem',
            backgroundColor: 'rgba(6, 9, 16, 0.65)',
            padding: '0.35rem 0.85rem',
            borderRadius: '20px',
            border: '1px solid rgba(245, 184, 0, 0.3)',
            backdropFilter: 'blur(6px)'
          }}>
            <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', padding: 0 }}>HOME</button>
            <ChevronRight size={14} color="#F5B800" />
            <span style={{ color: '#F5B800' }}>COOKIE POLICY</span>
          </div>

          <div style={{ maxWidth: '780px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(245, 184, 0, 0.12)',
              border: '1px solid #F5B800',
              borderRadius: '20px',
              padding: '0.35rem 0.95rem',
              marginBottom: '1.25rem'
            }}>
              <Cookie size={14} color="#F5B800" />
              <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                TRANSPARENCY & TRACKING TECHNOLOGIES
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Montserrat',
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.5px',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              COOKIE <span style={{ color: '#F5B800' }}>POLICY</span>
            </h1>

            <p style={{
              color: '#CBD5E1',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              maxWidth: '650px'
            }}>
              Learn how IKAPA Fleet Management uses cookies, local storage, and related web technologies to ensure smooth ticket purchases, secure browsing, and optimal user experiences.
            </p>

            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#94A3B8', fontSize: '0.82rem' }}>
              <span>Effective Date: <strong>1 January 2025</strong></span>
              <span>•</span>
              <span>Last Review: <strong>February 2025</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="legal-layout-grid">
          
          {/* Left Sticky Summary Card */}
          <div style={{
            position: 'sticky',
            top: '90px',
            backgroundColor: 'rgba(12, 17, 27, 0.85)',
            border: '1.5px solid rgba(245, 184, 0, 0.35)',
            borderRadius: '12px',
            padding: '1.75rem',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
          }}>
            <h3 style={{
              color: '#F5B800',
              fontFamily: 'Montserrat',
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Settings size={16} color="#F5B800" />
              <span>Cookie Topics</span>
            </h3>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                '1. What Are Cookies?',
                '2. Why We Use Cookies',
                '3. Types of Cookies We Use',
                '4. Managing & Disabling',
                '5. Third-Party Services',
                '6. Updates & Inquiries'
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#cookie-section-${idx + 1}`}
                    style={{
                      color: '#CBD5E1',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontFamily: 'Montserrat',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s ease',
                      padding: '0.35rem 0'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#F5B800';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#CBD5E1';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <CheckCircle2 size={13} color="#F5B800" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button 
                onClick={() => onNavigate('contact')}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '0.65rem 1rem' }}
              >
                <Info size={15} />
                <span>HAVE QUESTIONS?</span>
              </button>
            </div>
          </div>

          {/* Right Detailed Cookie Document Content */}
          <div style={{
            backgroundColor: 'rgba(8, 12, 20, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '2.5rem',
            lineHeight: 1.7,
            color: '#CBD5E1'
          }}>
            
            {/* Section 1 */}
            <div id="cookie-section-1" style={{ marginBottom: '2.75rem' }}>
              <h2 style={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat',
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '-0.3px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ color: '#F5B800', fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.5rem' }}>01.</span>
                <span>What Are Cookies & Web Storage?</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Cookies are small text files placed on your computer, tablet, or mobile smartphone when you browse websites. They are widely used to make websites work efficiently, remember your shopping cart items, and provide analytical telemetry to website owners.
              </p>
              <p>
                In addition to standard HTTP cookies, we may use modern browser web storage (`localStorage` and `sessionStorage`) to preserve your masterclass ticket selections without saving sensitive payment data directly on your device.
              </p>
            </div>

            {/* Section 2 */}
            <div id="cookie-section-2" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h2 style={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat',
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '-0.3px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ color: '#F5B800', fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.5rem' }}>02.</span>
                <span>Why IKAPA Uses Cookies</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We utilize cookies for essential functional purposes and performance enhancements:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Preserving Checkout State:</strong> Ensuring your selected Masterclass VIP or General Admission tickets remain in your cart as you navigate across pages.</li>
                <li><strong>Security & Anti-Fraud:</strong> Protecting form submissions, preventing automated bot inquiries, and verifying secure checkout sessions.</li>
                <li><strong>Site Performance:</strong> Analyzing page speed, user interaction flows, and optimizing mobile rendering on all modern devices.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="cookie-section-3" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h2 style={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat',
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '-0.3px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ color: '#F5B800', fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.5rem' }}>03.</span>
                <span>Categories of Cookies We Deploy</span>
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
                
                {/* Category A */}
                <div style={{ backgroundColor: 'rgba(15, 22, 35, 0.65)', border: '1.5px solid rgba(245, 184, 0, 0.25)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h4 style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1rem' }}>
                      Strictly Necessary / Essential Cookies
                    </h4>
                    <span style={{ backgroundColor: '#F5B800', color: '#000', fontSize: '0.7rem', fontWeight: 800, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                      REQUIRED
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#94A3B8' }}>
                    These cookies are necessary for the website to function. They enable core features like ticket selection memory, cart drawers, and secure modal dialogs. These cannot be switched off in our systems.
                  </p>
                </div>

                {/* Category B */}
                <div style={{ backgroundColor: 'rgba(15, 22, 35, 0.65)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h4 style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1rem' }}>
                      Performance & Analytics Cookies
                    </h4>
                    <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#CBD5E1', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                      ANALYTICS
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#94A3B8' }}>
                    These allow us to count page visits and traffic sources so we can measure and improve the performance of our site, identifying popular articles and high-demand fleet resources.
                  </p>
                </div>

                {/* Category C */}
                <div style={{ backgroundColor: 'rgba(15, 22, 35, 0.65)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h4 style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1rem' }}>
                      Functional & Preference Cookies
                    </h4>
                    <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#CBD5E1', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                      PREFERENCES
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#94A3B8' }}>
                    These cookies enable the website to provide enhanced functionality, such as remembering your form input if you accidentally refresh the page during a contact inquiry.
                  </p>
                </div>

              </div>
            </div>

            {/* Section 4 */}
            <div id="cookie-section-4" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h2 style={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat',
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '-0.3px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ color: '#F5B800', fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.5rem' }}>04.</span>
                <span>How to Manage & Disable Cookies</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                You have the right to accept or decline non-essential cookies. You can configure your browser settings to block or notify you about cookies:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Third-Party Cookies.</li>
                <li><strong>Apple Safari:</strong> Preferences → Privacy → Block all cookies.</li>
                <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data.</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and Site Permissions.</li>
              </ul>
              <p style={{ marginTop: '1rem', fontSize: '0.88rem', color: '#94A3B8' }}>
                <em>Please note: If you choose to disable cookies, some sections of our ticket checkout or interactive inquiry forms may not function at optimal capacity.</em>
              </p>
            </div>

            {/* Section 5 */}
            <div id="cookie-section-5" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h2 style={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat',
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '-0.3px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ color: '#F5B800', fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.5rem' }}>05.</span>
                <span>Third-Party Embedded Technologies</span>
              </h2>
              <p>
                When interacting with social media links (Facebook, Instagram, TikTok) or making ticket payments through verified gateways, those third-party providers may set their own cookies to authenticate transactions or track referral links. We encourage you to review their respective privacy and cookie notices.
              </p>
            </div>

            {/* Section 6 */}
            <div id="cookie-section-6" style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(245, 184, 0, 0.3)' }}>
              <div style={{
                backgroundColor: 'rgba(245, 184, 0, 0.06)',
                border: '1.5px solid rgba(245, 184, 0, 0.35)',
                borderRadius: '10px',
                padding: '1.75rem'
              }}>
                <h3 style={{
                  color: '#F5B800',
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  marginBottom: '0.75rem'
                }}>
                  06. Inquiries & Contact Details
                </h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                  For any questions regarding our Cookie Policy or data storage practices, please reach out to our team:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: '#FFFFFF' }}>
                  <span><strong>IKAPA Fleet Management</strong></span>
                  <span>Email: <a href="mailto:info@ikapafleet.co.za" style={{ color: '#F5B800', textDecoration: 'none' }}>info@ikapafleet.co.za</a></span>
                  <span>Phone: <a href="tel:0825490398" style={{ color: '#F5B800', textDecoration: 'none' }}>082 549 0398</a></span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
              <button 
                onClick={() => onNavigate('home')} 
                className="btn-gold" 
                style={{ fontSize: '0.85rem' }}
              >
                <ArrowLeft size={16} />
                <span>RETURN TO HOME</span>
              </button>
              <button 
                onClick={() => onNavigate('privacy')} 
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(245, 184, 0, 0.5)',
                  color: '#F5B800',
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                VIEW PRIVACY POLICY
              </button>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .legal-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};
