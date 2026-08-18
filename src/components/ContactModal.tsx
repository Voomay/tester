import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleMakeModel: '',
    vehicleYear: '',
    operatingLicenseStatus: 'Need Operating License Assistance'
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(4, 7, 13, 0.88)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem'
      }}
      onClick={handleReset}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#0C111B',
          border: '1.5px solid #F5B800',
          borderRadius: '12px',
          maxWidth: '520px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '1.85rem 1.65rem',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.95)'
        }} 
        className="animate-fade-in contact-modal-box"
      >
        {/* Close Button */}
        <button 
          onClick={handleReset}
          style={{
            position: 'absolute',
            top: '0.85rem',
            right: '0.85rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '38px',
            minHeight: '38px',
            touchAction: 'manipulation'
          }}
          aria-label="Close Modal"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
            <CheckCircle2 size={56} color="#00D26A" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              APPLICATION RECEIVED!
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1.5rem' }}>
              Thank you, <strong style={{ color: '#F5B800' }}>{formData.fullName}</strong>. An IKAPA Fleet Management specialist will contact you shortly on <strong>{formData.phone}</strong>.
            </p>
            <button onClick={handleReset} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
              CLOSE
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.25rem', paddingRight: '2rem' }}>
              <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                START EARNING PASSIVE INCOME
              </span>
              <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.35rem', color: '#FFFFFF', marginTop: '4px', lineHeight: 1.25 }}>
                PARTNER WITH IKAPA TODAY
              </h3>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.76rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '3px' }}>
                  FULL NAME *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: '#151C28',
                    border: '1px solid rgba(245, 184, 0, 0.3)',
                    borderRadius: '6px',
                    padding: '0.65rem 0.9rem',
                    color: '#FFFFFF',
                    outline: 'none',
                    minHeight: '44px'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }} className="modal-inputs-row">
                <div>
                  <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.76rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '3px' }}>
                    PHONE NUMBER *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="082 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#151C28',
                      border: '1px solid rgba(245, 184, 0, 0.3)',
                      borderRadius: '6px',
                      padding: '0.65rem 0.9rem',
                      color: '#FFFFFF',
                      outline: 'none',
                      minHeight: '44px'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.76rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '3px' }}>
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
                      padding: '0.65rem 0.9rem',
                      color: '#FFFFFF',
                      outline: 'none',
                      minHeight: '44px'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.75rem' }} className="modal-inputs-row">
                <div>
                  <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.76rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '3px' }}>
                    VEHICLE MAKE & MODEL
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Toyota Quest / Hyundai Accent"
                    value={formData.vehicleMakeModel}
                    onChange={(e) => setFormData({ ...formData, vehicleMakeModel: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#151C28',
                      border: '1px solid rgba(245, 184, 0, 0.3)',
                      borderRadius: '6px',
                      padding: '0.65rem 0.9rem',
                      color: '#FFFFFF',
                      outline: 'none',
                      minHeight: '44px'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.76rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '3px' }}>
                    YEAR
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 2022"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#151C28',
                      border: '1px solid rgba(245, 184, 0, 0.3)',
                      borderRadius: '6px',
                      padding: '0.65rem 0.9rem',
                      color: '#FFFFFF',
                      outline: 'none',
                      minHeight: '44px'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.76rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '3px' }}>
                  SERVICE REQUIRED
                </label>
                <select
                  value={formData.operatingLicenseStatus}
                  onChange={(e) => setFormData({ ...formData, operatingLicenseStatus: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: '#151C28',
                    border: '1px solid rgba(245, 184, 0, 0.3)',
                    borderRadius: '6px',
                    padding: '0.65rem 0.9rem',
                    color: '#FFFFFF',
                    outline: 'none',
                    cursor: 'pointer',
                    minHeight: '44px'
                  }}
                >
                  <option value="Full E-Hailing Fleet Management">Full E-Hailing Fleet Management</option>
                  <option value="Need Operating License Assistance">Operating License Relief & Assistance</option>
                  <option value="Driver Recruitment & Vetting Only">Driver Recruitment & Vetting Only</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="btn-gold" 
                style={{ width: '100%', marginTop: '0.4rem', padding: '0.85rem', justifyContent: 'center', fontSize: '0.9rem' }}
              >
                SUBMIT INQUIRY NOW
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 520px) {
          .contact-modal-box {
            padding: 1.5rem 1.15rem !important;
          }
          .modal-inputs-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
