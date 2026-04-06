# ARCHITECTURE - NosiAI Landing Page

## 1. Project Structure

```
nosi-project/
├── index.html          # Main HTML file
├── style.css           # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Setup instructions
```

## 2. Technical Architecture

### Technology Stack
- **HTML5**: Semantic markup
- **CSS3**: Custom styles with CSS variables
- **JavaScript (ES6+)**: Vanilla JS, no libraries

### File Structure & Responsibilities

#### index.html
- Semantic HTML5 structure
- Sections: header, hero, about, services, contact, footer
- Google Fonts loaded via CDN
- CSS and JS linked via relative paths

#### style.css
- CSS custom properties for theming
- Reset/global styles
- Section-specific styles
- Responsive media queries
- Animations and transitions

#### script.js
- Mobile menu toggle
- Smooth scroll navigation
- Form validation
- Scroll-triggered animations
- Counter animation

## 3. CSS Architecture

### CSS Variables
```css
:root {
  --color-primary: #0D0D0D;
  --color-secondary: #1A1A2E;
  --color-accent: #00D9FF;
  --color-accent-secondary: #7B2CBF;
  --color-text: #FFFFFF;
  --color-text-secondary: #A0A0A0;
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}
```

### CSS Structure
1. Reset & Base
2. Typography
3. Layout utilities
4. Component styles
5. Section styles
6. Animation keyframes
7. Media queries

## 4. JavaScript Architecture

### Module Pattern
- Event listeners for DOMContentLoaded
- Encapsulated functions per feature
- No external dependencies

### Features
- `initNavigation()` - Menu toggle and smooth scroll
- `initAnimations()` - Scroll-triggered effects
- `initForm()` - Form validation
- `initCounters()` - Number counter animation

## 5. Responsive Strategy

### Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

### Approach
- Mobile-first base styles
- Desktop overrides via media queries
- Fluid typography with clamp()
- Grid to flexbox fallbacks

## 6. Performance Considerations

- No external JS libraries
- Google Fonts: display=swap
- CSS animations over JS where possible
- Minimal DOM manipulation
- Lazy-load consideration for images (future)

## 7. Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- ES6+ JavaScript
