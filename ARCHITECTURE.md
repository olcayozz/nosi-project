# Nosi Landing Page - Architecture

## Components

### Static Components
- **Header**: Logo, navigation links, mobile hamburger menu
- **Hero Section**: Headline, subheadline, CTA button
- **Company Profile**: Nosi branding and description
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
├── style.css           # All styles (root level)
├── script.js           # Interactive functionality (root level)
├── Dockerfile          # Container configuration
├── docker-compose.yml  # Compose configuration
├── README.md           # Setup instructions
└── health/
    └── index.html      # Health check file
```

### Relative Paths
- CSS: `./style.css`
- JS: `./script.js`

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

### Staging Deployment
- **URL**: https://test.ozyilmaz.xyz/nosi
- Auto-deploy on push to main/development branch

## Implementation Notes

### HTML Structure
- Semantic HTML5 sections: header, nav, section, footer
- IDs for smooth scroll navigation: #services, #process, #contact

### CSS Requirements
- CSS variables for colors and spacing
- Media queries for responsive design
- Flexbox/Grid for layout

### JS Functionality
- Mobile hamburger menu toggle
- Smooth scroll for navigation links
- CTA button interaction

### QA Verification
- Page loads at staging URL
- All sections visible
- Responsive on mobile/tablet/desktop
- Navigation smooth scroll works
- CTA clickable