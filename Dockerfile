FROM nginx:alpine

# Copy the HTML file
COPY index.html /usr/share/nginx/html/index.html
COPY health/index.html /usr/share/nginx/html/health/index.html

EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/index.html || exit 1