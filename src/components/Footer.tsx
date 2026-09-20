import { BRAND_LOGO } from '../data/products';
import { QrCode } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
  onOpenInstagram?: () => void;
}

export default function Footer({ onNavigate, onOpenInstagram }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
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
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-4">
              Quick Navigation
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
                  Instagram QR Code
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

          {/* Connect With Us */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Follow our daily styling ideas and fashion arrivals:
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/the_tweetyshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
                  aria-label="Follow The Tweety Shop on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
                  aria-label="Follow The Tweety Shop on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>

              {onOpenInstagram && (
                <button
                  type="button"
                  onClick={onOpenInstagram}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-amber-300 text-xs font-semibold border border-gray-800 transition-colors cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5 text-amber-400" />
                  <span>Scan Instagram QR Code</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Copyright & Simple Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2025 The Tweety Shop. All rights reserved.</p>
          <p>A simple showcase website for modern women's fashion.</p>
        </div>
      </div>
    </footer>
  );
}
