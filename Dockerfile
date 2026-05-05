FROM nginx:alpine

COPY . /usr/share/nginx/html/

EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health/index.html || exit 1