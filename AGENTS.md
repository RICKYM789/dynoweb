# AGENTS.md — Dyno Art Salon Project Guidelines

This file defines the project architecture, design constraints, and operational rules for AI agents working in this codebase.

> **CRITICAL MANDATE**: Any agent working on this repository MUST read this file first. Focus on **maximum efficiency, token conservation, high-speed execution, and complete solutions**.

---

## 1. Project Overview & Brand Identity

**Dyno Art Salon** is an editorial, luxury unisex hair & beauty salon located in Besant Nagar, Chennai.

- **Motto**: *"Hair is art. Your stylist is an artist. Your transformation is the experience."*
- **Design Aesthetic**: Luxury fashion editorial × digital art gallery. Warm beige (`#F3ECE5`), sand (`#E7DDD1`), deep brown (`#4A3328`), dark brown (`#2B1D17`), charcoal (`#1A1918`), and muted gold (`#C7A96B`).
- **Typography**: Display serif (`Cormorant Garamond`, `Italiana`) + clean sans (`Plus Jakarta Sans`).

---

## 2. File Architecture & Source of Truth

```
src/
├── data/
│   └── salonData.ts        # SINGLE SOURCE OF TRUTH for services, stylists, reviews, stories, FAQs
├── components/
│   ├── CustomCursor.tsx    # Context-aware desktop cursor (VIEW, MEET, EXPLORE, BOOK, PLAY)
│   ├── HairStrandSVG.tsx   # Flowing hair strand SVG scroll animation
│   ├── Navbar.tsx          # Floating navbar & fullscreen mobile menu
│   ├── Hero.tsx            # Fullscreen cinematic editorial hero
│   ├── SalonIntro.tsx      # "MORE THAN A SALON" split-screen editorial section
│   ├── SignatureServices.tsx # Art gallery explorer (HAIR, GROOMING, BEAUTY)
│   ├── TransformationGallery.tsx # Masonry grid & lightbox modal
│   ├── BeforeAfterSlider.tsx # Interactive before/after comparison slider
│   ├── MeetArtists.tsx     # Stylist grid & Framer Motion expanded bio sheets
│   ├── AIBeautyAssistant.tsx # "ASK DYNO" concierge + 3-step Hair Consultation Quiz
│   ├── GoogleReviews.tsx   # Verified Google 4.9⭐ reviews (SEPARATE FROM IG)
│   ├── InstagramStories.tsx# Vertical 9:16 video reel cards (SEPARATE FROM GOOGLE)
│   ├── BookingModal.tsx    # 5-step appointment flow + WhatsApp instant booking
│   ├── ContactSection.tsx  # Besant Nagar studio details & Google Map embed
│   ├── Footer.tsx          # Editorial footer with quick links & statement
│   └── Icons.tsx           # Inline SVG icons (InstagramIcon, etc.)
├── App.tsx                 # Main layout orchestrator
└── index.css               # Tailwind v3 base directives & custom scrollbar
```

---

## 3. Mandatory Agent Operational Rules

1. **Token Efficiency**:
   - Do NOT output verbose re-summaries of entire files.
   - Use precise, targeted edits (`replace_file_content`).
   - Group related file changes logically.

2. **Source Data Integrity**:
   - Edit [salonData.ts](file:///c:/Users/ricky/Desktop/dynoArtSalonWs/src/data/salonData.ts) when modifying business logic, services, pricing, stylists, or reviews.
   - Never hardcode dynamic content directly inside UI components.

3. **Design & Review Guardrails**:
   - **DO NOT** combine Google Reviews and Instagram Stories into a single section; keep them strictly isolated in `GoogleReviews.tsx` and `InstagramStories.tsx`.
   - Preserve the 4 primary real stylists (*Muthu*, *Ranjith*, *Varsha*, *Sakthi*).
   - Maintain full responsiveness, keyboard accessibility, and custom cursor touch-disabling.

4. **Build & Build Verification**:
   - Production build command: `.\node_modules\.bin\vite build` or `npm run build`.
   - Always verify that imports use explicit type imports (`import type { ... }`) to prevent Vite/Rolldown build errors.
