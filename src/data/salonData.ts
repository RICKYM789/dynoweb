export interface Service {
  id: string;
  name: string;
  category: 'HAIR' | 'GROOMING' | 'BEAUTY';
  description: string;
  image: string;
  duration?: string;
  highlights?: string[];
}

export interface Stylist {
  id: string;
  number: string;
  name: string;
  title: string;
  roleTag: string;
  portrait: string;
  bio: string;
  experienceYears: number;
  signatureStyle: string;
  specialties: string[];
  stylingPhilosophy: string;
  favoriteTransformation: string;
  instagram: string;
  isPlaceholder?: boolean;
  workPortfolio: {
    id: string;
    title: string;
    category: string;
    image: string;
  }[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service?: string;
  date?: string;
  initials: string;
}

export interface InstagramStory {
  id: string;
  title: string;
  category: string;
  reelUrl: string;
  thumbnail: string;
  views?: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  service: string;
  stylist: string;
  beforeImage: string;
  afterImage: string;
  notes: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Cuts' | 'Color' | 'Keratin' | 'Grooming' | 'Styling';
  stylist: string;
  image: string;
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'tall';
}

export const SALON_INFO = {
  name: "Dyno Art Salon",
  tagline: "Hair is art. Your stylist is an artist. Your transformation is the experience.",
  location: "Besant Nagar, Chennai",
  address: "First Floor, 22, 5th Ave, Tiruvalluvar Nagar, Besant Nagar, Chennai, Tamil Nadu 600090",
  phonePrimary: "+91 87782 77514",
  phoneSecondary: "+91 63806 78406",
  email: "dynoartsalon@gmail.com",
  hours: "10:00 AM – 9:00 PM (Open 7 Days)",
  instagramHandle: "@dynosalon",
  instagramUrl: "https://www.instagram.com/dynosalon",
  googleMapsUrl: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3a5267001dddbbbb:0xee75b637bbd044fa",
  googleRating: 4.9,
  googleReviewCount: 128,
  aboutParagraphs: [
    "Dyno Art Salon is a modern unisex hair and beauty destination in Besant Nagar, where artistry, precision, and individuality come together.",
    "We believe great hair is never one-size-fits-all. Every cut, colour, and treatment is thoughtfully designed around your facial structure, personal style, lifestyle, and natural hair texture.",
    "From refined cuts to dimensional colour and transformative keratin treatments, every service is approached as a bespoke experience—carefully considered, meticulously executed, and uniquely yours.",
    "At Dyno, beauty is not about following a template. It is about creating a signature look that feels effortlessly personal, elevated, and distinctly you."
  ],
};

export const SERVICES_DATA: Service[] = [
  // HAIR
  {
    id: "mens-customised-dyno-haircut",
    name: "Mens Customised Dyno Haircut",
    category: "HAIR",
    description: "A customised men's haircut shaped around your face, hair texture, lifestyle, and personal style.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1000",
    duration: "45 - 60 mins",
  },
  {
    id: "haircut",
    name: "Architectural Haircut",
    category: "HAIR",
    description: "Precision cutting tailored to your skull anatomy, hair texture, and natural fall. Sculpted for seamless growth and effortless daily movement.",
    image: "/services/service01.jpeg",
    duration: "45 - 60 mins",
    highlights: ["Custom face framing", "Texture weight reduction", "Hot towel finish"]
  },
  {
    id: "bang-trim",
    name: "Precision Bang Trim",
    category: "HAIR",
    description: "Meticulous fringe detailing, curtain bangs, or micro-bang shaping to highlight eye structure.",
    image: "/services/service02.jpeg",
    duration: "20 mins"
  },
  {
    id: "blowdry",
    name: "Couture Blowdry",
    category: "HAIR",
    description: "High-shine volumetric blowdry using thermal heat defense elixirs for silky, red-carpet-worthy bounce.",
    image: "/services/service03.jpeg",
    duration: "40 mins"
  },
  {
    id: "blowouts",
    name: "Artisanal Blowouts",
    category: "HAIR",
    description: "Deep moisture infusion accompanied by round-brush styling for persistent glass-hair smooth gloss.",
    image: "/services/service04.jpeg",
    duration: "45 mins"
  },
  {
    id: "braids",
    name: "Editorial Braids & Weaves",
    category: "HAIR",
    description: "Intricate braiding artistry ranging from sleek protective styles to avant-garde fashion braids.",
    image: "/services/service05.jpeg",
    duration: "60 - 90 mins"
  },
  {
    id: "curly-hair",
    name: "Curly & Textured Hair Sculpting",
    category: "HAIR",
    description: "Specialized dry-cutting technique for waves, curls, and coils to boost natural curl pattern, definition, and bounce.",
    image: "/services/service06.jpeg",
    duration: "60 mins"
  },
  {
    id: "hair-extensions",
    name: "Luxury Seamless Extensions",
    category: "HAIR",
    description: "100% Remy human hair extensions expertly matched for density, color gradient, and invisible blend.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000",
    duration: "120 mins"
  },
  {
    id: "hair-glazing",
    name: "Glossing & Hair Glazing",
    category: "HAIR",
    description: "Ammonia-free translucency glaze that revives faded color tones, seals cuticles, and reflects multidimensional light.",
    image: "/services/service08.jpeg",
    duration: "45 mins"
  },
  {
    id: "hair-highlighting",
    name: "Balayage & Dimensional Highlights",
    category: "HAIR",
    description: "Freehand hand-painted balayage and foil technique creating soft sun-kissed dimension and natural root melt.",
    image: "/services/service09.jpeg",
    duration: "150 mins"
  },
  {
    id: "hair-straightening",
    name: "Sleek Thermal Straightening",
    category: "HAIR",
    description: "Smooth chemical straightening for disciplined hair alignment with soft touchable silk texture.",
    image: "/services/service10.jpeg",
    duration: "120 mins"
  },
  {
    id: "hair-treatments",
    name: "Hair Botox & Deep Spa Rituals",
    category: "HAIR",
    description: "Cellular hair restructuring infused with hyaluronic acid, keratin peptides, and organic botanical lipids.",
    image: "/services/service11.jpeg",
    duration: "60 mins"
  },
  {
    id: "keratin-treatments",
    name: "Signature Brazilian Keratin Therapy",
    category: "HAIR",
    description: "Intense anti-frizz smoothing treatment sealing active keratin into hair cortex for 3 to 5 months of zero-frizz elegance.",
    image: "/services/service12.jpeg",
    duration: "150 mins"
  },
  {
    id: "ombre-hair-color",
    name: "Ombré & Creative Color Melting",
    category: "HAIR",
    description: "Artistic transition from deep rich roots to luminous vibrant lengths. Pastel tones, ash blondes, and copper hues.",
    image: "/services/service13.jpeg",
    duration: "150 mins"
  },
  {
    id: "shampoo-conditioning",
    name: "Scalp Detox & Hair Spa Wash",
    category: "HAIR",
    description: "Invigorating pressure-point scalp massage, clarifying detox shampoo, and custom deep-penetrating mask.",
    image: "/services/service14.jpeg",
    duration: "30 mins"
  },
  {
    id: "kids-cuts",
    name: "Junior Stylist Cut",
    category: "HAIR",
    description: "Gentle, patient, and modern styling for young trendsetters in a friendly, relaxed setting.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000",
    duration: "30 mins"
  },

  // GROOMING
  {
    id: "beard-trim",
    name: "Beard Architecture & Line-Up",
    category: "GROOMING",
    description: "Razor-sharp beard sculpting, jawline definition, and nourishing hot oil treatment.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1000",
    duration: "30 mins"
  },
  {
    id: "shaving",
    name: "Hot Towel Straight-Razor Shave",
    category: "GROOMING",
    description: "Traditional barbershop luxury: essential oil hot steam, rich lather, precision razor shave, and soothing cold towel finish.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000",
    duration: "35 mins"
  },
  {
    id: "cornrows",
    name: "Men's Cornrows & Graphic Lines",
    category: "GROOMING",
    description: "Clean geometric braiding, cornrows, and undercut fade integration.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
    duration: "60 mins"
  },

  // BEAUTY
  {
    id: "makeup",
    name: "High-Fashion & Event Makeup",
    category: "BEAUTY",
    description: "Flawless airbrush or soft glam makeup emphasizing natural facial contours and eye drama.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000",
    duration: "60 mins"
  },
  {
    id: "nails",
    name: "Nail Art & Luxury Spa Manicure",
    category: "BEAUTY",
    description: "Gel extensions, minimal nail art, cuticle care, and nourishing hand exfoliation massage.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1000",
    duration: "60 mins"
  }
];

export const STYLISTS_DATA: Stylist[] = [
  {
    id: "muthu",
    number: "01",
    name: "Muthu",
    title: "Female Director & Men's Top Stylist",
    roleTag: "DIRECTOR & TOP STYLIST",
    portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
    bio: "Muthu combines directional precision with creative intuition. With over 9 years of high-fashion and salon mastery, she specializes in transformative female cuts, textured layering, and sharp men's fades.",
    experienceYears: 9,
    signatureStyle: "Precision Architectural Bob & Sharp Fade Blends",
    specialties: ["Men's Precision Fades", "Female Layered Scissor Cuts", "Color Transformation", "Keratin Therapy"],
    stylingPhilosophy: "Hair is a living frame for your personality. My job is to shape it with exact intent so you feel invincible the moment you step out.",
    favoriteTransformation: "Transitioning long heavy hair into a weightless, face-framing textured shag with warm chestnut balayage.",
    instagram: "@muthu_dynoart",
    workPortfolio: [
      { id: "m1", title: "Textured Butterfly Layers", category: "Cut & Styling", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" },
      { id: "m2", title: "Mid-Fade Razor Detailing", category: "Men's Grooming", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800" },
      { id: "m3", title: "Soft Ash Blonde Balayage", category: "Hair Color", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" },
      { id: "m4", title: "Silk Press Keratin Finish", category: "Treatment", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800" },
      { id: "m5", title: "Editorial Textured Crop", category: "Men's Styling", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
      { id: "m6", title: "Glass Hair Blowout", category: "Styling", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "ranjith",
    number: "02",
    name: "Ranjith",
    title: "Men's Director & Female Top Stylist",
    roleTag: "MEN'S DIRECTOR",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000",
    bio: "Ranjith is renowned for crafting iconic men's silhouettes and high-impact women's editorial transformations. His work focuses on bone structure harmony and seamless hair graduation.",
    experienceYears: 8,
    signatureStyle: "Seamless Skin Fades & Dimensional Color Melting",
    specialties: ["Men's Executive Cuts", "Beard Architecture", "Dimensional Highlights", "Texture Control"],
    stylingPhilosophy: "Grooming should feel effortless yet undeniably refined. Every angle must be deliberate.",
    favoriteTransformation: "Classic pompadour fade coupled with a custom hot-towel beard shape.",
    instagram: "@ranjith_dynoart",
    workPortfolio: [
      { id: "r1", title: "Executive Skin Fade", category: "Men's Cut", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" },
      { id: "r2", title: "Caramel Melt Balayage", category: "Color", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800" },
      { id: "r3", title: "Beard Sculpt & Sharp Lines", category: "Beard", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800" },
      { id: "r4", title: "Messy Quiff & Taper", category: "Men's Style", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
      { id: "r5", title: "Curtain Bangs & Waves", category: "Female Cut", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800" },
      { id: "r6", title: "Botox Hair Gloss", category: "Treatment", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "varsha",
    number: "03",
    name: "Varsha",
    title: "Female Top Stylist",
    roleTag: "TOP STYLIST",
    portrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
    bio: "Varsha brings an artist's eye to hair color chemistry and luxury hair care rituals. She is Dyno's go-to expert for blonde transformations, corrective color, and soft romantic styling.",
    experienceYears: 7,
    signatureStyle: "Honey Blonde Balayage & Romantic Waves",
    specialties: ["Color Correction", "Blonde & Platinum Tones", "Couture Styling", "Hydrating Hair Spa"],
    stylingPhilosophy: "Healthy hair is the canvas for great color. I prioritize scalp longevity and cuticle shine above all.",
    favoriteTransformation: "Dark virgin hair transformed into a multi-tonal honey blonde balayage with zero damage.",
    instagram: "@varsha_dynoart",
    workPortfolio: [
      { id: "v1", title: "Honey Platinum Glow", category: "Hair Color", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" },
      { id: "v2", title: "Glamour Hollywood Waves", category: "Event Styling", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800" },
      { id: "v3", title: "Deep Keratin Restoration", category: "Hair Treatment", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800" },
      { id: "v4", title: "Subtle Copper Tint", category: "Creative Color", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800" },
      { id: "v5", title: "Volumetric Layers", category: "Cut", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800" },
      { id: "v6", title: "Face-Framing Money Piece", category: "Color Accent", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "sakthi",
    number: "04",
    name: "Sakthi",
    title: "Top Men's Stylist & Female Premium Stylist",
    roleTag: "PREMIUM STYLIST",
    portrait: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000",
    bio: "Sakthi specializes in high-texture men's cuts, modern mullets, burst fades, and specialized curl treatments. His dynamic style bridges contemporary street fashion with refined salon luxury.",
    experienceYears: 6,
    signatureStyle: "Modern Textured Mullet & Curl Enhancements",
    specialties: ["Textured Men's Cuts", "Curly Hair Architecture", "Creative Lines", "Scalp Detox"],
    stylingPhilosophy: "Your hair should tell a story. We create shapes that look even better as they grow.",
    favoriteTransformation: "Enhancing natural tight curls with dry hydration therapy and clean side tapers.",
    instagram: "@sakthi_dynoart",
    workPortfolio: [
      { id: "s1", title: "Modern Textured Crop", category: "Men's Cut", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
      { id: "s2", title: "Natural Curl Sculpting", category: "Curly Hair", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800" },
      { id: "s3", title: "Drop Fade & Sharp Razor", category: "Grooming", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800" },
      { id: "s4", title: "Ombre Curl Melt", category: "Color & Texture", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800" },
      { id: "s5", title: "Taper Fade & Lineup", category: "Men's Grooming", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" },
      { id: "s6", title: "Gloss & Blowout", category: "Styling", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "guest-artist",
    number: "05",
    name: "Visiting Master Stylist",
    title: "Guest Editorial Artist (Temporary Profile)",
    roleTag: "GUEST ARTIST",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000",
    bio: "This profile serves as a temporary spot for seasonal guest directors and visiting editorial hair artists at Dyno Art Salon.",
    experienceYears: 10,
    signatureStyle: "Avant-Garde Runway Styling",
    specialties: ["Fashion Week Hair", "Creative Color Art"],
    stylingPhilosophy: "Exploring the boundary where hair sculpture meets high art.",
    favoriteTransformation: "Editorial runway hair installations.",
    instagram: "@dynosalon",
    isPlaceholder: true,
    workPortfolio: [
      { id: "g1", title: "Runway Concept", category: "Editorial", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800" }
    ]
  }
];

export const GOOGLE_REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Annlyn Delicia",
    rating: 5,
    initials: "AD",
    comment: "I had such a wonderful experience at Dyno Art Salon! They did an absolutely amazing job with my hair color—it turned out so beautiful, exactly what I was hoping for. I truly loved the way my hair was styled and set, it looked so elegant and well-finished. The entire experience was delightful, from the quality of the service to the overall atmosphere of the place. I’m genuinely so happy with the results and really grateful to the team for their incredible work. Highly recommend this salon to anyone looking for a fantastic hair transformation! ✨",
    service: "Hair Color & Styling",
    date: "1 week ago"
  },
  {
    id: "rev-2",
    name: "Nandha Kumar",
    rating: 5,
    initials: "NK",
    comment: "Had an amazing experience! The stylist understood exactly what I wanted and delivered a clean, stylish look. Great ambience and professional service. Definitely my go-to salon from now on.",
    service: "Hair treatments",
    date: "2 weeks ago"
  },
  {
    id: "rev-3",
    name: "AISHWARYA S",
    rating: 5,
    initials: "AS",
    comment: "Had a great haircut at Dyno. Stylist was professional, understood exactly what I wanted, and nailed the look. Clean place, no long wait, and fair pricing. Really happy with the result. Will definitely come back. 5/5 ⭐",
    service: "Precision Haircut",
    date: "3 weeks ago"
  },
  {
    id: "rev-4",
    name: "Harini Sridhar",
    rating: 5,
    initials: "HS",
    comment: "I had a fantastic experience at Dyno for both a hair color and cut, along with my family. The team was incredibly professional and made us feel comfortable from the moment we walked in. The color turned out beautifully, and the cuts were exactly what we wanted. The stylists took the time to listen to our preferences and offered expert advice, which really showed in the final results. The atmosphere was relaxing and welcoming, making it a great experience for all of us. Highly recommend this salon for anyone looking for high-quality service and a personalised touch!",
    service: "Family Hair Cut & Coloring",
    date: "1 month ago"
  },
  {
    id: "rev-5",
    name: "Subhasri Raja",
    rating: 5,
    initials: "SR",
    comment: "The best salon I ever visited ❤️the salon and the stylist team were awesome ❤️the way they treat customers in the great manner!!! special appreciation to amous bro and kalai and their team❤️this salon became my fav🫶🏻",
    service: "Hair Styling & Care",
    date: "1 month ago"
  }
];

export const INSTAGRAM_STORIES_DATA: InstagramStory[] = [
  {
    id: "ig-1",
    title: "Sharp Cut & Client Confidence Story",
    category: "CLIENT TESTIMONIAL",
    reelUrl: "https://www.instagram.com/reel/DT-edPSk0_9/",
    thumbnail: "/stories/story01.jpg",
    views: "14.2k"
  },
  {
    id: "ig-2",
    title: "Chestnut Brown Transformation by Muthu",
    category: "COLOR ARTISTRY",
    reelUrl: "https://www.instagram.com/reel/DTfgPLOk5Nz/",
    thumbnail: "/stories/story02.jpg",
    views: "18.9k"
  },
  {
    id: "ig-3",
    title: "Pure Joy & Gorgeous Hair Transformation",
    category: "CLIENT LOVE",
    reelUrl: "https://www.instagram.com/reel/DSuk9EVDvIy/",
    thumbnail: "/stories/story03.jpg",
    views: "22.5k"
  },
  {
    id: "ig-4",
    title: "The Dyno Grooming Experience & Trust",
    category: "GROOMING STORY",
    reelUrl: "https://www.instagram.com/reel/DR_54AcEwF2/",
    thumbnail: "/stories/story04.jpg",
    views: "11.8k"
  },
  {
    id: "ig-5",
    title: "Making Every Client Feel Beautiful",
    category: "CLIENT FEEDBACK",
    reelUrl: "https://www.instagram.com/reel/DQmIk1Ck81R/",
    thumbnail: "/stories/story05.jpg",
    views: "29.1k"
  },
  {
    id: "ig-6",
    title: "All the Way from Malaysia for Dyno Magic",
    category: "GLOBAL CLIENTS",
    reelUrl: "https://www.instagram.com/reel/DPq0Vaxk_Le/",
    thumbnail: "/stories/story06.jpg",
    views: "16.4k"
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterPair[] = [
  {
    id: "ba-1",
    title: "Brazilian Keratin Smooth Ritual",
    service: "Keratin Treatment",
    stylist: "Muthu & Varsha",
    beforeImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000",
    afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000",
    notes: "From frizzy humidity damage to zero-frizz silk reflection. Lasts 4+ months."
  },
  {
    id: "ba-2",
    title: "Rich Caramel Balayage & Layered Cut",
    service: "Color & Precision Cut",
    stylist: "Varsha",
    beforeImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000",
    afterImage: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000",
    notes: "Restored dull ends with a multidimensional warm caramel balayage."
  },
  {
    id: "ba-3",
    title: "Precision Fade & Beard Lineup",
    service: "Men's Grooming",
    stylist: "Ranjith",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
    afterImage: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1000",
    notes: "Sharp razor neck cleanup and high contrast mid-skin fade."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Subtle Ash Balayage & Soft Waves",
    category: "Color",
    stylist: "Varsha",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000",
    aspectRatio: "tall"
  },
  {
    id: "g-2",
    title: "Modern Architectural Crop Fade",
    category: "Cuts",
    stylist: "Ranjith",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1000",
    aspectRatio: "portrait"
  },
  {
    id: "g-3",
    title: "Brazilian Keratin Mirror Gloss",
    category: "Keratin",
    stylist: "Muthu",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000",
    aspectRatio: "square"
  },
  {
    id: "g-4",
    title: "Couture Updo & Glamour Waves",
    category: "Styling",
    stylist: "Varsha",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000",
    aspectRatio: "tall"
  },
  {
    id: "g-5",
    title: "Natural Curl Sculpting & Hydration",
    category: "Cuts",
    stylist: "Sakthi",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000",
    aspectRatio: "landscape"
  },
  {
    id: "g-6",
    title: "Razor Lineup & Hot Towel Grooming",
    category: "Grooming",
    stylist: "Muthu",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000",
    aspectRatio: "portrait"
  },
  {
    id: "g-7",
    title: "Copper Ombre Melt & Layered Fringe",
    category: "Color",
    stylist: "Muthu",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=1000",
    aspectRatio: "tall"
  },
  {
    id: "g-8",
    title: "Volumetric Glass Hair Blowout",
    category: "Keratin",
    stylist: "Sakthi",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000",
    aspectRatio: "square"
  }
];

export const AI_KNOWLEDGE = {
  greetings: [
    "Welcome to Dyno Art Salon! I am your AI Stylist concierge. How can I assist your transformation today?",
    "Hello! Looking for hair recommendations, stylist matching, or treatment advice? Ask me anything!"
  ],
  faqResponses: [
    {
      keywords: ["keratin", "smooth", "frizz"],
      answer: "Our Signature Brazilian Keratin Treatment deeply seals active protein into the hair shaft to eliminate 90%+ frizz, giving you silky, shiny hair that lasts 3 to 5 months. It's ideal for Chennai's humid weather!"
    },
    {
      keywords: ["botox", "hair botox", "repair", "damaged"],
      answer: "Hair Botox is a deep conditioning ritual infused with hyaluronic acid, peptides, and collagen. Unlike smoothing treatments, it doesn't alter your natural texture—it intensely repairs dry, chemical-damaged strands!"
    },
    {
      keywords: ["location", "address", "where", "besant nagar"],
      answer: "We are located at First Floor, 22, 5th Ave, Tiruvalluvar Nagar, Besant Nagar, Chennai, Tamil Nadu 600090 (near 5th Avenue)."
    },
    {
      keywords: ["hours", "time", "open", "timing", "closing"],
      answer: "Dyno Art Salon is open 7 days a week from 10:00 AM to 9:00 PM."
    },
    {
      keywords: ["men", "haircut", "beard", "fade", "grooming"],
      answer: "We offer high-precision men's cuts, skin fades, textured crops, beard architecture, cornrows, and luxury hot towel razor shaves with our top stylists Muthu, Ranjith, and Sakthi."
    },
    {
      keywords: ["women", "color", "balayage", "makeup", "curly"],
      answer: "For women, we specialize in architectural cuts, balayage, ombre, hair glazing, curly hair sculpting, HD makeup, and gel nails."
    },
    {
      keywords: ["price", "cost", "rate", "discount"],
      answer: "Service prices depend on hair length, density, and customized requirements. Please contact our salon team directly at +91 87782 77514 or use our instant WhatsApp booking!"
    }
  ]
};
