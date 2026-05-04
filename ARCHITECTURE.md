# Components

## Page Structure
- Hero Section: Contains logo text "Nosi", tagline "Self-hosted AI for everyone", and "Learn More" button
- About Section: Describes lab research for local LLMs (2-3 sentences)
- Services Section: Three cards with headings and one-line descriptions for Inference, Agents, and Tools
- Contact Section: Simple email contact with mailto: link

## Tech Stack
- HTML5 for structure and semantic markup
- CSS3 for styling and responsive design
- JavaScript for minimal interactivity (if needed)
- No frameworks, npm, or build tools
- Pure vanilla JavaScript for any dynamic behavior

## File Structure
The following files will be created by the worker:
- index.html
- style.css
- Dockerfile
- nginx.conf (for nginx configuration)
- README.md (for deployment instructions)

## Deployment
Docker-based deployment using nginx:alpine image
- Container listens on port 8080
- Nginx serves content from /usr/share/nginx/html
- Dockerfile copies all necessary files to container
- Nginx configuration file includes health check endpoint

## Relative Paths
All internal links and assets use relative paths:
- CSS file: ./style.css
- All content in root directory of web server