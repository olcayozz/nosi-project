# Nosi - Agentic IT Solutions

Lokal LLM'lerle çalışan agentic IT şirketi için landing page.

## Özellikler

- Modern karanlık tasarım
- Agent ekibi görselleştirmesi (Telegram → CEO → Architect → PM → Worker/QA → Staging)
- 4 hizmet kartı (Özel Agent Ekibi, Vibe-Coded Geliştirme, MCP Tool Entegrasyonu, Self-Hosted LLM)
- İletişim formu
- Responsive tasarım
- Scroll animasyonları
- Health check endpoint (`/health`)

## Kurulum

### Docker ile

```bash
docker compose up -d
```

Tarayıcıda `http://localhost:8080` adresini ziyaret edin.

Health check: `http://localhost:8080/health`

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
- Nginx Alpine

## Lisans

MIT