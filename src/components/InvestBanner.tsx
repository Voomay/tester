import React from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';

interface InvestBannerProps {
  onOpenModal: () => void;
}

export const InvestBanner: React.FC<InvestBannerProps> = ({ onOpenModal }) => {
  return (
    <section style={{ padding: '2.5rem 0' }}>
      <div className="container">
        <div 
          className="invest-banner-card"
          style={{
            position: 'relative',
            backgroundImage: `
              linear-gradient(90deg, rgba(6, 9, 16, 0.98) 0%, rgba(6, 9, 16, 0.92) 35%, rgba(6, 9, 16, 0.65) 58%, rgba(6, 9, 16, 0.2) 85%, rgba(245, 184, 0, 0.15) 100%),
              linear-gradient(180deg, rgba(6, 9, 16, 0.3) 0%, rgba(6, 9, 16, 0.6) 100%),
              url('/assets/ikapa_invest_car.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            backgroundRepeat: 'no-repeat',
            border: '1.5px solid rgba(245, 184, 0, 0.45)',
            borderRadius: '14px',
            padding: '3.25rem 3.5rem',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(245, 184, 0, 0.12)'
          }}
        >
          {/* Subtle Ambient Radial Glow on Left */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            left: '-50px',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(245, 184, 0, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2.5rem',
            position: 'relative',
            zIndex: 1
          }} className="invest-banner-content">
            {/* Left Column: Bold Headline & Value Proposition */}
            <div style={{ flex: '1 1 55%', maxWidth: '580px' }} className="invest-left-col">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(245, 184, 0, 0.15)',
                border: '1px solid #F5B800',
                borderRadius: '20px',
                padding: '0.35rem 0.95rem',
                marginBottom: '1.25rem',
                backdropFilter: 'blur(8px)'
              }}>
                <ShieldCheck size={14} color="#F5B800" />
                <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  TURNKEY FLEET PARTNERSHIP
                </span>
              </div>

              <h2 style={{
                fontFamily: 'Montserrat',
                fontWeight: 900,
                fontSize: 'clamp(1.35rem, 2.5vw, 2.15rem)',
                lineHeight: 1.18,
                letterSpacing: '-0.3px',
                margin: 0,
                textTransform: 'uppercase',
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.9)'
              }}>
                <span style={{ color: '#FFFFFF', display: 'block' }}>
                  INVEST IN A VEHICLE,
                </span>
                <span style={{ 
                  color: '#F5B800', 
                  display: 'block',
                  textShadow: '0 0 20px rgba(245, 184, 0, 0.4)'
                }}>
                  LET IKAPA MANAGE THE REST.
                </span>
              </h2>

              <p style={{
                color: '#CBD5E1',
                fontSize: '0.92rem',
                lineHeight: 1.55,
                marginTop: '1rem',
                textShadow: '0 1px 10px rgba(0, 0, 0, 0.8)',
                maxWidth: '480px'
              }}>
                We take care of driver vetting, municipal licensing, routine maintenance, and direct weekly payouts — giving you true hands-off passive returns.
              </p>
            </div>

            {/* Right Column: Sleek Glassmorphism Callout Box */}
            <div style={{ flex: '0 0 auto' }} className="invest-right-group">
              <div 
                className="invest-callout-glass"
                style={{
                  maxWidth: '340px',
                  width: '100%',
                  backgroundColor: 'rgba(6, 9, 16, 0.88)',
                  border: '1.5px solid rgba(245, 184, 0, 0.55)',
                  borderRadius: '12px',
                  padding: '1.65rem 1.85rem',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.85), 0 0 20px rgba(245, 184, 0, 0.15)',
                  backdropFilter: 'blur(14px)',
                  textAlign: 'left'
                }}
              >
                <span style={{
                  color: '#F5B800',
                  fontFamily: 'Montserrat',
                  fontWeight: 900,
                  fontSize: '0.72rem',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '6px'
                }}>
                  READY TO START EARNING?
                </span>

                <p style={{
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  lineHeight: 1.45,
                  marginBottom: '1.35rem'
                }}>
                  Contact us today to discuss how your vehicle can start generating consistent income.
                </p>

                <button 
                  onClick={onOpenModal} 
                  className="btn-gold btn-gold-arrow"
                  style={{
                    width: '100%',
                    borderRadius: '6px',
                    padding: '0.75rem 1.25rem',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(245, 184, 0, 0.45)'
                  }}
                >
                  <span>CONTACT US TODAY</span>
                  <span style={{
                    background: '#000',
                    color: '#F5B800',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3px 6px',
                    borderRadius: '3px'
                  }}>
                    <ChevronRight size={16} strokeWidth={3} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 990px) {
          .invest-banner-content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1.75rem !important;
          }
          .invest-left-col {
            max-width: 100% !important;
          }
          .invest-left-col > div {
            margin-left: auto;
            margin-right: auto;
          }
          .invest-banner-card {
            padding: 2.25rem 1.35rem !important;
            background-image: 
              linear-gradient(180deg, rgba(6, 9, 16, 0.96) 0%, rgba(6, 9, 16, 0.88) 50%, rgba(6, 9, 16, 0.98) 100%),
              url('/assets/ikapa_invest_car.jpg') !important;
          }
          .invest-right-group {
            width: 100% !important;
          }
          .invest-callout-glass {
            max-width: 100% !important;
            text-align: center !important;
            padding: 1.5rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
