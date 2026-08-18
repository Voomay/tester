import React from 'react';
import { Ticket, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface CourseBannerProps {
  onNavigate: (page: string) => void;
}

export const CourseBanner: React.FC<CourseBannerProps> = ({ onNavigate }) => {
  return (
    <section style={{ padding: '1rem 0 2.5rem' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, #101726 0%, #1A2338 100%)',
          border: '1.5px solid #F5B800',
          borderRadius: '12px',
          padding: '1.75rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
          position: 'relative',
          overflow: 'hidden'
        }} className="course-banner-wrap">
          {/* Left info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="course-banner-left">
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #F5B800 0%, #C99500 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 0 20px rgba(245, 184, 0, 0.4)'
            }}>
              <Ticket size={26} color="#000000" />
            </div>

            <div>
              <div 
                className="course-banner-meta"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.65rem', 
                  marginBottom: '6px', 
                  flexWrap: 'wrap' 
                }}
              >
                <span style={{
                  backgroundColor: '#F5B800',
                  color: '#000000',
                  fontFamily: 'Montserrat',
                  fontWeight: 900,
                  fontSize: '0.65rem',
                  padding: '2px 8px',
                  borderRadius: '3px',
                  letterSpacing: '1px'
                }}>
                  IN-PERSON WORKSHOP
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94A3B8', fontSize: '0.75rem', flexWrap: 'wrap' }}>
                  <Calendar size={13} color="#F5B800" />
                  <span>15 August 2026</span>
                  <span>•</span>
                  <MapPin size={13} color="#F5B800" />
                  <span>Cape Town, Western Cape</span>
                </div>
              </div>

              <h3 
                className="course-banner-title"
                style={{
                  fontFamily: 'Montserrat',
                  fontWeight: 900,
                  fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
                  color: '#FFFFFF',
                  lineHeight: 1.25
                }}
              >
                IKAPA FLEET MASTERCLASS: <span style={{ color: '#F5B800' }}>BUY WORKSHOP TICKETS</span>
              </h3>
            </div>
          </div>

          {/* Right Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexShrink: 0 }} className="course-banner-right">
            <div style={{ textAlign: 'right' }} className="course-banner-price">
              <span style={{ color: '#94A3B8', fontSize: '0.7rem', display: 'block' }}>Tickets From</span>
              <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.35rem' }}>R 450</span>
            </div>

            <button 
              onClick={() => onNavigate('course')}
              className="btn-gold btn-gold-arrow course-banner-btn"
              style={{ borderRadius: '6px', cursor: 'pointer', padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              <span>BUY TICKETS NOW</span>
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

      <style>{`
        @media (max-width: 900px) {
          .course-banner-wrap {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1.25rem !important;
            padding: 1.5rem 1.25rem !important;
          }
          .course-banner-left {
            flex-direction: column !important;
            align-items: center !important;
          }
          .course-banner-left > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .course-banner-meta {
            justify-content: center !important;
            margin-bottom: 0.5rem !important;
          }
          .course-banner-title {
            text-align: center !important;
          }
          .course-banner-right {
            width: 100% !important;
            justify-content: space-between !important;
          }
          .course-banner-price {
            text-align: left !important;
          }
          .course-banner-btn {
            flex: 1;
            justify-content: center;
          }
        }
        @media (max-width: 500px) {
          .course-banner-right {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .course-banner-price {
            text-align: center !important;
          }
          .course-banner-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
