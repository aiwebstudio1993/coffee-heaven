import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Navigation, Car, Shield, Compass, Train, CircleAlert } from 'lucide-react';

export default function FindUs() {
  const [directionsRequested, setDirectionsRequested] = useState(false);
  const [routeType, setRouteType] = useState<'walk' | 'car'>('walk');

  return (
    <section id="find-us" className="py-24 bg-white relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-semibold tracking-widest text-copper">Visit Us Today</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-walnut mt-2 leading-tight">
            Find Coffee Heaven
          </h2>
          <div className="w-16 h-1 bg-copper mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Contact Info, Opening, Accessibility & Travel info */}
          <div className="lg:col-span-5 space-y-8" id="find-us-info">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-beige/60 shadow-sm space-y-6">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-copper/10 text-copper rounded-xl mt-1 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-walnut text-lg">Our Location</h4>
                  <p className="text-charcoal/80 text-sm mt-1 leading-relaxed">
                    Coffee Heaven<br />
                    125 Market Street, Stafford<br />
                    ST16 2AB, United Kingdom
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-sage/10 text-sage rounded-xl mt-1 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-walnut text-lg">Call Us</h4>
                  <a
                    href="tel:+441785123456"
                    className="text-copper hover:text-copper/80 hover:underline text-sm font-semibold mt-1 block"
                  >
                    +44 (0) 1785 123456
                  </a>
                  <span className="text-[10px] text-charcoal/50 uppercase tracking-wider block mt-0.5">
                    For bookings of 8+ or event inquiries
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-forest/10 text-forest rounded-xl mt-1 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-walnut text-lg">Email Address</h4>
                  <a
                    href="mailto:hello@coffeeheaven.co.uk"
                    className="text-copper hover:text-copper/80 hover:underline text-sm font-semibold mt-1 block break-all"
                  >
                    hello@coffeeheaven.co.uk
                  </a>
                </div>
              </div>

            </div>

            {/* Amenities Metadata Tags */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-beige/50 rounded-2xl flex items-center space-x-3 shadow-sm">
                <Car className="w-5 h-5 text-sage shrink-0" />
                <span className="text-xs font-semibold text-charcoal/80">Parking Available</span>
              </div>
              <div className="p-4 bg-white border border-beige/50 rounded-2xl flex items-center space-x-3 shadow-sm">
                <Compass className="w-5 h-5 text-sage shrink-0" />
                <span className="text-xs font-semibold text-charcoal/80">Wheelchair Access</span>
              </div>
              <div className="p-4 bg-white border border-beige/50 rounded-2xl flex items-center space-x-3 shadow-sm">
                <Shield className="w-5 h-5 text-sage shrink-0" />
                <span className="text-xs font-semibold text-charcoal/80">Secure Bike Racks</span>
              </div>
              <div className="p-4 bg-white border border-beige/50 rounded-2xl flex items-center space-x-3 shadow-sm">
                <Train className="w-5 h-5 text-sage shrink-0" />
                <span className="text-xs font-semibold text-charcoal/80">3-Min Train Walk</span>
              </div>
            </div>

            {/* Directions Action Trigger */}
            <button
              onClick={() => setDirectionsRequested(!directionsRequested)}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-walnut hover:bg-walnut/90 active:scale-95 transition-all duration-200 shadow-md shadow-walnut/10"
              id="directions-toggle-btn"
            >
              <Navigation className="w-4 h-4 mr-2" />
              <span>{directionsRequested ? 'Hide Directions' : 'Calculate Directions'}</span>
            </button>
          </div>

          {/* Right: Beautiful custom interactive maps illustration & calculating widget */}
          <div className="lg:col-span-7" id="find-us-map">
            <div className="relative bg-cream/30 border border-beige rounded-3xl overflow-hidden aspect-16/10 shadow-lg min-h-[300px]">
              
              {/* SVG Mockup Map (Perfect rustic style matching palette) */}
              <svg className="w-full h-full bg-[#FAF7F2]" viewBox="0 0 600 375" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Grid background */}
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E6D8C3" strokeWidth="0.5" />
                  </pattern>
                  {/* Pin shadow */}
                  <radialGradient id="pinShadow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4B3425" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4B3425" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Grid */}
                <rect width="100%" height="100%" fill="url(#mapGrid)" />

                {/* Roads */}
                {/* Stafford Main Road */}
                <path d="M -50,150 Q 200,160 650,140" fill="none" stroke="#E6D8C3" strokeWidth="24" strokeLinecap="round" />
                <path d="M -50,150 Q 200,160 650,140" fill="none" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
                
                {/* Market Street */}
                <path d="M 300,-50 L 300,450" fill="none" stroke="#E6D8C3" strokeWidth="20" strokeLinecap="round" />
                <path d="M 300,-50 L 300,450" fill="none" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />

                {/* Church Lane */}
                <path d="M 100,155 L 100,300 L 650,300" fill="none" stroke="#E6D8C3" strokeWidth="16" strokeLinecap="round" />
                <path d="M 100,155 L 100,300 L 650,300" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />

                {/* Local park / river */}
                <rect x="40" y="20" width="180" height="100" rx="15" fill="#7B8B6A" fillOpacity="0.15" />
                <text x="130" y="70" textAnchor="middle" fill="#7B8B6A" fontSize="11" fontFamily="Playfair Display" fontStyle="italic">Victoria Park</text>

                {/* River Sow */}
                <path d="M -50,80 Q 150,90 250,50 T 650,20" fill="none" stroke="#B8D8D8" strokeWidth="8" strokeLinecap="round" />
                <text x="500" y="45" fill="#719e9e" fontSize="9" fontFamily="Inter" fontWeight="semibold">River Sow</text>

                {/* Road Labels */}
                <text x="180" y="175" fill="#2E2E2E" fillOpacity="0.6" fontSize="10" fontFamily="Inter" letterSpacing="1">A518 STATION ROAD</text>
                <text x="312" y="350" fill="#2E2E2E" fillOpacity="0.6" fontSize="10" fontFamily="Inter" transform="rotate(90, 312, 350)" letterSpacing="1">MARKET STREET</text>

                {/* Surrounding Places */}
                {/* Stafford Train Station */}
                <circle cx="80" cy="155" r="5" fill="#7B8B6A" />
                <text x="92" y="159" fill="#2E2E2E" fillOpacity="0.8" fontSize="9" fontFamily="Inter" fontWeight="bold">Stafford Station (3 min walk)</text>

                {/* Market Street Parking */}
                <rect x="340" y="220" width="100" height="40" rx="8" fill="#F7F3EB" stroke="#E6D8C3" strokeWidth="1" />
                <text x="390" y="237" textAnchor="middle" fill="#4B3425" fontSize="9" fontFamily="Inter" fontWeight="bold">P PARKWAY</text>
                <text x="390" y="249" textAnchor="middle" fill="#2E2E2E" fillOpacity="0.5" fontSize="8" fontFamily="Inter">2-Min Walk</text>

                {/* THE RUSTIC OAK CAFE */}
                {/* Pin Shadow */}
                <ellipse cx="300" cy="155" rx="15" ry="6" fill="url(#pinShadow)" />
                {/* Pulsing Beacon */}
                <circle cx="300" cy="155" r="16" fill="#C87D55" fillOpacity="0.2">
                  <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* Real Pin */}
                <path d="M 300,155 C 290,145 285,130 285,120 C 285,111 292,104 300,104 C 308,104 315,111 315,120 C 315,130 310,145 300,155 Z" fill="#C87D55" stroke="#4B3425" strokeWidth="1" />
                <circle cx="300" cy="120" r="5" fill="#F7F3EB" />

                {/* Cafe Label Box */}
                <rect x="230" y="60" width="140" height="34" rx="8" fill="#4B3425" stroke="#C87D55" strokeWidth="1.5" />
                <text x="300" y="76" textAnchor="middle" fill="#F7F3EB" fontSize="9.5" fontFamily="Playfair Display" fontWeight="bold">COFFEE HEAVEN</text>
                <text x="300" y="88" textAnchor="middle" fill="#E6D8C3" fontSize="8" fontFamily="Inter" letterSpacing="0.5">REAL ARTISAN ROASTS</text>
              </svg>

              {/* OVERLAY PANEL: CALCULATE DIRECTIONS */}
              <AnimatePresence>
                {directionsRequested && (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-x-0 bottom-0 bg-walnut/95 border-t border-white/10 p-6 backdrop-blur-md text-white z-10"
                    id="directions-panel"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="font-serif text-lg font-bold text-beige">Travel & Route Planner</h5>
                        <p className="text-xs text-cream/70 mt-0.5">Stafford (ST16 2AB) via local travel nodes.</p>
                      </div>
                      <div className="flex space-x-1.5 bg-white/10 rounded-lg p-1">
                        <button
                          onClick={() => setRouteType('walk')}
                          className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded transition-colors ${
                            routeType === 'walk' ? 'bg-copper text-white' : 'text-cream/70 hover:text-white'
                          }`}
                        >
                          Walk
                        </button>
                        <button
                          onClick={() => setRouteType('car')}
                          className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded transition-colors ${
                            routeType === 'car' ? 'bg-copper text-white' : 'text-cream/70 hover:text-white'
                          }`}
                        >
                          Car
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3" id="travel-guide-steps">
                      {routeType === 'walk' ? (
                        <>
                          <div className="flex items-start space-x-3 text-xs leading-relaxed">
                            <span className="w-5 h-5 bg-sage text-white rounded-full flex items-center justify-center shrink-0 font-bold">1</span>
                            <p className="text-cream/90">Exit <strong className="text-white">Stafford Railway Station</strong> via Victoria Road and head East toward Victoria Park.</p>
                          </div>
                          <div className="flex items-start space-x-3 text-xs leading-relaxed">
                            <span className="w-5 h-5 bg-sage text-white rounded-full flex items-center justify-center shrink-0 font-bold">2</span>
                            <p className="text-cream/90">Cross the bridge and continue straight down <strong className="text-white">Market Street</strong> past the square.</p>
                          </div>
                          <div className="flex items-start space-x-3 text-xs leading-relaxed">
                            <span className="w-5 h-5 bg-sage text-white rounded-full flex items-center justify-center shrink-0 font-bold">3</span>
                            <p className="text-cream/90">The Rustic Oak Café is on your left, at number 125, next to the historic stone oak gate.</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-start space-x-3 text-xs leading-relaxed">
                            <span className="w-5 h-5 bg-copper text-white rounded-full flex items-center justify-center shrink-0 font-bold">1</span>
                            <p className="text-cream/90">From the A34 or A518, proceed toward Stafford Town Center, following signs for Market Square parking.</p>
                          </div>
                          <div className="flex items-start space-x-3 text-xs leading-relaxed">
                            <span className="w-5 h-5 bg-copper text-white rounded-full flex items-center justify-center shrink-0 font-bold">2</span>
                            <p className="text-cream/90">We recommend parking at <strong className="text-white">Market Street Multi-Storey</strong> (1-min walk, free parking after 4:00pm).</p>
                          </div>
                          <div className="flex items-start space-x-3 text-xs leading-relaxed">
                            <span className="w-5 h-5 bg-copper text-white rounded-full flex items-center justify-center shrink-0 font-bold">3</span>
                            <p className="text-cream/90">Walk 150 yards North on Market Street. The cafe is fully wheelchair-accessible with flat-level entry doors.</p>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-cream/50 flex items-center space-x-1.5">
                      <CircleAlert className="w-3.5 h-3.5" />
                      <span>Always free bicycle racks in the front courtyard for guests.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
