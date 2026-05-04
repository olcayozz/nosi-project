# Problem Statement

Nosi AI Lab requires a professional, self-contained landing page that effectively communicates their mission of providing self-hosted AI solutions for everyone. The landing page must serve as a clear introduction to their research environment for local LLMs while showcasing their key services and contact information.

The current solution needs to be:
- A single-page website with clear visual hierarchy
- Responsive across all device sizes
- Built with plain HTML/CSS/JS without any frameworks or build steps
- Deployable in a Docker container using nginx:alpine

# User Stories

As a visitor to the Nosi AI Lab website, I want to:
- See a clear hero section that introduces the company name and value proposition
- Understand what Nosi AI Lab does in a few sentences
- Quickly see the three core services offered (Inference, Agents, Tools)
- Find contact information easily
- Experience a responsive design that works on mobile and desktop

As a developer maintaining the website, I want to:
- Have a solution that requires no build process or external dependencies
- Deploy the site using a simple Docker container with nginx
- Maintain a clean, dark-themed UI with consistent styling

# Functional Requirements

1. **Hero Section**:
   - Display company name "Nosi"
   - Show tagline "Self-hosted AI for everyone"
   - Include "Learn More" CTA button

2. **About Section**:
   - 2-3 sentences describing Nosi AI Lab as a research environment for local LLMs

3. **Services Section**:
   - Three cards with headings: Inference, Agents, Tools
   - One-line description for each card
   - Responsive grid layout (single column on mobile, three-column on desktop)

4. **Contact Section**:
   - Simple email link to hello@nosi.example

5. **Styling Requirements**:
   - Dark theme with background #0a0a0a
   - Text color #e0e0e0
   - Accent color #00d4aa
   - Responsive design
   - Single-column layout on mobile
   - Three-column grid for Services on desktop

6. **Technical Requirements**:
   - Pure HTML/CSS/JS (no frameworks, no npm)
   - Single-page application structure
   - Dockerfile with nginx:alpine base image
   - All files placed in /usr/share/nginx/html/ directory
   - Expose port 8080