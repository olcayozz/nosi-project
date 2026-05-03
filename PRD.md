# PRD - Nosi Landing Page

## Problem Statement

Nosi, agentic AI sistemleri geliştiren bir IT şirketidir. Potansiyel müşterilerin şirketi keşfetmesi, hizmetlerini anlaması ve iletişime geçmesi için modern, hızlı ve etkileyici bir landing page gereklidir.

## User Stories

1. **Ziyaretçi** olarak, ana sayfada Nosi'nin ne yaptığını 3 saniyede anlayabilmeliyim.
2. **Potansiyel müşteri** olarak, hangi hizmetleri sunduğunuzu görebilmeliyim.
3. **İş ortağı** olarak, şirketiniz hakkında güven verici bilgiler (hakkımızda, ekip) görmek istiyorum.
4. **Müşteri adayı** olarak, kolayca iletişim formu veya e-posta ile ulaşabilmeliyim.

## Functional Requirements

### 1. Header/Navigation
- Logo (Nosi metin veya grafik)
- Navigation links: Home, Services, About, Contact
- Mobile hamburger menu

### 2. Hero Section
- Ana başlık ve alt metin
- CTA buton (Get Started / Contact)
- Arka plan görseli veya gradient

### 3. Services Section
- 3-4 hizmet kartı (AI Automation, Agent Development, Consulting, Custom Solutions)
- Her kart: İkon, Başlık, Kısa açıklama

### 4. About Section
- Şirketin missiyonu/vizyonu
- Kısa metin

### 5. Contact Section
- İletişim formu (Name, Email, Message)
- Email ve sosyal medya linkleri

### 6. Footer
- Telif hakkı
- Sosyal medya ikonları

## Acceptance Criteria

- [ ] Sayfa plain HTML/CSS/JS ile yazılmıştır (framework yok)
- [ ] Tüm bölümler (Hero, Services, About, Contact, Footer) mevcut
- [ ] Responsive tasarım (mobil, tablet, desktop)
- [ ] Navigation'da smooth scroll var
- [ ] İletişim formu görsel olarak mevcut
- [ ] Nginx alpine container'da port 8080'de çalışıyor
- [ ] /health endpoint çalışıyor
- [ ] Loading süresi 3 saniyeden az
- [ ] Tüm external linkler çalışıyor (sosyal medya)