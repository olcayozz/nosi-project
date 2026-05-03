# Nosi Landing Page - Architecture

## Components

### Static Components
- **Header**: Logo, navigation links, mobile hamburger menu
- **Hero Section**: Headline, subheadline, CTA button
- **Services Section**: 4 service cards with icons and descriptions
- **Process Section**: Visual workflow diagram
- **Footer**: Contact info, social links, copyright

## Tech Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Flexbox/Grid layouts, CSS variables, media queries
- **JavaScript**: Vanilla JS for interactions (mobile menu, smooth scroll)
- **No frameworks**: No React, Vue, Angular, or other frameworks
- **No npm**: No package manager dependencies

### Deployment
- **Docker**: nginx:alpine base image
- **Port**: 8080
- **Health Check**: GET /health endpoint

## File Structure

```
nosi-project/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js       # Interactive functionality
├── Dockerfile         # Container configuration
└── README.md         # Setup instructions
```

### Relative Paths
- CSS: `./css/style.css`
- JS: `./js/main.js`

## Deployment

### Dockerfile
- Base image: `nginx:alpine`
- Copy static files to `/usr/share/nginx/html/`
- Expose port 8080
- Health check at `/health`

### Build & Run
```bash
docker build -t nosi-landing .
docker run -d -p 8080:80 nosi-landing
```

### Docker Compose
```yaml
services:
  web:
    build: .
    ports:
      - "8080:80"
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://localhost/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```