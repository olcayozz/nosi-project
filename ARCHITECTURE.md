# Architecture - Nosi Landing Page

## Components

- **Static Landing Page**: Single-page website with smooth scrolling sections
- **Nginx Server**: Serves static HTML files with gzip compression
- **Health Check**: Basic endpoint for container orchestration

## Tech Stack

- **Frontend**: Plain HTML5, CSS3, Vanilla JavaScript
- **Server**: nginx:alpine
- **Container**: Docker
- **No frameworks, no npm dependencies**

## File Structure

```
nosi-project/
├── Dockerfile
├── docker-compose.yml
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Navigation, smooth scroll, form handling
├── images/
│   └── (placeholder SVGs or empty)
└── health/             # Health check file
    └── index.html      # Returns 200 OK
```

## Relative Paths

All CSS/JS references use relative paths:
- `<link rel="stylesheet" href="./css/style.css">`
- `<script src="./js/main.js"></script>`

## Deployment

### Dockerfile (nginx:alpine)
```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY health /usr/share/nginx/html/health
EXPOSE 8080
```

### Health Check
- Endpoint: `GET /health/index.html`
- Returns: 200 OK
- Container port: 8080

### Docker Compose
- Service name: `web`
- Port mapping: `8080:8080`
- Health check configured via docker-compose.yml
- Restart policy: `unless-stopped`

### Commands
```bash
# Build and start
docker compose up -d

# View logs
docker compose logs -f

# Stop
docker compose down
```