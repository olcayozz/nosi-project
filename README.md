# Not Defteri

Web tabanlı, sade ve hızlı bir not defteri uygulaması.

## Özellikler

- **Landing Page** — Modern, mobil uyumlu tanıtım sayfası
- Not oluşturma, düzenleme ve silme
- Otomatik kaydetme (300ms debounce)
- Tarayıcı localStorage ile kalıcı depolama
- Notlarda arama
- Responsive tasarım (mobil uyumlu)
- Nginx ile servis edilir
- Docker ile kolay kurulum
- `/health` endpoint ile sağlık kontrolü

## Proje Yapısı

```
.
├── src/                    # React kaynak kodları
│   ├── components/         # UI bileşenleri
│   │   ├── Navbar.jsx      # Üst navigasyon
│   │   ├── Hero.jsx        # Hero bölümü
│   │   ├── Features.jsx    # Özellikler bölümü
│   │   ├── HowItWorks.jsx  # Nasıl çalışır bölümü
│   │   ├── Testimonials.jsx# Kullanıcı yorumları
│   │   ├── CTA.jsx         # Call-to-action bölümü
│   │   └── Footer.jsx      # Alt bilgi
│   ├── pages/
│   │   └── LandingPage.jsx # Ana sayfa bileşeni
│   ├── styles/
│   │   └── global.css      # Genel stiller
│   ├── App.jsx             # Ana uygulama
│   └── main.jsx            # Giriş noktası
├── html/
│   └── index.html          # Not defteri uygulaması
├── css/
│   └── style.css           # Not defteri stilleri
├── docker/
│   └── nginx.conf          # Nginx konfigürasyonu
├── Dockerfile              # Docker imaj tanımı (multi-stage)
├── docker-compose.yml      # Docker Compose tanımı
├── script.js               # Not defteri JavaScript kodu
├── package.json            # Bağımlılıklar
├── vite.config.js          # Vite yapılandırması
└── README.md               # Bu dosya
```

## Kurulum

### Docker Compose ile

```bash
docker compose down -v
docker compose up -d
```

Uygulama `http://localhost:8080` adresinde çalışacaktır.

### Geliştirme Ortamı

```bash
npm install
npm run dev
```

### Health Check

```bash
curl http://localhost:8080/health
```

## Kullanım

### Landing Page
- `/` adresinde uygulama tanıtım sayfası bulunur
- Özellikler, kullanım adımları ve kullanıcı yorumları içerir
- "Not Defteri'ni Aç" butonu ile not defteri uygulamasına geçiş yapılır

### Not Defteri
- Sol paneldeki **+** butonu ile yeni not oluşturun
- Not başlığı ve içeriğini düzenleyin — otomatik olarak kaydedilir
- Notlar arasında arama yapmak için arama kutusunu kullanın
- Bir notu silmek için **Sil** butonuna tıklayın
- Notlar tarayıcı localStorage'da saklanır, sayfa yenilendiğinde kaybolmaz
