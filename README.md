# NosiAI Landing Page

NosiAI - Yapay Zeka Ajansı tanıtım landing page'i.

## Özellikler

- Modern karanlık tasarım
- Yapay zeka glowing efektleri
- Responsive yapı
- Hizmetler bölümü (6 hizmet kartı)
- İletişim formu
- Scroll animasyonları

## Kurulum

### Docker ile

```bash
docker build -t nosi-ai .
docker run -d -p 8080:8080 nosi-ai
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

## Teknolojiler

- HTML5
- CSS3 (Custom Properties, Animations)
- Vanilla JavaScript
- Nginx

## Lisans

MIT
