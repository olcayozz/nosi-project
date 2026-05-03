# Nosi Landing Page - PRD

## Problem Statement

Nosi, lokal LLM'lerle çalışan agentic IT şirketi olarak, potansiyel müşterilere hizmetlerini tanıtmak ve web üzerinden ulaşılabilir olmak için profesyonel bir landing page'e ihtiyaç duymaktadır. Hedef kitle geleneksel yazılım ekibi yerine self-hosted agentic alternatif arayan küçük/orta ölçekli işletmelerdir.

## User Stories

1. **Potansiyel Müşteri** - Sektöründe agentic yazılım geliştirme çözümü arayan bir işletme sahibi olarak, Nosi'nin ne yaptığını hızlıca anlamak ve iletişime geçmek istiyorum.

2. **Teknoloji Karar Vericisi** - Self-hosted LLM altyapısı kurmak isteyen CTO olarak, Nosi'nin teknik yeteneklerini ve hizmet kapsamını net şekilde görmek istiyorum.

3. **Girişimci** - Startup olarak, vibe-coded uygulama geliştirme hizmeti almak istiyorum ve hizmetlerin detaylarını öğrenmek istiyorum.

## Functional Requirements

### Content Sections

#### Header/Navigation
- Logo (Nosi)
- Navigation links: Services, Process, Contact
- Mobile responsive hamburger menu

#### Hero Section
- Ana headline: "Agentic IT Solutions for the Modern Enterprise"
- Subheadline: "Telegram üzerinden özel agent ekibi ile uçtan uca yazılım geliştirme"
- Call-to-action button: "Get Started"

#### Company Profile
- Şirket adı: Nosi
- Açıklama: Lokal LLM'lerle çalışan agentic IT şirketi
- Özellik: Telegram tabanlı agent ekibi ile yazılım geliştirme

#### Services Section (Service List)
- 4 ana hizmet kartı:
  1. Özel Agent Ekipi Kurulumu
  2. Vibe-coded Uygulama Geliştirme
  3. MCP Tool Entegrasyonu
  4. Self-hosted LLM Altyapısı

#### Process Section
- Nasıl çalıştığımız:
  1. Müşteri Telegram'da Nosi'ye ulaşır
  2. Agent ekibi (CEO, Architect, PM, Worker, QA) atanır
  3. Ekip projeyi geliştirir ve otomatik staging'e deploy eder
  4. QA doğrulama yapılır

#### Footer
- Contact bilgileri (Telegram linki)
- Sosyal medya linkleri
- Copyright

### Technical Requirements
- Plain HTML + CSS + JS (NO frameworks, NO npm)
- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Modern, clean UI
- Relative paths: ./style.css, ./script.js

### Deployment Requirements
- Staging URL: https://test.ozyilmaz.xyz/nosi
- Docker nginx:alpine, port 8080
- Health check at /health

## Acceptance Criteria

- [ ] Sayfa plain HTML/CSS/JS ile yazılmış olmalı (React/Vue/Angular yok)
- [ ] Tüm sayfa bileşenleri (header, hero, services, process, footer) mevcut olmalı
- [ ] Company profile bilgileri görünür olmalı
- [ ] Service list (4 hizmet) görünür olmalı
- [ ] Responsive tasarım tüm ekran boyutlarında çalışmalı
- [ ] Navigation linkleri ilgili bölümlere smooth scroll yapmalı
- [ ] CTA butonu tıklanabilir olmalı
- [ ] Hizmet kartları düzgün görünmeli
- [ ] Process akışı görsel olarak net şekilde anlaşılabilir olmalı
- [ ] Footer'da Telegram linki bulunmalı
- [ ] Relative paths kullanılmalı (./style.css, ./script.js)
- [ ] Docker nginx:alpine ile port 8080'de çalışmalı
- [ ] Health check endpoint mevcut olmalı
- [ ] Staging URL'de sayfa yüklenmeli