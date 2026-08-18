import React from 'react';
import { 
  FileCheck2, 
  UserCheck, 
  Handshake, 
  Car, 
  UserSearch, 
  ClipboardCheck, 
  Wrench 
} from 'lucide-react';

export const ManagementSolutions: React.FC = () => {
  const solutions = [
    {
      title: 'OPERATING LICENSE ASSISTANCE',
      desc: 'We secure your operating license quickly and compliantly.',
      icon: <FileCheck2 size={34} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'DRIVER RECRUITMENT & VETTING',
      desc: 'We source, screen and place reliable, professional drivers.',
      icon: <UserSearch size={34} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'LEGALLY COMPLIANT DRIVER AGREEMENTS',
      desc: 'We handle contracts that protect your investment and ensure compliance.',
      icon: <Handshake size={34} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'VEHICLE MONITORING & FLEET ADMINISTRATION',
      desc: 'Real-time tracking, documentation and administration taken care of.',
      icon: <Car size={34} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'DRIVER PERFORMANCE MANAGEMENT',
      desc: 'We monitor performance to ensure safety, efficiency and profitability.',
      icon: <UserCheck size={34} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'EARNINGS & COMPLIANCE OVERSIGHT',
      desc: 'We track earnings, ensure reporting and handle regulatory requirements.',
      icon: <ClipboardCheck size={34} color="#F5B800" strokeWidth={1.5} />
    },
    {
      title: 'MAINTENANCE COORDINATION',
      desc: 'We coordinate servicing and repairs to keep your vehicle on the road.',
      icon: <Wrench size={34} color="#F5B800" strokeWidth={1.5} />
    }
  ];

  return (
    <section id="services" style={{ padding: '2.5rem 0' }}>
      <div className="container">
        {/* Yellow Header Tab */}
        <div className="section-badge-tab">
          OUR MANAGEMENT SOLUTIONS
        </div>

        {/* Box Container */}
        <div className="gold-box" style={{ overflow: 'hidden', border: '2px solid #F5B800', borderRadius: '10px', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }} className="solutions-grid">
            {solutions.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '1.75rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'background-color 0.3s ease'
                }}
                className="solution-card"
              >
                <div style={{
                  marginBottom: '1rem',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>

                <h3 style={{
                  fontSize: '0.82rem',
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.4px',
                  lineHeight: '1.3',
                  marginBottom: '0.65rem',
                  minHeight: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.78rem',
                  color: '#94A3B8',
                  lineHeight: '1.45'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .solutions-grid .solution-card {
          border-right: 1px solid rgba(245, 184, 0, 0.25);
        }
        .solutions-grid .solution-card:last-child {
          border-right: none;
        }
        .solution-card:hover {
          background-color: rgba(245, 184, 0, 0.05);
        }

        @media (max-width: 1024px) {
          .solutions-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
          .solutions-grid .solution-card {
            border-right: 1px solid rgba(245, 184, 0, 0.2) !important;
            border-bottom: 1px solid rgba(245, 184, 0, 0.2) !important;
            box-sizing: border-box !important;
            min-width: 0 !important;
          }
          .solutions-grid .solution-card:nth-child(3n) {
            border-right: none !important;
          }
        }

        @media (max-width: 640px) {
          .solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .solutions-grid .solution-card {
            padding: 1.25rem 0.85rem !important;
            border-right: 1px solid rgba(245, 184, 0, 0.2) !important;
            border-bottom: 1px solid rgba(245, 184, 0, 0.2) !important;
            box-sizing: border-box !important;
            min-width: 0 !important;
          }
          .solutions-grid .solution-card:nth-child(2n) {
            border-right: none !important;
          }
          .solutions-grid .solution-card:last-child {
            grid-column: span 2;
            border-bottom: none !important;
          }
        }

        @media (max-width: 420px) {
          .solutions-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
          .solutions-grid .solution-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(245, 184, 0, 0.2) !important;
            box-sizing: border-box !important;
            min-width: 0 !important;
          }
          .solutions-grid .solution-card:last-child {
            grid-column: span 1;
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
};
