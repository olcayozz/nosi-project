# Nosi AI - Product Requirements Document

## Problem Statement

SMBs struggle to access affordable, flexible software development. Traditional dev teams are expensive, slow to scale, and require ongoing management. There's a gap for businesses that want the power of AI-driven development but need human oversight and structured agent workflows—not just raw LLM chat interfaces.

**Core Problem:** SMBs need agentic AI teams that combine LLM capabilities with structured roles (CEO, Architect, PM, Worker, QA), accessible via familiar channels like Telegram, without the overhead of traditional development agencies.

## User Stories

### SMB Founders / CTOs
- "I want to message an AI team on Telegram and get a working app, without explaining everything from scratch each time."
- "I need my AI agents to have clear roles—so I know who handles design, implementation, and quality."

### Business Owners Seeking Custom Solutions
- "I want a dedicated agent team that understands my business context and can build vibe-coded apps tailored to my needs."
- "I need MCP tool integration so my AI agents can connect to my existing tools (CRM, databases, APIs)."

### IT Managers Wanting Self-Hosted Solutions
- "I want to run my own LLM infrastructure so my data never leaves my premises."
- "I need a partner to set up and maintain local LLM systems with agentic workflows."

## Functional Requirements

### FR-1: Landing Page (Single Page)
- Hero section with value proposition and CTA
- Services overview (4 core services)
- Team roles section explaining the Telegram agent personas
- Trust indicators (client logos, testimonials placeholder)
- Contact/CTA section with Telegram link

### FR-2: Responsive Design
- Mobile-first responsive layout
- Works on desktop (1920px), tablet (768px), mobile (375px)

### FR-3: Visual Design
- Modern, tech-forward aesthetic
- Dark theme with accent colors reflecting AI/tech branding
- Smooth scroll navigation

### FR-4: Navigation
- Single-page scroll navigation
- Smooth anchor links to sections

### FR-5: Performance
- Static HTML/CSS/JS (no build step required)
- Fast load times under 2 seconds
- No external framework dependencies

## Acceptance Criteria

### AC-1: Page Structure
- [ ] Header with logo and navigation links
- [ ] Hero section with headline, subheadline, CTA button
- [ ] Services section with 4 service cards
- [ ] Team section explaining 5 Telegram agent roles
- [ ] Contact/footer section

### AC-2: Visual Requirements
- [ ] Responsive across all breakpoints
- [ ] Consistent color scheme throughout
- [ ] Typography hierarchy is clear and readable
- [ ] All sections have proper spacing

### AC-3: Interaction
- [ ] Navigation links scroll smoothly to sections
- [ ] CTA button links to Telegram
- [ ] No JavaScript errors in console

### AC-4: Deployment
- [ ] Docker container runs on port 8080
- [ ] Uses nginx:alpine
- [ ] Health check endpoint returns 200
- [ ] Survives docker compose down -v && docker compose up -d

### AC-5: Files
- [ ] index.html exists and renders correctly
- [ ] style.css exists with all styles
- [ ] script.js exists with interactions
- [ ] All references use relative paths (./style.css, ./script.js)