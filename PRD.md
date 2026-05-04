# Product Requirements Document: Nosi AI Lab Landing Page

## Problem Statement

Nosi AI Lab needs a professional, visually appealing single-page landing site to communicate their mission and services to potential users and collaborators. The site should clearly convey that they are a research environment focused on local LLMs, while providing clear sections about their offerings and contact information. The landing page must be responsive and follow a specific dark theme design.

## User Stories

1. As a visitor, I want to see a clear hero section that introduces Nosi AI Lab and its core value proposition
2. As a visitor, I want to understand what Nosi AI Lab does and their research focus on local LLMs
3. As a visitor, I want to quickly see the three main services they offer
4. As a visitor, I want a clear way to contact them via email
5. As a visitor, I want the site to look professional with a consistent dark theme on all devices

## Functional Requirements

1. **Hero Section**:
   - Display "Nosi" as a heading
   - Include tagline "Self-hosted AI for everyone"
   - Add "Learn More" CTA button that scrolls to main content

2. **About Section**:
   - Two to three sentences describing Nosi AI Lab as a research environment for local LLMs
   - Must be responsive and readable on all devices

3. **Services Section**:
   - Three cards: Inference, Agents, Tools
   - Each card should have a one-line description
   - Responsive design that shows single column on mobile, three columns on desktop

4. **Contact Section**:
   - Include email contact "hello@nosi.example" using mailto link
   - Must be clearly visible and accessible

5. **Design Requirements**:
   - Dark theme with #0a0a0a background
   - Text color #e0e0e0
   - Accent color #00d4aa
   - Fully responsive layout
   - Plain HTML/CSS/JS only (no frameworks)

6. **Technical Requirements**:
   - Single HTML file with embedded CSS/JS
   - Docker deployment with nginx:alpine
   - Server running on port 8080

## Acceptance Criteria

1. The page loads correctly in modern browsers
2. All sections are clearly visible and properly spaced
3. The dark theme is consistently applied across the entire site
4. The accent color is used appropriately for CTAs and highlights
5. Mobile responsiveness is working correctly (single column layout)
6. Desktop layout shows three-column services section
7. All links work as expected (including mailto: link)
8. The page meets accessibility standards for text contrast
9. The Docker deployment works correctly with nginx:alpine