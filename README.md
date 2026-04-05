# NosiAI Landing Page

NosiAI yapay zeka hizmetlerini tanıtan statik landing page uygulaması.

## Özellikler

- Responsive tasarım (mobil, tablet, masaüstü)
- Modern ve şık UI
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
- Doğal Dil İşleme
- Veri Analitiği
- Otomasyon
- Görüntü İşleme
- Danışmanlık

## İletişim

- E-posta: info@nosiai.com
- Telefon: +90 (212) 123 45 67
- Adres: Teknoloji Vadisi, İnovasyon Cad. No: 42, İstanbul
