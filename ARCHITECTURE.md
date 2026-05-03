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
├── index.html              # Main landing page (Nosi specific)
├── css/
│   └── style.css         # All styles
├── js/
│   └── main.js          # Navigation, smooth scroll
└── health/
    └── index.html       # Returns 200 OK
```

## Nosi-Specific Sections

### index.html Sections
1. **Header**: Logo "Nosi", Nav links, CTA
2. **Hero**: "Kendi Agentik Yazılım Ekibin", Telegram CTA
3. **Nasil Calisir**: 4-step process
4. **Agentlar**: 5 agent cards
5. **Hizmetler**: 4 service cards
6. **Stack**: Technology list
7. **Footer**: Contact info

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

# Clean restart
docker compose down -v && docker compose up -d
```

## QA Verification Points

After deployment, QA team will verify:
1. Page loads at `http://<host>:8080`
2. `/health/index.html` returns 200
3. All CTA buttons link to `https://t.me/nosi_agent`
4. Responsive design works on mobile/tablet/desktop
5. Page load time under 3 seconds