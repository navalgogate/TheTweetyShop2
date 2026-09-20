import { useState } from 'react';
import { ExternalLink, Copy, Check, Download, Camera } from 'lucide-react';

interface InstagramCardProps {
  compact?: boolean;
}

export default function InstagramCard({ compact = false }: InstagramCardProps) {
  const [copied, setCopied] = useState(false);
  const handle = '@THE_TWEETYSHOP';
  const profileUrl = 'https://www.instagram.com/the_tweetyshop';
  const qrSvgUrl = '/assets/the-tweetyshop-qr.svg';

  const handleCopy = () => {
    navigator.clipboard.writeText(handle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    // Download the official high-resolution vector QR SVG matching the attached QR
    const link = document.createElement('a');
    link.download = 'TheTweetyShop-Official-Instagram-QR.svg';
    link.href = qrSvgUrl;
    link.click();
  };

  return (
    <div
      className={`mx-auto flex flex-col items-center select-none ${
        compact ? 'max-w-xs' : 'max-w-sm'
      }`}
    >
      {/* 1. Official Instagram QR Code Card (Direct recreation of user's attached QR image) */}
      <div className="w-full bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-amber-200/90 transition-all hover:shadow-2xl">
        {/* Top Scan Header Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            <span>Scan to Follow</span>
          </div>

          <span className="text-[11px] font-bold text-amber-800 bg-amber-100/60 px-2.5 py-0.5 rounded-full">
            Instagram
          </span>
        </div>

        {/* The Exact QR Code Card Image */}
        <div className="relative w-full aspect-square bg-white rounded-2xl p-1 flex items-center justify-center overflow-hidden">
          <img
            src={qrSvgUrl}
            alt="Official Instagram QR Code for @THE_TWEETYSHOP"
            className="w-full h-full object-contain rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Subtitle Information */}
        <p className="text-center text-xs text-gray-500 font-medium mt-3">
          Point your smartphone camera to visit our Instagram profile instantly.
        </p>
      </div>

      {/* 2. Interactive Action Controls */}
      <div className="w-full mt-4 flex flex-col gap-2">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-gray-950 hover:bg-black text-white text-xs font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
        >
          <span>Open @the_tweetyshop on Instagram</span>
          <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 py-2.5 px-3 bg-white hover:bg-gray-50 text-gray-800 text-xs font-semibold rounded-xl border border-gray-200 shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied @THE_TWEETYSHOP!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-gray-500" />
                <span>Copy Handle</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="py-2.5 px-3.5 bg-white hover:bg-gray-50 text-gray-800 text-xs font-semibold rounded-xl border border-gray-200 shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            title="Download Vector QR Card"
          >
            <Download className="w-3.5 h-3.5 text-amber-700" />
            <span>Save QR</span>
          </button>
        </div>
      </div>
    </div>
  );
}
