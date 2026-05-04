# Components

1. **HTML Structure** - Single HTML file containing all sections (Hero, About, Services, Contact)
2. **CSS Styles** - Single CSS file for styling with dark theme and responsive layout
3. **JavaScript** - Minimal JS for interactive elements (if needed)
4. **Docker Configuration** - Dockerfile using nginx:alpine base image

# Tech Stack

- **Frontend**: Plain HTML, CSS, JavaScript (no frameworks)
- **Build Process**: None - static files only
- **Deployment**: Docker container with nginx:alpine

# File Structure

The following files will be created:
- `index.html` - Main landing page
- `style.css` - Styling for the landing page
- `Dockerfile` - Container configuration
- `nginx.conf` - Nginx configuration (if needed)

# Deployment

The application will be deployed in a Docker container:
- Base image: `nginx:alpine`
- Port: 8080
- Files copied to: `/usr/share/nginx/html/`
- No build steps required
- Static file serving only