import { X } from 'lucide-react';
import InstagramCard from './InstagramCard';

interface InstagramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstagramModal({ isOpen, onClose }: InstagramModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-20 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all cursor-pointer border border-gray-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* The Card Component */}
        <InstagramCard />
      </div>
    </div>
  );
}
