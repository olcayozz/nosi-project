# PRD: Nosi AI Lab Landing Page

## Problem Statement

Nosi AI Lab needs a professional, responsive landing page that effectively communicates their self-hosted AI platform to potential users, partners, and clients. The current website lacks a proper showcase that highlights their core services and value proposition, requiring a complete redesign and implementation of a modern, accessible web presence with a clear call to action.

## User Stories

- As a visitor, I want to immediately understand what Nosi AI Lab offers, so I can decide if their services are relevant to my needs
- As a potential customer, I want to see clear information about the three core services (Inference, Agents, Tools) so I can understand how they might benefit my use case
- As a stakeholder, I want to be able to contact the company easily via a clear email link
- As a user on any device, I want the website to be fully responsive and readable on mobile, tablet, and desktop screens
- As someone interested in AI solutions, I want to experience a professional dark-themed website with accent colors that convey modernity and technical excellence

## Functional Requirements

1. The landing page must be built with plain HTML/CSS/JS without any frameworks or build tools
2. The page must follow a dark theme with background color #0a0a0a, text color #e0e0e0, and accent color #00d4aa
3. The page must be fully responsive and work on mobile, tablet, and desktop screens
4. The page must include all required sections: Hero, About, Services, and Contact
5. The Hero section must contain:
   - Nosi brand name
   - Tagline "Self-hosted AI for everyone"
   - Clear call to action
6. The About section must contain 2-3 sentences explaining the company
7. The Services section must contain 3 cards for Inference, Agents, and Tools
8. The Contact section must include a mailto link to hello@nosi.example
9. A Dockerfile must be created to containerize the application with nginx:alpine
10. The application must listen on port 8080 inside the container

## Acceptance Criteria

- All sections (Hero, About, Services, Contact) are implemented according to specifications
- The page fully respects the dark theme color scheme (#0a0a0a bg, #e0e0e0 text, #00d4aa accent)
- The page is fully responsive and looks correct on different screen sizes
- All HTML, CSS, and JS are contained within a single HTML file with embedded styles and minimal JavaScript
- The Dockerfile is present and properly configured to run the application with nginx:alpine on port 8080
- The mailto link in the Contact section correctly directs to hello@nosi.example
- The page loads without errors in modern browsers
- There are no external dependencies or CDN resources used
- All files follow the specified file structure in ARCHITECTURE.md