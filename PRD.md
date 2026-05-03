# PRD.md — Nosi Landing Page

## Problem Statement

Nosi, lokal LLM'lerle çalışan agentic bir IT şirketidir. Müşteriler Telegram üzerinden CEO, Architect, PM, Worker, QA rollerinden oluşan bir agent ekibiyle yazışarak uçtan uca yazılım geliştirme, otomatik staging deploy ve QA doğrulama süreçlerini yönetir.

**Problem:** Potansiyel müşterilerin Nosi'nin sunduğu hizmetleri, agentic yazılım geliştirme modelini ve bu yaklaşımın kendilerine nasıl değer katacağını anlayabilecekleri tek sayfa bir web sitesi bulunmamaktadır.

**Hedef:** Geleneksel yazılım ekibi yerine self-hosted agentic alternatif isteyen küçük/orta ölçekli işletmelere ulaşmak ve hizmetler hakkında bilgi sunmak.

## User Stories

1. **Ziyaretçi olarak** Nosi'nin ne yaptığını anlamak istiyorum — hızlıca ne hizmet sunduğunu görmek istiyorum.
2. **Potansiyel müşteri olarak** agentic IT hizmetlerinin detaylarını öğrenmek istiyorum — hangi hizmetlerin sunulduğunu incelemek istiyorum.
3. **Teknik karar verici olarak** altyapı ve teknoloji yaklaşımını anlamak istiyorum — self-hosted LLM ve MCP entegrasyonu hakkında bilgi görmek istiyorum.
4. **İletişim kurmak isteyen** olarak Nasıl iletişime geçebileceğimi görmek istiyorum — Telegram veya alternatif iletişim kanallarını bulmak istiyorum.

## Functional Requirements

### FR-01: Header Section
- Logo ve şirket adı ("Nosi") görüntülenmeli
- Navigasyon menüsü: Home, Services, About, Contact
- Sticky navigation (sayfa kaydırıldığında üstte sabit kalmalı)

### FR-02: Hero Section
- Ana başlık: "Agentic IT — Self-Hosted Yazılım Geliştirme"
- Alt başlık: "Telegram üzerinden agent ekibinizle yazışarak uçtan uca yazılım geliştirin"
- CTA butonu: "Bize Ulaşın" (iletişim bölümüne yönlendirmeli)

### FR-03: Services Section
- Dört ana hizmet kartı:
  1. **Özel Agent Ekibi Kurulumu** — CEO, Architect, PM, Worker, QA rollerinden oluşan ekibiniz
  2. **Vibe-Coded Uygulama Geliştirme** — Hızlı ve esnek kodlama yaklaşımı
  3. **MCP Tool Entegrasyonu** — Model Context Protocol entegrasyonları
  4. **Self-Hosted LLM Altyapısı** — Kendi LLM altyapınızı kurun
- Her kartta ikon, başlık ve kısa açıklama

### FR-04: How It Works Section
- 4 adımlık süreç:
  1. **Telegram'da Başlayın** — Agent ekibiyle tanışın
  2. **Projenizi Anlatın** — İhtiyaçlarınızı paylaşın
  3. **Geliştirme Başlar** — Agentlar kod yazar, deploy eder
  4. **QA Doğrular** — Otomatik test ve doğrulama

### FR-05: About Section
- Nosi'nin misyonu ve vizyonu
- Self-hosted agentic yaklaşımın avantajları

### FR-06: Contact Section
- Telegram bağlantı linki
- Email iletişim bilgisi
- Basit iletişim formu (İsim, Email, Mesaj)

### FR-07: Footer
- Telif hakkı
- Sosyal medya linkleri (varsa)

## Acceptance Criteria

1. Sayfa responsive — mobil, tablet ve desktop'ta düzgün görünmeli
2. Tüm linkler ve butonlar çalışır durumda
3. İletişim formu görüntülenir (form action gerekmez)
4. Sayfa 3 saniyeden kısa sürede yüklenmeli
5. A11y: Temel erişilebilirlik standartları (renk kontrastı, klavye navigasyonu)
6. Tüm bölümler (Hero, Services, How It Works, About, Contact, Footer) mevcut
7. Teknik: Plain HTML + CSS + JS, relative paths, NO frameworks, NO npm