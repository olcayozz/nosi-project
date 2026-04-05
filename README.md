# Not Defteri

Web tabanlı, sade ve hızlı bir not defteri uygulaması.

## Özellikler

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
├── html/
│   └── index.html      # Ana sayfa
├── css/
│   └── style.css       # Stil dosyası
├── docker/
│   └── nginx.conf      # Nginx konfigürasyonu
├── Dockerfile          # Docker imaj tanımı
├── docker-compose.yml  # Docker Compose tanımı
├── script.js           # JavaScript (not yönetimi, localStorage)
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

## Kullanım

- Sol paneldeki **+** butonu ile yeni not oluşturun
- Not başlığı ve içeriğini düzenleyin — otomatik olarak kaydedilir
- Notlar arasında arama yapmak için arama kutusunu kullanın
- Bir notu silmek için **Sil** butonuna tıklayın
- Notlar tarayıcı localStorage'da saklanır, sayfa yenilendiğinde kaybolmaz
