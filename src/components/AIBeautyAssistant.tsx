import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, User, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { AI_KNOWLEDGE, SALON_INFO } from '../data/salonData';

interface AIBeautyAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: (service?: string, stylist?: string) => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

export const AIBeautyAssistant: React.FC<AIBeautyAssistantProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'quiz'>('quiz');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: "Welcome to Dyno Art Salon! I am your AI Hair Concierge. Ask me anything about our treatments, keratin, hair botox, location, or take our 3-step Hair Transformation Quiz!"
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  // Interactive Quiz State
  const [quizStep, setQuizStep] = useState(1);
  const [quizGoal, setQuizGoal] = useState('');
  const [quizHairType, setQuizHairType] = useState('');
  const [quizIntensity, setQuizIntensity] = useState('');

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputQuery.trim()) return;

    const userText = inputQuery.trim();
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');

    // Generate AI response strictly based on knowledge
    setTimeout(() => {
      let aiText = "Thank you for asking! For exact details on our bespoke services or to check customized options, please contact our Besant Nagar salon team directly at +91 87782 77514.";
      
      const queryLower = userText.toLowerCase();
      for (const faq of AI_KNOWLEDGE.faqResponses) {
        if (faq.keywords.some((k) => queryLower.includes(k))) {
          aiText = faq.answer;
          break;
        }
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'ai', text: aiText }
      ]);
    }, 600);
  };

  const getQuizRecommendation = () => {
    let service = "Signature Keratin Therapy";
    let stylist = "Muthu (Female Director)";
    let desc = "A deeply nourishing smoothing treatment tailored to revive texture and add glass shine.";

    if (quizGoal === 'NEW HAIRCUT' && quizHairType === 'CURLY') {
      service = "Curly & Textured Hair Sculpting";
      stylist = "Sakthi (Top Men & Female Stylist)";
      desc = "Specialized dry-cutting curl architecture designed to boost natural curl bounce and eliminate bulk.";
    } else if (quizGoal === 'HAIR COLOR' || quizIntensity === 'BOLD') {
      service = "Balayage & Dimensional Highlights";
      stylist = "Varsha (Female Top Stylist)";
      desc = "Hand-painted dimensional highlights paired with a customized glossing toner.";
    } else if (quizGoal === 'GROOMING') {
      service = "Beard Architecture & Skin Fade";
      stylist = "Ranjith (Men's Director)";
      desc = "Razor-sharp lineup, hot towel shave finish, and custom skin fade.";
    }

    return { service, stylist, desc };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[440px] max-h-[82vh] bg-salon-darkBrown text-white rounded-3xl overflow-hidden shadow-2xl border border-salon-gold/30 flex flex-col"
        >
          {/* Top Bar Header */}
          <div className="p-5 bg-gradient-to-r from-salon-darkBrown via-salon-deepBrown to-salon-darkBrown border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-salon-gold text-salon-darkBrown flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-salon-beige font-normal">
                  ASK DYNO • AI CONCIERGE
                </h3>
                <span className="text-[10px] font-sans text-salon-gold tracking-widest uppercase">
                  DIGITAL SALON CONSULTANT
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex border-b border-white/10 bg-black/30">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 py-3 text-xs font-sans font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'quiz'
                  ? 'text-salon-gold border-b-2 border-salon-gold bg-white/5'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>HAIR QUIZ</span>
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-3 text-xs font-sans font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 ${
                activeTab === 'chat'
                  ? 'text-salon-gold border-b-2 border-salon-gold bg-white/5'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>ASK ANYTHING</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs font-sans bg-salon-darkBrown/95">
            {activeTab === 'quiz' ? (
              <div className="space-y-6">
                {quizStep === 1 && (
                  <div className="space-y-4">
                    <div className="text-center space-y-1">
                      <span className="text-[10px] text-salon-gold font-bold tracking-widest uppercase">STEP 01 OF 03</span>
                      <h4 className="font-serif text-2xl text-salon-beige">What are you looking for?</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {['NEW HAIRCUT', 'HAIR COLOR', 'HAIR TREATMENT', 'STYLING', 'GROOMING'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setQuizGoal(option);
                            setQuizStep(2);
                          }}
                          className="p-3 bg-white/5 hover:bg-salon-gold hover:text-salon-darkBrown rounded-xl border border-white/10 font-bold transition-all text-center"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="space-y-4">
                    <div className="text-center space-y-1">
                      <span className="text-[10px] text-salon-gold font-bold tracking-widest uppercase">STEP 02 OF 03</span>
                      <h4 className="font-serif text-2xl text-salon-beige">What is your hair type?</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {['STRAIGHT', 'WAVY', 'CURLY', 'COILY'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setQuizHairType(option);
                            setQuizStep(3);
                          }}
                          className="p-3 bg-white/5 hover:bg-salon-gold hover:text-salon-darkBrown rounded-xl border border-white/10 font-bold transition-all text-center"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <div className="space-y-4">
                    <div className="text-center space-y-1">
                      <span className="text-[10px] text-salon-gold font-bold tracking-widest uppercase">STEP 03 OF 03</span>
                      <h4 className="font-serif text-2xl text-salon-beige">What kind of transformation?</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['SUBTLE', 'NOTICEABLE', 'BOLD'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setQuizIntensity(option);
                            setQuizStep(4);
                          }}
                          className="p-3 bg-white/5 hover:bg-salon-gold hover:text-salon-darkBrown rounded-xl border border-white/10 font-bold transition-all text-center"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 4 && (() => {
                  const rec = getQuizRecommendation();
                  return (
                    <div className="space-y-4 text-center bg-white/5 p-5 rounded-2xl border border-salon-gold/40">
                      <div className="w-12 h-12 rounded-full bg-salon-gold/20 text-salon-gold flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="font-serif text-2xl text-salon-gold">YOUR MATCHED RITUAL</h4>
                      <div className="space-y-2 text-left bg-black/40 p-4 rounded-xl">
                        <div className="text-white font-bold">{rec.service}</div>
                        <div className="text-salon-gold text-[11px]">Recommended Artist: {rec.stylist}</div>
                        <div className="text-white/70 text-[11px] font-light">{rec.desc}</div>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onOpenBooking(rec.service, rec.stylist);
                        }}
                        className="w-full py-3.5 bg-salon-gold text-salon-darkBrown font-bold uppercase tracking-widest rounded-full shadow-lg hover:bg-white transition-all flex items-center justify-center gap-2"
                      >
                        <span>BOOK THIS RECOMMENDATION</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setQuizStep(1)}
                        className="text-[10px] text-white/50 underline uppercase tracking-widest"
                      >
                        RESTART QUIZ
                      </button>
                    </div>
                  );
                })()}
              </div>
            ) : (
              // Chat mode
              <div className="space-y-4">
                <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {m.sender === 'ai' && (
                        <div className="w-7 h-7 rounded-full bg-salon-gold/20 text-salon-gold flex items-center justify-center shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}
                      <div
                        className={`p-3.5 rounded-2xl max-w-[82%] text-xs leading-relaxed ${
                          m.sender === 'user'
                            ? 'bg-salon-gold text-salon-darkBrown font-medium rounded-br-none'
                            : 'bg-white/10 text-salon-sand border border-white/10 rounded-bl-none'
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <input
                    type="text"
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    placeholder="Ask about keratin, botox, hours..."
                    className="flex-1 bg-white/5 border border-white/15 px-4 py-2.5 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-salon-gold text-xs"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-full bg-salon-gold text-salon-darkBrown hover:bg-white transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
