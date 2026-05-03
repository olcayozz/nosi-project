FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx . /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s CMD curl -f http://localhost:8080/health || exit 1
