# NosiAI - Yapay Zeka Ajansı Landing Page

Modern ve responsive landing page.

## Kurulum

```bash
# Docker ile çalıştırma
docker build -t nosi-ai .
docker run -d -p 8080:8080 --name nosi-ai nosi-ai

# Docker Compose ile çalıştırma
docker-compose up -d

# Dayanıklılık testi
docker-compose down -v && docker-compose up -d
```

## Erişim

- Local: http://localhost:8080
- Health Check: http://localhost:8080/health

## Teknoloji

- Pure HTML/CSS/JS
- No frameworks
- nginx:alpine
- Port: 8080

## Dosyalar

- `index.html` - Ana sayfa
- `css/style.css` - Stiller
- `js/main.js` - JavaScript
- `Dockerfile` - Docker config
- `nginx.conf` - nginx config
- `docker-compose.yml` - Compose config

## Lisans

MIT
