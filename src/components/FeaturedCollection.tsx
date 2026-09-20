import { useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface FeaturedCollectionProps {
  onQuickView: (product: Product) => void;
  onShopNow: (product: Product) => void;
  onContactClick: () => void;
}

export default function FeaturedCollection({
  onQuickView,
  onShopNow,
  onContactClick,
}: FeaturedCollectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Kurtis',
    'Tops',
    'Jeans',
    'Dresses',
    'T-Shirts',
    'Co-ord Sets',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="shop" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-amber-800 bg-amber-50 px-3.5 py-1 rounded-full mb-3 border border-amber-200">
            Our Curated Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight mb-4">
            Featured Collection
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore our signature women's fashion pieces designed for effortless elegance, versatile
            styling, and everyday comfort.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gray-950 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Showcase Grid (Exact 6 products matching mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image Frame with Category Tag & Badge */}
              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Category Pill on Top-Left */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-gray-800 shadow-xs border border-gray-100">
                    {product.category}
                  </span>
                </div>

                {/* Badge on Top-Right */}
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-400 text-gray-950 shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{product.badge}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-xl font-bold text-gray-950 group-hover:text-amber-800 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-lg font-extrabold text-gray-950 shrink-0">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 mt-4 border-t border-gray-100 flex items-center gap-3">
                  <button
                    onClick={() => onQuickView(product)}
                    className="flex-1 py-2.5 px-4 bg-gray-100 hover:bg-amber-100 hover:text-amber-900 text-gray-800 text-xs font-bold rounded-xl transition-colors text-center cursor-pointer"
                  >
                    Quick View
                  </button>
                  <button
                    onClick={() => onShopNow(product)}
                    className="flex-1 py-2.5 px-4 bg-gray-950 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors text-center shadow-xs cursor-pointer"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Shop Notice Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-amber-50/50 border border-amber-200/80 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-sm text-gray-800 font-medium">
            Looking for custom sizing or personal styling assistance?
          </p>
          <button
            onClick={onContactClick}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-amber-800 hover:text-amber-950 underline underline-offset-4 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-amber-600" />
            <span>Chat with our team via WhatsApp or Contact Form →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
