FROM nginx:alpine

RUN mkdir -p /usr/share/nginx/html/health

COPY index.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY health/index.html /usr/share/nginx/html/health/index.html

RUN echo 'server { listen 8080; root /usr/share/nginx/html; index index.html; location / { try_files $uri $uri/ /index.html; } location /health { return 200 "OK"; add_header Content-Type text/plain; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]