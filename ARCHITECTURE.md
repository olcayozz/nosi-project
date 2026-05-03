# Nosi AI - Architecture Document

## Components

### Landing Page Components

1. **Header**
   - Logo (Nosi AI branding)
   - Navigation links (Home, Services, Team, Contact)
   - Fixed position on scroll

2. **Hero Section**
   - Headline: Value proposition for SMBs
   - Subheadline: Description of agentic IT services
   - CTA Button: Link to Telegram for consultation

3. **Services Section**
   - 4 service cards in grid layout:
     - Custom Agent Team Setup
     - Vibe-Coded Apps
     - MCP Tool Integration
     - Self-Hosted LLM Infrastructure
   - Each card: icon, title, description

4. **Team Section**
   - 5 Telegram agent role cards:
     - CEO Agent - Strategic decisions, client communication
     - Architect Agent - System design, technical planning
     - PM Agent - Project management, task coordination
     - Worker Agent - Code implementation, feature development
     - QA Agent - Testing, quality assurance, bug detection

5. **Contact/Footer Section**
   - Telegram link CTA
   - Company tagline
   - Copyright notice

## Tech Stack

- **HTML5**: Semantic markup, single-page structure
- **CSS3**: Custom styles, CSS variables, responsive media queries
- **JavaScript (ES6+)**: Vanilla JS, no external libraries
- **Docker**: nginx:alpine for static file serving
- **No frameworks**: No React, Vue, Tailwind, or npm dependencies

## File Structure

```
nosi-project/
├── index.html          # Main HTML (entry point)
├── css/
│   └── style.css       # All CSS styles (linked as ./css/style.css)
├── js/
│   └── main.js        # JavaScript functionality (linked as ./js/main.js)
├── Dockerfile          # Docker image build
├── docker-compose.yml  # Container orchestration
├── nginx.conf          # Nginx configuration
└── README.md          # Setup instructions
```

**Note:** CSS and JS use relative paths from project root (e.g., `./css/style.css`, `./js/main.js`).

## Deployment

### Docker Configuration

**Dockerfile** (nginx:alpine):
- Base image: nginx:alpine
- Copy static files to /usr/share/nginx/html/
- Expose port 8080
- No build step required (static files only)

**docker-compose.yml**:
- Service: nosi-landing
- Image: nosi-landing (built from Dockerfile)
- Port mapping: 8080:80
- Health check: GET /health returns 200
- Restart policy: always
- Volume: ./:/usr/share/nginx/html:ro (for development)

### Health Check
- Endpoint: GET /health
- Expected response: 200 OK
- Container survives: `docker compose down -v && docker compose up -d`

### Port Configuration
- Internal: 80 (nginx default)
- External: 8080 (mapped in docker-compose.yml)