import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { HairStrandSVG } from './components/HairStrandSVG';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SalonIntro } from './components/SalonIntro';
import { SignatureServices } from './components/SignatureServices';
import { TransformationGallery } from './components/TransformationGallery';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { MeetArtists } from './components/MeetArtists';
import { AIBeautyAssistant } from './components/AIBeautyAssistant';
import { GoogleReviews } from './components/GoogleReviews';
import { InstagramStories } from './components/InstagramStories';
import { BookingModal } from './components/BookingModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [initialBookingService, setInitialBookingService] = useState('');
  const [initialBookingStylist, setInitialBookingStylist] = useState('');
  const [aiOpen, setAiOpen] = useState(false);

  const handleOpenBooking = (service = '', stylist = '') => {
    setInitialBookingService(service);
    setInitialBookingStylist(stylist);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-salon-beige text-salon-charcoal relative selection:bg-salon-gold selection:text-white font-sans">
      {/* Custom Context Cursor & Hair Strand SVG */}
      <CustomCursor />
      <HairStrandSVG />

      {/* Floating Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAI={() => setAiOpen(true)}
      />

      {/* Main Sections Flow */}
      <main>
        {/* 1. Hero Experience */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenAI={() => setAiOpen(true)}
        />

        {/* 2. Salon Introduction */}
        <SalonIntro />

        {/* 3. Signature Services Explorer */}
        <SignatureServices
          onSelectService={(srv) => handleOpenBooking(srv)}
        />

        {/* 4. Transformation Gallery (Masonry & Lightbox) */}
        <TransformationGallery
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 5. Interactive Before / After Slider */}
        <BeforeAfterSlider />

        {/* 6. Meet Our Artists & Framer Motion Expanded Profiles */}
        <MeetArtists
          onBookWithStylist={(stylist) => handleOpenBooking('', stylist)}
        />

        {/* 7. Google Reviews (Strictly Separated: 4.9 Rating) */}
        <GoogleReviews />

        {/* 8. Instagram Client Stories (Strictly Separated: 9:16 Video Reels) */}
        <InstagramStories />

        {/* 9. Contact & Location Map Section */}
        <ContactSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Beauty Concierge Assistant */}
      <AIBeautyAssistant
        isOpen={aiOpen}
        onClose={() => setAiOpen(false)}
        onOpenBooking={(srv, styl) => handleOpenBooking(srv, styl)}
      />

      {/* Floating Trigger Button for AI Assistant */}
      <button
        onClick={() => setAiOpen((prev) => !prev)}
        className="fixed bottom-6 left-6 z-40 px-5 py-3 bg-salon-darkBrown text-salon-gold rounded-full border border-salon-gold/50 shadow-2xl hover:bg-salon-gold hover:text-salon-darkBrown transition-all duration-300 flex items-center gap-2 text-xs font-sans font-bold tracking-widest uppercase group"
        aria-label="Open AI Stylist Concierge"
      >
        <div className="w-2 h-2 rounded-full bg-salon-gold group-hover:bg-salon-darkBrown animate-ping" />
        <span>ASK DYNO</span>
      </button>

      {/* Interactive Multi-step Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={initialBookingService}
        initialStylist={initialBookingStylist}
      />
    </div>
  );
}

export default App;
