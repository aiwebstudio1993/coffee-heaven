import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, MessageSquare, Check, Sparkles, X, Trash2 } from 'lucide-react';

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  requests: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    requests: ''
  });

  const [activeBooking, setActiveBooking] = useState<Booking | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Fetch reservation from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('coffee_heaven_booking') || localStorage.getItem('rustic_oak_booking');
    if (saved) {
      try {
        setActiveBooking(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, date, time } = formData;

    if (!name || !email || !phone || !date || !time) {
      setErrorMsg('Please complete all required fields to reserve your table.');
      return;
    }

    setIsSubmitting(true);

    // Simulate server side save with delay
    setTimeout(() => {
      const newBooking: Booking = {
        id: 'CH-' + Math.floor(100000 + Math.random() * 900000),
        ...formData
      };

      localStorage.setItem('coffee_heaven_booking', JSON.stringify(newBooking));
      setActiveBooking(newBooking);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '2',
        date: '',
        time: '',
        requests: ''
      });
    }, 1200);
  };

  const handleCancelBooking = () => {
    localStorage.removeItem('coffee_heaven_booking');
    localStorage.removeItem('rustic_oak_booking');
    setActiveBooking(null);
  };

  return (
    <section id="booking" className="py-24 bg-cream relative overflow-hidden paper-texture scroll-mt-24 sm:scroll-mt-28">
      {/* Decorative leaf/vibe shapes */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-sage/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute left-0 top-0 w-80 h-80 bg-copper/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold tracking-widest text-copper">Reserve A Table</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-walnut mt-2 mb-4 leading-tight">
            Book Your Experience
          </h2>
          <p className="text-charcoal/70 font-light text-sm">
            Whether it is an intimate brunch, a business lunch, or weekend family gathering, we will reserve a perfect cozy spot for you.
          </p>
          <div className="w-16 h-1 bg-copper mx-auto mt-4 rounded-full" />
        </div>

        <AnimatePresence mode="wait">
          {activeBooking ? (
            /* ACTIVE RESERVATION CARD */
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-sage/30 shadow-xl overflow-hidden max-w-xl mx-auto"
              id="active-booking-card"
            >
              <div className="bg-sage/15 p-8 text-center border-b border-sage/10 relative">
                <div className="absolute top-4 right-4 bg-sage/10 text-sage p-1.5 rounded-full cursor-pointer hover:bg-sage/20 transition-colors" onClick={handleCancelBooking} title="Cancel Reservation">
                  <X className="w-4 h-4" />
                </div>
                <div className="w-16 h-16 bg-sage text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-sage/20">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-walnut">Reservation Confirmed!</h3>
                <span className="inline-block mt-2 px-3 py-1 bg-white/80 rounded-full text-xs font-mono font-semibold text-sage border border-sage/20">
                  Confirmation Code: {activeBooking.id}
                </span>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF7F2] rounded-xl border border-beige/40">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-charcoal/50 block mb-1">Date</span>
                    <span className="font-serif font-bold text-walnut">{activeBooking.date}</span>
                  </div>
                  <div className="p-4 bg-[#FAF7F2] rounded-xl border border-beige/40">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-charcoal/50 block mb-1">Time</span>
                    <span className="font-serif font-bold text-walnut">{activeBooking.time}</span>
                  </div>
                  <div className="p-4 bg-[#FAF7F2] rounded-xl border border-beige/40 col-span-2">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-charcoal/50 block mb-1">Guests</span>
                    <span className="font-serif font-bold text-walnut">{activeBooking.guests} People</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-beige/80 pt-6 space-y-3 text-sm text-charcoal/80">
                  <div className="flex justify-between">
                    <span className="font-medium text-charcoal/50">Reserved For:</span>
                    <span className="font-bold text-walnut">{activeBooking.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-charcoal/50">Email Address:</span>
                    <span className="text-walnut">{activeBooking.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-charcoal/50">Phone Number:</span>
                    <span className="text-walnut">{activeBooking.phone}</span>
                  </div>
                  {activeBooking.requests && (
                    <div className="pt-2">
                      <span className="font-medium text-charcoal/50 block mb-1">Special Requests:</span>
                      <p className="p-3 bg-cream/30 rounded-lg border border-beige/30 text-xs italic">
                        "{activeBooking.requests}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={handleCancelBooking}
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-all duration-200"
                    id="cancel-booking-btn"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Cancel Reservation
                  </button>
                  <button
                    onClick={() => {
                      // Trigger native print or share layout easily
                      window.print();
                    }}
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-walnut hover:bg-walnut/90 transition-all duration-200"
                    id="print-booking-btn"
                  >
                    Print Details
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* PROFESSIONAL BOOKING FORM */
            <motion.form
              key="booking-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-beige/60 shadow-xl p-6 sm:p-10 space-y-6"
              id="reservation-form"
              noValidate
            >
              {errorMsg && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-sm flex items-center space-x-2">
                  <X className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-walnut block">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-walnut block">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-walnut block">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07123 456789"
                    className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none"
                  />
                </div>

                {/* Number of Guests */}
                <div className="space-y-1">
                  <label htmlFor="guests" className="text-xs font-semibold uppercase tracking-wider text-walnut block">
                    Number of Guests <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6 People</option>
                      <option value="7">7 People</option>
                      <option value="8">8+ People (Large Group)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-walnut/60 pointer-events-none">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-1">
                  <label htmlFor="date" className="text-xs font-semibold uppercase tracking-wider text-walnut block">
                    Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-1">
                  <label htmlFor="time" className="text-xs font-semibold uppercase tracking-wider text-walnut block">
                    Preferred Time <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select a time...</option>
                      <optgroup label="Breakfast & Brunch">
                        <option value="08:00">8:00 am</option>
                        <option value="08:30">8:30 am</option>
                        <option value="09:00">9:00 am</option>
                        <option value="09:30">9:30 am</option>
                        <option value="10:00">10:00 am</option>
                        <option value="10:30">10:30 am</option>
                        <option value="11:00">11:00 am</option>
                        <option value="11:30">11:30 am</option>
                      </optgroup>
                      <optgroup label="Lunch">
                        <option value="12:00">12:00 pm</option>
                        <option value="12:30">12:30 pm</option>
                        <option value="13:00">13:00 pm</option>
                        <option value="13:30">13:30 pm</option>
                        <option value="14:00">14:00 pm</option>
                        <option value="14:30">14:30 pm</option>
                        <option value="15:00">15:00 pm</option>
                        <option value="15:30">15:30 pm</option>
                        <option value="16:00">16:00 pm</option>
                      </optgroup>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-walnut/60 pointer-events-none">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1">
                <label htmlFor="requests" className="text-xs font-semibold uppercase tracking-wider text-walnut block">
                  Special Requests / Dietary Requirements
                </label>
                <textarea
                  id="requests"
                  name="requests"
                  rows={3}
                  value={formData.requests}
                  onChange={handleChange}
                  placeholder="Tell us if you require high chairs, wheelchair access, have severe food allergies, or are celebrating a special occasion..."
                  className="w-full px-4 py-3 rounded-xl border border-beige hover:border-copper/40 focus:border-copper focus:ring-1 focus:ring-copper/50 bg-[#FAF7F2]/50 text-sm transition-all outline-none resize-none"
                />
              </div>

              {/* Large Confirmation Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-copper hover:bg-copper/90 active:scale-98 transition-all duration-200 disabled:bg-copper/60 shadow-lg shadow-copper/20"
                id="submit-booking-btn"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Securing Table...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm Table Reservation</span>
                  </span>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* OPENING HOURS DISPLAYED ELEGANTLY BENEATH */}
        <div className="mt-16 text-center" id="opening-hours-brief">
          <h3 className="font-serif text-lg font-bold text-walnut mb-6 uppercase tracking-wider">
            Available Dining Hours
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-4 bg-white rounded-2xl border border-beige/40 shadow-sm">
              <span className="text-[10px] font-mono text-charcoal/50 uppercase tracking-widest block mb-1">
                Mon – Fri
              </span>
              <span className="font-serif font-bold text-walnut block">7:30 am – 5:00 pm</span>
              <span className="text-[10px] text-sage font-medium block mt-1">Kitchen closes at 4:30 pm</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-beige/40 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-copper text-white text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-bl">
                Busy
              </div>
              <span className="text-[10px] font-mono text-charcoal/50 uppercase tracking-widest block mb-1">
                Saturday
              </span>
              <span className="font-serif font-bold text-walnut block">8:00 am – 6:00 pm</span>
              <span className="text-[10px] text-sage font-medium block mt-1">Kitchen closes at 5:30 pm</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-beige/40 shadow-sm">
              <span className="text-[10px] font-mono text-charcoal/50 uppercase tracking-widest block mb-1">
                Sunday
              </span>
              <span className="font-serif font-bold text-walnut block">9:00 am – 4:00 pm</span>
              <span className="text-[10px] text-sage font-medium block mt-1">Sunday Roast 12:00 pm – Sold Out</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
