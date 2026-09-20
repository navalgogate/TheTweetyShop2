import { BRAND_LOGO } from '../data/products';
import { QrCode, MapPin, MessageCircle, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
  onOpenInstagram?: () => void;
}

export default function Footer({ onNavigate, onOpenInstagram }: FooterProps) {
  const phoneNumber = '8793493550';
  const formattedPhone = '+91 8793493550';
  const fullAddressString =
    'Shop No. 39, Nanashri Complex, Opposite to VTP Aurelia, near VTP Cygnus Main Gate, Manjari Khurd, Kharadi, Pune 412307';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddressString
  )}`;
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
    'Hello The Tweety Shop! I would like to place an order.'
  )}`;

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* 1. Brand & Tagline */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-400 p-1 flex items-center justify-center shadow-xs">
                <img
                  src={BRAND_LOGO}
                  alt="The Tweety Shop"
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                The Tweety Shop
              </span>
            </div>

            <p className="text-base text-amber-300 font-serif italic">
              “Discover Your Style. Wear Your Confidence.”
            </p>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Everyday women's fashion celebrating comfort, simplicity, and affordable chic styles.
            </p>

            {/* Quick WhatsApp Order badge */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/90 text-emerald-300 border border-emerald-700/60 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Orders: {phoneNumber}</span>
              </a>
            </div>
          </div>

          {/* 2. Store Address (New requested location) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Store Location</span>
            </h4>
            <div className="p-4 rounded-2xl bg-gray-900/80 border border-gray-800 space-y-2">
              <p className="text-xs font-bold text-amber-300">The Tweety Shop Boutique</p>
              <p className="text-xs text-gray-300 leading-relaxed">
                <span className="block font-semibold text-white">Shop No. 39, Nanashri Complex,</span>
                <span className="block text-gray-400">Opposite to VTP Aurelia, near VTP Cygnus Main Gate,</span>
                <span className="block font-medium text-gray-200">Manjari Khurd, Kharadi, Pune – 412307</span>
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-1 text-gray-300 hover:text-white"
                >
                  <Phone className="w-3 h-3 text-gray-400" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* 3. Navigation Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Shop Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('instagram')}
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Instagram QR
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* 4. Connect With Us & WhatsApp Orders */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400 hover:bg-emerald-900 transition-colors"
                  aria-label="Order on WhatsApp"
                  title="Order on WhatsApp: 8793493550"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/the_tweetyshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
                  aria-label="Follow The Tweety Shop on Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              {onOpenInstagram && (
                <button
                  type="button"
                  onClick={onOpenInstagram}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-amber-300 text-xs font-semibold border border-gray-800 transition-colors cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5 text-amber-400" />
                  <span>Scan QR Code</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Copyright & Simple Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2025 The Tweety Shop. All rights reserved.</p>
          <p>Kharadi, Pune – 412307 • WhatsApp Orders: +91 8793493550</p>
        </div>
      </div>
    </footer>
  );
}
