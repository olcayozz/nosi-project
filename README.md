# NosiAI Landing Page

NosiAI için yapay zeka destekli yazılım ajansı landing page'i. HTML/CSS/JS statik site, Nginx üzerinde çalışır.

## Özellikler

- Responsive tasarım (mobil, tablet, masaüstü)
- Smooth scroll navigasyon
- Scroll animasyonları
- İletişim formu validasyonu
- Docker ile kolay dağıtım
- `/health` endpoint ile sağlık kontrolü

## Dosya Yapısı

```
nosi-project/
├── index.html
├── css/
│   └── style.css
├── script.js
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── README.md
```

## Kurulum

### Docker ile Çalıştırma

```bash
docker compose down -v && docker compose up -d --build
```

Uygulama `http://localhost:8080` adresinde çalışacaktır.

### Sağlık Kontrolü

```bash
curl http://localhost:8080/health
```

## Teknolojiler

- HTML5, CSS3, Vanilla JavaScript
- Nginx (Alpine)
- Docker & Docker Compose
