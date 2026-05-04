# Architecture Document: Nosi AI Lab Landing Site

## Components

1. **HTML Structure**
   - Single HTML file containing all sections (hero, about, services, contact)
   - Semantic HTML5 elements for proper structure

2. **CSS Styling**
   - Single stylesheet for all visual components
   - Responsive design with media queries
   - Dark theme color scheme (#0a0a0a, #e0e0e0, #00d4aa)

3. **JavaScript**
   - Minimal interactivity (if needed)
   - No frameworks or external libraries

4. **Docker Deployment**
   - nginx:alpine base image
   - Static file serving on port 8080

## Tech Stack

- **Frontend**: Plain HTML5, CSS3, JavaScript (Vanilla JS)
- **No Frameworks**: No React, Vue, Angular, or similar frameworks
- **No Build Tools**: No npm, Webpack, or similar build processes
- **No External Dependencies**: Pure HTML/CSS/JS with no external libraries

## File Structure

The following files will be created:
- `index.html` - Main landing page
- `style.css` - Stylesheet for dark theme and responsive layout
- `Dockerfile` - Container configuration for nginx deployment

## Deployment

The site will be deployed using nginx:alpine Docker image:
- Base image: `nginx:alpine`
- Copy all static files into `/usr/share/nginx/html/`
- Expose port 8080
- No custom nginx configuration required (uses default nginx behavior for static sites)