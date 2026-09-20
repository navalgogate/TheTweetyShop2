import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ArrowRight, QrCode, MapPin, MessageCircle } from 'lucide-react';
import { BRAND_LOGO } from '../data/products';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenInstagram: () => void;
}

export default function Header({ cartCount, onOpenCart, onOpenInstagram }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const phoneNumber = '8793493550';
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
    'Hello The Tweety Shop! I would like to place an order.'
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'shop', 'about', 'instagram', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      {/* Top Store Info & WhatsApp Bar */}
      <div className="bg-amber-400 text-gray-950 text-xs font-semibold py-1.5 px-3 sm:px-6 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-gray-950 shrink-0" />
            <span className="font-bold">Store:</span>
            <span className="text-gray-900 truncate">
              Shop No. 39, Nanashri Complex, Kharadi, Pune
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-950 hover:text-black font-bold bg-white/70 hover:bg-white px-2.5 py-0.5 rounded-full transition-all text-[11px] sm:text-xs shadow-2xs"
            >
              <MessageCircle className="w-3 h-3 text-emerald-700" />
              <span>WhatsApp Orders: {phoneNumber}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-xl p-1"
          >
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center p-1.5 border border-amber-300 transition-transform group-hover:scale-105 shadow-xs shrink-0 overflow-hidden">
              <img
                src={BRAND_LOGO}
                alt="The Tweety Shop Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-gray-950 group-hover:text-amber-700 transition-colors">
                The Tweety Shop
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-gray-500 -mt-1">
                Women's Fashion
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide"
            aria-label="Main Navigation"
          >
            {[
              { id: 'home', label: 'Home' },
              { id: 'shop', label: 'Shop' },
              { id: 'about', label: 'About Us' },
              { id: 'instagram', label: 'Instagram' },
              { id: 'contact', label: 'Contact Us' },
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`py-2 relative transition-colors cursor-pointer ${
                    isActive
                      ? 'text-gray-950 font-bold'
                      : 'text-gray-600 hover:text-amber-700'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transition-transform origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Instagram QR Code Button */}
            <button
              onClick={onOpenInstagram}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-amber-900 bg-amber-100/70 hover:bg-amber-200/80 rounded-full transition-all border border-amber-300 shadow-2xs cursor-pointer"
              title="View Instagram QR Code"
            >
              <QrCode className="w-3.5 h-3.5 text-amber-700" />
              <span>@the_tweetyshop</span>
            </button>

            {/* Bag / Cart Icon Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full hover:bg-gray-100 text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              aria-label="View shopping bag"
              title="View your bag"
            >
              <ShoppingBag className="w-5 h-5 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-400 text-gray-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Header CTA */}
            <button
              onClick={() => scrollToSection('shop')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold bg-gray-950 text-white hover:bg-black rounded-full transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Shop
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenInstagram}
              className="p-2 rounded-lg text-amber-800 bg-amber-100/60 hover:bg-amber-200/70 border border-amber-200"
              aria-label="View Instagram QR Code"
              title="Instagram QR"
            >
              <QrCode className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg text-gray-800 hover:bg-gray-100"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute 0 right-0 bg-amber-400 text-gray-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {[
              { id: 'home', label: 'Home' },
              { id: 'shop', label: 'Shop' },
              { id: 'about', label: 'About Us' },
              { id: 'instagram', label: 'Instagram QR' },
              { id: 'contact', label: 'Contact Us' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-base font-semibold px-4 py-2.5 rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'bg-amber-50 text-amber-900 font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-2 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Orders: {phoneNumber}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInstagram();
                }}
                className="w-full py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-950 rounded-full font-bold text-sm flex items-center justify-center gap-2 border border-amber-300"
              >
                <QrCode className="w-4 h-4 text-amber-700" />
                <span>Open Instagram QR Code</span>
              </button>
              <button
                onClick={() => scrollToSection('shop')}
                className="w-full py-3 bg-gray-950 text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
