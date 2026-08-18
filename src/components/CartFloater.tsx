import React from 'react';
import { ShoppingBag } from 'lucide-react';
import type { CartItem } from '../types/cart';

interface CartFloaterProps {
  items: CartItem[];
  onOpenCart: () => void;
}

export const CartFloater: React.FC<CartFloaterProps> = ({ items, onOpenCart }) => {
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (totalCount === 0) return null;

  return (
    <button
      onClick={onOpenCart}
      className="cart-float-btn animate-fade-in"
      title="View Cart & Proceed to Checkout"
      aria-label={`View Cart with ${totalCount} items`}
    >
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <ShoppingBag size={20} color="#000000" />
        <span style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          backgroundColor: '#000000',
          color: '#F5B800',
          fontSize: '0.65rem',
          fontWeight: 900,
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {totalCount}
        </span>
      </div>
      <span className="cart-float-text">VIEW CART ({totalCount})</span>

      <style>{`
        .cart-float-btn {
          position: fixed;
          bottom: 140px;
          right: 20px;
          background-color: #F5B800;
          color: #000000;
          border: 2px solid #000000;
          border-radius: 50px;
          padding: 0.65rem 1.15rem;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          box-shadow: 0 8px 30px rgba(245, 184, 0, 0.5);
          z-index: 989;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 0.82rem;
          transition: transform 0.25s ease, background-color 0.25s ease;
          min-height: 44px;
          touch-action: manipulation;
        }

        .cart-float-btn:hover {
          transform: scale(1.05);
          background-color: #FFC700;
        }

        @media (max-width: 600px) {
          .cart-float-btn {
            bottom: 125px;
            right: 14px;
            padding: 0.55rem 0.95rem;
            font-size: 0.78rem;
          }
        }
      `}</style>
    </button>
  );
};
