# PRD - Nosi Landing Page

## Problem Statement

Nosi, lokal LLM'lerle çalışan agentic bir IT şirketidir. Müşteriler Telegram üzerinden CEO, Architect, PM, Worker ve QA agentlarından oluşan bir ekiple yazışarak uçtan uca yazılım geliştirme hizmeti alırlar.

**Sorun:** Potansiyel müşterilerin Nosi'nin ne yaptığını, nasıl çalıştığını ve hangi hizmetleri sunduğunu anlayabileceği bir tanıtım sayfası bulunmamaktadır.

**Hedef:** Kendi kendine yönetilen agentic alternatifler arayan KOBİ'ler için profesyonel bir landing page oluşturmak.

## User Stories

1. **Potansiyel Müşteri** olarak, Nosi'nin ne yaptığını 5 saniyede anlamak istiyorum
2. **Potansiyel Müşteri** olarak, sunulan hizmetleri detaylı görmek istiyorum
3. **Potansiyel Müşteri** olarak, Telegram ile nasıl iletişim kuracağımı görmek istiyorum
4. **Potansiyel Müşteri** olarak, "Hemen Başla" butonuyla sohbete başlamak istiyorum

## Functional Requirements

### FR-001: Header Section
- Logo ve şirket adı "Nosi"
- Navigation: Hizmetler, Nasıl Çalışır, İletişim
- "Başla" CTA butonu

### FR-002: Hero Section
- Ana başlık: "Kendi Agentik Yazılım Ekibin"
- Alt başlık: Telegram'da sohbeterek uçtan uca yazılım geliştirme
- Desteklenen teknolojiler: Local LLM, MCP Tool, Staging Deploy
- "Telegram'da Başla" CTA butonu (`https://t.me/nosi_agent`)

### FR-003: Nasıl Çalışır Section
- 4 adımlı süreç:
  1. Telegram'da Nosi'ye mesaj at
  2. CEO + Architect analiz eder
  3. Worker geliştirir, staging'e deploy eder
  4. QA doğrular, onay verir

### FR-004: Agentlar Section
- 5 agent tanıtım kartı:
  1. **CEO Agent**: Proje yönetimi, müşteri iletişimi
  2. **Architect Agent**: Sistem tasarımı, teknik kararlar
  3. **PM Agent**: İş analizi, gereksinim yönetimi
  4. **Worker Agent**: Kod yazma, debug, deploy
  5. **QA Agent**: Test, doğrulama, kalite kontrol

### FR-005: Hizmetler Section
- 4 hizmet kartı:
  1. **Özel Agent Ekibi Kurulumu**: Şirketinize özel Telegram agentları
  2. **Vibe-Coded Geliştirme**:minimal dokümantasyonla hızlı geliştirme
  3. **MCP Tool Entegrasyonu**: Model Context Protocol entegrasyonu
  4. **Self-Hosted LLM Altyapısı**: Kendi LLM sunucunuz

### FR-006: Teknoloji Stack Section
- Local LLM, Docker, Nginx, Telegram Bot API, MCP

### FR-007: Footer
- Telegram linki
- Email: hello@nosi.ai
- Telif hakkı

## Acceptance Criteria

- [ ] Sayfa 3 saniyeden kısa sürede yüklenir
- [ ] Tüm metinler Türkçe olarak görüntülenir
- [ ] CTA butonları tıklanabilir durumdadır
- [ ] Mobil cihazlarda düzgün görünür (responsive)
- [ ] "Telegram'da Başla" butonu `https://t.me/nosi_agent` linkine yönlendirir
- [ ] Sayfa plain HTML+CSS+JS ile yazılmıştır (framework yok)
- [ ] Relative path kullanılmıştır (./css/style.css)
- [ ] /health endpoint çalışıyor
- [ ] Nginx alpine container'da port 8080'de çalışıyor