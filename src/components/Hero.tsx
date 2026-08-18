import React, { useState } from 'react';
import { ChevronRight, TrendingUp, Clock, ShieldCheck, CheckCircle2, Send } from 'lucide-react';
import { FleetCarLoop } from './FleetCarLoop';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceInterest: 'Fleet Management & Driver Placement'
  });

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8.5rem',
        paddingBottom: '3.5rem',
        backgroundImage: `
          linear-gradient(90deg, rgba(6, 9, 16, 0.96) 0%, rgba(6, 9, 16, 0.9) 42%, rgba(6, 9, 16, 0.55) 75%, rgba(6, 9, 16, 0.3) 100%),
          linear-gradient(180deg, rgba(6, 9, 16, 0.7) 0%, transparent 25%, transparent 75%, #060910 100%),
          url('/assets/ikapa_fleet_hero.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2rem',
          alignItems: 'center'
        }} className="hero-grid">
          {/* Left Column Content */}
          <div style={{ gridColumn: 'span 7' }} className="hero-text-col">
            {/* Top Pill Tag */}
            <div className="hero-pill-wrapper" style={{ marginBottom: '1rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(245, 184, 0, 0.15)',
                border: '1px solid #F5B800',
                borderRadius: '20px',
                padding: '0.35rem 1rem',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
              }}>
                <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Cape Town's Leading Fleet Partner
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline" style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
              fontWeight: 900,
              fontFamily: 'Montserrat',
              lineHeight: 1.16,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              letterSpacing: '-0.3px',
              marginBottom: '1rem',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.9)'
            }}>
              TURN YOUR VEHICLE INTO A <br />
              <span style={{ 
                color: '#F5B800', 
                textShadow: '0 0 25px rgba(245, 184, 0, 0.5)'
              }}>
                PROFITABLE <br />
                <span>E-HAILING INVESTMENT</span>
              </span>
            </h1>

            <div style={{
              borderLeft: '3px solid #F5B800',
              paddingLeft: '1rem',
              marginBottom: '1.25rem',
              color: '#E2E8F0',
              fontSize: '0.92rem',
              lineHeight: '1.6',
              maxWidth: '490px',
              textShadow: '0 1px 8px rgba(0, 0, 0, 0.8)'
            }} className="hero-subtext">
              IKAPA Fleet Management manages your e-hailing vehicle from licensing to driver placement, allowing{' '}
              <strong style={{ color: '#F5B800', fontWeight: 700 }}>you to earn passive income</strong> while we handle the day-to-day operations.
            </div>

            {/* Quick Actions / Modal Trigger */}
            <div className="hero-cta-wrap" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <button 
                onClick={onOpenModal} 
                className="btn-gold btn-gold-arrow" 
                style={{ borderRadius: '6px', cursor: 'pointer', boxShadow: '0 6px 25px rgba(245, 184, 0, 0.45)', minHeight: '44px' }}
              >
                <span>GET STARTED TODAY</span>
                <span style={{
                  background: '#000',
                  color: '#F5B800',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px 8px',
                  borderRadius: '3px',
                  clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)'
                }}>
                  <ChevronRight size={18} strokeWidth={3} />
                </span>
              </button>
            </div>

            {/* Key Trust Stats */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.25rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              flexWrap: 'wrap',
              width: 'fit-content'
            }} className="hero-stats-row">
              <div>
                <div style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.25rem', lineHeight: 1.1 }}>100+</div>
                <div style={{ color: '#94A3B8', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>Managed Vehicles</div>
              </div>
              <div className="stat-divider" style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
              <div>
                <div style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.25rem', lineHeight: 1.1 }}>100%</div>
                <div style={{ color: '#94A3B8', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>Passive Turnkey</div>
              </div>
              <div className="stat-divider" style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
              <div>
                <div style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.25rem', lineHeight: 1.1 }}>Weekly</div>
                <div style={{ color: '#94A3B8', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>Direct Payouts</div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Centered CTA Form with Hovering Floating Badges */}
          <div style={{ gridColumn: 'span 5', position: 'relative' }} className="hero-form-wrapper">
            {/* Hovering Platform Badge (Top-Left Floating) */}
            <div 
              className="hover-float-badge float-top-left"
              style={{
                position: 'absolute',
                top: '-18px',
                left: '-10px',
                zIndex: 20,
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #F5B800',
                borderRadius: '30px',
                padding: '0.35rem 0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.65)'
              }}
            >
              <img 
                src="/assets/bolt_logo_raw.png" 
                alt="Bolt" 
                style={{ height: '17px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} 
              />
              <span style={{ color: '#CBD5E1', fontWeight: 300, fontSize: '0.85rem' }}>|</span>
              <img 
                src="/assets/uber_logo_raw.png" 
                alt="Uber" 
                style={{ height: '14px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} 
              />
              <span style={{ color: '#CBD5E1', fontWeight: 300, fontSize: '0.85rem' }}>|</span>
              <img 
                src="/assets/indrive_logo_raw.png" 
                alt="inDrive" 
                style={{ height: '15px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} 
              />
            </div>

            {/* Hovering Proven Performance Badge (Top-Right Floating) */}
            <div 
              className="hover-float-badge float-top-right"
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-8px',
                zIndex: 20,
                background: 'rgba(12, 17, 27, 0.92)',
                border: '1px solid #F5B800',
                borderRadius: '8px',
                padding: '0.35rem 0.7rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <TrendingUp size={14} color="#F5B800" />
              <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.66rem', letterSpacing: '0.5px' }}>
                PROVEN HIGH ROI
              </span>
            </div>

            {/* Sign-Up Card Box */}
            <div 
              className="hero-form-card"
              style={{
                maxWidth: '400px',
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                background: 'linear-gradient(145deg, rgba(12, 17, 27, 0.94) 0%, rgba(6, 9, 16, 0.98) 100%), #0C111B',
                border: '2px solid #F5B800',
                borderRadius: '14px',
                padding: '1.4rem 1.5rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85), 0 0 30px rgba(245, 184, 0, 0.15)',
                backdropFilter: 'blur(14px)',
                position: 'relative',
                zIndex: 10,
                boxSizing: 'border-box'
              }}
            >
              <div style={{ marginBottom: '0.85rem', textAlign: 'center' }}>
                <span style={{
                  color: '#F5B800',
                  fontFamily: 'Montserrat',
                  fontWeight: 900,
                  fontSize: '0.68rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '2px'
                }}>
                  FAST ONBOARDING
                </span>
                <h3 style={{
                  fontFamily: 'Montserrat',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  color: '#FFFFFF',
                  letterSpacing: '0.5px'
                }}>
                  SIGN UP TODAY
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.76rem', marginTop: '2px' }}>
                  Request free fleet consultation & vehicle placement
                </p>
              </div>

              {formSubmitted ? (
                <div style={{
                  textAlign: 'center',
                  padding: '1.5rem 1rem',
                  backgroundColor: 'rgba(245, 184, 0, 0.08)',
                  borderRadius: '8px',
                  border: '1px solid #F5B800'
                }}>
                  <CheckCircle2 size={38} color="#F5B800" style={{ margin: '0 auto 0.5rem' }} />
                  <h4 style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1rem' }}>
                    Thank You for Signing Up!
                  </h4>
                  <p style={{ color: '#CBD5E1', fontSize: '0.8rem', marginTop: '0.4rem', lineHeight: 1.4 }}>
                    Our team will contact you via WhatsApp & Call within 24 hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    style={{
                      marginTop: '0.85rem',
                      background: 'none',
                      border: '1px solid rgba(245, 184, 0, 0.5)',
                      color: '#F5B800',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontFamily: 'Montserrat',
                      fontWeight: 700,
                      minHeight: '40px'
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleHeroFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.72rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '2px' }}>
                      FULL NAME *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sipho Ndlovu"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.8rem',
                        backgroundColor: 'rgba(7, 10, 17, 0.85)',
                        border: '1px solid rgba(245, 184, 0, 0.4)',
                        borderRadius: '6px',
                        color: '#FFFFFF',
                        outline: 'none',
                        minHeight: '42px'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }} className="hero-form-grid">
                    <div>
                      <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.72rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '2px' }}>
                        PHONE / WHATSAPP *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="082 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.6rem 0.8rem',
                          backgroundColor: 'rgba(7, 10, 17, 0.85)',
                          border: '1px solid rgba(245, 184, 0, 0.4)',
                          borderRadius: '6px',
                          color: '#FFFFFF',
                          outline: 'none',
                          minHeight: '42px'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.72rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '2px' }}>
                        EMAIL ADDRESS *
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.6rem 0.8rem',
                          backgroundColor: 'rgba(7, 10, 17, 0.85)',
                          border: '1px solid rgba(245, 184, 0, 0.4)',
                          borderRadius: '6px',
                          color: '#FFFFFF',
                          outline: 'none',
                          minHeight: '42px'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.72rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '2px' }}>
                      SERVICE REQUIRED *
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.8rem',
                        backgroundColor: '#070A11',
                        border: '1px solid rgba(245, 184, 0, 0.4)',
                        borderRadius: '6px',
                        color: '#FFFFFF',
                        outline: 'none',
                        cursor: 'pointer',
                        minHeight: '42px'
                      }}
                    >
                      <option value="Fleet Management & Driver Placement">Full Fleet Management & Placement</option>
                      <option value="Operating License Relief & Permits">Operating License & Permits</option>
                      <option value="E-Hailing Vehicle Investment">Vehicle Placement / Investment</option>
                      <option value="Workshop & Training Masterclass">Fleet Masterclass & Training</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-gold" 
                    style={{ 
                      width: '100%', 
                      justifyContent: 'center', 
                      marginTop: '0.35rem', 
                      padding: '0.75rem', 
                      fontSize: '0.86rem',
                      fontWeight: 900,
                      borderRadius: '6px',
                      minHeight: '44px'
                    }}
                  >
                    <span>SIGN UP & GET STARTED</span>
                    <Send size={15} strokeWidth={2.5} />
                  </button>
                </form>
              )}
            </div>

            {/* Hovering Immediate Relief Badge (Bottom-Left Floating) */}
            <div 
              className="hover-float-badge float-bottom-left"
              style={{
                position: 'absolute',
                bottom: '-16px',
                left: '-10px',
                zIndex: 20,
                background: 'linear-gradient(135deg, rgba(16, 22, 35, 0.95) 0%, rgba(6, 9, 16, 0.98) 100%)',
                border: '1.5px solid #F5B800',
                borderRadius: '50px 10px 10px 50px',
                padding: '0.35rem 0.85rem 0.35rem 0.35rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(10px)',
                maxWidth: '280px'
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #F5B800 0%, #C99500 100%)',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 0 8px rgba(245, 184, 0, 0.45)'
              }}>
                <Clock size={16} color="#000000" strokeWidth={2.5} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                  <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.75rem' }}>
                    IMMEDIATE
                  </span>
                  <span style={{
                    backgroundColor: '#DC2626',
                    color: '#FFFFFF',
                    fontSize: '0.58rem',
                    fontFamily: 'Montserrat',
                    fontWeight: 900,
                    padding: '1px 4px',
                    borderRadius: '2px'
                  }}>
                    RELIEF
                  </span>
                </div>
                <span style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.68rem', lineHeight: 1.1 }}>
                  OPERATING LICENSE
                </span>
              </div>
            </div>

            {/* Hovering Fully Compliant Badge (Bottom-Right Floating) */}
            <div 
              className="hover-float-badge float-bottom-right"
              style={{
                position: 'absolute',
                bottom: '-14px',
                right: '-8px',
                zIndex: 20,
                background: 'rgba(12, 17, 27, 0.95)',
                border: '1px solid rgba(245, 184, 0, 0.6)',
                borderRadius: '8px',
                padding: '0.35rem 0.7rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <ShieldCheck size={15} color="#F5B800" />
              <span style={{ color: '#E2E8F0', fontSize: '0.68rem', fontFamily: 'Montserrat', fontWeight: 800 }}>
                100% Compliant
              </span>
            </div>
          </div>
        </div>

        {/* Live Animated Car Loop Track under SIGN UP TODAY */}
        <FleetCarLoop />
      </div>

      <style>{`
        @keyframes floatEffectA {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes floatEffectB {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(5px); }
        }

        .hover-float-badge {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-float-badge:hover {
          transform: translateY(-3px) scale(1.03) !important;
          box-shadow: 0 10px 30px rgba(245, 184, 0, 0.4) !important;
        }

        .float-top-left {
          animation: floatEffectA 4s ease-in-out infinite;
        }
        .float-top-right {
          animation: floatEffectB 4.5s ease-in-out infinite;
        }
        .float-bottom-left {
          animation: floatEffectB 5s ease-in-out infinite;
        }
        .float-bottom-right {
          animation: floatEffectA 4.2s ease-in-out infinite;
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 5.5rem !important;
            padding-bottom: 2rem !important;
            min-height: auto !important;
            background-image: 
              linear-gradient(180deg, rgba(6, 9, 16, 0.95) 0%, rgba(6, 9, 16, 0.9) 45%, rgba(6, 9, 16, 0.98) 100%),
              url('/assets/ikapa_fleet_hero.jpg') !important;
          }
          .hero-grid {
            gap: 1.5rem !important;
          }
          .hero-text-col, .hero-form-wrapper {
            grid-column: span 12 !important;
          }
          .hero-text-col {
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-pill-wrapper {
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
          }
          .hero-headline {
            text-align: center !important;
            font-size: 1.55rem !important;
            margin-bottom: 0.75rem !important;
          }
          .hero-subtext {
            text-align: center !important;
            border-left: none !important;
            border-top: 2px solid #F5B800 !important;
            padding-left: 0 !important;
            padding-top: 0.6rem !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 1rem !important;
            font-size: 0.88rem !important;
            line-height: 1.55 !important;
          }
          .hero-cta-wrap {
            justify-content: center !important;
            width: 100% !important;
            margin-bottom: 1rem !important;
          }
          .hero-stats-row {
            justify-content: center !important;
            width: 100% !important;
            padding-top: 0.75rem !important;
            margin-top: 0 !important;
          }
          .hero-form-wrapper {
            width: 100% !important;
            max-width: 380px !important;
            margin: 1.25rem auto 0.75rem auto !important;
            position: relative !important;
            box-sizing: border-box !important;
          }
          .hero-form-card {
            max-width: 100% !important;
            width: 100% !important;
            padding: 1.25rem 1.15rem !important;
            box-sizing: border-box !important;
            border: 2px solid #F5B800 !important;
          }
          .float-top-left {
            top: -14px !important;
            left: 0px !important;
          }
          .float-top-right {
            top: -12px !important;
            right: 0px !important;
          }
          .float-bottom-left {
            bottom: -13px !important;
            left: 0px !important;
          }
          .float-bottom-right {
            bottom: -12px !important;
            right: 0px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-headline {
            font-size: 1.35rem !important;
          }
          .hero-form-grid {
            grid-template-columns: 1fr !important;
          }
          .stat-divider {
            display: none !important;
          }
          .hero-stats-row {
            gap: 1rem !important;
          }
          .float-top-left {
            top: -12px !important;
            left: 0px !important;
            padding: 0.25rem 0.65rem !important;
          }
          .float-top-right {
            top: -10px !important;
            right: 0px !important;
            padding: 0.25rem 0.55rem !important;
          }
          .float-bottom-left {
            bottom: -12px !important;
            left: 0px !important;
            padding: 0.25rem 0.65rem 0.25rem 0.25rem !important;
          }
          .float-bottom-right {
            bottom: -10px !important;
            right: 0px !important;
            padding: 0.25rem 0.55rem !important;
          }
        }
      `}</style>
    </section>
  );
};
