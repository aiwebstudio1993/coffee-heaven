import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('coffee_heaven_cookie_consent') || localStorage.getItem('rustic_oak_cookie_consent');
    if (!consent) {
      // Show banner after 2 seconds delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('coffee_heaven_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('coffee_heaven_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
          id="cookie-consent-banner"
        >
          <div className="max-w-4xl mx-auto bg-walnut/95 border border-white/10 text-white rounded-2xl sm:rounded-full p-4 sm:py-3 sm:px-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <div className="p-2 bg-copper rounded-full text-white shrink-0 hidden sm:block">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="text-xs text-cream/90 leading-relaxed font-light">
                We use cookies to improve your dining and booking experience on our website. By continuing to browse, you agree to our{' '}
                <a href="#cookie-policy" className="underline text-copper hover:text-copper/80" onClick={(e) => e.preventDefault()}>
                  Cookie Policy
                </a>.
              </p>
            </div>
            
            <div className="flex items-center space-x-3 w-full sm:w-auto shrink-0 justify-center">
              <button
                onClick={handleDecline}
                className="w-full sm:w-auto px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-cream/70 hover:text-white hover:bg-white/5 transition-colors"
                id="decline-cookies-btn"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-copper hover:bg-copper/90 transition-colors shadow-md"
                id="accept-cookies-btn"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
