import { Sparkles, Heart, Bell, MessageSquare, ExternalLink } from 'lucide-react';
import InstagramCard from './InstagramCard';

interface InstagramSectionProps {
  onOpenModal?: () => void;
}

export default function InstagramSection({ onOpenModal }: InstagramSectionProps) {
  return (
    <section id="instagram" className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden scroll-mt-16">
      {/* Ambient background decoration */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-10 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Benefits */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-amber-800 bg-amber-100/70 px-4 py-1.5 rounded-full border border-amber-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Join Our Community</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight leading-tight">
              Follow Us on Instagram <br />
              <span className="text-amber-800">@the_tweetyshop</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Scan our official QR code with your smartphone camera to connect with us on Instagram. Get daily fashion inspiration, reel showcases, and exclusive collection sneak peeks.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3.5 text-left">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">New Arrivals First</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Early access to weekly Kurtis, Co-ord sets, and seasonal drops.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3.5 text-left">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Style Inspiration</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Everyday outfit ideas, color pairing tips, and fitting guides.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3.5 text-left">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Direct DM Support</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Instant sizing guidance and order enquiries right inside Instagram.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3.5 text-left">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Bell className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Special Deals</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Follower-exclusive festival discounts and giveaway announcements.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="https://www.instagram.com/the_tweetyshop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-950 hover:bg-black text-white rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer group"
              >
                <span>Visit Instagram Profile</span>
                <ExternalLink className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {onOpenModal && (
                <button
                  onClick={onOpenModal}
                  className="px-5 py-3.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl font-bold text-sm transition-colors cursor-pointer"
                >
                  View Large QR Card
                </button>
              )}
            </div>
          </div>

          {/* Right Column: The QR Code Card matching the uploaded image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <InstagramCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
