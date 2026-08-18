import React from 'react';
import { ChevronRight, Shield, Lock, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
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
            <span style={{ color: '#F5B800' }}>PRIVACY POLICY</span>
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
              <Shield size={14} color="#F5B800" />
              <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                POPIA COMPLIANT & DATA SECURITY
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
              PRIVACY <span style={{ color: '#F5B800' }}>POLICY</span>
            </h1>

            <p style={{
              color: '#CBD5E1',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              maxWidth: '650px'
            }}>
              IKAPA Fleet Management is dedicated to protecting the privacy, confidentiality, and security of our vehicle investors, fleet partners, and event participants in compliance with the Protection of Personal Information Act (POPIA).
            </p>

            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#94A3B8', fontSize: '0.82rem' }}>
              <span>Effective Date: <strong>1 January 2025</strong></span>
              <span>•</span>
              <span>Last Updated: <strong>February 2025</strong></span>
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
              <Lock size={16} color="#F5B800" />
              <span>Quick Overview</span>
            </h3>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                '1. Information We Collect',
                '2. How We Use Your Data',
                '3. Vehicle & Telematics Data',
                '4. POPIA & Legal Compliance',
                '5. Information Sharing',
                '6. Security & Data Storage',
                '7. Your Legal Rights',
                '8. Contact Our Information Officer'
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#section-${idx + 1}`}
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
                <Mail size={15} />
                <span>PRIVACY INQUIRY</span>
              </button>
            </div>
          </div>

          {/* Right Detailed Document Content */}
          <div style={{
            backgroundColor: 'rgba(8, 12, 20, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '2.5rem',
            lineHeight: 1.7,
            color: '#CBD5E1'
          }}>
            
            {/* Section 1 */}
            <div id="section-1" style={{ marginBottom: '2.75rem' }}>
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
                <span>Information We Collect</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                IKAPA Fleet Management (Pty) Ltd ("IKAPA", "we", "us", or "our") collects personal information necessary to deliver premier fleet onboarding, investor management, ticket booking, and e-hailing operations across South Africa.
              </p>
              <p style={{ marginBottom: '0.75rem' }}>This information includes:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Identity Information:</strong> Full name, South African ID or Passport number, proof of residence, and contact information (phone number, email address).</li>
                <li><strong>Vehicle Information:</strong> Vehicle registration numbers, VIN/Chassis numbers, microdot certificates, licensing papers, roadworthiness certificates, and insurance documents.</li>
                <li><strong>Financial & Payout Data:</strong> Bank account details, branch codes, proof of banking for investor profit distributions, and transaction records.</li>
                <li><strong>Event & Masterclass Data:</strong> Ticket registration details, attendee names, dietary requirements (if applicable), and digital receipt confirmation.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div id="section-2" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span>How We Use Your Personal Data</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We process your personal information strictly in accordance with lawful grounds under POPIA for specific business operations:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ backgroundColor: 'rgba(15, 22, 35, 0.6)', border: '1px solid rgba(245, 184, 0, 0.2)', padding: '1.25rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Fleet Management</h4>
                  <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Facilitating vehicle onboarding, operating permits, scheduled servicing, tracking, and weekly revenue settlements.</p>
                </div>
                <div style={{ backgroundColor: 'rgba(15, 22, 35, 0.6)', border: '1px solid rgba(245, 184, 0, 0.2)', padding: '1.25rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Driver Placement</h4>
                  <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Rigorous driver background checks, platform profile linkings (Uber/Bolt/inDrive), and performance tracking.</p>
                </div>
                <div style={{ backgroundColor: 'rgba(15, 22, 35, 0.6)', border: '1px solid rgba(245, 184, 0, 0.2)', padding: '1.25rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Masterclass Registrations</h4>
                  <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Issuing ticket barcodes, seat reservation confirmations, attendee communication, and post-workshop learning packs.</p>
                </div>
                <div style={{ backgroundColor: 'rgba(15, 22, 35, 0.6)', border: '1px solid rgba(245, 184, 0, 0.2)', padding: '1.25rem', borderRadius: '8px' }}>
                  <h4 style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Legal & Tax Compliance</h4>
                  <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Maintaining accurate financial records, statutory accounting, and compliance with South African municipal bylaws.</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span>Vehicle Telematics & Live Tracking</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                All fleet vehicles enrolled in IKAPA Fleet Management solutions are fitted with insurance-approved telematics, GPS live trackers, and speed monitoring units.
              </p>
              <p>
                Telematics data (real-time vehicle location, mileage, driving behaviors, engine diagnostics, geo-fencing triggers) is monitored 24/7 strictly for vehicle security, passenger safety, asset recovery, and operational performance reporting.
              </p>
            </div>

            {/* Section 4 */}
            <div id="section-4" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span>POPIA & Legal Compliance in South Africa</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Under the Protection of Personal Information Act 4 of 2013 (POPIA), IKAPA acts as the Responsible Party when determining the purpose and means for processing your information. We adhere strictly to the 8 Core Conditions for Lawful Processing:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                {[
                  'Accountability',
                  'Processing Limitation',
                  'Purpose Specification',
                  'Further Processing Limitation',
                  'Information Quality',
                  'Openness & Transparency',
                  'Security Safeguards',
                  'Data Subject Participation'
                ].map((principle, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.03)', padding: '0.65rem 0.85rem', borderRadius: '6px' }}>
                    <CheckCircle2 size={14} color="#F5B800" />
                    <span style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 600 }}>{principle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span>Third-Party Sharing & Service Providers</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We do not sell, rent, or trade your personal data. Information is disclosed solely to authorized partners under strict confidentiality agreements:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>E-Hailing Platforms:</strong> Uber, Bolt, and inDrive for driver fleet linking, vehicle documentation submission, and earnings verification.</li>
                <li><strong>Financial & Payment Processors:</strong> PCI-DSS certified payment gateways for masterclass ticket purchases and banking networks for weekly disbursements.</li>
                <li><strong>Insurance & Telematics Partners:</strong> Underwriters and certified tracking companies for active telemetry, claims processing, and emergency roadside recovery.</li>
                <li><strong>Regulatory Authorities:</strong> City of Cape Town transport boards, Provincial Regulatory Entities (PRE), and law enforcement when mandated by law.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div id="section-6" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span>Data Security & Encryption</span>
              </h2>
              <p>
                We implement robust technical and organizational measures to safeguard your personal data against unauthorized access, loss, alteration, or disclosure. All web communications utilize SSL/TLS 256-bit encryption, databases are protected behind secured enterprise firewalls, and employee access is restricted on a strict need-to-know basis.
              </p>
            </div>

            {/* Section 7 */}
            <div id="section-7" style={{ marginBottom: '2.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
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
                <span>Your POPIA Legal Rights</span>
              </h2>
              <p style={{ marginBottom: '1rem' }}>As a data subject under South African law, you have the right to:</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Request confirmation of whether we hold personal information about you.</li>
                <li>Request a record or description of personal information in our possession.</li>
                <li>Request the correction or update of inaccurate or outdated information.</li>
                <li>Request the deletion or destruction of personal information no longer required for contractual or legal purposes.</li>
                <li>Object to the processing of personal information on reasonable grounds.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div id="section-8" style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(245, 184, 0, 0.3)' }}>
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
                  08. Contact Our Information Officer
                </h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                  If you have inquiries regarding this Privacy Policy, wish to exercise your POPIA rights, or submit a data query, please contact our Information Office:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: '#FFFFFF' }}>
                  <span><strong>IKAPA Fleet Management (Pty) Ltd</strong></span>
                  <span>Attention: Information Officer</span>
                  <span>Email: <a href="mailto:info@ikapafleet.co.za" style={{ color: '#F5B800', textDecoration: 'none' }}>info@ikapafleet.co.za</a></span>
                  <span>Phone: <a href="tel:0825490398" style={{ color: '#F5B800', textDecoration: 'none' }}>082 549 0398</a></span>
                  <span>Location: Ravensmead, Western Cape, South Africa</span>
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
                onClick={() => onNavigate('terms')} 
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
                VIEW TERMS & CONDITIONS
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
