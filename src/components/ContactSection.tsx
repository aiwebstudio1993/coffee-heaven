import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Facebook, Instagram, Phone, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  // Handlers
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setContactLoading(true);
    setTimeout(() => {
      setContactLoading(false);
      setContactSubmitted(true);
      setContactForm({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterLoading(true);
    setTimeout(() => {
      setNewsletterLoading(false);
      setNewsletterSubscribed(true);
    }, 1000);
  };

  return (
    <div id="contact-wrapper">
      {/* SECTION 1: CONTACT FORM */}
      <section id="contact" className="py-24 bg-[#FAF7F2] border-t border-b border-beige/40 scroll-mt-24 sm:scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Text description, social media icons */}
            <div className="lg:col-span-5 space-y-6" id="contact-text">
              <span className="text-xs uppercase font-semibold tracking-widest text-copper">Get In Touch</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-walnut leading-tight">
                We Would Love to Hear From You
              </h2>
              <p className="text-charcoal/80 font-light text-sm sm:text-base leading-relaxed">
                Have a question about our menu, interested in booking our space for private celebrations, or want to give feedback? Drop us a line—our friendly family team always replies within 24 hours.
              </p>

              <div className="pt-6 border-t border-beige/60">
                <h4 className="font-serif font-bold text-walnut mb-3">Connect With Our Community</h4>
                <div className="flex space-x-3" id="social-links">
                  
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-copper hover:text-white rounded-full border border-beige/50 text-walnut transition-all duration-200 shadow-sm hover:shadow-md"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-copper hover:text-white rounded-full border border-beige/50 text-walnut transition-all duration-200 shadow-sm hover:shadow-md"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-copper hover:text-white rounded-full border border-beige/50 text-walnut transition-all duration-200 shadow-sm hover:shadow-md"
                    aria-label="Contact us on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>

                  {/* TikTok / Phone */}
                  <a
                    href="tel:+447700900461"
                    className="p-3 bg-white hover:bg-copper hover:text-white rounded-full border border-beige/50 text-walnut transition-all duration-200 shadow-sm hover:shadow-md"
                    aria-label="Call our front desk"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Contact Form */}
            <div className="lg:col-span-7" id="contact-form-container">
              <div className="bg-white rounded-3xl border border-beige/60 p-6 sm:p-10 shadow-xl">
                <AnimatePresence mode="wait">
                  {contactSubmitted ? (
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-10 space-y-4"
                    >
                      <div className="w-16 h-16 bg-sage text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-walnut">Message Received!</h3>
                      <p className="text-charcoal/80 text-sm max-w-md mx-auto">
                        Thank you for reaching out to Coffee Heaven. One of our family hosts will get in touch with you shortly. Have a beautiful day!
                      </p>
                      <button
                        onClick={() => setContactSubmitted(false)}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-walnut bg-[#FAF7F2] border border-beige hover:bg-beige/20 transition-all mt-4"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleContactSubmit}
                      className="space-y-5"
                      id="inner-contact-form"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="space-y-1">
                          <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-walnut">
                            Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="contact-name"
                            name="name"
                            required
                            value={contactForm.name}
                            onChange={handleContactChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none"
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                          <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-walnut">
                            Email <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="contact-email"
                            name="email"
                            required
                            value={contactForm.email}
                            onChange={handleContactChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-wider text-walnut">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleContactChange}
                          placeholder="07123 456789"
                          className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-1">
                        <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-walnut">
                          Message <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={4}
                          value={contactForm.message}
                          onChange={handleContactChange}
                          placeholder="Write your thoughts, questions, or reservations details here..."
                          className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={contactLoading}
                        className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-copper hover:bg-copper/90 transition-all duration-200 disabled:bg-copper/60 shadow-lg shadow-copper/10"
                        id="contact-submit-btn"
                      >
                        {contactLoading ? (
                          <span className="flex items-center space-x-2">
                            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Sending...</span>
                          </span>
                        ) : (
                          <span className="flex items-center space-x-2">
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </span>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: NEWSLETTER (Coffee Club Callout) */}
      <section className="py-20 bg-walnut relative overflow-hidden text-white" id="newsletter">
        {/* Background visual detail */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&h=600&q=20"
            alt=""
            className="w-full h-full object-cover opacity-10 filter mix-blend-overlay"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <AnimatePresence mode="wait">
            {newsletterSubscribed ? (
              <motion.div
                key="newsletter-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 max-w-xl mx-auto"
              >
                <div className="w-12 h-12 bg-copper text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Welcome to Coffee Club!</h3>
                <p className="text-cream/80 text-sm mt-3 leading-relaxed">
                  Thank you for joining. We have sent a secret welcome coupon for a <strong className="text-copper">FREE homemade cinnamon roll</strong> on your next visit! Keep an eye on your inbox.
                </p>
                <div className="inline-block mt-6 px-4 py-2 bg-copper rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white shadow-md">
                  Promo Code: HEAVENROLL10
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="newsletter-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 max-w-2xl"
              >
                <span className="text-xs uppercase font-bold tracking-widest text-copper block">Exclusive Club</span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  Join Our Coffee Club
                </h3>
                <p className="text-cream/80 font-light text-sm sm:text-base max-w-xl mx-auto">
                  Subscribe to receive sweet seasonal offers, invitations to our garden live music evenings, and updates to our weekly chefs specials menu directly in your inbox.
                </p>

                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 mt-8" id="newsletter-form-element">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full sm:flex-1 px-5 py-3.5 rounded-full border border-white/20 bg-white/10 text-white placeholder-cream/50 text-sm focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-copper/80 transition-all"
                    id="newsletter-email"
                  />
                  <button
                    type="submit"
                    disabled={newsletterLoading}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-copper hover:bg-copper/90 transition-all duration-200 disabled:bg-copper/60 shrink-0 shadow-md"
                    id="newsletter-submit-btn"
                  >
                    {newsletterLoading ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
                </form>
                <span className="text-[10px] text-cream/40 block mt-4">
                  We care about your privacy. Zero spam, unsubscribe at any time.
                </span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </div>
  );
}
