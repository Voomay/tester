import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, ChevronDown, ChevronRight } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Full E-Hailing Fleet Management',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How long does operating license assistance take in Western Cape?',
      a: 'We expedite the operating license process through our established regulatory compliance framework. Typical timelines range from 2 to 4 weeks depending on PRE vehicle registration status and city scheduling.'
    },
    {
      q: 'How are drivers vetted before placement in my vehicle?',
      a: 'Every driver undergoes strict background checks, criminal record clearance, driving history validation, e-hailing platform rating verification (4.85+ minimum), and face-to-face aptitude interviews.'
    },
    {
      q: 'When and how do I receive income payouts for my vehicle?',
      a: 'Income payouts are processed weekly directly to your nominated bank account, accompanied by a comprehensive, transparent digital statement of earnings and expenses.'
    },
    {
      q: 'What happens if the vehicle requires maintenance or repairs?',
      a: 'IKAPA Fleet Management coordinates all routine servicing, tyre rotations, and emergency repairs with accredited service centers to ensure peak safety and minimum operational downtime.'
    },
    {
      q: 'What vehicle models and years are eligible for fleet management?',
      a: 'We accept compliant sedans and compacts (such as Toyota Corolla Quest/Starlet, Suzuki Ciaz/Dzire/S-Presso, Hyundai Grand i10, Nissan Almera/Note) typically 2017 or newer in roadworthy condition.'
    },
    {
      q: 'How is my vehicle protected against accidents and theft?',
      a: 'All managed vehicles are fitted with dual 24/7 GPS telematics, live engine immobilizers, and must maintain comprehensive commercial passenger insurance with passenger liability.'
    },
    {
      q: 'Which platforms (Uber, Bolt, inDrive) will my vehicle operate on?',
      a: 'We place vehicles across top performing e-hailing platforms including Uber, Bolt, and inDrive to maximize daily ride volume and driver earnings consistency.'
    },
    {
      q: 'What is the contract duration and can I withdraw my vehicle?',
      a: 'We offer flexible agreement terms (typically 6, 12, or 24 months) with structured 30-day notice withdrawal options should your circumstances change.'
    }
  ];

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
        <div style={{
          position: 'absolute',
          top: '-40px',
          left: '15%',
          width: '450px',
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
            <span style={{ color: '#F5B800' }}>CONTACT US</span>
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
            CONTACT US <span style={{ color: '#F5B800' }}>IKAPA FLEET MANAGEMENT</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '0.92rem', maxWidth: '600px', marginTop: '1rem', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)' }}>
            Have questions about turning your vehicle into a high-yield e-hailing investment? Reach out to our Western Cape team today.
          </p>
        </div>
      </div>

      <div className="container">
        {/* 4 Contact Info Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
          marginBottom: '3rem'
        }} className="contact-cards-grid">
          {/* Card 1: Phone */}
          <div className="gold-box contact-info-card" style={{ padding: '1.5rem 1.15rem', textAlign: 'center' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(245, 184, 0, 0.15)',
              border: '1px solid #F5B800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.85rem'
            }}>
              <Phone size={22} color="#F5B800" />
            </div>
            <h3 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
              CALL US DIRECTLY
            </h3>
            <a href="tel:0825490398" style={{ color: '#F5B800', fontWeight: 800, fontSize: '1.05rem', textDecoration: 'none', display: 'inline-block' }}>
              082 549 0398
            </a>
            <p style={{ color: '#64748B', fontSize: '0.75rem', marginTop: '4px' }}>Immediate Phone Consultation</p>
          </div>

          {/* Card 2: Email */}
          <div className="gold-box contact-info-card" style={{ padding: '1.5rem 1.15rem', textAlign: 'center' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(245, 184, 0, 0.15)',
              border: '1px solid #F5B800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.85rem'
            }}>
              <Mail size={22} color="#F5B800" />
            </div>
            <h3 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
              EMAIL US
            </h3>
            <a href="mailto:info@ikapafleet.co.za" style={{ color: '#F5B800', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', wordBreak: 'break-all', display: 'inline-block' }}>
              info@ikapafleet.co.za
            </a>
            <p style={{ color: '#64748B', fontSize: '0.75rem', marginTop: '4px' }}>Quick Email Inquiries</p>
          </div>

          {/* Card 3: Location */}
          <div className="gold-box contact-info-card" style={{ padding: '1.5rem 1.15rem', textAlign: 'center' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(245, 184, 0, 0.15)',
              border: '1px solid #F5B800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.85rem'
            }}>
              <MapPin size={22} color="#F5B800" />
            </div>
            <h3 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
              OUR OFFICE
            </h3>
            <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.85rem' }}>
              Ravensmead, Western Cape
            </p>
            <p style={{ color: '#64748B', fontSize: '0.75rem', marginTop: '4px' }}>South Africa</p>
          </div>

          {/* Card 4: Hours */}
          <div className="gold-box contact-info-card" style={{ padding: '1.5rem 1.15rem', textAlign: 'center' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(245, 184, 0, 0.15)',
              border: '1px solid #F5B800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.85rem'
            }}>
              <Clock size={22} color="#F5B800" />
            </div>
            <h3 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
              OFFICE HOURS
            </h3>
            <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.82rem' }}>
              Mon - Fri: 08:00 - 17:00
            </p>
            <p style={{ color: '#64748B', fontSize: '0.75rem', marginTop: '4px' }}>Sat: 09:00 - 13:00</p>
          </div>
        </div>

        {/* Main Section: Form + FAQ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2rem',
          alignItems: 'stretch'
        }} className="contact-main-grid">
          {/* Left Column: Form */}
          <div style={{ gridColumn: 'span 6' }} className="contact-form-col">
            <div className="gold-box" style={{ padding: '2rem', height: '100%' }}>
              <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MessageSquare size={26} color="#F5B800" />
                <div>
                  <h2 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.3rem', color: '#FFFFFF' }}>
                    SEND US A MESSAGE
                  </h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.82rem' }}>Fill out the form below and an agent will call you back within 2 hours.</p>
                </div>
              </div>

              {submitted ? (
                <div style={{
                  backgroundColor: 'rgba(0, 210, 106, 0.1)',
                  border: '1px solid #00D26A',
                  borderRadius: '8px',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={50} color="#00D26A" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    MESSAGE SENT SUCCESSFULLY!
                  </h3>
                  <p style={{ color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    Thank you, <strong style={{ color: '#F5B800' }}>{formData.name}</strong>. Our fleet operations team in Western Cape has received your inquiry. We will contact you at <strong>{formData.phone}</strong>.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="btn-gold"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.78rem', marginBottom: '4px' }}>
                      YOUR FULL NAME *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Cheslin Gabriels"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#151C28',
                        border: '1px solid rgba(245, 184, 0, 0.3)',
                        borderRadius: '6px',
                        padding: '0.75rem 1rem',
                        color: '#FFFFFF',
                        outline: 'none',
                        minHeight: '44px'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="contact-inputs-row">
                    <div>
                      <label style={{ display: 'block', color: '#CBD5E1', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.78rem', marginBottom: '4px' }}>
                        PHONE NUMBER *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. 082 549 0398"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#151C28',
                          border: '1px solid rgba(245, 184, 0, 0.3)',
                          borderRadius: '6px',
                          padding: '0.75rem 1rem',
                          color: '#FFFFFF',
                          outline: 'none',
                          minHeight: '44px'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: '#CBD5E1', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.78rem', marginBottom: '4px' }}>
                        EMAIL ADDRESS
                      </label>
                      <input 
                        type="email" 
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#151C28',
                          border: '1px solid rgba(245, 184, 0, 0.3)',
                          borderRadius: '6px',
                          padding: '0.75rem 1rem',
                          color: '#FFFFFF',
                          outline: 'none',
                          minHeight: '44px'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.78rem', marginBottom: '4px' }}>
                      SERVICE INTEREST
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#151C28',
                        border: '1px solid rgba(245, 184, 0, 0.3)',
                        borderRadius: '6px',
                        padding: '0.75rem 1rem',
                        color: '#FFFFFF',
                        outline: 'none',
                        cursor: 'pointer',
                        minHeight: '44px'
                      }}
                    >
                      <option value="Full E-Hailing Fleet Management">Full E-Hailing Fleet Management</option>
                      <option value="Operating License Relief & Assistance">Operating License Relief & Assistance</option>
                      <option value="Driver Vetting & Recruitment">Driver Vetting & Recruitment</option>
                      <option value="In-Person Masterclass Ticket">In-Person Masterclass Ticket Inquiry</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.78rem', marginBottom: '4px' }}>
                      YOUR MESSAGE / VEHICLE DETAILS
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your vehicle model, year, or any specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#151C28',
                        border: '1px solid rgba(245, 184, 0, 0.3)',
                        borderRadius: '6px',
                        padding: '0.75rem 1rem',
                        color: '#FFFFFF',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-gold" style={{ padding: '0.85rem 2rem', fontSize: '0.92rem', justifyContent: 'center' }}>
                    <Send size={16} />
                    <span>SUBMIT INQUIRY</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div style={{ gridColumn: 'span 6' }} className="contact-faq-col">
            <div className="gold-box" style={{ padding: '2rem', height: '100%' }}>
              <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.2rem', color: '#F5B800', marginBottom: '1.25rem' }}>
                FREQUENTLY ASKED QUESTIONS
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: '#151C28',
                      border: '1px solid rgba(245, 184, 0, 0.2)',
                      borderRadius: '6px',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        padding: '0.9rem 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: '#FFFFFF',
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                        fontSize: '0.84rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        minHeight: '44px',
                        gap: '0.5rem'
                      }}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown 
                        size={16} 
                        color="#F5B800" 
                        style={{
                          transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                          flexShrink: 0
                        }} 
                      />
                    </button>

                    {openFaq === idx && (
                      <div style={{ padding: '0 1rem 1rem', color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.6 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Cape Town Google Maps */}
        <div style={{ marginTop: '3rem', width: '100%' }}>
          <iframe
            title="IKAPA Fleet Management Cape Town Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52981.33230680196!2d18.577239328249533!3d-33.924868500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5caa45a27863%3A0xb35a0f6797f1f3a5!2sRavensmead%2C%20Cape%20Town%2C%207490!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
            width="100%"
            height="380"
            style={{
              width: '100%',
              height: '380px',
              border: 0,
              borderRadius: '12px',
              display: 'block',
              filter: 'contrast(1.05) brightness(0.92)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contact-map-frame"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .page-cover-header {
            padding-top: 7rem !important;
            padding-bottom: 3rem !important;
            margin-bottom: 2rem !important;
          }
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .contact-main-grid {
            grid-template-columns: repeat(1, 1fr) !important;
            gap: 1.5rem !important;
          }
          .contact-form-col, .contact-faq-col {
            grid-column: span 12 !important;
          }
          .contact-map-frame {
            height: 300px !important;
          }
        }
        @media (max-width: 550px) {
          .contact-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-inputs-row {
            grid-template-columns: 1fr !important;
          }
          .contact-map-frame {
            height: 260px !important;
          }
        }
      `}</style>
    </div>
  );
};
