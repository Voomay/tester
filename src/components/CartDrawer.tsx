import React, { useEffect } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import type { CartItem } from '../types/cart';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  // Lock body scroll when cart drawer is open
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

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
        zIndex: 1100,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      onClick={onClose}
    >
      {/* Slide Over Drawer Container */}
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: '#0C111B',
          borderLeft: '1.5px solid #F5B800',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.95)',
          position: 'relative'
        }}
        className="animate-fade-in cart-drawer-panel"
      >
        {/* Drawer Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid rgba(245, 184, 0, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#070A11'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ShoppingBag size={22} color="#F5B800" />
            <h3 style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.15rem', color: '#FFFFFF' }}>
              YOUR SHOPPING CART
            </h3>
          </div>
          <button 
            onClick={onClose}
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: 'none', 
              color: '#CBD5E1', 
              cursor: 'pointer', 
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '40px',
              minHeight: '40px',
              touchAction: 'manipulation'
            }}
            aria-label="Close Shopping Cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Cart Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#94A3B8' }}>
              <ShoppingBag size={50} color="#334155" style={{ margin: '0 auto 1rem' }} />
              <h4 style={{ fontFamily: 'Montserrat', fontWeight: 800, color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                YOUR CART IS EMPTY
              </h4>
              <p style={{ fontSize: '0.82rem' }}>
                Select a workshop ticket to reserve your seat at the IKAPA E-Hailing Masterclass.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {items.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    backgroundColor: '#151C28',
                    border: '1px solid rgba(245, 184, 0, 0.3)',
                    borderRadius: '8px',
                    padding: '1.15rem',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <h4 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '0.95rem', color: '#FFFFFF', paddingRight: '2.5rem' }}>
                      {item.title}
                    </h4>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      style={{ 
                        background: 'rgba(239, 68, 68, 0.1)', 
                        border: 'none', 
                        color: '#EF4444', 
                        cursor: 'pointer', 
                        position: 'absolute', 
                        top: '0.85rem', 
                        right: '0.85rem',
                        padding: '6px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        touchAction: 'manipulation'
                      }}
                      title="Remove Item"
                      aria-label={`Remove ${item.title}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <p style={{ color: '#94A3B8', fontSize: '0.74rem', marginBottom: '0.85rem' }}>
                    📅 {item.date} | 📍 {item.location}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Quantity Selector with Accessible Touch Targets */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      border: '1px solid rgba(245, 184, 0, 0.4)',
                      borderRadius: '4px',
                      backgroundColor: '#0C111B'
                    }}>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          color: '#F5B800', 
                          padding: '6px 10px', 
                          cursor: 'pointer',
                          minHeight: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          touchAction: 'manipulation'
                        }}
                        aria-label="Decrease Quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.85rem', padding: '0 6px', minWidth: '24px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          color: '#F5B800', 
                          padding: '6px 10px', 
                          cursor: 'pointer',
                          minHeight: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          touchAction: 'manipulation'
                        }}
                        aria-label="Increase Quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Price */}
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ color: '#94A3B8', fontSize: '0.68rem', display: 'block' }}>
                        R {item.price} each
                      </span>
                      <strong style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.15rem' }}>
                        R {item.price * item.quantity}
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid rgba(245, 184, 0, 0.25)',
            backgroundColor: '#070A11'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.82rem', color: '#94A3B8' }}>
              <span>Subtotal:</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>R {totalAmount}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
              <span style={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontWeight: 800, fontSize: '1rem' }}>
                TOTAL AMOUNT:
              </span>
              <span style={{ color: '#F5B800', fontFamily: 'Montserrat', fontWeight: 900, fontSize: '1.35rem' }}>
                R {totalAmount}
              </span>
            </div>

            <button 
              onClick={onProceedToCheckout}
              className="btn-gold" 
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontSize: '0.92rem' }}
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 480px) {
          .cart-drawer-panel {
            max-width: 100vw !important;
            border-left: none !important;
          }
        }
      `}</style>
    </div>
  );
};
