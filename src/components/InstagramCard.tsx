import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { ExternalLink, Copy, Check, Download, Camera } from 'lucide-react';

interface InstagramCardProps {
  compact?: boolean;
  onOpenModal?: () => void;
}

export default function InstagramCard({ compact = false }: InstagramCardProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const handle = '@THE_TWEETYSHOP';
  const profileUrl = 'https://www.instagram.com/the_tweetyshop';

  useEffect(() => {
    // Generate scannable QR code matching the warm amber/gold hue
    QRCode.toDataURL(profileUrl, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 480,
      color: {
        dark: '#C47A0E', // Golden amber/mustard tone from the uploaded image
        light: '#FFFFFF',
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('Failed to generate QR code', err));
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(handle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.download = 'TheTweetyShop-Instagram-QRCode.png';
    link.href = qrDataUrl;
    link.click();
  };

  return (
    <div
      className={`relative mx-auto rounded-3xl overflow-hidden shadow-xl border border-amber-200/80 bg-amber-50/40 select-none ${
        compact ? 'max-w-xs' : 'max-w-sm'
      }`}
    >
      {/* Background Emoji Pattern (Replicating user's uploaded Instagram QR backdrop) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-90">
        <div className="grid grid-cols-4 gap-6 p-4 text-3xl sm:text-4xl filter drop-shadow-xs transform rotate-[-4deg] scale-110">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`flex items-center justify-center transition-transform duration-700 ${
                i % 2 === 0 ? 'translate-y-2' : '-translate-y-1'
              }`}
            >
              😆
            </div>
          ))}
        </div>
      </div>

      {/* Foreground White Card */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-col items-center">
        <div className="w-full bg-white/98 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-lg border border-white flex flex-col items-center">
          {/* Top Scan Hint */}
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full mb-3 border border-amber-200">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Instagram QR Code</span>
          </div>

          {/* QR Code Container with Central Instagram Glyph */}
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 bg-white rounded-2xl p-2.5 flex items-center justify-center shadow-inner border border-amber-100/60">
            {qrDataUrl ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={qrDataUrl}
                  alt="The Tweety Shop Instagram QR Code"
                  className="w-full h-full object-contain rounded-xl"
                />

                {/* Central Instagram Glyph in Matching Golden Amber */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md border-2 border-amber-100 flex items-center justify-center p-1.5">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-[#C47A0E] fill-none stroke-current stroke-[2.2]"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-pulse w-full h-full bg-amber-50/50 rounded-xl" />
            )}
          </div>

          {/* Handle Name below QR code */}
          <div className="mt-4 text-center">
            <span className="font-sans font-black text-lg sm:text-xl tracking-wider text-[#C47A0E]">
              {handle}
            </span>
            <p className="text-[11px] text-gray-500 font-medium mt-0.5">
              Official Women's Fashion Account
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="w-full mt-4 flex flex-col gap-2">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 bg-gray-950 hover:bg-black text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Open @the_tweetyshop</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 py-2 px-3 bg-white/90 hover:bg-white text-gray-800 text-xs font-semibold rounded-xl border border-amber-200/80 shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gray-500" />
                  <span>Copy Handle</span>
                </>
              )}
            </button>

            {qrDataUrl && (
              <button
                onClick={handleDownload}
                className="py-2 px-3 bg-white/90 hover:bg-white text-gray-800 text-xs font-semibold rounded-xl border border-amber-200/80 shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                title="Save QR Code Image"
              >
                <Download className="w-3.5 h-3.5 text-gray-500" />
                <span>Save</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
