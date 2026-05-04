# ARCHITECTURE: Nosi AI Lab Landing Page

## Components

1. **Main HTML file** (`index.html`) - Contains all content and embedded CSS/JS
2. **Dockerfile** - Configures nginx:alpine container to serve the static site on port 8080
3. **Nginx configuration** - Basic nginx config to serve static files

## Tech Stack

- HTML5 for structure
- CSS3 for styling with embedded styles
- Vanilla JavaScript for basic interactivity
- nginx:alpine Docker image
- No frameworks, build tools, or external dependencies

## File Structure

The following files will be created:
1. `index.html` - Main landing page with embedded CSS and JavaScript
2. `Dockerfile` - Container configuration for nginx:alpine
3. `nginx.conf` - Nginx configuration file

## Deployment

The application will be deployed as a Docker container using the nginx:alpine image. The container will:
- Expose port 8080
- Serve static files from the container's default location
- Be configured to serve index.html as the main page
- Include no external dependencies or build processes

All content will be contained within the single HTML file with embedded styles and JavaScript to meet the plain HTML/CSS/JS requirements.