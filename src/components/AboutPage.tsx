import React from 'react';
import { ChevronRight, ShieldCheck, Award, TrendingUp, CheckCircle2, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <div style={{ paddingBottom: '4rem' }} className="animate-fade-in">
      {/* Cover Header Section with Image Background & Breadcrumb */}
      <div 
        className="page-cover-header"
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '9.5rem',
          paddingBottom: '4rem',
          marginBottom: '3rem',
          backgroundImage: `
            linear-gradient(90deg, rgba(6, 9, 16, 0.94) 0%, rgba(6, 9, 16, 0.8) 42%, rgba(6, 9, 16, 0.45) 75%, rgba(6, 9, 16, 0.2) 100%),
            linear-gradient(180deg, rgba(6, 9, 16, 0.8) 0%, rgba(6, 9, 16, 0.2) 35%, rgba(6, 9, 16, 0.7) 80%, #060910 100%),
            url('/assets/ikapa_cover_car.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Ambient Glow */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          left: '15%',
          width: '450px',
          maxWidth: '100vw',
          height: '220px',
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
            marginBottom: '1.25rem',
            backgroundColor: 'rgba(6, 9, 16, 0.6)',
            padding: '0.35rem 0.85rem',
            borderRadius: '20px',
            border: '1px solid rgba(245, 184, 0, 0.3)',
            backdropFilter: 'blur(6px)'
          }}>
            <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', padding: 0 }}>HOME</button>
            <ChevronRight size={14} color="#F5B800" />
            <span style={{ color: '#F5B800' }}>ABOUT US</span>
          </div>

          <h1 style={{ 
            fontFamily: 'Montserrat', 
            fontWeight: 900, 
            fontSize: 'clamp(1.65rem, 3.2vw, 2.35rem)', 
            color: '#FFFFFF', 
            lineHeight: 1.15,
            letterSpacing: '0.5px',
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.9)'
          }}>
            ABOUT <span style={{ color: '#F5B800' }}>IKAPA FLEET MANAGEMENT</span>
          </h1>

          <p style={{ 
            color: '#F5B800', 
            fontSize: '0.88rem', 
            fontFamily: 'Montserrat',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginTop: '1rem',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)'
          }}>
            DRIVEN BY EXCELLENCE. POWERED BY PARTNERSHIP.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Story Section: Image + Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '3rem',
          alignItems: 'stretch',
          marginBottom: '4rem'
        }} className="about-story-grid">
          {/* Left Visual Card */}
          <div style={{ gridColumn: 'span 6', display: 'flex' }} className="about-col">
            <div 
              className="about-story-card gold-box"
              style={{ 
                position: 'relative', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                border: '1.5px solid #F5B800',
                width: '100%',
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(245, 184, 0, 0.05)',
                backgroundColor: '#070A11',
                boxSizing: 'border-box'
              }}
            >
              <img 
                src="/assets/ikapa_fleet_hero.jpg" 
                alt="IKAPA Fleet in Cape Town"
                className="about-story-img"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  minHeight: '320px',
                  objectFit: 'cover', 
                  objectPosition: 'center center',
                  display: 'block' 
                }}
              />
              <div 
                className="about-story-badge"
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(7, 10, 17, 0.94)',
                  border: '1px solid rgba(245, 184, 0, 0.4)',
                  borderRadius: '8px',
                  padding: '0.75rem 0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.7)'
                }}
              >
                <Award size={28} color="#F5B800" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontFamily: 'Montserrat', fontWeight: 900, color: '#FFFFFF', fontSize: '0.85rem', lineHeight: 1.2 }}>
                    WESTERN CAPE'S LEADING FLEET MANAGER
                  </h4>
                  <p style={{ color: '#94A3B8', fontSize: '0.7rem', marginTop: '2px' }}>Transforming vehicle ownership into hands-off passive income.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Story */}
          <div style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className="about-col">
            <div>
              <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.78rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                OUR MISSION & PURPOSE
              </span>
              <h2 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.65rem', color: '#FFFFFF', margin: '0.4rem 0 1rem', lineHeight: 1.2 }}>
                WE MANAGE THE OPERATIONS. <br />
                <span style={{ color: '#F5B800' }}>YOU ENJOY THE RETURNS.</span>
              </h2>

              <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                IKAPA Fleet Management was founded to solve the core challenges facing vehicle owners in South Africa's fast-growing e-hailing industry: driver management, regulatory licensing, maintenance oversight, and income security. By pairing experienced, thoroughly vetted professional drivers with compliant vehicles and cutting-edge telematics, we allow investors to build profitable e-hailing fleets without the stress of daily operational management.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }} className="about-checklist">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="#F5B800" />
                  <span>100% Compliant Licensing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="#F5B800" />
                  <span>Strict Driver Vetting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="#F5B800" />
                  <span>Transparent Weekly Payouts</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} color="#F5B800" />
                  <span>Full Telematics Oversight</span>
                </div>
              </div>
            </div>

            <div>
              <button onClick={onOpenModal} className="btn-gold" style={{ fontSize: '0.85rem', padding: '0.75rem 1.75rem' }}>
                PARTNER WITH IKAPA TODAY
              </button>
            </div>
          </div>
        </div>

        {/* 4 Key Pillars Stats Banner */}
        <div className="gold-box" style={{ padding: '2rem 1.5rem', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', textAlign: 'center' }} className="stats-grid">
            <div className="stat-card" style={{ padding: '0.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontFamily: 'Montserrat', fontWeight: 900, color: '#F5B800' }}>100%</div>
              <div style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.8rem', marginTop: '4px' }}>OPERATING LICENSE COMPLIANCE</div>
            </div>
            <div className="stat-card" style={{ padding: '0.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontFamily: 'Montserrat', fontWeight: 900, color: '#F5B800' }}>98%</div>
              <div style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.8rem', marginTop: '4px' }}>DRIVER RETENTION RATE</div>
            </div>
            <div className="stat-card" style={{ padding: '0.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontFamily: 'Montserrat', fontWeight: 900, color: '#F5B800' }}>24/7</div>
              <div style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.8rem', marginTop: '4px' }}>REAL-TIME GPS TELEMATICS</div>
            </div>
            <div className="stat-card" style={{ padding: '0.5rem' }}>
              <div style={{ fontSize: '2.2rem', fontFamily: 'Montserrat', fontWeight: 900, color: '#F5B800' }}>500+</div>
              <div style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.8rem', marginTop: '4px' }}>VEHICLES MANAGED PROSPEROUSLY</div>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px' }}>
              OUR GUIDING PRINCIPLES
            </span>
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '2rem', color: '#FFFFFF', marginTop: '0.3rem' }}>
              OUR CORE VALUES
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="values-grid">
            <div className="gold-box" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <ShieldCheck size={36} color="#F5B800" style={{ margin: '0 auto 0.85rem' }} />
              <h3 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Uncompromising Compliance
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                We ensure every vehicle operates strictly within Western Cape Transport & PRE regulations to safeguard your asset from fines or impoundment.
              </p>
            </div>

            <div className="gold-box" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <HeartHandshake size={36} color="#F5B800" style={{ margin: '0 auto 0.85rem' }} />
              <h3 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Partner Prosperity
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Our business model is built around your success. When your vehicle generates consistent net returns, our partnership thrives.
              </p>
            </div>

            <div className="gold-box" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <TrendingUp size={36} color="#F5B800" style={{ margin: '0 auto 0.85rem' }} />
              <h3 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Transparent Operations
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Complete visibility over vehicle telemetry, driver trips, weekly earnings reports, and preventative maintenance logs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stats-grid .stat-card {
          border-right: 1px solid rgba(245, 184, 0, 0.25);
        }
        .stats-grid .stat-card:last-child {
          border-right: none;
        }

        @media (max-width: 900px) {
          .page-cover-header {
            padding-top: 7rem !important;
            padding-bottom: 3rem !important;
            margin-bottom: 2rem !important;
          }
          .about-story-grid, .values-grid {
            grid-template-columns: repeat(1, 1fr) !important;
            gap: 2rem !important;
            margin-bottom: 2.5rem !important;
          }
          .about-col {
            grid-column: span 12 !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .about-story-card {
            min-height: auto !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            box-sizing: border-box !important;
            border: 1.5px solid #F5B800 !important;
            border-radius: 8px !important;
          }
          .about-story-img {
            min-height: auto !important;
            height: auto !important;
            width: 100% !important;
            aspect-ratio: 16/10 !important;
            object-fit: cover !important;
            object-position: center center !important;
            display: block !important;
          }
          .about-story-badge {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            right: auto !important;
            margin: 0.75rem !important;
            padding: 0.75rem 0.85rem !important;
            background-color: rgba(7, 10, 17, 0.96) !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          .stats-grid .stat-card:nth-child(2) {
            border-right: none !important;
          }
          .stats-grid .stat-card:nth-child(1), .stats-grid .stat-card:nth-child(2) {
            border-bottom: 1px solid rgba(245, 184, 0, 0.2);
            padding-bottom: 1.25rem !important;
          }
        }

        @media (max-width: 500px) {
          .about-checklist {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid .stat-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(245, 184, 0, 0.2);
            padding-bottom: 1rem !important;
          }
          .stats-grid .stat-card:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  );
};
