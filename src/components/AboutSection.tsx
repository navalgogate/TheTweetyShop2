import { Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 via-amber-50/20 to-white relative overflow-hidden scroll-mt-16"
    >
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200 shadow-sm">
          {/* Section Header Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-700 mb-3 shadow-xs">
              <Heart className="w-6 h-6 fill-amber-400 text-amber-500" />
            </div>
            <span className="block text-xs uppercase tracking-widest font-bold text-amber-800">
              About Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 mt-2">
              The Tweety Story
            </h2>
          </div>

          {/* Specified Body Text (Verbatim reproduction) */}
          <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed text-center sm:text-left">
            <p className="font-semibold text-gray-950 text-lg sm:text-xl leading-relaxed">
              The Tweety Shop is a modern women's fashion destination offering trendy, comfortable
              and affordable clothing for everyday style.
            </p>
            <p>
              From elegant Kurtis and stylish Tops to Jeans, Dresses, T-Shirts and Co-ord Sets, we
              bring together simple fashion choices for different moods and occasions.
            </p>
            <p>Our goal is to make fashion shopping easy, enjoyable and accessible.</p>
          </div>

          {/* Tagline Highlight Box */}
          <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <div className="inline-block p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 max-w-lg mx-auto shadow-xs">
              <p className="font-serif italic text-xl sm:text-2xl font-bold text-gray-950">
                “Discover your style. Wear your confidence.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
