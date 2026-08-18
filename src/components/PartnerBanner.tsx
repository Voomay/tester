import React from 'react';

export const PartnerBanner: React.FC = () => {
  return (
    <section style={{ padding: '1rem 0 3rem' }}>
      <div className="container">
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          border: '1px solid rgba(245, 184, 0, 0.5)',
          padding: '1.5rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(245, 184, 0, 0.1)',
          width: '100%'
        }} className="partner-banner-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="partner-title-wrap">
            <span style={{
              width: '4px',
              height: '24px',
              backgroundColor: '#F5B800',
              borderRadius: '2px',
              display: 'inline-block'
            }} />
            <span style={{
              fontFamily: 'Montserrat',
              fontWeight: 900,
              fontSize: '1.1rem',
              color: '#000000',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}>
              PROUDLY PARTNERED WITH
            </span>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-end',
            gap: '3rem',
            flex: 1,
            flexWrap: 'wrap'
          }} className="partner-logos-wrap">
            {/* Bolt Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="/assets/bolt_logo_raw.png" 
                alt="Bolt" 
                style={{
                  height: '54px',
                  width: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.05)'
                }}
              />
            </div>

            <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} className="partner-sep" />

            {/* Uber Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="/assets/uber_logo_raw.png" 
                alt="Uber" 
                style={{
                  height: '44px',
                  width: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.05)'
                }}
              />
            </div>

            <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} className="partner-sep" />

            {/* inDrive Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="/assets/indrive_logo_raw.png" 
                alt="inDrive" 
                style={{
                  height: '48px',
                  width: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.05)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .partner-banner-inner {
            flex-direction: column !important;
            gap: 1.25rem !important;
            padding: 1.35rem 1.25rem !important;
            text-align: center;
          }
          .partner-title-wrap {
            justify-content: center !important;
          }
          .partner-logos-wrap {
            justify-content: center !important;
            gap: 1.5rem !important;
          }
          .partner-sep {
            display: none !important;
          }
          .partner-logos-wrap img {
            height: 42px !important;
          }
        }
        @media (max-width: 480px) {
          .partner-logos-wrap {
            gap: 1.25rem !important;
          }
          .partner-logos-wrap img {
            height: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};
