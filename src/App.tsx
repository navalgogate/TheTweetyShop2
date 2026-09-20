/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (product: Product, size: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, size, quantity: 1 }];
    });
  };

  const handleShopNow = (product: Product) => {
    // Open Quick View so the customer can pick their ideal size
    setQuickViewProduct(product);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-amber-200">
      {/* 1. Header / Navigation */}
      <Header cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* 2. Hero Section */}
      <Hero
        onExploreClick={() => scrollToSection('shop')}
        onStoryClick={() => scrollToSection('about')}
      />

      {/* 3. Shop / Featured Collection Section */}
      <FeaturedCollection
        onQuickView={(p) => setQuickViewProduct(p)}
        onShopNow={handleShopNow}
        onContactClick={() => scrollToSection('contact')}
      />

      {/* 4. About Us / The Tweety Story Section */}
      <AboutSection />

      {/* 5. Contact Us Section */}
      <ContactSection />

      {/* 6. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Modals */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onContactClick={() => scrollToSection('contact')}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckoutEnquiry={() => scrollToSection('contact')}
      />
    </div>
  );
}
