# NOS Teknoloji Landing Page

NOS Teknoloji sirket tanitim, hizmetler ve iletisim bilgilerini iceren modern statik landing page.

## Ozellikler

- Responsive tasarım (mobil, tablet, masaustu)
- Modern ve şık UI
- Animasyonlu hero bolumu
- Iletisim formu
- Nginx ile servis edilir
- Docker ile kolay kurulum
- `/health` endpoint ile saglik kontrolu

## Proje Yapisi

```
.
├── index.html          # Ana sayfa
├── script.js           # JavaScript dosyasi
├── css/
│   └── style.css       # Stil dosyasi
├── images/             # Resim klasoru
├── docker/
│   └── nginx.conf      # Nginx konfigürasyonu
├── Dockerfile          # Docker imaj tanimi
├── docker-compose.yml  # Docker Compose tanimi
└── README.md           # Bu dosya
```

## Kurulum

### Docker Compose ile

```bash
docker compose down -v
docker compose up -d
```

Uygulama `http://localhost:8080` adresinde calisacaktir.

### Health Check

```bash
curl http://localhost:8080/health
```

## Bolumler

- **Ana Sayfa** - Hero bolumu, animasyonlu kartlar
- **Hakkimizda** - Sirket bilgileri, istatistikler, ozellikler
- **Hizmetler** - Web gelistirme, mobil uygulama, bulut cozumleri, siber guvenlik, danismanlik, bakim & destek
- **Iletisim** - Iletisim bilgileri ve form

## Iletisim

- E-posta: info@nosteknoloji.com
- Telefon: +90 (212) 555 0123
- Adres: Levent Mah. Teknoloji Cad. No:42, Sisli, Istanbul 34330
