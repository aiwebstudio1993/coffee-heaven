import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import MenuSection from './components/MenuSection';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import FindUs from './components/FindUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import StructuredData from './components/StructuredData';

export default function App() {
  const scrollToSection = (id: string) => {
    // Strip '#' character if present
    const cleanId = id.startsWith('#') ? id.substring(1) : id;

    if (cleanId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const target = document.getElementById(cleanId);
    if (target) {
      // Provide comfortable breathing room so the sticky header does not cover section headings.
      // Sub-sections inside the menu also account for the sticky quick-jump bar.
      const isMenuSubSection = ['hot-drinks', 'cold-drinks', 'breakfast', 'lunch', 'bakery'].includes(cleanId);
      const offset = isMenuSubSection ? 140 : 95;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = Math.max(0, elementPosition - offset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBookClick = () => {
    // Scrolls to the interactive reservation booking engine or contact section
    if (document.getElementById('booking')) {
      scrollToSection('booking');
    } else {
      scrollToSection('contact');
    }
  };

  const handleViewMenuClick = () => {
    scrollToSection('menu-section');
  };

  return (
    <div className="relative min-h-screen bg-cream selection:bg-copper selection:text-white overflow-hidden">
      {/* Search Engine structured data schema injection */}
      <StructuredData />

      {/* Sticky Header Navigation with Matching Dropdown Links */}
      <Header
        onBookClick={handleBookClick}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Full screen hero banner */}
        <Hero onBookClick={handleBookClick} onViewMenuClick={handleViewMenuClick} />

        {/* Feature cards (organic ingredients, roasted weekly, fresh baking, dogs) */}
        <Highlights />

        {/* Café Split Screen Story & Stats counters */}
        <About />

        {/* Beautiful Menus (Hot Drinks, Cold Drinks, Breakfast, Lunch, Bakery) */}
        <MenuSection onCategoryClick={scrollToSection} />

        {/* Interactive Reservation engine */}
        <BookingForm />

        {/* Masonry Pinterest-style Image Gallery */}
        <Gallery />

        {/* Carousel Customer reviews slider */}
        <Reviews />

        {/* Vector SVG map and directions advisor */}
        <FindUs />

        {/* Contact form and Coffee Club newsletter */}
        <ContactSection />
      </main>

      {/* Footer quick links & fineprint */}
      <Footer onLinkClick={scrollToSection} />

      {/* GDPR Cookie Consent notification */}
      <CookieBanner />
    </div>
  );
}
