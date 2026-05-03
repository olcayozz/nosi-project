# ARCHITECTURE.md — Nosi Landing Page

## Components

| Component | Description |
|-----------|-------------|
| Header | Sticky navigation bar with logo and menu links |
| Hero | Full-width banner with headline, subheadline, and CTA button |
| Services | 4-column grid of service cards with icons |
| How It Works | 4-step process timeline visualization |
| About | Mission/vision text section |
| Contact | Contact form + Telegram/email info |
| Footer | Copyright and social links |

## Tech Stack

- **HTML5** — Semantic markup, single index.html
- **CSS3** — Custom styles, CSS variables, responsive design (mobile-first)
- **JavaScript** — Vanilla JS for interactions (smooth scroll, mobile menu)
- **No frameworks** — NO React, Vue, Angular, or any JS framework
- **No npm** — No Node.js dependencies, no package.json
- **Fonts** — System fonts or Google Fonts (loaded via CDN)
- **Icons** — Inline SVG or Unicode symbols

## File Structure

```
nosi-project/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactive functionality
├── images/
│   └── (optional)      # Logos, icons (or use inline SVG)
├── Dockerfile          # Nginx deployment
└── README.md           # Setup instructions
```

## Relative Paths

All resource references use relative paths:
- `<link rel="stylesheet" href="./css/style.css">`
- `<script src="./js/main.js"></script>`
- `<img src="./images/logo.png" alt="Nosi">`

## Deployment

### Dockerfile (nginx:alpine)

```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY images/ /usr/share/nginx/html/images/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

### Health Check

- Endpoint: `GET /`
- Port: `8080`
- Response: 200 OK

### Docker Compose

```yaml
services:
  web:
    build: .
    ports:
      - "8080:80"
```

### Deploy to Staging

Use stage_deploy MCP tool:
```
app_name: nosi-landing
source: /var/tmp/vibe-kanban/worktrees/bb20-arch-nos-352/nosi-project
port: 8080
internal: false
```

## Build Notes

- No transpilation, no bundling
- Plain files served directly
- Minify CSS/JS manually if needed
- All assets inlined or static files