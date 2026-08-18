import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Car, 
  TrendingUp, 
  Wrench, 
  Clock 
} from 'lucide-react';

export const MetricHighlights: React.FC = () => {
  const highlights = [
    {
      title: '100%',
      subtitle: 'COMPLIANT SOLUTIONS',
      icon: <ShieldCheck size={30} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'VETTED',
      subtitle: 'PROFESSIONAL DRIVERS',
      icon: <Users size={30} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'REAL-TIME',
      subtitle: 'MONITORING',
      icon: <Car size={30} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'MAXIMISED',
      subtitle: 'EARNINGS',
      icon: <TrendingUp size={30} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'MAINTENANCE',
      subtitle: 'MANAGED',
      icon: <Wrench size={30} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'TIME-SAVING',
      subtitle: 'MANAGEMENT',
      icon: <Clock size={30} color="#F5B800" strokeWidth={1.5} />
    }
  ];

  return (
    <section style={{ padding: '1.5rem 0 2.5rem' }}>
      <div className="container">
        <div className="gold-box" style={{ overflow: 'hidden', border: '2px solid #F5B800', borderRadius: '10px', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }} className="metrics-grid">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '1.5rem 0.65rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
                className="metric-cell"
              >
                <div style={{ marginBottom: '0.65rem' }}>
                  {item.icon}
                </div>

                <span style={{
                  fontFamily: 'Montserrat',
                  fontWeight: 900,
                  fontSize: '1rem',
                  color: '#FFFFFF',
                  letterSpacing: '0.5px',
                  lineHeight: 1.15
                }}>
                  {item.title}
                </span>

                <span style={{
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  color: '#94A3B8',
                  letterSpacing: '0.4px',
                  marginTop: '2px'
                }}>
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .metrics-grid .metric-cell {
          border-right: 1px solid rgba(245, 184, 0, 0.25);
        }
        .metrics-grid .metric-cell:last-child {
          border-right: none;
        }

        @media (max-width: 900px) {
          .metrics-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
          .metrics-grid .metric-cell {
            border-right: 1px solid rgba(245, 184, 0, 0.2) !important;
            border-bottom: 1px solid rgba(245, 184, 0, 0.2) !important;
            box-sizing: border-box !important;
            min-width: 0 !important;
          }
          .metrics-grid .metric-cell:nth-child(3n) {
            border-right: none !important;
          }
        }

        @media (max-width: 550px) {
          .metrics-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .metrics-grid .metric-cell {
            padding: 1.15rem 0.5rem !important;
            box-sizing: border-box !important;
            min-width: 0 !important;
          }
          .metrics-grid .metric-cell:nth-child(3n) {
            border-right: 1px solid rgba(245, 184, 0, 0.2) !important;
          }
          .metrics-grid .metric-cell:nth-child(2n) {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
};
