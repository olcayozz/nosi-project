# NosiAI Landing Page

NosiAI yapay zeka hizmetlerini tanıtan statik landing page uygulaması.

## Özellikler

- Responsive tasarım (mobil, tablet, masaüstü)
- Modern UI/UX - Inter font, gradient renkler, animasyonlar
- Hamburger menü (mobil)
- Scroll animasyonları
- Nginx ile servis edilir
- Docker ile kolay kurulum
- `/health` endpoint ile sağlık kontrolü

## Proje Yapısı

```
.
├── html/
│   └── index.html      # Ana sayfa
├── css/
│   └── style.css       # Stil dosyası
├── docker/
│   └── nginx.conf      # Nginx konfigürasyonu
├── Dockerfile          # Docker imaj tanımı
├── docker-compose.yml  # Docker Compose tanımı
├── script.js           # JavaScript (menü, animasyonlar)
└── README.md           # Bu dosya
```

## Kurulum

### Docker Compose ile

```bash
docker compose down -v
docker compose up -d
```

Uygulama `http://localhost:8080` adresinde çalışacaktır.

### Health Check

```bash
curl http://localhost:8080/health
```

## Hizmetler

- Özel AI Çözümleri
- AI Danışmanlık
- Veri Analitiği
- Otomasyon

## İletişim

- E-posta: info@nosiai.com
- Telefon: +90 (212) 555 0123
- Adres: İstanbul, Türkiye
