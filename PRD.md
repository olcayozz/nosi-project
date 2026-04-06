# PRD - NosiAI Landing Page

## 1. Project Overview

- **Project Name**: nosi.com.tr Landing Page
- **Project Type**: Corporate Website / Landing Page
- **Core Functionality**: Showcase NosiAI as an AI agency, present services, and capture visitor inquiries
- **Target Users**: Businesses seeking AI solutions, potential clients, partners

---

## 2. UI/UX Specification

### Layout Structure

- **Header**: Fixed navigation bar with logo and menu links
- **Hero Section**: Full-width banner with headline, subheadline, and CTA button
- **About Section**: Company introduction and value proposition
- **Services Section**: Grid of AI services offered
- **Contact Section**: Contact form and company information
- **Footer**: Social links, copyright

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary**: `#0D0D0D` (Deep Black)
- **Secondary**: `#1A1A2E` (Dark Navy)
- **Accent**: `#00D9FF` (Electric Cyan)
- **Accent Secondary**: `#7B2CBF` (Purple)
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A0A0A0`
- **Background**: `#0D0D0D`

#### Typography
- **Headings**: "Outfit" (Google Fonts) - Bold, 700 weight
- **Body**: "DM Sans" (Google Fonts) - Regular, 400 weight
- **Font Sizes**:
  - H1: 64px (desktop), 40px (mobile)
  - H2: 48px (desktop), 32px (mobile)
  - H3: 24px
  - Body: 16px
  - Small: 14px

#### Spacing System
- Section padding: 120px vertical (desktop), 60px (mobile)
- Container max-width: 1200px
- Grid gap: 32px
- Element spacing: 16px, 24px, 32px

#### Visual Effects
- Gradient overlays on hero
- Hover effects on buttons and cards (scale, glow)
- Smooth scroll behavior
- Fade-in animations on scroll
- Subtle noise texture on background

### Components

#### Navigation
- Logo (NosiAI text logo with gradient)
- Menu items: Ana Sayfa, Hakkımızda, Hizmetler, İletişim
- Mobile: Hamburger menu

#### Hero Section
- Headline: "Yapay Zeka ile Geleceği Şekillendirin"
- Subheadline: "NosiAI olarak işinizi dönüştürecek AI çözümleri sunuyoruz"
- CTA Button: "Projelerimizi İnceleyin" - links to services

#### About Section
- Company description text
- Key statistics (Projects, Clients, Experience years)
- Animated counter effect

#### Services Section (6 services)
1. AI Danışmanlık - Strategic AI implementation guidance
2. Makine Öğrenimi - Custom ML model development
3. Doğal Dil İşleme - NLP solutions
4. Bilgisayar Görüşü - Computer vision applications
5. AI Entegrasyon - Existing system integration
6. Özel AI Çözümleri - Custom AI product development

#### Contact Section
- Contact form (Name, Email, Company, Message)
- Company info: Address, Phone, Email
- Map placeholder area

#### Footer
- Logo
- Quick links
- Social media icons (LinkedIn, Twitter, Instagram)
- Copyright text

---

## 3. Functionality Specification

### Core Features
- Responsive single-page website
- Smooth scroll navigation
- Form validation (client-side)
- Mobile menu toggle
- Scroll-triggered animations
- Counter animation for statistics

### User Interactions
- Click navigation → smooth scroll to section
- Hover buttons → scale + glow effect
- Submit form → client-side validation feedback
- Mobile menu toggle → slide-in menu

### Data Handling
- Form: Console log on submit (no backend)
- No persistent data storage

### Edge Cases
- Empty form submission → show validation errors
- Mobile menu open → close on link click
- Long service titles → text truncation

---

## 4. Acceptance Criteria

- [ ] Page loads without errors
- [ ] All sections visible and properly styled
- [ ] Navigation smooth-scrolls to correct sections
- [ ] Mobile menu works on small screens
- [ ] Form validates required fields
- [ ] Hover effects work on interactive elements
- [ ] Responsive design works at all breakpoints
- [ ] All fonts load correctly
- [ ] No horizontal scroll on any device size
