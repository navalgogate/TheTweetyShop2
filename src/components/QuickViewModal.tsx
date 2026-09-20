import { useState } from 'react';
import { X, Check, ShoppingBag, MessageCircle, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
  onContactClick: () => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onContactClick,
}: QuickViewModalProps) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const handleEnquire = () => {
    onClose();
    onContactClick();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Frame */}
        <div className="aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-gray-100 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          {product.badge && (
            <div className="absolute bottom-3 left-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-gray-950 shadow-md flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{product.badge}</span>
              </span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {product.category}
            </span>
            <span className="text-xl font-extrabold text-gray-950">{product.price}</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-gray-950 mt-2.5">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">{product.description}</p>

          {/* Sizing options */}
          <div className="mt-5">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-700 mb-2">
              <span>Select Size</span>
              <span className="text-amber-800">True to standard fit</span>
            </div>
            <div className="flex items-center gap-2">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`min-w-10 h-10 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedSize === sz
                      ? 'bg-gray-950 text-white shadow-sm ring-2 ring-amber-400'
                      : 'bg-gray-100 text-gray-800 hover:bg-amber-100'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Product Specifications */}
          <div className="mt-5 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-gray-400 block font-medium">Fabric Quality</span>
              <span className="text-gray-800 font-semibold">{product.fabric}</span>
            </div>
            <div>
              <span className="text-gray-400 block font-medium">Fit Type</span>
              <span className="text-gray-800 font-semibold">{product.fit}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleAdd}
              className={`w-full sm:flex-1 py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-400 hover:bg-amber-500 text-gray-950 shadow-sm'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Bag!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag ({selectedSize})</span>
                </>
              )}
            </button>

            <button
              onClick={handleEnquire}
              className="w-full sm:flex-1 py-3.5 px-4 bg-gray-950 hover:bg-black text-white text-center font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-amber-400" />
              <span>Enquire via Form</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
