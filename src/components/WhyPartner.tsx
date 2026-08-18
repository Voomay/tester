import React from 'react';
import { 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Gauge, 
  FileCheck, 
  BarChart3 
} from 'lucide-react';

export const WhyPartner: React.FC = () => {
  const items = [
    {
      title: 'GENERATE INCOME FROM YOUR VEHICLE INVESTMENT',
      icon: <TrendingUp size={32} color="#F5B800" />
    },
    {
      title: 'REDUCE THE CHALLENGES OF MANAGING DRIVERS',
      icon: <Users size={32} color="#F5B800" />
    },
    {
      title: 'PROFESSIONAL FLEET OVERSIGHT',
      icon: <ShieldCheck size={32} color="#F5B800" />
    },
    {
      title: 'IMPROVED VEHICLE UTILISATION',
      icon: <Gauge size={32} color="#F5B800" />
    },
    {
      title: 'COMPLIANCE AND LICENSING SUPPORT',
      icon: <FileCheck size={32} color="#F5B800" />
    },
    {
      title: 'TRANSPARENT REPORTING AND ACCOUNTABILITY',
      icon: <BarChart3 size={32} color="#F5B800" />
    }
  ];

  return (
    <section id="why-ikapa" style={{ padding: '3rem 0' }}>
      <div className="container">
        {/* Header with flanked gold lines */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
          flexWrap: 'nowrap'
        }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(245, 184, 0, 0.6) 100%)' }} />
          <h2 style={{
            fontFamily: 'Montserrat',
            fontWeight: 900,
            fontSize: 'clamp(1.2rem, 3vw, 1.9rem)',
            letterSpacing: '0.8px',
            color: '#FFFFFF',
            textAlign: 'center',
            textTransform: 'uppercase',
            padding: '0 0.5rem'
          }}>
            WHY PARTNER <span style={{ color: '#F5B800' }}>WITH IKAPA?</span>
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(245, 184, 0, 0.6) 0%, transparent 100%)' }} />
        </div>

        {/* 6-Item Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1rem'
        }} className="why-partner-grid">
          {items.map((item, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1rem 0.5rem'
              }}
              className="why-item"
            >
              {/* Circular Gold Icon Ring Container */}
              <div 
                className="why-partner-icon-wrap"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  border: '2px solid #F5B800',
                  background: 'radial-gradient(circle, rgba(245, 184, 0, 0.15) 0%, rgba(7, 10, 17, 0.8) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 0 15px rgba(245, 184, 0, 0.2)'
                }}
              >
                {item.icon}
              </div>

              <h3 
                className="why-partner-title"
                style={{
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  color: '#FFFFFF',
                  letterSpacing: '0.4px',
                  lineHeight: '1.35',
                  maxWidth: '170px'
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-partner-grid .why-item {
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        .why-partner-grid .why-item:last-child {
          border-right: none;
        }

        @media (max-width: 900px) {
          .why-partner-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.25rem 0.75rem !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .why-partner-grid .why-item {
            border-right: none !important;
            padding: 0.5rem 0.25rem !important;
            box-sizing: border-box !important;
            min-width: 0 !important;
          }
          .why-partner-icon-wrap {
            width: 52px !important;
            height: 52px !important;
            margin-bottom: 0.65rem !important;
          }
          .why-partner-title {
            font-size: 0.72rem !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
