# ARCHITECTURE — Not Defteri Uygulaması

## Overview
Tek sayfa (SPA) not defteri uygulaması. Tüm veri istemci tarafında `localStorage`'da saklanır. Sunucu yalnızca statik dosya servisi ve health check endpoint'i sağlar.

## Tech Stack

| Katman | Teknoloji |
|---|---|
| Frontend | Vanilla HTML5 + CSS3 + ES6 JavaScript |
| Markdown | marked.js (CDN veya vendor klasörüne kopyalanır) |
| Stil | CSS Custom Properties + Flexbox/Grid |
| Depolama | localStorage (tarayıcı) |
| Sunucu | Python 3.11 + FastAPI (statik dosya servisi) |
| Container | Docker + docker-compose |

## Components

### 1. Frontend (Static)
```
index.html          — Ana sayfa, tüm UI yapıları
./css/style.css     — Tüm stiller (responsive, tema değişkenleri)
./js/app.js         — Ana uygulama mantığı (CRUD, arama, sıralama)
./js/markdown.js    — Markdown rendering (marked.js wrapper)
./vendor/marked.min.js — Markdown parser kütüphanesi
```

### 2. Backend (FastAPI)
```
main.py             — FastAPI app: statik dosya servisi + /health endpoint
```

### 3. Infrastructure
```
Dockerfile          — Python 3.11-slim base, port 8080
docker-compose.yml  — Servis tanımı
```

## File Structure
```
nosi-project/
├── PRD.md
├── ARCHITECTURE.md
├── README.md
├── Dockerfile
├── docker-compose.yml
├── main.py
├── static/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   └── markdown.js
│   └── vendor/
│       └── marked.min.js
```

## Data Model

### Note (localStorage)
```typescript
interface Note {
  id: string;          // UUID v4
  title: string;       // Not başlığı
  content: string;     // Markdown içerik
  createdAt: number;   // Unix timestamp (ms)
  updatedAt: number;   // Unix timestamp (ms)
}
```

localStorage key: `notepad_notes` — JSON array of Note objects.

## Key Flows

### Not Oluşturma
1. Kullanıcı "Yeni Not" butonuna tıklar
2. Boş editör açılır (başlık + içerik alanları)
3. "Kaydet" → Note objesi oluşturulur, localStorage'a yazılır, liste güncellenir

### Not Düzenleme
1. Listeden nota tıklanır
2. Mevcut veriler editöre yüklenir
3. Değişiklikler kaydedilir → `updatedAt` güncellenir

### Not Silme
1. "Sil" butonuna tıklanır
2. `confirm()` dialogu çıkar
3. Onaylanırsa array'den çıkarılır, localStorage güncellenir

### Arama
1. Kullanıcı arama kutusuna yazar
2. Her `input` event'inde başlık + içerikte case-insensitive filtreleme
3. Liste anında güncellenir

## Deployment

### Dockerfile
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8080
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
```

### Health Check
- `GET /health` → `{"status": "ok"}`

### docker-compose.yml
```yaml
services:
  notepad:
    build: .
    ports:
      - "8080:8080"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 30s
      timeout: 5s
      retries: 3
```

## Asset Path Rule (CRITICAL)
Tüm asset referansları **RELATIVE** path olmalıdır:
- ✅ `./css/style.css`
- ✅ `./js/app.js`
- ✅ `./vendor/marked.min.js`
- ❌ `/css/style.css` (absolute path — subpath altında çalışmaz)

Uygulama `/nos-XX` gibi bir subpath altında servis edileceğinden, absolute path'ler kırılacaktır.
