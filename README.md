# Nosi Landing Page

Nosi - Lokal LLM'lerle çalışan agentic IT şirketi tanıtım sayfası.

## Özellikler

- Modern karanlık tasarım
- Agent flow görselleştirme
- Responsive yapı
- 4 adımlı süreç anlatımı
- 5 agent kartı (CEO, Architect, PM, Worker, QA)
- 4 hizmet kartı
- Teknoloji stack bölümü
- Telegram entegrasyonu

## Kurulum

### Docker ile

```bash
docker compose up -d
```

Tarayıcıda `http://localhost:8080` adresini ziyaret edin.

### Yerel Geliştirme

Herhangi bir web sunucusu ile açabilirsiniz:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

## Dosya Yapısı

```
nosi-project/
├── Dockerfile
├── docker-compose.yml
├── index.html              # Ana landing page
├── nginx.conf             # Nginx konfigürasyonu
├── css/
│   └── style.css        # Stil dosyası
├── js/
│   └── main.js        # JavaScript
└── health/
    └── index.html     # Health check
```

## Teknolojiler

- HTML5
- CSS3 (Custom Properties, Animations)
- Vanilla JavaScript
- Nginx (port 8080)

## Lisans

MIT