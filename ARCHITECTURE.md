# Architecture Document: Nosi AI Lab Landing Site

## Components

The landing site consists of the following core components:

### Main HTML Structure
- index.html: Single-page application with all content sections
- style.css: All styling for the landing site
- script.js: Client-side JavaScript for navigation and interactions

### Content Sections
1. Hero banner with headline and CTA
2. About section with mission and values
3. Research areas with descriptions
4. Team member profiles with photos and bios
5. Publications showcase
6. Contact form and information
7. Footer with links and copyright

## Tech Stack

- HTML5: For semantic structure and content organization
- CSS3: For styling, layouts, and responsive design
- JavaScript: For interactive elements and smooth scrolling navigation
- No frameworks, no build tools, no npm dependencies
- Plain vanilla JavaScript for all interactive functionality
- Responsive design using CSS media queries

## File Structure

The following files need to be created:

1. index.html - Main landing page
2. style.css - All styling for the site
3. script.js - Client-side JavaScript functionality
4. Dockerfile - For nginx deployment
5. nginx.conf - Nginx configuration file

## Deployment

The application will be deployed using nginx:alpine Docker image:

### Docker Setup
- Use nginx:alpine official image
- Expose port 8080
- Map the application files to /usr/share/nginx/html
- Configure health check at /health
- Use default nginx configuration with /usr/share/nginx/html as root

### File Paths
- All static files (HTML, CSS, JS) will be placed in the root of the nginx html directory
- Relative paths will be used in HTML for CSS and JS files: "./style.css", "./script.js"
- Nginx configuration will be in the root directory

### Build Process
- The Dockerfile will copy all static assets to the nginx html directory
- No build steps required - everything is static content