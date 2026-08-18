import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseBanner } from './components/CourseBanner';
import { ManagementSolutions } from './components/ManagementSolutions';
import { WhyPartner } from './components/WhyPartner';
import { InvestBanner } from './components/InvestBanner';
import { MetricHighlights } from './components/MetricHighlights';
import { PartnerBanner } from './components/PartnerBanner';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { CoursePage } from './components/CoursePage';
import { CheckoutPage } from './components/CheckoutPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { CookiesPage } from './components/CookiesPage';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { CartDrawer } from './components/CartDrawer';
import { CartFloater } from './components/CartFloater';
import { FloatingActions } from './components/FloatingActions';
import type { CartItem } from './types/cart';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'course' | 'checkout' | 'privacy' | 'terms' | 'cookies'>('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleNavigate = (page: string) => {
    if (['home', 'about', 'contact', 'course', 'checkout', 'privacy', 'terms', 'cookies'].includes(page)) {
      setCurrentPage(page as any);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      if (['about', 'services', 'why-ikapa', 'resources'].includes(page)) {
        setTimeout(() => {
          const element = document.getElementById(page);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleAddToCart = (itemData: Omit<CartItem, 'id' | 'quantity'>) => {
    const existingIndex = cartItems.findIndex(i => i.ticketType === itemData.ticketType);
    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        ...itemData,
        id: `ticket-${Date.now()}`,
        quantity: 1
      };
      setCartItems([...cartItems, newItem]);
    }
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleProceedToCheckout = () => {
    setCartOpen(false);
    handleNavigate('checkout');
  };

  return (
    <div className="dot-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Navigation */}
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenModal={handleOpenModal} 
      />

      {/* Main Page Router */}
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <>
            <Hero onOpenModal={handleOpenModal} />
            <CourseBanner onNavigate={handleNavigate} />
            <ManagementSolutions />
            <WhyPartner />
            <InvestBanner onOpenModal={handleOpenModal} />
            <MetricHighlights />
            <PartnerBanner />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate}
            onOpenModal={handleOpenModal}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'course' && (
          <CoursePage 
            onAddToCart={handleAddToCart}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'checkout' && (
          <CheckoutPage 
            items={cartItems}
            onNavigate={handleNavigate}
            onClearCart={handleClearCart}
          />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'terms' && (
          <TermsPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'cookies' && (
          <CookiesPage 
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Buttons */}
      <CartFloater 
        items={cartItems} 
        onOpenCart={() => setCartOpen(true)} 
      />
      <FloatingActions />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Interactive Contact Inquiry Modal */}
      <ContactModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
