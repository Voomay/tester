import React from 'react';
import { ChevronRight, FileCheck, Scale, ArrowLeft, CheckCircle2, Ticket } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
            <span style={{ color: '#F5B800' }}>TERMS & CONDITIONS</span>
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
              <Scale size={14} color="#F5B800" />
              <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                LEGAL AGREEMENT & SERVICE POLICIES
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
              TERMS & <span style={{ color: '#F5B800' }}>CONDITIONS</span>
            </h1>

            <p style={{
              color: '#CBD5E1',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              maxWidth: '650px'
            }}>
              Please read these Terms and Conditions carefully before utilizing the IKAPA Fleet Management website, onboarding an e-hailing vehicle, or purchasing Masterclass workshop tickets.
            </p>

            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#94A3B8', fontSize: '0.82rem' }}>
              <span>Effective Date: <strong>1 January 2025</strong></span>
              <span>•</span>
              <span>Governing Law: <strong>Republic of South Africa</strong></span>
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
              <FileCheck size={16} color="#F5B800" />
              <span>Table of Contents</span>
            </h3>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                '1. Acceptance of Terms',
                '2. Fleet Management Services',
                '3. Investor Responsibilities',
                '4. Revenue Payouts & Fees',
                '5. Masterclass Ticket Sales',
                '6. Cancellation & Refunds',
                '7. Limitation of Liability',
                '8. Governing Jurisdiction'
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#term-section-${idx + 1}`}
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
                onClick={() => onNavigate('course')}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '0.65rem 1rem' }}
              >
                <Ticket size={15} />
                <span>BOOK WORKSHOP</span>
              </button>
            </div>
          </div>

          {/* Right Detailed Terms Document Content */}
          <div style={{
            backgroundColor: 'rgba(8, 12, 20, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '2.5rem',
            lineHeight: 1.7,
            color: '#CBD5E1'
          }}>
            
            {/* Section 1 */}
            <div id="term-section-1" style={{ marginBottom: '2.75rem' }}>
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
                <span>Acceptance & Scope of Agreement</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                By accessing this website, submitting an onboarding inquiry, signing a Fleet Management Service Level Agreement (SLA), or completing a purchase of workshop tickets, you agree to be bound by these Terms and Conditions.
              </p>
              <p>
                If you do not agree to these terms in their entirety, you must discontinue your use of our digital platforms and services immediately.
              </p>
            </div>

            {/* Section 2 */}
            <div id="term-section-2" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span>Fleet Management Services</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                IKAPA Fleet Management provides end-to-end operational management for vehicle owners and investors in the e-hailing transportation sector (including Uber, Bolt, and inDrive platforms). Our operational scope includes:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Driver Recruitment & Vetting:</strong> Criminal record screening, PDP verification, reference checks, and road assessment tests.</li>
                <li><strong>Compliance & Licensing:</strong> Facilitation of municipal e-hailing operating permits, roadworthy certificates, and platform profile activations.</li>
                <li><strong>24/7 Vehicle Telematics:</strong> Active GPS telemetry, live speed monitoring, panic button integrations, and geo-fencing safeguards.</li>
                <li><strong>Maintenance Coordination:</strong> Routine interval servicing, tire replacements, and minor cosmetic upkeep management.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="term-section-3" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span>Vehicle Owner & Investor Obligations</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                To qualify and remain onboarded in the IKAPA fleet, the vehicle owner warrants and agrees that:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>The vehicle meets platform age and model requirements (typically under 5 years of age, 4-door sedan/hatchback with active AC).</li>
                <li>The vehicle maintains comprehensive e-hailing / passenger liability commercial insurance at all times throughout the contract period.</li>
                <li>The vehicle is mechanically sound, licensed, and registered in good standing with the relevant licensing authority.</li>
                <li>The owner authorizes IKAPA to install and maintain certified tracking and telematics devices.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div id="term-section-4" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span>Revenue Share, Payouts & Management Fees</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Revenue settlements and management fee deductions are governed as follows:
              </p>
              <div style={{ backgroundColor: 'rgba(245, 184, 0, 0.06)', border: '1px solid rgba(245, 184, 0, 0.25)', padding: '1.25rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#F8FAFC' }}>
                  <strong>Weekly Payout Schedule:</strong> Vehicle earnings (net of agreed management fees and operational provisions) are audited and disbursed weekly into the designated South African bank account of the registered vehicle owner.
                </p>
              </div>
              <p>
                A detailed electronic statement reflecting gross trip receipts, driver earnings, platform commissions, and maintenance reserve allocations is furnished with each settlement cycle.
              </p>
            </div>

            {/* Section 5 */}
            <div id="term-section-5" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span>In-Person Masterclass & Workshop Ticket Terms</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Purchases of tickets for the IKAPA In-Person E-Hailing Fleet Masterclass are subject to specific event conditions:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Seat Confirmation:</strong> Registration is confirmed only upon successful receipt of payment in full through our authorized payment gateways.</li>
                <li><strong>Ticket Transferability:</strong> Tickets are non-refundable but may be transferred to an alternative designated attendee upon giving written notice at least 48 hours prior to the event date.</li>
                <li><strong>Event Rescheduling:</strong> In the rare circumstance that an event must be rescheduled due to force majeure, all tickets will remain valid for the subsequent scheduled date.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div id="term-section-6" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span style={{ color: '#F5B800', fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.5rem' }}>06.</span>
                <span>Cancellation & Agreement Termination</span>
              </h2>
              <p>
                Standard Fleet Management SLAs require a mutual 30-day written notice for agreement termination. Upon termination, all vehicle accounts will undergo a reconciliation audit, telematics deactivation or transfer, and physical handover with a joint condition report.
              </p>
            </div>

            {/* Section 7 */}
            <div id="term-section-7" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span style={{ color: '#F5B800', fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '1.5rem' }}>07.</span>
                <span>Limitation of Liability</span>
              </h2>
              <p>
                To the fullest extent permitted under South African law, IKAPA Fleet Management shall not be liable for indirect, incidental, or consequential damages resulting from third-party app platform outages (Uber/Bolt), municipal regulatory moratoriums, or road traffic accidents covered under insurance policies.
              </p>
            </div>

            {/* Section 8 */}
            <div id="term-section-8" style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(245, 184, 0, 0.3)' }}>
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
                  08. Governing Jurisdiction & Contact
                </h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                  These terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes shall be subject to the jurisdiction of the Western Cape High Court.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: '#FFFFFF' }}>
                  <span><strong>IKAPA Fleet Management Legal Department</strong></span>
                  <span>Email: <a href="mailto:info@ikapafleet.co.za" style={{ color: '#F5B800', textDecoration: 'none' }}>info@ikapafleet.co.za</a></span>
                  <span>Phone: <a href="tel:0825490398" style={{ color: '#F5B800', textDecoration: 'none' }}>082 549 0398</a></span>
                  <span>Physical Address: Ravensmead, Western Cape, South Africa</span>
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
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
