import React, { useState, useEffect } from 'react';
import { Phone, X, Send, Sparkles } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [message, setMessage] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Set time for chat timestamp
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const mins = now.getMinutes().toString().padStart(2, '0');
    setCurrentTime(`${hours}:${mins}`);

    // Auto open pop-up after 3.5s only on desktop (screen > 768px) to avoid blocking mobile screens
    const timer = setTimeout(() => {
      if (!hasInteracted && window.innerWidth > 768) {
        setIsPopupOpen(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClosePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPopupOpen(false);
    setHasInteracted(true);
  };

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setHasInteracted(true);
  };

  const handleSendMessage = (customText?: string) => {
    const textToSend = customText || message || "Hi, I would like more information about iKhapa Fleet Management services.";
    const url = `https://wa.me/27825490398?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const quickQuestions = [
    "🚗 Vehicle Placement & Management",
    "📋 Operating License Assistance",
    "👨‍✈️ Driver Recruitment & Vetting",
    "🎟️ Buy Workshop Tickets"
  ];

  return (
    <>
      {/* WhatsApp Welcome Pop-up Card */}
      {isPopupOpen && (
        <div 
          className="whatsapp-popup-card animate-slide-up"
          style={{
            position: 'fixed',
            bottom: '88px',
            right: '20px',
            width: '350px',
            maxWidth: 'calc(100vw - 32px)',
            backgroundColor: '#0C111B',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85), 0 0 30px rgba(37, 211, 102, 0.25)',
            border: '1.5px solid rgba(37, 211, 102, 0.6)',
            overflow: 'hidden',
            zIndex: 995,
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          {/* Pop-up Header */}
          <div style={{
            background: 'linear-gradient(135deg, #075E54 0%, #128C7E 100%)',
            padding: '0.85rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#FFFFFF'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#0C111B',
                  border: '2px solid #25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/assets/ikapa_logo.png" 
                    alt="iKhapa Fleet" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                {/* Active Online Green Dot */}
                <span style={{
                  position: 'absolute',
                  bottom: '1px',
                  right: '1px',
                  width: '9px',
                  height: '9px',
                  backgroundColor: '#25D366',
                  borderRadius: '50%',
                  border: '2px solid #075E54',
                  boxShadow: '0 0 6px #25D366'
                }} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <h4 style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    color: '#FFFFFF',
                    margin: 0,
                    letterSpacing: '0.3px'
                  }}>
                    iKhapa Fleet Support
                  </h4>
                  <Sparkles size={12} color="#F5B800" />
                </div>
                <p style={{
                  fontSize: '0.68rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: '1px 0 0 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#25D366', display: 'inline-block' }}></span>
                  Online • Replies instantly
                </p>
              </div>
            </div>

            <button
              onClick={handleClosePopup}
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                border: 'none',
                color: '#FFFFFF',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
                touchAction: 'manipulation'
              }}
              title="Close chat"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Pop-up Chat Body */}
          <div style={{
            padding: '1rem 0.9rem',
            backgroundColor: '#090D16',
            backgroundImage: 'radial-gradient(rgba(37, 211, 102, 0.05) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            maxHeight: '300px',
            overflowY: 'auto'
          }}>
            {/* Date / Time pill */}
            <div style={{ textAlign: 'center' }}>
              <span style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#94A3B8',
                fontSize: '0.65rem',
                fontFamily: 'Montserrat',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '10px'
              }}>
                TODAY {currentTime}
              </span>
            </div>

            {/* Official Incoming Message Bubble */}
            <div style={{
              alignSelf: 'flex-start',
              maxWidth: '92%',
              backgroundColor: '#1E293B',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px 14px 14px 14px',
              padding: '0.7rem 0.85rem',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              position: 'relative'
            }}>
              <p style={{
                fontSize: '0.84rem',
                lineHeight: '1.45',
                fontWeight: 500,
                margin: 0,
                color: '#F8FAFC'
              }}>
                👋 Hi, we are <strong style={{ color: '#F5B800', fontWeight: 800 }}>iKhapa Fleet</strong>. How can we help you today?
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '3px',
                marginTop: '4px'
              }}>
                <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>{currentTime}</span>
                <span style={{ color: '#38BDF8', fontSize: '0.68rem', fontWeight: 'bold' }}>✓✓</span>
              </div>
            </div>

            {/* Quick Inquiry Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.2rem' }}>
              <span style={{ fontSize: '0.65rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>
                Frequently Asked:
              </span>
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(`Hello iKhapa Fleet, I would like assistance with: ${q}`)}
                  style={{
                    textAlign: 'left',
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px solid rgba(245, 184, 0, 0.35)',
                    borderRadius: '8px',
                    padding: '0.5rem 0.75rem',
                    color: '#E2E8F0',
                    fontSize: '0.74rem',
                    fontFamily: 'Inter, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: '38px',
                    touchAction: 'manipulation'
                  }}
                  className="quick-chip-btn"
                >
                  <span>{q}</span>
                  <span style={{ color: '#25D366', fontWeight: 800, fontSize: '0.9rem' }}>›</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pop-up Footer / Input Form */}
          <div style={{
            padding: '0.75rem 0.85rem',
            backgroundColor: '#0C111B',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.55rem'
          }}>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              style={{ display: 'flex', gap: '0.4rem' }}
            >
              <input 
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(245, 184, 0, 0.3)',
                  borderRadius: '20px',
                  padding: '0.5rem 0.85rem',
                  color: '#FFFFFF',
                  fontSize: '0.8rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                  touchAction: 'manipulation'
                }}
                title="Send to WhatsApp"
              >
                <Send size={15} />
              </button>
            </form>

            <button
              onClick={() => handleSendMessage()}
              style={{
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '0.55rem 0.85rem',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                fontSize: '0.76rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                transition: 'all 0.2s ease',
                minHeight: '40px',
                touchAction: 'manipulation'
              }}
              className="chat-now-btn"
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="#FFFFFF">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.235-.245-.586-.494-.506-.678-.515-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.08 2.913 1.23 3.114.15.201 2.124 3.243 5.146 4.549.719.311 1.281.497 1.719.636.722.23 1.38.197 1.9.12.58-.087 1.78-.727 2.031-1.43.251-.702.251-1.303.176-1.43-.076-.126-.276-.201-.577-.351zM12.004 21.75c-1.748 0-3.46-.462-4.966-1.336l-.356-.207-3.693.968.985-3.6-.227-.361A9.704 9.704 0 0 1 2.25 12.004C2.25 6.628 6.628 2.25 12.004 2.25c2.604 0 5.053 1.013 6.895 2.855a9.697 9.697 0 0 1 2.851 6.899c0 5.376-4.378 9.746-9.746 9.746zm0-21.75C5.374 0 0 5.374 0 12.004c0 2.115.553 4.184 1.602 6.007L0 24l6.155-1.615A11.954 11.954 0 0 0 12.004 24C18.626 24 24 18.626 24 12.004 24 5.374 18.626 0 12.004 0z" />
              </svg>
              <span>OPEN IN WHATSAPP</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Buttons Container */}
      <div 
        className="floating-actions-container"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          zIndex: 990
        }}
      >
        {/* Call Floaty Button */}
        <a
          href="tel:0825490398"
          className="call-float-btn"
          title="Call IKAPA Fleet: 082 549 0398"
          aria-label="Call IKAPA Fleet at 082 549 0398"
          style={{
            width: '46px',
            height: '46px',
            backgroundColor: '#0C111B',
            border: '2px solid #F5B800',
            color: '#F5B800',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.7), 0 0 15px rgba(245, 184, 0, 0.3)',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            position: 'relative',
            touchAction: 'manipulation'
          }}
        >
          <Phone size={20} color="#F5B800" strokeWidth={2.5} />
          <span className="action-tooltip">
            Call 082 549 0398
          </span>
        </a>

        {/* Official WhatsApp Floaty Button */}
        <button
          onClick={handleTogglePopup}
          className="whatsapp-float-btn"
          title="Chat with iKhapa Fleet Support on WhatsApp"
          aria-label="Chat with iKhapa Fleet Support on WhatsApp"
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            position: 'relative',
            touchAction: 'manipulation'
          }}
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="#FFFFFF">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.235-.245-.586-.494-.506-.678-.515-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.08 2.913 1.23 3.114.15.201 2.124 3.243 5.146 4.549.719.311 1.281.497 1.719.636.722.23 1.38.197 1.9.12.58-.087 1.78-.727 2.031-1.43.251-.702.251-1.303.176-1.43-.076-.126-.276-.201-.577-.351zM12.004 21.75c-1.748 0-3.46-.462-4.966-1.336l-.356-.207-3.693.968.985-3.6-.227-.361A9.704 9.704 0 0 1 2.25 12.004C2.25 6.628 6.628 2.25 12.004 2.25c2.604 0 5.053 1.013 6.895 2.855a9.697 9.697 0 0 1 2.851 6.899c0 5.376-4.378 9.746-9.746 9.746zm0-21.75C5.374 0 0 5.374 0 12.004c0 2.115.553 4.184 1.602 6.007L0 24l6.155-1.615A11.954 11.954 0 0 0 12.004 24C18.626 24 24 18.626 24 12.004 24 5.374 18.626 0 12.004 0z" />
          </svg>

          {/* Unread Indicator Badge when closed */}
          {!isPopupOpen && (
            <span style={{
              position: 'absolute',
              top: '-3px',
              right: '-3px',
              backgroundColor: '#DC2626',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              fontFamily: 'Montserrat',
              fontWeight: 900,
              fontSize: '0.65rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #060910',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}>
              1
            </span>
          )}

          <span className="action-tooltip">
            {isPopupOpen ? "Close Chat" : "Chat on WhatsApp"}
          </span>
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .whatsapp-float-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.65) !important;
        }

        .call-float-btn:hover {
          transform: scale(1.08);
          background-color: #F5B800 !important;
          box-shadow: 0 10px 30px rgba(245, 184, 0, 0.5) !important;
        }
        .call-float-btn:hover svg {
          color: #000000 !important;
          stroke: #000000 !important;
        }

        .action-tooltip {
          position: absolute;
          right: 68px;
          background-color: #0C111B;
          border: 1px solid rgba(245, 184, 0, 0.6);
          color: '#FFFFFF';
          font-family: Montserrat, sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          padding: 6px 12px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        }
        
        @media (hover: hover) and (pointer: fine) {
          .whatsapp-float-btn:hover .action-tooltip,
          .call-float-btn:hover .action-tooltip {
            opacity: 1;
          }
        }

        .quick-chip-btn:hover {
          background: rgba(37, 211, 102, 0.15) !important;
          border-color: #25D366 !important;
          transform: translateX(3px);
        }

        .chat-now-btn:hover {
          background-color: #22c35e !important;
          transform: translateY(-1px);
        }

        @media (max-width: 600px) {
          .floating-actions-container {
            bottom: 16px !important;
            right: 14px !important;
            gap: 8px !important;
          }
          .call-float-btn {
            width: 42px !important;
            height: 42px !important;
          }
          .whatsapp-float-btn {
            width: 50px !important;
            height: 50px !important;
          }
          .action-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
