# System Architecture

## 1. Overview
This document outlines the architecture for the Nosi AI Lab landing page. The system is a single-page application built with plain HTML, CSS, and JavaScript, with no external dependencies or build steps.

## 2. Architecture Diagram
```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Browser                            │
└─────────────────┬───────────────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────────────┐
│                    Web Server (nginx)                            │
│              FROM nginx:alpine                                  │
│              COPY files to /usr/share/nginx/html/               │
│              EXPOSE 8080                                         │
└─────────────────┬───────────────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────────────┐
│                     Static Files                                  │
│  ├── index.html (Main entry point)                              │
│  ├── css/style.css (Styling)                                    │
│  └── js/script.js (JavaScript functionality)                    │
└─────────────────────────────────────────────────────────────────┘
```

## 3. File Structure
```
nosi-project/
├── index.html                 # Main landing page
├── css/
│   └── style.css             # Custom CSS styling
├── js/
│   └── script.js             # JavaScript functionality
├── Dockerfile                # Container configuration
└── README.md                 # Project documentation
```

## 4. Technology Stack
- **Frontend**: Pure HTML, CSS, JavaScript
- **Deployment**: Docker with nginx:alpine
- **Styling**: Custom CSS with responsive design
- **No Frameworks**: Vanilla JavaScript only
- **Build Process**: None (static files only)

## 5. Component Details

### 5.1 HTML Structure (index.html)
- Semantic HTML5 elements
- Responsive navigation
- Section-based layout
- Accessibility features
- Form elements

### 5.2 CSS Styling (css/style.css)
- Dark theme with specified colors (#0a0a0a, #e0e0e0, #00d4aa)
- Responsive grid system
- Media queries for mobile/desktop
- CSS variables for consistent theming
- Flexbox and Grid for layout

### 5.3 JavaScript Functionality (js/script.js)
- Smooth scrolling navigation
- Form handling
- DOM manipulation
- Responsive behavior
- Event handling

## 6. Deployment Architecture
### 6.1 Docker Configuration
The Dockerfile follows nginx:alpine base image:
- Copies all static files to /usr/share/nginx/html/
- Exposes port 8080
- No custom configuration required

### 6.2 Server Configuration
- Static file serving via nginx
- No application logic needed
- No database or backend services required

## 7. Security Considerations
- No backend services to secure
- Static files only - no injection vulnerabilities
- Pure client-side implementation
- No external dependencies that could introduce risks

## 8. Performance Considerations
- Lightweight static files
- No build process or transpilation
- Minimal JavaScript usage
- Efficient CSS with no unnecessary styling
- Optimized for fast loading

## 9. Testing Strategy
- Browser testing across devices
- Responsive design verification
- Console error checking
- Docker container verification
- Manual acceptance criteria checks

## 10. Maintenance
- No complex dependencies to update
- Easy content updates in HTML/CSS
- Simple deployment process
- No build pipeline required