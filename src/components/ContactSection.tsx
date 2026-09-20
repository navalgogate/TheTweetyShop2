import { useState, FormEvent } from 'react';
import { Mail, MessageCircle, Clock, CheckCircle2, ArrowRight, QrCode, MapPin, Phone, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  onOpenInstagram?: () => void;
}

export default function ContactSection({ onOpenInstagram }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneNumber = '8793493550';
  const formattedPhone = '+91 8793493550';
  const storeAddress = {
    line1: 'Shop No. 39, Nanashri Complex,',
    line2: 'Opposite to VTP Aurelia, near VTP Cygnus Main Gate,',
    line3: 'Manjari Khurd, Kharadi, Pune – 412307',
  };
  const fullAddressString = 'Shop No. 39, Nanashri Complex, Opposite to VTP Aurelia, near VTP Cygnus Main Gate, Manjari Khurd, Kharadi, Pune 412307';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddressString)}`;
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent('Hello The Tweety Shop! I would like to enquire about placing an order.')}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-amber-800 bg-amber-50 px-3.5 py-1 rounded-full mb-3 border border-amber-200">
            Get in Touch & Visit Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight mb-3">
            We’d Love to Hear From You
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Visit our physical store in Kharadi, Pune, or order directly via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Information Cards (Left) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-gray-50/80 p-6 sm:p-7 rounded-3xl border border-gray-200">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Direct Contact & Store</h3>
              <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                Connect directly for orders, questions about fabric & sizing, or visit us in Pune.
              </p>

              <div className="space-y-3.5">
                {/* Store Address Card */}
                <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                          Store Address
                        </p>
                        <span className="text-[10px] font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                          Kharadi, Pune
                        </span>
                      </div>
                      <address className="not-italic text-xs text-gray-700 font-medium mt-1 leading-relaxed">
                        <span className="font-bold text-gray-900 block">{storeAddress.line1}</span>
                        <span className="block text-gray-600">{storeAddress.line2}</span>
                        <span className="block text-gray-800 font-semibold">{storeAddress.line3}</span>
                      </address>
                      <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between">
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors"
                        >
                          <span>Get Directions on Maps</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Orders Card */}
                <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                        WhatsApp Orders & Support
                      </p>
                      <p className="text-base font-extrabold text-gray-950 mt-0.5">
                        {formattedPhone}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Send screenshots or product names for instant order confirmation.
                      </p>
                      <div className="mt-2.5 flex items-center gap-2">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors shadow-2xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Order on WhatsApp</span>
                        </a>
                        <a
                          href={`tel:${phoneNumber}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-xs font-semibold transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instagram Profile & QR Card */}
                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-[#C47A0E] fill-none stroke-current stroke-[2.2]"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Instagram Community
                      </p>
                      <div className="flex items-center justify-between gap-2 mt-0.5">
                        <a
                          href="https://www.instagram.com/the_tweetyshop"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-gray-900 hover:text-amber-700 transition-colors"
                        >
                          @the_tweetyshop
                        </a>
                        {onOpenInstagram && (
                          <button
                            type="button"
                            onClick={onOpenInstagram}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-2.5 py-1 rounded-full border border-amber-300 transition-colors cursor-pointer"
                          >
                            <QrCode className="w-3 h-3 text-amber-700" />
                            <span>Scan QR</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Email Enquiries
                      </p>
                      <a
                        href="mailto:support@thetweetystore.com"
                        className="text-sm font-bold text-gray-900 hover:text-amber-700 transition-colors mt-0.5 inline-block"
                      >
                        support@thetweetystore.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours note */}
              <div className="mt-5 pt-4 border-t border-gray-200/80 flex items-center gap-2 text-xs text-gray-500">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span>Store & Support: Monday to Saturday, 10:00 AM – 8:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="mb-6">
                <h3 className="font-serif text-xl font-bold text-gray-900">Send an Online Enquiry</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Looking for a custom size, wholesale questions, or styling recommendation? Fill in the details below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-gray-900 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-sm"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-gray-900 mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. priya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-sm"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-gray-900 mb-1.5"
                  >
                    Message / Order Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your product enquiry, preferred sizes, or questions here..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-gray-950 text-white hover:bg-black font-bold text-sm rounded-xl transition-all shadow hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Message'}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Success Alert Message */}
                {submitted && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-center flex items-center justify-center gap-3 animate-in fade-in zoom-in duration-200">
                    <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-950">
                        Thank you for reaching out!
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">
                        We have received your message and will respond shortly via email or WhatsApp ({formattedPhone}).
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
