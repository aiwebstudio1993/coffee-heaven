import { Coffee, ArrowUp } from 'lucide-react';

interface FooterProps {
  onLinkClick: (href: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuLinks: { label: string; href: string }[] = [
    { label: 'Hot Drinks', href: '#hot-drinks' },
    { label: 'Cold Drinks', href: '#cold-drinks' },
    { label: 'Breakfast & Brunch', href: '#breakfast' },
    { label: 'Lunch & Toasties', href: '#lunch' },
    { label: 'Fresh Bakery', href: '#bakery' },
  ];

  const exploreLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story (About)', href: '#about' },
    { label: 'Guest Reviews', href: '#reviews' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Find Us & Directions', href: '#find-us' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Book a Table', href: '#booking' },
  ];

  return (
    <footer className="bg-walnut text-cream/90 pt-16 pb-8 border-t border-white/5 relative overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer row: brand, sitemaps, opening hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="p-2 bg-copper rounded-full text-cream">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                Coffee <span className="text-copper">Heaven</span>
              </span>
            </div>
            <p className="text-cream/70 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              An independent rustic-modern café celebrating the true taste of real coffee, locally sourced breakfasts, homemade lunches, and handcrafted pastries in Staffordshire.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase font-mono text-copper tracking-wider font-semibold">Address:</span>
              <p className="text-xs text-cream/60 mt-1 leading-relaxed">
                14 Tannery Lane, Stafford, ST16
              </p>
            </div>
          </div>

          {/* Quick Links: Explore */}
          <div className="lg:col-span-2.5">
            <h4 className="font-serif text-white font-bold text-base mb-4 uppercase tracking-wider text-sm">
              Explore Café
            </h4>
            <ul className="space-y-2.5 text-xs">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onLinkClick(link.href);
                    }}
                    className="hover:text-copper transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links: The Menu */}
          <div className="lg:col-span-2.5">
            <h4 className="font-serif text-white font-bold text-base mb-4 uppercase tracking-wider text-sm">
              The Menu
            </h4>
            <ul className="space-y-2.5 text-xs">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onLinkClick(link.href);
                    }}
                    className="hover:text-copper transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Opening Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-white font-bold text-base mb-4 uppercase tracking-wider text-sm">
              Opening Hours
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/70 font-light">
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span>Mon – Fri:</span>
                <span className="text-white font-semibold">7:30 am – 5:00 pm</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span>Saturday:</span>
                <span className="text-white font-semibold">8:00 am – 6:00 pm</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span>Sunday:</span>
                <span className="text-white font-semibold">9:00 am – 4:00 pm</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row: copyright, quick fineprint and Back To Top button */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-cream/50 font-light gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
            <span>&copy; {currentYear} Coffee Heaven. All rights reserved.</span>
            <a href="#privacy" className="hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
            <a href="#cookies" className="hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>Cookie Policy</a>
            <a
              href="https://google.com/maps?q=Coffee+Heaven+Tannery+Lane+Stafford"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              Google Maps Link
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white/5 hover:bg-copper hover:text-white rounded-full transition-all duration-200 text-cream shrink-0 border border-white/10 group shadow-lg"
            aria-label="Scroll back to top"
            id="back-to-top-btn"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
