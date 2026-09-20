import { ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';

interface HeroProps {
  onExploreClick: () => void;
  onStoryClick: () => void;
}

export default function Hero({ onExploreClick, onStoryClick }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden hero-gradient py-12 lg:py-20">
      {/* Subtle Decorative Yellow Accents */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber-200/30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-center lg:text-left">
            {/* Category Badges */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-1.5 rounded-full bg-white border border-amber-200 shadow-xs text-xs font-semibold text-gray-800">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Kurtis • Tops • Jeans • Dresses • Co-ords</span>
            </div>

            {/* Hero Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Style That Makes <br className="hidden sm:inline" />
              <span className="relative inline-block">
                <span className="relative z-10">You Smile</span>
                <span className="absolute bottom-2 left-0 w-full h-3.5 bg-amber-300/50 -rotate-1 rounded-sm -z-0" />
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              “Discover trendy and comfortable women's fashion for every occasion.”
            </p>

            {/* Primary Hero Button & Value Props */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-950 text-white hover:bg-black text-base font-bold rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 text-amber-400 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onStoryClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-white/90 hover:bg-white text-gray-800 border border-gray-200 hover:border-gray-300 text-base font-semibold rounded-full transition-all shadow-xs cursor-pointer"
              >
                Our Story
              </button>
            </div>

            {/* Small Trust Indicators */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-200/80 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-gray-950">100%</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Quality Cotton</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-gray-950">Everyday</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Comfort Fits</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-gray-950">Affordable</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Starting ₹499</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Warm yellow card backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-amber-200 rounded-3xl rotate-2 scale-[1.02] -z-10 opacity-80 shadow-lg" />

              {/* Main Hero Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={HERO_IMAGE}
                  alt="Chic modern outfit from The Tweety Shop women's collection"
                  className="w-full h-[440px] sm:h-[520px] object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Brand Tag Badge */}
                <div className="absolute bottom-5 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center font-serif font-bold text-gray-950 text-lg shrink-0 shadow-xs">
                      T
                    </div>
                    <div className="truncate">
                      <h3 className="text-sm font-bold text-gray-950 truncate">
                        Fresh Summer Season
                      </h3>
                      <p className="text-xs text-gray-500 truncate">
                        Discover Your Style. Wear Your Confidence.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full shrink-0">
                    New In
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
