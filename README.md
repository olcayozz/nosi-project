# Nosi AI Lab Landing Site

This is a single-page landing site for Nosi AI Lab.

## Features

- Dark theme with specified color scheme (#0a0a0a, #e0e0e0, #00d4aa)
- Responsive design
- Single-column layout on mobile
- Three-column grid for services on desktop
- All content in a single HTML file with embedded CSS

## Setup

### Running with Docker

```bash
# Build the Docker image
docker build -t nosi-landing .

# Run the container
docker run -p 8080:8080 nosi-landing
```

The site will be available at http://localhost:8080

## File Structure

- `index.html` - Landing page with all content
- `Dockerfile` - Docker image configuration
- `health/index.html` - Health check endpoint