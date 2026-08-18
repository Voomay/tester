import React from 'react';
import { Ticket, Calendar, MapPin, Clock, CheckCircle2, ChevronRight, ShoppingBag } from 'lucide-react';
import type { CartItem } from '../types/cart';

interface CoursePageProps {
  onAddToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
  onNavigate: (page: string) => void;
}

export const CoursePage: React.FC<CoursePageProps> = ({ onAddToCart, onNavigate }) => {
  const handleSelectTicket = (type: 'standard' | 'vip' | 'dual') => {
    const ticketDetails = {
      standard: { title: 'Standard Delegate Ticket', price: 450 },
      vip: { title: 'VIP Investor Pass', price: 950 },
      dual: { title: 'Dual Fleet Owner Package (2 Tickets)', price: 1450 }
    }[type];

    onAddToCart({
      ticketType: type,
      title: ticketDetails.title,
      price: ticketDetails.price,
      date: '15 Aug 2026',
      location: 'Cape Town, Western Cape'
    });
  };

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
            <span style={{ color: '#F5B800' }}>IN-PERSON COURSE TICKETS</span>
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
            IKAPA E-HAILING <span style={{ color: '#F5B800' }}>FLEET MASTERCLASS 2026</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '0.92rem', maxWidth: '600px', marginTop: '1rem', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)' }}>
            In-Person Intensive Workshop for Vehicle Owners & Investors in Western Cape.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Course Overview Banner */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #0D1424 0%, #172136 100%)',
          border: '1.5px solid #F5B800',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
          marginBottom: '3.5rem',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
          overflow: 'hidden'
        }} className="course-hero-banner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', alignItems: 'center' }} className="course-hero-grid">
            <div style={{ gridColumn: 'span 8' }} className="course-hero-text">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F5B800', color: '#000', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.75rem', padding: '4px 12px', borderRadius: '4px', marginBottom: '1rem', letterSpacing: '1px' }}>
                <Ticket size={14} />
                IN-PERSON WORKSHOP
              </div>

              <h2 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1rem' }}>
                BUILD & SCALE YOUR PASSIVE FLEET
              </h2>

              <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '620px', marginBottom: '1.5rem' }}>
                Learn how to build, scale, and automate a high-yield e-hailing vehicle fleet in Western Cape. Get expert strategies on licensing, driver vetting, contracts, telematics, and passive income generation.
              </p>

              {/* Event Metadata Ribbon */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem 1.5rem',
                backgroundColor: 'rgba(7, 10, 17, 0.85)',
                border: '1px solid rgba(245, 184, 0, 0.3)',
                borderRadius: '8px',
                padding: '0.85rem 1.15rem'
              }} className="event-meta-ribbon">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 600 }}>
                  <Calendar size={16} color="#F5B800" />
                  <span>Saturday, 15 August 2026</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 600 }}>
                  <Clock size={16} color="#F5B800" />
                  <span>09:00 AM - 15:00 PM</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 600 }}>
                  <MapPin size={16} color="#F5B800" />
                  <span>Cape Town, Western Cape</span>
                </div>
              </div>
            </div>

            {/* Right Badge CTA */}
            <div style={{ gridColumn: 'span 4', textAlign: 'center' }} className="course-hero-cta">
              <div className="gold-box" style={{ padding: '1.75rem 1.25rem' }}>
                <span style={{ color: '#94A3B8', fontSize: '0.72rem', fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '1px', display: 'block' }}>
                  LIMITED SEATS AVAILABLE
                </span>
                <div style={{ fontSize: '2.2rem', fontFamily: 'Montserrat', fontWeight: 900, color: '#F5B800', margin: '0.4rem 0' }}>
                  R 450 <span style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 500 }}>/ ticket</span>
                </div>
                <p style={{ color: '#CBD5E1', fontSize: '0.78rem', marginBottom: '1.15rem' }}>
                  Includes course handbook, driver templates & catered lunch.
                </p>
                <button 
                  onClick={() => handleSelectTicket('vip')} 
                  className="btn-gold" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem', padding: '0.75rem 1rem' }}
                >
                  <ShoppingBag size={17} />
                  <span>ADD VIP TICKET TO CART</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modules & Curriculum Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px' }}>
              WHAT YOU WILL LEARN
            </span>
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '2rem', color: '#FFFFFF', marginTop: '0.3rem' }}>
              WORKSHOP CURRICULUM
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem'
          }} className="curriculum-grid">
            {[
              {
                num: '01',
                title: 'Vehicle Acquisition & Yield Math',
                desc: 'Which vehicle models yield the highest daily net profit on Bolt & Uber in Western Cape while minimizing fuel and maintenance costs.'
              },
              {
                num: '02',
                title: 'Western Cape Licensing Mastery',
                desc: 'Navigating PRE operating license applications, municipal permits, and compliance to keep your vehicle operating legally without impound risks.'
              },
              {
                num: '03',
                title: 'Driver Vetting & Contracts',
                desc: 'How to recruit reliable drivers, enforce legally binding agreements, establish daily target structures, and handle deposit safety.'
              },
              {
                num: '04',
                title: 'Telematics & Asset Protection',
                desc: 'Setting up real-time GPS tracking, remote kill switches, speed monitoring, and specialized e-hailing commercial insurance.'
              },
              {
                num: '05',
                title: 'Maintenance & Servicing Schedules',
                desc: 'Establishing cost-effective preventative maintenance protocols to maximize vehicle lifespan and prevent costly breakdowns.'
              },
              {
                num: '06',
                title: 'Scaling to a 10+ Vehicle Fleet',
                desc: 'Automating reporting, payout distribution, and scaling your operations into a full-time passive income investment portfolio.'
              }
            ].map((module, idx) => (
              <div key={idx} className="gold-box" style={{ padding: '1.5rem', position: 'relative' }}>
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1.15rem',
                  fontFamily: 'Montserrat',
                  fontWeight: 900,
                  fontSize: '1.8rem',
                  color: 'rgba(245, 184, 0, 0.15)'
                }}>
                  {module.num}
                </span>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1rem', color: '#FFFFFF', marginBottom: '0.65rem', paddingRight: '2rem' }}>
                  {module.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.84rem', lineHeight: 1.5 }}>
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Purchasing Tiers Section */}
        <div id="tickets" style={{ scrollMarginTop: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px' }}>
              RESERVE YOUR SEAT
            </span>
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '2rem', color: '#FFFFFF', marginTop: '0.3rem' }}>
              CHOOSE YOUR TICKET OPTION
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '3rem',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }} className="tickets-grid">
            {/* Standard Ticket */}
            <div 
              className="gold-box ticket-card" 
              style={{ 
                padding: '1.85rem 1.4rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                borderRadius: '12px',
                border: '1.5px solid rgba(245, 184, 0, 0.7)',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div>
                <span style={{ color: '#94A3B8', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.78rem' }}>STANDARD ACCESS</span>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.3rem', color: '#FFFFFF', marginTop: '4px' }}>
                  Standard Delegate Ticket
                </h3>
                <div style={{ fontSize: '2.1rem', fontFamily: 'Montserrat', fontWeight: 900, color: '#F5B800', margin: '0.85rem 0' }}>
                  R 450
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem', color: '#CBD5E1', fontSize: '0.84rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> Full 1-Day Masterclass Access</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> Printed Course Manual</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> Tea/Coffee & Catered Lunch</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> Live Q&A Session</li>
                </ul>
              </div>
              <button 
                onClick={() => handleSelectTicket('standard')}
                className="btn-gold ticket-action-btn" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <ShoppingBag size={17} />
                <span>ADD STANDARD TO CART</span>
              </button>
            </div>

            {/* VIP Investor Pass (Featured) */}
            <div 
              className="gold-box ticket-card featured-ticket"
              style={{
                padding: '1.85rem 1.4rem',
                border: '2px solid #F5B800',
                borderRadius: '12px',
                background: 'linear-gradient(180deg, rgba(245, 184, 0, 0.08) 0%, rgba(12, 17, 27, 0.95) 100%)',
                boxShadow: '0 0 30px rgba(245, 184, 0, 0.35)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-11px',
                right: '16px',
                background: '#F5B800',
                color: '#000',
                fontFamily: 'Montserrat',
                fontWeight: 900,
                fontSize: '0.65rem',
                padding: '2px 10px',
                borderRadius: '3px',
                letterSpacing: '1px'
              }}>
                MOST POPULAR
              </div>
              <div>
                <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.78rem' }}>VIP RECOMMENDED</span>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.3rem', color: '#FFFFFF', marginTop: '4px' }}>
                  VIP Investor Pass
                </h3>
                <div style={{ fontSize: '2.1rem', fontFamily: 'Montserrat', fontWeight: 900, color: '#F5B800', margin: '0.85rem 0' }}>
                  R 950
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem', color: '#FFFFFF', fontSize: '0.84rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> Everything in Standard Ticket</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> Priority Front-Row Seating</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> 1-on-1 Consultation with Founders</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> Driver Agreement Contract Pack</li>
                </ul>
              </div>
              <button 
                onClick={() => handleSelectTicket('vip')}
                className="btn-gold ticket-action-btn" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <ShoppingBag size={17} />
                <span>ADD VIP TO CART</span>
              </button>
            </div>

            {/* Dual Fleet Owner Package */}
            <div 
              className="gold-box ticket-card" 
              style={{ 
                padding: '1.85rem 1.4rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                borderRadius: '12px',
                border: '1.5px solid rgba(245, 184, 0, 0.7)',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div>
                <span style={{ color: '#94A3B8', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.78rem' }}>PARTNER BUNDLE</span>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.3rem', color: '#FFFFFF', marginTop: '4px' }}>
                  Dual Fleet Package
                </h3>
                <div style={{ fontSize: '2.1rem', fontFamily: 'Montserrat', fontWeight: 900, color: '#F5B800', margin: '0.85rem 0' }}>
                  R 1,450 <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 400 }}>for 2 Tickets</span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem', color: '#CBD5E1', fontSize: '0.84rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> 2 Full Delegate Passes</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> Western Cape Licensing Checklist</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> IKAPA Fleet Partner Discount</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#F5B800" /> Priority Onboarding Assistance</li>
                </ul>
              </div>
              <button 
                onClick={() => handleSelectTicket('dual')}
                className="btn-gold ticket-action-btn" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <ShoppingBag size={17} />
                <span>ADD DUAL BUNDLE TO CART</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .page-cover-header {
            padding-top: 7rem !important;
            padding-bottom: 3rem !important;
            margin-bottom: 2rem !important;
          }
          .course-hero-banner {
            padding: 1.5rem 1.15rem !important;
            margin-bottom: 2rem !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .course-hero-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            gap: 1.5rem !important;
          }
          .course-hero-text, .course-hero-cta {
            grid-column: span 12 !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .curriculum-grid, .tickets-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            width: 100% !important;
            max-width: 100% !important;
            gap: 1.5rem !important;
            box-sizing: border-box !important;
            margin: 0 auto !important;
          }
          .ticket-card {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            padding: 1.4rem 1.1rem !important;
            margin: 0 auto !important;
          }
          .ticket-action-btn {
            white-space: normal !important;
            text-align: center !important;
            padding: 0.75rem 0.75rem !important;
            font-size: 0.82rem !important;
            width: 100% !important;
          }
          .featured-ticket {
            transform: none !important;
          }
        }
        @media (max-width: 600px) {
          .event-meta-ribbon {
            flex-direction: column !important;
            gap: 0.65rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </div>
  );
};
