import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Scissors, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { SERVICES_DATA, STYLISTS_DATA, SALON_INFO } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialStylist?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialStylist = ''
}) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService || SERVICES_DATA[0].name);
  const [selectedStylist, setSelectedStylist] = useState(initialStylist || 'Any Available Artist');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientNotes, setClientNotes] = useState('');

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
    '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setStep(6);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Dyno Art Salon! I would like to confirm my appointment:\n\n` +
    `• Service: ${selectedService}\n` +
    `• Artist: ${selectedStylist}\n` +
    `• Date: ${selectedDate}\n` +
    `• Time: ${selectedTime}\n` +
    `• Name: ${clientName}\n` +
    `• Phone: ${clientPhone}\n` +
    `• Location: Besant Nagar, Chennai`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-salon-darkBrown/90 backdrop-blur-md p-4 md:p-8 flex items-center justify-center overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 30 }}
            className="bg-salon-beige text-salon-charcoal max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-salon-sand relative my-auto"
          >
            {/* Header */}
            <div className="p-6 bg-white border-b border-salon-sand flex items-center justify-between">
              <div>
                <span className="text-[10px] font-sans font-bold tracking-widest text-salon-gold uppercase block">
                  BESANT NAGAR • STEP 0{step} OF 05
                </span>
                <h3 className="font-serif text-2xl text-salon-darkBrown font-light">
                  BOOK YOUR TRANSFORMATION
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-salon-beige hover:bg-salon-sand text-salon-darkBrown transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              
              {/* STEP 1: Select Service */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="font-serif text-xl text-salon-darkBrown font-normal flex items-center gap-2">
                    <Scissors className="w-5 h-5 text-salon-gold" />
                    <span>01. Select Your Service</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
                    {SERVICES_DATA.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => setSelectedService(srv.name)}
                        className={`p-3.5 rounded-xl border text-left text-xs font-sans transition-all flex items-center justify-between ${
                          selectedService === srv.name
                            ? 'bg-salon-deepBrown text-white border-salon-deepBrown shadow-md font-bold'
                            : 'bg-white text-salon-charcoal border-salon-sand hover:border-salon-gold'
                        }`}
                      >
                        <span>{srv.name}</span>
                        <span className="text-[10px] opacity-70 uppercase tracking-widest">{srv.category}</span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-3.5 bg-salon-gold text-salon-darkBrown font-sans font-bold text-xs tracking-widest uppercase rounded-full shadow-lg hover:bg-salon-darkBrown hover:text-white transition-all mt-4"
                  >
                    CONTINUE TO ARTIST SELECTION →
                  </button>
                </div>
              )}

              {/* STEP 2: Choose Stylist */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="font-serif text-xl text-salon-darkBrown font-normal flex items-center gap-2">
                    <User className="w-5 h-5 text-salon-gold" />
                    <span>02. Choose Your Artist</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedStylist('Any Available Artist')}
                      className={`p-4 rounded-xl border text-left text-xs font-sans transition-all ${
                        selectedStylist === 'Any Available Artist'
                          ? 'bg-salon-deepBrown text-white border-salon-deepBrown font-bold'
                          : 'bg-white text-salon-charcoal border-salon-sand'
                      }`}
                    >
                      <div className="font-serif text-base text-salon-gold">Any Available Artist</div>
                      <div className="text-[10px] opacity-70">First available top stylist on duty</div>
                    </button>

                    {STYLISTS_DATA.filter(s => !s.isPlaceholder).map((st) => (
                      <button
                        key={st.id}
                        onClick={() => setSelectedStylist(st.name)}
                        className={`p-4 rounded-xl border text-left text-xs font-sans transition-all ${
                          selectedStylist === st.name
                            ? 'bg-salon-deepBrown text-white border-salon-deepBrown font-bold'
                            : 'bg-white text-salon-charcoal border-salon-sand hover:border-salon-gold'
                        }`}
                      >
                        <div className="font-serif text-base text-salon-gold">{st.name}</div>
                        <div className="text-[10px] opacity-70 uppercase">{st.title}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border border-salon-sand text-salon-darkBrown font-sans text-xs font-bold uppercase rounded-full"
                    >
                      ← BACK
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 bg-salon-gold text-salon-darkBrown font-sans font-bold text-xs tracking-widest uppercase rounded-full shadow-lg"
                    >
                      CONTINUE TO DATE & TIME →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 & 4: Date & Time */}
              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="font-serif text-xl text-salon-darkBrown font-normal flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-salon-gold" />
                    <span>03 & 04. Select Date & Time</span>
                  </h4>

                  <div className="space-y-2">
                    <label className="text-xs font-sans font-bold tracking-widest text-salon-deepBrown uppercase block">
                      APPOINTMENT DATE
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 bg-white border border-salon-sand rounded-xl text-xs font-sans focus:outline-none focus:border-salon-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-sans font-bold tracking-widest text-salon-deepBrown uppercase block">
                      PREFERRED TIME SLOT (OPEN 10 AM – 9 PM)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`p-2.5 rounded-lg text-xs font-sans font-bold text-center transition-all ${
                            selectedTime === t
                              ? 'bg-salon-deepBrown text-white shadow-md'
                              : 'bg-white text-salon-charcoal border border-salon-sand'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 border border-salon-sand text-salon-darkBrown font-sans text-xs font-bold uppercase rounded-full"
                    >
                      ← BACK
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="flex-1 py-3 bg-salon-gold text-salon-darkBrown font-sans font-bold text-xs tracking-widest uppercase rounded-full shadow-lg"
                    >
                      ENTER CONTACT DETAILS →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5: Contact Info */}
              {step === 4 && (
                <form onSubmit={handleConfirmBooking} className="space-y-4">
                  <h4 className="font-serif text-xl text-salon-darkBrown font-normal">
                    05. Contact Information
                  </h4>

                  <div className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full p-3.5 bg-white border border-salon-sand rounded-xl text-xs font-sans focus:outline-none focus:border-salon-gold"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number (+91) *"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full p-3.5 bg-white border border-salon-sand rounded-xl text-xs font-sans focus:outline-none focus:border-salon-gold"
                    />
                    <input
                      type="email"
                      placeholder="Email Address (Optional)"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full p-3.5 bg-white border border-salon-sand rounded-xl text-xs font-sans focus:outline-none focus:border-salon-gold"
                    />
                    <textarea
                      placeholder="Special styling notes or requests..."
                      rows={2}
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      className="w-full p-3.5 bg-white border border-salon-sand rounded-xl text-xs font-sans focus:outline-none focus:border-salon-gold"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 border border-salon-sand text-salon-darkBrown font-sans text-xs font-bold uppercase rounded-full"
                    >
                      ← BACK
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-salon-deepBrown text-white font-sans font-bold text-xs tracking-[0.2em] uppercase rounded-full shadow-xl hover:bg-salon-darkBrown"
                    >
                      CONFIRM APPOINTMENT
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 6: Confirmation Screen */}
              {step === 6 && (
                <div className="text-center space-y-6 py-4">
                  <div className="w-16 h-16 rounded-full bg-salon-gold/20 text-salon-gold flex items-center justify-center mx-auto border border-salon-gold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-sans font-bold text-salon-gold tracking-widest uppercase block">
                      APPOINTMENT DRAFTED
                    </span>
                    <h3 className="font-serif text-3xl font-light text-salon-darkBrown">
                      Thank You, {clientName}!
                    </h3>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-salon-sand text-left text-xs font-sans space-y-2">
                    <div><strong>Service:</strong> {selectedService}</div>
                    <div><strong>Artist:</strong> {selectedStylist}</div>
                    <div><strong>Date & Time:</strong> {selectedDate} at {selectedTime}</div>
                    <div><strong>Location:</strong> First Floor, 22, 5th Ave, Besant Nagar, Chennai</div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/918778277514?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-emerald-700 text-white font-sans text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-xl flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>INSTANT CONFIRM ON WHATSAPP</span>
                    </a>

                    <a
                      href={`tel:${SALON_INFO.phonePrimary}`}
                      className="w-full py-3 border border-salon-deepBrown text-salon-deepBrown font-sans text-xs font-bold tracking-widest uppercase rounded-full flex items-center justify-center gap-2 block"
                    >
                      <Phone className="w-4 h-4" />
                      <span>OR CALL {SALON_INFO.phonePrimary}</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
