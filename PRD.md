# Problem Statement

Nosi is a self-hosted AI platform designed to make local large language models (LLMs) accessible to everyone. The platform requires a modern, responsive landing page that effectively communicates its value proposition, technical capabilities, and contact information to potential users and researchers.

## User Stories

As a potential user, I want to quickly understand what Nosi offers so I can decide whether to explore further.
As a researcher, I want to learn about the lab's research on local LLMs to understand the platform's technical foundation.
As a developer, I want to understand Nosi's core services to evaluate integration opportunities.
As a visitor, I want a clean, dark-themed website that works on both mobile and desktop devices.
As an interested user, I want to easily contact the team for inquiries or collaboration.

## Functional Requirements

- A hero section with the Nosi logo/text, tagline, and learn more call-to-action
- An about section describing the lab's research efforts for local LLMs
- A services section with three cards covering Inference, Agents, and Tools
- A contact section with email link
- A responsive design that displays as single column on mobile and three-column grid on desktop
- Dark theme styling with specific color palette (#0a0a0a bg, #e0e0e0 text, #00d4aa accent)
- Plain HTML/CSS/JS implementation with no frameworks
- Docker deployment using nginx:alpine on port 8080

## Acceptance Criteria

- Landing page renders with correct dark theme colors
- Mobile view displays content in single column
- Desktop view displays services in 3-column grid
- All sections are present and correctly styled
- Hero section features a prominent "Learn More" CTA
- Contact information uses mailto: link
- Implementation uses only plain HTML/CSS/JS
- Dockerfile is included for nginx:alpine deployment
- No external dependencies or frameworks
- Page is responsive across device sizes