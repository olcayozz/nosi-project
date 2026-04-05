# PRD — Not Defteri Uygulaması

## Problem
Kullanıcıların hızlıca not alabileceği, notlarını düzenleyebileceği ve silebileceği basit bir not defteri uygulamasına ihtiyacı var. Mevcut çözümler ya çok karmaşık ya da çevrimdışı çalışmıyor.

## Çözüm
Tek sayfa, hafif bir not defteri uygulaması. Notlar `localStorage`'da saklanır, internet bağlantısı gerektirmez.

## User Stories

| # | Kullanıcı Hikayesi | Öncelik |
|---|---|---|
| 1 | Kullanıcı yeni bir not oluşturabilmeli | Must |
| 2 | Kullanıcı mevcut bir notu düzenleyebilmeli | Must |
| 3 | Kullanıcı bir notu silebilmeli | Must |
| 4 | Kullanıcı notlar arasında arama yapabilmeli | Must |
| 5 | Kullanıcı notları oluşturulma tarihine göre sıralı görebilmeli | Should |
| 6 | Kullanıcı notu Markdown olarak görüntüleyebilmeli | Could |
| 7 | Kullanıcı notları kategorilere/etiketlere ayırabilmeli | Could |

## Requirements

### Functional
- **R1:** Not oluşturma — başlık + içerik
- **R2:** Not düzenleme — mevcut notun başlığı ve içeriği değiştirilebilir
- **R3:** Not silme — onay dialogu ile
- **R4:** Arama — başlık ve içerikte gerçek zamanlı filtreleme
- **R5:** Liste görünümü — notlar en yeniden eskiye sıralı
- **R6:** Markdown rendering — not içeriği Markdown olarak render edilir

### Non-Functional
- **R7:** Tamamen istemci tarafında çalışır (localStorage)
- **R8:** Responsive tasarım (mobil + masaüstü)
- **R9:** Tek HTML dosyası + gömülü CSS/JS veya minimal dosya yapısı
- **R10:** Docker ile ayağa kalkabilir, port 8080'de hizmet verir

## Acceptance Criteria

1. Kullanıcı "Yeni Not" butonuna tıkladığında boş bir not editörü açılır
2. Kullanıcı başlık ve içerik girip "Kaydet" dediğinde not listeye eklenir
3. Listeden bir nota tıklandığında düzenleme modu açılır
4. Sil butonuna basıldığında onay dialogu çıkar, onaylanırsa not kalıcı olarak silinir
5. Arama kutusuna yazıldığında notlar gerçek zamanlı filtrelenir
6. Markdown içeriği düzgün render edilir (başlıklar, listeler, kalın, italik)
7. Sayfa yenilendiğinde notlar kaybolmaz (localStorage)
8. Mobil ekranda da kullanılabilir arayüz
9. `docker compose up -d` sonrası `localhost:8080`'de çalışır
10. `GET /health` endpoint'i 200 döner
