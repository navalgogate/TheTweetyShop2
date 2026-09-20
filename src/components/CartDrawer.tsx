import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onCheckoutEnquiry: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutEnquiry,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.product.numericPrice * item.quantity, 0);

  const formatCurrency = (num: number) => {
    return '₹' + num.toLocaleString('en-IN');
  };

  const handleWhatsAppCheckout = () => {
    const phoneNumber = '8793493550';
    const lines = items.map(
      (item) => `• ${item.product.name} (Size: ${item.size}, Qty: ${item.quantity}) - ${item.product.price}`
    );
    const text = `Hello The Tweety Shop! I would like to order:\n${lines.join(
      '\n'
    )}\nTotal: ${formatCurrency(totalAmount)}\n\n(I will choose Store Pickup at Kharadi, Pune or Doorstep Delivery)`;
    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gray-900" />
              <h2 className="font-serif text-xl font-bold text-gray-900">Your Shopping Bag</h2>
              <span className="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900">Your bag is empty</h3>
                <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                  Browse our curated collection of Kurtis, Tops, Jeans, and Dresses to add items to your bag.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 bg-gray-950 text-white rounded-full text-xs font-bold hover:bg-black transition-colors"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.size}-${index}`}
                  className="flex gap-4 p-3.5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover object-top rounded-xl shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-bold text-gray-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-amber-800 font-semibold mt-0.5">
                        Size: <span className="text-gray-900">{item.size}</span>
                      </p>
                      <p className="text-xs font-bold text-gray-950 mt-1">{item.product.price}</p>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                        className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout actions */}
          {items.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-white space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Subtotal Estimated</span>
                <span className="font-extrabold text-xl text-gray-950">{formatCurrency(totalAmount)}</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Taxes and standard doorstep delivery calculated upon booking.
              </p>

              <div className="space-y-2 pt-1">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order via WhatsApp (+91 8793493550)</span>
                </button>

                <p className="text-[11px] text-center text-gray-500">
                  📍 Store Pickup at Nanashri Complex, Kharadi, Pune or Delivery
                </p>

                <button
                  onClick={() => {
                    onClose();
                    onCheckoutEnquiry();
                  }}
                  className="w-full py-3 px-4 bg-gray-950 hover:bg-black text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire / Book via Contact Form</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
