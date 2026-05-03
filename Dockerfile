# Sử dụng Nginx resmi
FROM nginx:alpine

# Kopyala dosyaları /usr/share/nginx/html dizinine
COPY . /usr/share/nginx/html

# Nginx konfigürasyonunu ayarla
COPY nginx.conf /etc/nginx/nginx.conf

# Port 8080 kullan
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/health/index.html || exit 1

# Başlangıç komutu
CMD ["nginx", "-g", "daemon off;"]