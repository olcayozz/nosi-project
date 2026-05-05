# Product Requirements Document (PRD)
## Nosi AI Lab Landing Page

### 1. Product Overview
This document outlines the requirements for building a single-page landing site for Nosi AI Lab, a research environment for local LLMs. The landing page will showcase company information, services, and provide contact options.

### 2. Goals and Objectives
- Create a professional, responsive landing page that represents Nosi AI Lab
- Showcase the company's focus on self-hosted AI for everyone
- Provide clear information about research environment for local LLMs
- Offer simple contact method via email
- Implement a modern dark theme design

### 3. Target Audience
- Potential collaborators and researchers
- Technology enthusiasts interested in local AI solutions
- Organizations seeking AI research and development partnerships

### 4. Requirements and Specifications

#### 4.1 Functional Requirements
1. **Hero Section**
   - Company name: "Nosi"
   - Tagline: "Self-hosted AI for everyone"
   - CTA button: "Learn More"

2. **About Section**
   - 2-3 sentences describing the lab as a research environment for local LLMs

3. **Services Section**
   - 3 service cards with one-line descriptions
   - Services: Inference, Agents, Tools

4. **Contact Section** 
   - Simple email link: mailto:hello@nosi.ai

#### 4.2 Design Requirements
- Dark theme with:
  - Background: #0a0a0a
  - Text: #e0e0e0
  - Accent color: #00d4aa
- Responsive design:
  - Single-column layout on mobile
  - Three-column grid for Services section on desktop
- Modern, clean design aesthetics

#### 4.3 Technical Requirements
- Plain HTML/CSS/JS only (no frameworks, no npm, no build step)
- Relative paths (./style.css, ./script.js)
- Mobile-first approach
- No external dependencies

#### 4.4 Deployment Requirements
- Dockerfile with:
  - FROM nginx:alpine
  - COPY files into /usr/share/nginx/html/
  - EXPOSE 8080
- Single-page application accessible via web browser

### 5. Acceptance Criteria
- All required sections are present and properly formatted
- Dark theme implemented with specified colors
- Responsive design works on mobile and desktop
- All content is accessible and readable
- Page loads without errors
- Dockerfile builds properly and serves the page on port 8080
- Contact email link uses correct domain (hello@nosi.ai)
- All sections follow requirements outlined in this document

### 6. Success Metrics
- Page loads successfully with no console errors
- All sections contain correct content
- Responsive design works correctly across devices
- Docker container builds and runs properly
- Contact email link functions correctly

### 7. Risks and Mitigations
- Risk: Incorrect responsive behavior
  - Mitigation: Thorough cross-device testing
- Risk: Color scheme not matching specified values
  - Mitigation: Use of CSS variables for color consistency
- Risk: Incorrect contact email domain
  - Mitigation: Verification of email link content

### 8. Dependencies
- None (standalone implementation)

### 9. Timeline
- Design and Development: 3 days
- Testing and Review: 1 day
- Deployment: 1 day

### 10. Resources
- Team: 1 Frontend Developer, 1 QA Engineer
- Tools: HTML/CSS/JS editor, Docker, Browser testing tools

### 11. Post-Launch Considerations
- Monitoring for user feedback
- Performance optimization based on analytics 
- Potential feature additions