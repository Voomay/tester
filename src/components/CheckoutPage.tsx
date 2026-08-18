import React, { useState } from 'react';
import { CreditCard, CheckCircle2, ShieldCheck, Download, ChevronRight, ShoppingBag, ArrowLeft } from 'lucide-react';
import type { CartItem } from '../types/cart';

interface CheckoutPageProps {
  items: CartItem[];
  onNavigate: (page: string) => void;
  onClearCart: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ items, onNavigate, onClearCart }) => {
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    idNumber: '',
    paymentMethod: 'card'
  });

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
    onClearCart();
  };

  return (
    <div style={{ paddingBottom: '4rem' }} className="animate-fade-in">
      {/* Cover Header Section with Breadcrumb */}
      <div 
        className="page-cover-header checkout-header"
        style={{
          background: 'linear-gradient(135deg, #090E18 0%, #131A29 100%)',
          padding: '8.5rem 0 3rem',
          marginBottom: '2.5rem',
          textAlign: 'center'
        }}
      >
        <div className="container">
          {/* Breadcrumb Trail */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#94A3B8',
            fontSize: '0.8rem',
            fontFamily: 'Montserrat',
            fontWeight: 700,
            marginBottom: '0.75rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>HOME</button>
            <ChevronRight size={14} color="#F5B800" />
            <button onClick={() => onNavigate('course')} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>COURSE TICKETS</button>
            <ChevronRight size={14} color="#F5B800" />
            <span style={{ color: '#F5B800' }}>CHECKOUT</span>
          </div>

          <h1 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)', color: '#FFFFFF' }}>
            SECURE TICKET <span style={{ color: '#F5B800', fontStyle: 'italic' }}>CHECKOUT</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '0.88rem', marginTop: '0.5rem', maxWidth: '550px', marginLeft: 'auto', marginRight: 'auto' }}>
            Complete your registration details to reserve your seat for the IKAPA E-Hailing Masterclass.
          </p>
        </div>
      </div>

      <div className="container">
        {completed ? (
          <div className="gold-box" style={{ maxWidth: '640px', margin: '0 auto', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(0, 210, 106, 0.15)',
              border: '2px solid #00D26A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}>
              <CheckCircle2 size={38} color="#00D26A" />
            </div>

            <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '0.78rem', letterSpacing: '1.5px' }}>
              PAYMENT SUCCESSFUL
            </span>
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.65rem', color: '#FFFFFF', margin: '0.4rem 0 0.85rem' }}>
              YOUR TICKETS ARE CONFIRMED!
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you, <strong style={{ color: '#F5B800' }}>{formData.fullName}</strong>. Your payment of <strong>R {totalAmount}</strong> has been processed. A confirmation email and SMS pass have been sent to <strong>{formData.email}</strong>.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => alert(`Downloading PDF Ticket confirmation for ${formData.fullName}...`)} 
                className="btn-gold" 
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem' }}
              >
                <Download size={17} />
                <span>DOWNLOAD DIGITAL TICKETS</span>
              </button>
              <button 
                onClick={() => onNavigate('home')} 
                style={{
                  background: 'transparent',
                  border: '1px solid #94A3B8',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                  padding: '0.75rem 1.25rem',
                  cursor: 'pointer',
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  minHeight: '44px'
                }}
              >
                RETURN HOME
              </button>
            </div>
          </div>
        ) : items.length === 0 ? (
          <div className="gold-box" style={{ maxWidth: '520px', margin: '0 auto', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
            <ShoppingBag size={48} color="#64748B" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              NO TICKETS IN CART
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Please select a ticket option from our course workshop page before proceeding to checkout.
            </p>
            <button onClick={() => onNavigate('course')} className="btn-gold" style={{ justifyContent: 'center' }}>
              <ArrowLeft size={17} />
              <span>VIEW WORKSHOP TICKETS</span>
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'start'
          }} className="checkout-grid">
            {/* Left Column: Delegate Details & Payment Form */}
            <div style={{ gridColumn: 'span 7' }} className="checkout-form-col">
              <div className="gold-box" style={{ padding: '2rem 1.5rem' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '1.25rem' }}>
                  1. DELEGATE REGISTRATION DETAILS
                </h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.78rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '4px' }}>
                      FULL NAME *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Cheslin Gabriels"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{ width: '100%', backgroundColor: '#151C28', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '6px', padding: '0.75rem 1rem', color: '#FFFFFF', outline: 'none', minHeight: '44px' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="checkout-inputs-row">
                    <div>
                      <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.78rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '4px' }}>
                        PHONE NUMBER *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. 082 549 0398"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', backgroundColor: '#151C28', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '6px', padding: '0.75rem 1rem', color: '#FFFFFF', outline: 'none', minHeight: '44px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.78rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '4px' }}>
                        EMAIL ADDRESS *
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', backgroundColor: '#151C28', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '6px', padding: '0.75rem 1rem', color: '#FFFFFF', outline: 'none', minHeight: '44px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.78rem', fontFamily: 'Montserrat', fontWeight: 700, marginBottom: '4px' }}>
                      SOUTH AFRICAN ID NUMBER / PASSPORT *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 9205125089081"
                      value={formData.idNumber}
                      onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                      style={{ width: '100%', backgroundColor: '#151C28', border: '1px solid rgba(245, 184, 0, 0.3)', borderRadius: '6px', padding: '0.75rem 1rem', color: '#FFFFFF', outline: 'none', minHeight: '44px' }}
                    />
                  </div>

                  <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.2rem', color: '#FFFFFF', margin: '1.25rem 0 0.85rem' }}>
                    2. PAYMENT METHOD
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {[
                      { id: 'card', name: 'Instant Ozow EFT / Credit Card', desc: 'Instant confirmation & instant ticket download' },
                      { id: 'eft', name: 'Direct Bank EFT', desc: 'Receive invoice & bank details for EFT payment' },
                      { id: 'snapscan', name: 'SnapScan / Zapper QR', desc: 'Scan QR code on your mobile phone' }
                    ].map((method) => (
                      <label 
                        key={method.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          backgroundColor: formData.paymentMethod === method.id ? 'rgba(245, 184, 0, 0.12)' : '#151C28',
                          border: formData.paymentMethod === method.id ? '1.5px solid #F5B800' : '1px solid rgba(245, 184, 0, 0.2)',
                          borderRadius: '6px',
                          padding: '0.85rem 1rem',
                          cursor: 'pointer',
                          minHeight: '48px',
                          touchAction: 'manipulation'
                        }}
                      >
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          checked={formData.paymentMethod === method.id}
                          onChange={() => setFormData({ ...formData, paymentMethod: method.id as any })}
                          style={{ accentColor: '#F5B800', width: '18px', height: '18px' }}
                        />
                        <div>
                          <strong style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontSize: '0.88rem', display: 'block' }}>
                            {method.name}
                          </strong>
                          <span style={{ color: '#94A3B8', fontSize: '0.74rem' }}>{method.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  <button 
                    type="submit" 
                    className="btn-gold" 
                    style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', marginTop: '1.25rem', fontSize: '0.92rem' }}
                  >
                    <CreditCard size={18} />
                    <span>PAY & ISSUE TICKETS (R {totalAmount})</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div style={{ gridColumn: 'span 5' }} className="checkout-summary-col">
              <div className="gold-box" style={{ padding: '2rem 1.5rem' }}>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.2rem', color: '#F5B800', marginBottom: '1.15rem' }}>
                  ORDER SUMMARY
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  {items.map((item) => (
                    <div 
                      key={item.id}
                      style={{
                        backgroundColor: '#151C28',
                        borderRadius: '6px',
                        padding: '0.85rem',
                        border: '1px solid rgba(245, 184, 0, 0.2)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <strong style={{ color: '#FFFFFF', fontSize: '0.88rem' }}>{item.title}</strong>
                        <strong style={{ color: '#F5B800', fontSize: '0.88rem' }}>R {item.price * item.quantity}</strong>
                      </div>
                      <div style={{ color: '#94A3B8', fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Qty: {item.quantity} × R {item.price}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8' }}>
                    <span>Tickets Subtotal:</span>
                    <span style={{ color: '#FFFFFF' }}>R {totalAmount}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8' }}>
                    <span>VAT (15% Included):</span>
                    <span style={{ color: '#FFFFFF' }}>R {(totalAmount * 0.15).toFixed(0)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8' }}>
                    <span>Booking Fee:</span>
                    <span style={{ color: '#00D26A', fontWeight: 700 }}>FREE</span>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(245, 184, 0, 0.4)', paddingTop: '0.85rem', marginTop: '0.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Montserrat', fontWeight: 800, color: '#FFFFFF', fontSize: '1rem' }}>
                      GRAND TOTAL:
                    </span>
                    <span style={{ fontFamily: 'Montserrat', fontWeight: 900, color: '#F5B800', fontSize: '1.45rem' }}>
                      R {totalAmount}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#151C28', padding: '0.75rem', borderRadius: '6px', marginTop: '1.25rem', color: '#94A3B8', fontSize: '0.74rem' }}>
                  <ShieldCheck size={18} color="#F5B800" style={{ flexShrink: 0 }} />
                  <span>256-Bit Encrypted Secure SSL Checkout. Guarantee & Immediate Confirmation.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .checkout-header {
            padding-top: 6.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          .checkout-grid {
            grid-template-columns: repeat(1, 1fr) !important;
            gap: 1.5rem !important;
          }
          .checkout-form-col, .checkout-summary-col {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 550px) {
          .checkout-inputs-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
