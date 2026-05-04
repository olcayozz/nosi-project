# Product Requirements Document: Nosi AI Lab Landing Site

## Problem Statement

Nosi AI Lab requires a professional, responsive single-page landing site to communicate their mission and services to potential users and partners. The site should effectively showcase their research environment for local LLMs while maintaining a modern dark-themed aesthetic that aligns with their technical focus.

## User Stories

As a visitor to the Nosi AI Lab website, I want to:
- See clear information about what Nosi AI Lab does and their mission
- Understand their core services in a visually appealing way
- Find contact information easily
- Experience a responsive design that works well on mobile and desktop

## Functional Requirements

1. **Hero Section**
   - Display company name "Nosi" prominently
   - Show tagline "Self-hosted AI for everyone"
   - Include a CTA button "Learn More"

2. **About Section**
   - 2-3 sentences describing the lab as a research environment for local LLMs

3. **Services Section**
   - Three service cards: Inference, Agents, Tools
   - Each card contains one-line descriptions
   - Responsive layout: single-column on mobile, three-column grid on desktop

4. **Contact Section**
   - Simple email link to hello@nosi.example

5. **Styling Requirements**
   - Dark theme with background #0a0a0a, text #e0e0e0, accent #00d4aa
   - Responsive design that adapts to different screen sizes
   - No frameworks, npm, or build steps required

## Acceptance Criteria

- All sections are present and displayed correctly
- Site is fully responsive across mobile and desktop devices
- Dark theme styling is consistent throughout
- Contact email link works correctly
- No external dependencies or frameworks used
- All code is plain HTML/CSS/JS
- Dockerfile is properly configured to run on port 8080 with nginx:alpine