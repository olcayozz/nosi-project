FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY health /usr/share/nginx/html/health

RUN sed -i 's|listen 80;|listen 8080;|' /etc/nginx/conf.d/default.conf \
    && sed -i 's|listen 80;|listen 8080;|' /etc/nginx/http.d/*.conf || true \
    && rm -f /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/http.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]