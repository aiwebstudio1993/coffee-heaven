import Header, { scrollToId } from './components/Header';
import Hero from './components/Hero';
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
  // Same reliable scrolling as the header (sections use scroll-mt spacing)
  const scrollToSection = scrollToId;

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
